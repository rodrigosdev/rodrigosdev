import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "~/styles/css/globals.css";
import { url } from "~/utils/url";

const APP_NAME = "Rodrigo Santos's corner of the Web";
const APP_DEFAULT_TITLE = "AI Engineer | Rodrigo Santos";
const APP_TITLE_TEMPLATE = `%s | Rodrigo Santos`;
const APP_DESCRIPTION =
  "I design and build software on the internet. I'm currently living in Lisbon, Portugal.";
const APP_BASE_URL = url;

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: { telephone: false },
  metadataBase: new URL(url),
  creator: "Rodrigo Santos",
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_BASE_URL,
    images: [
      {
        url: new URL("/opengraph-image.png", url).toString(),
        width: 1200,
        height: 630,
        alt: "Rodrigo Santos",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creatorId: "rrcssantos",
    description: APP_DESCRIPTION,
    images: [
      {
        url: new URL("/opengraph-image.png", url).toString(),
        width: 1200,
        height: 630,
        alt: "Rodrigo Santos",
      },
    ],
    title: APP_DEFAULT_TITLE,
  },
  authors: [{ name: "Rodrigo Santos", url: "https://rodrigosantos.dev" }],
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "normal",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
};

export default Layout;
