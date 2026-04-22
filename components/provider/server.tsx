import { Analytics } from "@vercel/analytics/next";
import type { PropsWithChildren } from "react";

const ServerProvider = ({ children }: PropsWithChildren) => (
  <>
    {children}
    <Analytics />
  </>
);

export { ServerProvider };
