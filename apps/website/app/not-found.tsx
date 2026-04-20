import Link from "next/link";

import { HelperLayout } from "./components/helper-layout";
import { Heading } from "./components/typography/heading";
import { Paragraph } from "./components/typography/paragraph";

const NotFound = () => (
  <HelperLayout>
    <Heading text="Page not found" />
    <div className=" flex flex-row gap-1">
      <Paragraph
        text="The page you're looking for doesn't exist."
        variant="muted"
      />
      <Link href="/" className="underline">
        Go home
      </Link>
    </div>
  </HelperLayout>
);

export default NotFound;
