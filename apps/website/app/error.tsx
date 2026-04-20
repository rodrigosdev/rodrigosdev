"use client";

import { HelperLayout } from "./components/helper-layout";
import { Heading } from "./components/typography/heading";
import { Paragraph } from "./components/typography/paragraph";

const Error = () => (
  <HelperLayout>
    <Heading text="Something went wrong" />
    <Paragraph
      text="An unexpected error occurred. Please try refreshing the page."
      variant="muted"
    />
  </HelperLayout>
);

export default Error;
