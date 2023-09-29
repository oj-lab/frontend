import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

export default defineConfig({
  base: "./",
  server: {
    proxy: {
      "/v1": {
        target: "http://localhost:8080/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ""),
      },
    },
  },
  build: {
    // https://stackoverflow.com/questions/76694615/module-level-directives-cause-errors-when-bundled-use-client-was-ignored-caus
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
