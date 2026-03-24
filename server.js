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

app.get('/health', (_req, res) => {
  res.json({ ok: true });
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
