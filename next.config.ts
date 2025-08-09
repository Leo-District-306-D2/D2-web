import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Commented out for API routes
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
