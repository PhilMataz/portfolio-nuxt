// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "nuxt-lucide-icons",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "Bebas Neue": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
