import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ntechnology.dev",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
