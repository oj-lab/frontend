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
        name: 'add-script',
        apply: 'build',
        transformIndexHtml: {
          order: 1,
          handler(html, ctx) {
            if (ctx.mode === 'gh-pages') {
              return html.replace(
                '<meta name="website-id" content="" />',
                '<meta name="website-id" content="b636e4e9-a210-4ef5-a7e9-192e04b798c5" />'
              )
            }
            return html
          },
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
