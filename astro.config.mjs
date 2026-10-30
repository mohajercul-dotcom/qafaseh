// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { footnoteBulletsPlugin } from './src/md/footnoteBullets.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.qafaseh.us',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  markdown: {
    processor: satteri({
      hastPlugins: [footnoteBulletsPlugin],
    }),
  },
  i18n: {
    locales: ['fa', 'ar', 'ur'],
    defaultLocale: 'fa',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Keep redirect stubs out of the sitemap: /books/ index pages redirect to
      // the language home, while /books/<code>/ and legacy file-name slugs
      // (e.g. Eteghadate_Fereghe) only forward to the canonical page.
      filter: (page) => {
        const segments = new URL(page).pathname.split('/').filter(Boolean);
        const last = segments[segments.length - 1] || '';
        if (last === 'books') return false;
        if (/^[a-z0-9]{5}$/.test(last)) return false;
        if (last.includes('_')) return false;
        return true;
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // صفحه اصلی اولویت بالاتر
        if (item.url === 'https://www.qafaseh.us/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // صفحه کتاب‌ها
        else if (item.url.includes('/books/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // صفحه دسته‌بندی‌ها
        else if (item.url.includes('/shiite') || item.url.includes('/atheism')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // صفحه نویسندگان
        else if (item.url.includes('/authors')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
});
