interface HeadingProps {
  /**
   * The text to display in the heading.
   */
  text: string;
}

const Heading = ({ text }: HeadingProps) => (
  <h1 className="font-pixel text-2xl sm:text-4xl leading-tight">{text}</h1>
);

export { Heading };
