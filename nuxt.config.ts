import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-10-27",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    // The PDF export in scripts/ runs under Node, so it is typechecked with the node tsconfig.
    // It imports the CV data, whose type imports use the app alias.
    nodeTsConfig: {
      include: ["../scripts/**/*.ts"],
      compilerOptions: { paths: { "~/*": ["../app/*"] } },
    },
  },
  modules: ["@nuxtjs/i18n", "nuxt-lucide-icons", "@nuxtjs/google-fonts"],
  i18n: {
    // German is the default Locale (see CONTEXT.md): `/cv` is German, `/en/cv` is English.
    locales: [
      { code: "de", language: "de-DE", name: "Deutsch" },
      { code: "en", language: "en-GB", name: "English" },
    ],
    defaultLocale: "de",
    strategy: "prefix_except_default",
  },
  googleFonts: {
    families: {
      "Bebas Neue": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
