/// <reference types="vitest" />
import path from "node:path";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import * as url from "node:url";

export default defineConfig(({ mode }) => ({
  test: {
    css: false,
    include: ["src/**/__tests__/*"],
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
    clearMocks: true,
    coverage: {
      provider: "istanbul",
      enabled: true,
      "100": true,
      reporter: ["text", "lcov"],
      reportsDirectory: "coverage",
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    ...(mode === "test"
      ? []
      : [
          eslintPlugin(),
          VitePWA({
            registerType: "autoUpdate",
            includeAssets: [
              "favicon.ico",
              "robots.txt",
              "apple-touch-icon.png",
              "icons/*.svg",
              "fonts/*.woff2",
            ],
            manifest: {
              theme_color: "#06B6D4",
              icons: [
                {
                  src: "/android-chrome-192x192.png",
                  sizes: "192x192",
                  type: "image/png",
                  purpose: "any maskable",
                },
                {
                  src: "/android-chrome-512x512.png",
                  sizes: "512x512",
                  type: "image/png",
                },
              ],
            },
          }),
        ]),
  ],
  resolve: {
    alias: {
      "@": path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        "./src",
      ),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8090",
        changeOrigin: true,
      },
    },
  },
}));
