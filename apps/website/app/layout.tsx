import { fonts } from "@rodrigosantosdev/saudade/fonts";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { url } from "@/lib/url";

import "./globals.css";

const title = "AI engineer | Rodrigo Santos";
const description =
  "I design and build software on the internet. I'm currently living in Lisbon, Portugal.";

export const metadata: Metadata = {
  alternates: {
    canonical: url,
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title,
  },

  authors: [
    {
      name: "Rodrigo Santos",
      url,
    },
  ],
  creator: "Rodrigo Santos",

  description,

  metadataBase: new URL(url),

  openGraph: {
    description,
    images: [
      {
        alt: "Rodrigo Santos",
        height: 630,
        url: new URL("/opengraph-image.png", url).toString(),
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: "Rodrigo Santos",
    title,
    type: "website",
    url,
  },

  title,

  twitter: {
    card: "summary_large_image",
    creatorId: "@rrcssantos",
    description,
    images: [
      {
        alt: "Rodrigo Santos",
        height: 630,
        url: new URL("/opengraph-image.png", url).toString(),
        width: 1200,
      },
    ],
    title,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className={fonts}>{children}</body>
  </html>
);

export default RootLayout;
