"use client";

const Error = () => (
  <div className="flex flex-col gap-4">
    <h1 className="font-pixel text-2xl sm:text-4xl leading-tight text-foreground">
      Something went wrong
    </h1>
    <p>An unexpected error occurred. Please try refreshing the page.</p>
  </div>
);

export default Error;
