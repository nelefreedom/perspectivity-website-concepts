import { defineConfig } from 'astro/config';

// Live on GitHub Pages under /perspectivity-website-concepts/.
export default defineConfig({
  site: 'https://nelefreedom.github.io',
  base: '/perspectivity-website-concepts',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
