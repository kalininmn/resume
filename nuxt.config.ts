import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [],
  ssr: false,
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  alias: {
    '@common': '../app/components/common',
  },
});
