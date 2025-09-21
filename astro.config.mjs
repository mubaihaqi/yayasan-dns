// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import lineClamp from "@tailwindcss/line-clamp";
import typography from "@tailwindcss/typography";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss({ plugins: [lineClamp, typography] })],
  },
});
