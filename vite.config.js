import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
  },
  esbuild: {
    jsxInject: `import { h, Fragment } from '../core/jsx-helpers.js'`,
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
});
