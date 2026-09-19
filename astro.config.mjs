import { defineConfig } from 'astro/config';

// For GitHub Pages project sites the site is served at
// https://<user>.github.io/<repo>/ so `base` must match the repo name.
// If you later add a custom domain, set base to '/' and site to your domain.
export default defineConfig({
  site: 'https://uxaishsri6.github.io',
  base: '/aishwarya-portfolio',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
