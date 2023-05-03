import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

import express from 'express';
import { createServer } from 'vite';

import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

interface IRender {
  render: (
    url: string,
    options: RenderToPipeableStreamOptions
  ) => Promise<{ stream: PipeableStream; injectPreload: () => string }>;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(__dirname, 'index.html');

async function startServer() {
  const app = express();
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

  app.use(vite.middlewares);

  app.use('*', async (request, response) => {
    const url = request.originalUrl;

    try {
      const template = fs.readFileSync(indexHTML, 'utf8');
      const transformHTML = await vite.transformIndexHtml(url, template);
      const [startHTML, endHTML] = transformHTML.split('<!--app-->');

      const { render } = (await vite.ssrLoadModule('./src/entry-server.tsx')) as IRender;

      try {
        response.write(startHTML);
        const { stream, injectPreload } = await render(url, {
          onShellReady() {
            stream.pipe(response);
          },
          onAllReady() {
            const preloadEndHTML = endHTML.replace('<!--preload-->', injectPreload());
            response.write(preloadEndHTML);
            response.end();
          },
        });
      } catch (error: unknown) {
        console.error(error);
      }
    } catch (error: unknown) {
      console.error(error);
    }
  });

  return app;
}

const PORT = 3001;

startServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is running >>> http://localhost:${PORT}`);
  });
});
