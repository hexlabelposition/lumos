// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      subsets: ["latin"],
      styles: ["normal"],
      cssVariable: "--font-inter",
      display: "swap",
      // weights: [] Don't use. Variable font!
    },
  ],
});
