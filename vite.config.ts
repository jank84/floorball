import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

const pwa_config = {
  mode: "development",
  base: "/",
  srcDir: "src",
  filename: "sw.ts",
  includeAssets: ["/favicon.png"],
  // includeAssets: ["/favicon.png", "/assets/*.svg", "assets/*.svg"], // TODO: enable assets. Does not work atm.
  strategies: "injectManifest",
  manifest: {
    name: "Test Project",
    short_name: "Test",
    theme_color: "#ffffff",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    icons: [
      {
        src: "icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(pwa_config)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
