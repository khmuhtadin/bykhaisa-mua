import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://byanisaputri.my.id',
  output: 'static',
  trailingSlash: 'never',
  prefetch: true,
  integrations: [
    react(),
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize: (item) => {
        // Homepage gets highest priority
        if (item.url === 'https://byanisaputri.my.id/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Blog posts get high priority
        if (item.url.includes('/blog/') && !item.url.endsWith('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Blog index
        if (item.url.endsWith('/blog/') || item.url.endsWith('/blog')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
});
