"use client";

import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const ClientProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
    {children}
  </ThemeProvider>
);

export { ClientProvider };
