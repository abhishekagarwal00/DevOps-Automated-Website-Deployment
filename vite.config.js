import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "base" must match the GitHub repository name so assets load on GitHub Pages:
// https://<username>.github.io/DevOps-Automated-Website-Deployment/
export default defineConfig({
  base: "/DevOps-Automated-Website-Deployment/",
  plugins: [react()],
  define: {
    // Values injected at build time. In CI, GITHUB_SHA is the commit that triggered the run.
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __COMMIT_SHA__: JSON.stringify((process.env.GITHUB_SHA || "local-dev").slice(0, 7)),
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true,
  },
});
