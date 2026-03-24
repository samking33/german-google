const GEMINI_IMAGE_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent';

type GeminiContentPart = {
  inlineData?: {
    data?: string;
  };
};

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: GeminiContentPart[];
    };
  }>;
  error?: {
    message?: string;
  };
};

export async function generateCleaningImage(prompt: string) {
  try {
    const response = await fetch(GEMINI_IMAGE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Professional high-end photography of ${prompt}. Minimalist, clean, architectural style, soft natural lighting, high resolution, 8k.`,
              },
            ],
          },
        ],
        generationConfig: {
          imageConfig: {
            aspectRatio: '16:9',
          },
        },
      }),
    });

    const data = (await response.json()) as GeminiResponse;

    if (!response.ok) {
      throw new Error(data.error?.message || 'Gemini image generation request failed.');
    }

    const parts = data.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      const imageData = part.inlineData?.data;
      if (imageData) {
        return `data:image/png;base64,${imageData}`;
      }
    }
  } catch (error) {
    console.error('Image generation failed:', error);
    return null;
  }
  return null;
}
