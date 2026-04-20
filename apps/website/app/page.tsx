import { Suspense } from "react";

import { CallToAction } from "@/app/components/call-to-action";
import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { Newsletter } from "@/app/components/newsletter";

export default function Page() {
  return (
    <Header>
      <Hero />
      <Suspense
        fallback={
          <p>
            Follow me on{" "}
            <a
              href="https://x.com/rrcssantos"
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
      <Newsletter />
    </Header>
  );
}
