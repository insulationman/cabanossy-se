import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import favicons from "astro-favicons"; // Add code manually
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    mdx(),
    favicons({
      masterPicture: "./src/assets/favicon.svg",
      emitAssets: true,
    }),
  ],
});
