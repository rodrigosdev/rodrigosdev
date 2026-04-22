import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getSiteUrl } from "~/lib/url";
import "./globals.css";

const title = "AI engineer | Rodrigo Santos";
const description =
  "I design and build software on the internet. I'm currently living in Lisbon, Portugal.";

export const metadata: Metadata = {
  alternates: {
    canonical: getSiteUrl(),
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title,
  },

  authors: [
    {
      name: "Rodrigo Santos",
      url: getSiteUrl(),
    },
  ],
  creator: "Rodrigo Santos",

  description,

  metadataBase: new URL(getSiteUrl()),

  openGraph: {
    description,
    images: [
      {
        alt: "Rodrigo Santos",
        height: 630,
        url: new URL("/opengraph-image.png", getSiteUrl()).toString(),
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: "Rodrigo Santos",
    title,
    type: "website",
    url: getSiteUrl(),
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
        url: new URL("/opengraph-image.png", getSiteUrl()).toString(),
        width: 1200,
      },
    ],
    title,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
};

export default RootLayout;
