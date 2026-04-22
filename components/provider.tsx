import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => (
  <>
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
      {children}
    </ThemeProvider>
    <Analytics />
  </>
);

export { Provider };
