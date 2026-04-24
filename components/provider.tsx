import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";
import { ViewTransition } from "react";

const Provider = ({ children }: PropsWithChildren) => (
  <>
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
      <ViewTransition enter="auto" exit="auto">
        {children}
      </ViewTransition>
    </ThemeProvider>
    <Analytics />
  </>
);

export { Provider };
