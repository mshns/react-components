import express from 'express';
import fsp from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = process.cwd();

function resolve(p: string) {
  return path.resolve(__dirname, p);
}

async function createServer() {
  const app = express();

  const vite: ViteDevServer = await (
    await import('vite')
  ).createServer({
    root,
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    appType: 'custom',
  });

  app.use(vite.middlewares);
  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template: string;
      template = await fsp.readFile(resolve('index.html'), 'utf8');
      template = await vite.transformIndexHtml(url, template);
      const render = await vite.ssrLoadModule('src/entry-server.tsx').then((m) => m.render);
      const parts = template.split('<!--app-->');
      try {
        res.write(parts[0]);
        const stream = render(req, {
          onShellReady() {
            stream.pipe(res);
          },
          onAllReady() {
            res.write(parts[1]);
            res.end();
          },
        });
      } catch (error) {
        if (error instanceof Response && error.status >= 300 && error.status <= 399) {
          return res.redirect(error.status, error.headers.get('Location')!);
        }
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        vite.ssrFixStacktrace(error);
        console.log(error.stack);
        res.status(500).end(error.stack);
        return;
      }
      console.log(error);
    }
  });
  return app;
}

createServer().then((app) => {
  app.listen(3000, () => {
    console.log('HTTP server is running at http://localhost:3000');
  });
});
