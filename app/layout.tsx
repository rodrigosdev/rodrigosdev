import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "~/lib/styles/globals.css";

const title = "AI engineer | Rodrigo Santos";
const description =
  "I design and build software on the internet. I'm currently living in Lisbon, Portugal.";

export const metadata: Metadata = {
  title,
  description,
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
