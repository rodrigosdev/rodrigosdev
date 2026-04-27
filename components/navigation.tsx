"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const links = [
  { href: "/", label: "Index" },
  { href: "/thoughts", label: "Thoughts" },
];

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const hasSlash = (index: number) => index !== links.length - 1;
  return (
    <nav className="px-4 sm:px-0 w-full max-w-full sm:max-w-lg mx-auto xl:mx-0 xl:w-auto xl:max-w-none xl:fixed xl:left-6 xl:top-6 text-xs mb-6 xl:mb-0">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={cn(
            "transition-colors",
            isActive(link.href) ? "text-white" : "transition-colors hover:text-white",
          )}
          prefetch
        >
          {link.label}
          {hasSlash(index) && <span className="text-foreground mx-2">/</span>}
        </Link>
      ))}
    </nav>
  );
};

export { Navigation };
