import type { MetadataRoute } from "next";

import { getSiteUrl } from "~/lib/url";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      allow: "/",
      userAgent: "*",
    },
  ],
  sitemap: new URL("/sitemap.xml", getSiteUrl()).href,
});

export default robots;
