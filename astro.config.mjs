// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tutorial-astro-kev.netlify.app/",
  integrations: [preact()]
});