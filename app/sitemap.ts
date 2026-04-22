import type { MetadataRoute } from "next";

import { getSiteUrl } from "~/lib/url";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    changeFrequency: "monthly",
    lastModified: new Date(),
    priority: 1,
    url: getSiteUrl(),
  },
];

export default sitemap;
