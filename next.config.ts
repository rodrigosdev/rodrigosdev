import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

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

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
