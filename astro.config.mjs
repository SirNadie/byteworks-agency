import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const SITE = "https://byteworksagency.com";

export default defineConfig({
  site: SITE,
  // Use Node/serverless runtime; Prisma is not supported on edge runtimes
  adapter: vercel({ mode: "serverless" }),
  output: "server",
  compressHTML: true,
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],

  // Image optimization
  image: {
    // Enable image optimization with sharp
    service: { entrypoint: 'astro/assets/services/sharp' },
    // Default formats for optimized images
    remotePatterns: [{ protocol: "https" }],
  },

  vite: {
    ssr: {
      external: ["@prisma/client", "@prisma/engines"],
    },
    build: {
      target: "es2019",
      // CSS code splitting for better caching
      cssCodeSplit: true,
    },
    esbuild: {
      target: "es2019",
    },
  },
});
