import { Suspense } from "react";

import { CallToAction } from "@/app/components/call-to-action";
import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";

export default function Page() {
  return (
    <Header>
      <Hero />
      <Suspense
        fallback={
          <p>
            Follow me on{" "}
            <a
              href="https://x.com/haydenbleasel"
              rel="noopener noreferrer"
              target="_blank"
            >
              X
            </a>
            , or join my mailing list below for infrequent updates.
          </p>
        }
      >
        <CallToAction />
      </Suspense>
    </Header>
  );
}
