import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const viteConfig = ({ mode }) => {
  const isGhPagesBuild =
    loadEnv(mode, process.cwd()).VITE_GH_PAGES_BUILD === "true";

  return defineConfig({
    server: {
      proxy: {
        "/api/v1": {
          target: "http://localhost:8080/api/v1",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, ""),
        },
      },
    },
    base: isGhPagesBuild ? "/oj-lab-front/" : "/",
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
    plugins: [
      react(),
      {
        name: "add-analytics",
        apply: "build",
        transformIndexHtml(html) {
          if (isGhPagesBuild) {
            return html.replace(
              /<script analytics>(.*?)<\/script>/,
              `<script defer src="https://us.umami.is/script.js" data-website-id="b636e4e9-a210-4ef5-a7e9-192e04b798c5"></script>`,
            );
          } else {
            return html.replace(
              /<script analytics>(.*?)<\/title>/,
              "<!-- analytics not enabled -->",
            );
          }
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};

export default viteConfig;
