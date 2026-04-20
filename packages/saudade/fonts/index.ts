import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";

import { cn } from "../lib/utils";

export const fonts = cn(
  GeistSans.className,
  GeistMono.variable,
  GeistPixelSquare.variable
);
