// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  site: "https://Lee-Dongwook.github.io",
  integrations: [react(), mdx(), sitemap(), image()],
});
