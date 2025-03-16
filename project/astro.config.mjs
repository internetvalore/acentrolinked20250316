import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/react']
    }
  },
  devToolbar: {
    enabled: false
  }
});
