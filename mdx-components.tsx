import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

const components: MDXComponents = {
  a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a
      className={["link-underline cursor-alias", className].filter(Boolean).join(" ")}
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l border-foreground/30 pl-4 italic my-4" {...props} />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className={["bg-foreground/10 px-1 py-0.5", className].filter(Boolean).join(" ")}
      {...props}
    />
  ),
  h1: (props: ComponentPropsWithoutRef<"h1">) => <h1 className="text-white mb-1" {...props} />,
  h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 className="text-white mt-6 mb-1" {...props} />,
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className="text-white mt-4 mb-1" {...props} />,
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="ml-4 list-disc" {...props} />,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className="mb-4 space-y-1" {...props} />,
  p: (props: ComponentPropsWithoutRef<"p">) => <p className="mb-4" {...props} />,
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre className="overflow-x-auto bg-foreground/10 p-3 mb-4 normal-case" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul className="mb-4 space-y-1" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
