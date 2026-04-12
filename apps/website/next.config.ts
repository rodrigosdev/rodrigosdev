import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  redirects() {
    return [{ destination: "/", permanent: true, source: "/blog/:path*" }];
  },
};

export default nextConfig;
