"use client";

import { HelperLayout } from "./components/helper-layout";
import { Header } from "./components/typography/header";
import { Paragraph } from "./components/typography/paragraph";

const Error = () => (
  <HelperLayout>
    <Header text="Something went wrong" />
    <Paragraph
      text="An unexpected error occurred. Please try refreshing the page."
      variant="muted"
    />
  </HelperLayout>
);

export default Error;
