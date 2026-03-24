import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 3000);
const distDir = path.join(__dirname, 'dist');
const indexFile = path.join(distDir, 'index.html');
const GEMINI_IMAGE_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent';

app.use(express.json({ limit: '2mb' }));

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/generate-image', async (req, res) => {
  const prompt = req.body?.prompt;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
  }

  if (typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'A non-empty prompt is required.' });
  }

  try {
    const response = await fetch(GEMINI_IMAGE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Professional high-end photography of ${prompt.trim()}. Minimalist, clean, architectural style, soft natural lighting, high resolution, 8k.`,
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

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || 'Gemini image generation request failed.',
      });
    }

    const parts = data?.candidates?.[0]?.content?.parts || [];
    const imageData = parts.find((part) => typeof part?.inlineData?.data === 'string')?.inlineData?.data;

    if (!imageData) {
      return res.status(502).json({ error: 'Gemini did not return image data.' });
    }

    return res.json({ image: `data:image/png;base64,${imageData}` });
  } catch (error) {
    console.error('Image generation failed:', error);
    return res.status(500).json({ error: 'Image generation failed.' });
  }
});

if (existsSync(distDir)) {
  app.use(express.static(distDir));
}

app.get('*', (_req, res) => {
  if (!existsSync(indexFile)) {
    return res.status(503).send('Build output is missing. Run "npm run build" before starting the server.');
  }

  return res.sendFile(indexFile);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
