import { defineConfig } from 'astro/config';

// Live on GitHub Pages under /perspectivity-website-concepts/.
export default defineConfig({
  site: 'https://perspectivity-org.github.io',
  base: '/perspectivity-website-concepts',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  // The English version moved from /a/ to /a/en/; old links keep working. /d/ opens the Dutch version.
  redirects: { '/a': '/perspectivity-website-concepts/a/en/', '/d': '/perspectivity-website-concepts/d/nl/' },
});
