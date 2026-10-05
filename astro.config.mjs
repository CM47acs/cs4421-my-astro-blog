import { defineConfig, fontProviders } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import node from '@astrojs/node';
export default defineConfig({
  site: 'http://localhost:4321',

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      options: {
        variants: [
          {
            src: './src/assets/fonts/atkinson-regular.woff',
            weight: 400,
            style: 'normal',
          },
          {
            src: './src/assets/fonts/atkinson-bold.woff',
            weight: 700,
            style: 'normal',
          },
        ],
      },
    },
  ],

  markdown: {
    processor: unified(),
  },

  adapter: node({
    mode: 'standalone',
  }),
});