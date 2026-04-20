import type { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => (
  <header className="grid gap-6">{children}</header>
);

export { Header };
