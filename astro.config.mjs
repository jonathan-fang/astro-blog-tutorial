// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
// export default defineConfig({});

export default defineConfig({
  site: "https://jonathanfang.dev/",

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  integrations: [preact()],
});