"use client";

import { useEffect } from "react";
import { Wrapper } from "~/components/layout/wrapper";
import { Link } from "~/components/ui/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <Wrapper className="font-mono">
      <div className="dr-gap-y-24 my-auto flex flex-col items-center justify-center uppercase">
        <h1 className="mb-4 font-bold text-4xl">Something went wrong</h1>
        <p className="mb-6 text-lg">
          I'm sorry, but something unexpected happened. Please try again.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            type="button"
            className="rounded bg-background px-6 py-3 transition-colors hover:bg-foreground hover:text-background"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded border border-foreground px-6 py-3 transition-colors hover:bg-foreground hover:text-background"
          >
            Go Home
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
