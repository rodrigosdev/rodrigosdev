import { cn } from "@rodrigosantosdev/saudade/lib/utils";

interface HeadingProps {
  /**
   * The text to display in the heading.
   */
  text: string;
  /**
   * The class name to apply to the heading.
   */
  className?: string;
}

const Heading = ({ text, className }: HeadingProps) => (
  <h1
    className={cn("font-pixel text-2xl sm:text-4xl leading-tight", className)}
  >
    {text}
  </h1>
);

export { Heading };
