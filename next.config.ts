import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  experimental: {
    viewTransition: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  redirects() {
    // While the blog is still being built, we redirect all blog routes to the home page
    return [{ destination: "/", permanent: true, source: "/blog/:path*" }];
  },
};

export default nextConfig;
