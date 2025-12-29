import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

export default defineConfig({
  site: 'https://danielvernberg.se',
  integrations: [
    expressiveCode({
      themes: ['github-dark'],
      plugins: [pluginLineNumbers()],
      frames: {
        showCopyToClipboardButton: false,
      },
      styleOverrides: {
        frames: {
          terminalTitlebarDotsOpacity: '0',
        },
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
