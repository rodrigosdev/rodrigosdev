import { Portrait } from "~/components/image";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  image: "https://rodrigosdev.com/opengraph-image.png",
  jobTitle: "AI Engineer",
  name: "Rodrigo Santos",
  sameAs: [
    "https://x.com/rrcssantos",
    "https://www.linkedin.com/in/rrcssantos/",
    "https://github.com/rodrigosdev",
  ],
  url: "https://rodrigosantos.dev",
  worksFor: {
    "@type": "Organization",
    name: "Snyk",
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <Portrait />
      <div className="max-w-full sm:max-w-lg w-full mx-auto text-sm [&>p]:text-xs pt-0 xl:pt-14 pb-14 "></div>
    </>
  );
}
