"use client";

import { Toaster } from "@rodrigosantosdev/saudade/components/sonner";
import { TooltipProvider } from "@rodrigosantosdev/saudade/components/tooltip";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const ClientProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
    enableSystem
  >
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  </ThemeProvider>
);

export { ClientProvider };
