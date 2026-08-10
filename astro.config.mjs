// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://qafaseh.vercel.app',
  i18n: {
    locales: ['fa', 'ar', 'ur'],
    defaultLocale: 'fa',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/books/') || page.includes('/books/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // صفحه اصلی اولویت بالاتر
        if (item.url === 'https://qafaseh.vercel.app/') {
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
