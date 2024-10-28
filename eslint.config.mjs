import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import pluginVue from "eslint-plugin-vue";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  tailwind.configs["flat/recommended"],
  eslintConfigPrettier
)
  .prepend(js.configs.recommended, ...pluginVue.configs["flat/recommended"])
  .override("tailwindcss:rules", {
    rules: {
      "tailwindcss/no-custom-classname": "off",
    },
  });
