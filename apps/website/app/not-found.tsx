import Link from "next/link";

const NotFound = () => (
  <div className="flex flex-col gap-4 items-center justify-center h-svh">
    <h1 className="font-pixel text-[28px] sm:text-[38px] leading-[1.2] text-foreground">
      Page not found
    </h1>
    <p className="text-muted-foreground">
      The page you&apos;re looking for doesn&apos;t exist.{" "}
      <Link href="/" className="text-foreground underline">
        Go home
      </Link>
      .
    </p>
  </div>
);

export default NotFound;
