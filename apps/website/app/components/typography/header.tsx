interface HeaderProps {
  /**
   * The text to display in the header.
   */
  text: string;
}

const Header = ({ text }: HeaderProps) => (
  <h1 className="font-pixel text-2xl sm:text-4xl leading-tight">{text}</h1>
);

export { Header };
