import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rodrigo Santos's corner of the Web",
    short_name: "Rodrigo Santos",
    description:
      "I design and build software on the internet. I'm currently living in Lisbon, Portugal.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#909090",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
