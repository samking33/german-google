export async function generateCleaningImage(prompt: string) {
  try {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = (await response.json()) as { image?: string; error?: string };

    if (!response.ok) {
      throw new Error(data.error || 'Gemini image generation request failed.');
    }

    if (data.image) {
      return data.image;
    }
  } catch (error) {
    console.error('Image generation failed:', error);
    return null;
  }
  return null;
}
