import Link from "next/link";

const NotFound = () => (
  <div className="flex flex-col gap-4">
    <h1 className="font-pixel text-2xl sm:text-4xl leading-tight text-foreground">
      Page not found
    </h1>
    <div className=" flex flex-row gap-1">
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="underline">
        Go home
      </Link>
    </div>
  </div>
);

export default NotFound;
