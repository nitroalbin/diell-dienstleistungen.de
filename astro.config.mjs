import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap'; // TEMP: Disabled due to bug in v3.1.0
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://diell-dienstleistungen.de',
  output: 'static',
  integrations: [
    tailwind(),
    // sitemap(), // TEMP: Disabled due to bug - see https://github.com/withastro/astro/issues
  ],
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'cookie-consent': ['./src/components/CookieConsent.astro'],
          },
        },
      },
    },
  },
});
