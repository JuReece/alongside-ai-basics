import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes for Playground
  // This means we'll deploy with server-side rendering on Netlify
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
