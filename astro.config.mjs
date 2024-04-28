import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https//ntechnology.dev",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
