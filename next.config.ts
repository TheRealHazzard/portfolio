import type { NextConfig } from "next";

// Deployed as a static export to GitHub Pages, which serves the site under /portfolio.
// BASE_PATH is set by the deploy workflow; locally the site is served from the root.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
