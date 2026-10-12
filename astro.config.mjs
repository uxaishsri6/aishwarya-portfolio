import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.uxwithaish.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
