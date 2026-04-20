import { cn } from "@rodrigosantosdev/saudade/lib/utils";

type ParagraphVariants = "muted" | "default";

interface ParagraphProps {
  /**
   * The text to display in the paragraph.
   */
  text: string;
  /**
   * The variant of the paragraph. Defaults to "default".
   */
  variant?: ParagraphVariants;
}

const mutedClasses = "text-muted-foreground";
const baseClasses = "text-foreground";

const getClasses = (variant: ParagraphVariants): string => {
  switch (variant) {
    case "muted": {
      return mutedClasses;
    }
    default: {
      return baseClasses;
    }
  }
};

const Paragraph = ({ text, variant = "default" }: ParagraphProps) => (
  <p className={cn(getClasses(variant))}>{text}</p>
);

export { Paragraph };
