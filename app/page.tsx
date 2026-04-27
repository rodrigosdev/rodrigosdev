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
      <div className="px-4 sm:px-0 max-w-full sm:max-w-lg w-full mx-auto text-xs pt-0 xl:pt-14 pb-14">
        <h1 className="text-left text-white mb-1">
          Rodrigo Santos<span className="animate-blink">_</span>
        </h1>
        <p className="text-left mb-4">Lisbon, PT</p>
        <div className="mb-6 sm:mb-8"></div>
        <h2 className="text-left text-white mb-1">About</h2>
        <p className="text-left mb-4 sm:mb-6">
          I´m an AI Engineer at{" "}
          <a
            href="https://snyk.io"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline cursor-alias"
          >
            Snyk
          </a>
          . I design and build software on the internet. I'm currently living in Lisbon, Portugal.
        </p>
        <h2 className="text-left text-white mb-1">Interests</h2>
        <p className="text-left mb-4 sm:mb-6">
          Surfing, distributed systems, Databases, and the future of Internet.
        </p>
        <h2 className="text-left text-white mb-1">Education</h2>
        <p className="text-left mb-4 sm:mb-6">
          Bachelor's Degree in Computer Science and Engineering at NOVA Lisbon
        </p>
        <h2 className="text-left text-white mb-1">Projects</h2>
        <ul className="list-none p-0 space-y-1 mb-6 sm:mb-6">
          <li>
            <a
              href="https://github.com/rodrigosdev"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline cursor-alias"
            >
              Comming Soon ...
            </a>
          </li>
        </ul>
        <h2 className="text-left text-white mb-1">Connect</h2>
        <p className="text-left mb-4 sm:mb-6">
          Reach me at{" "}
          <a href="mailto:rodrigo@rodrigosantos.dev" className="link-underline cursor-alias">
            rodrigo@rodrigosantos.dev
          </a>{" "}
          or follow me on{" "}
          <a href="https://x.com/rrcssantos" className="link-underline cursor-alias">
            X
          </a>
          .
        </p>
        <div className="mt-6 sm:mt-8 mb-4">[***]</div>
        <blockquote className="text-xs italic">
          "Stay Hungry, Stay Foolish." - Steve Jobs
        </blockquote>
      </div>
    </>
  );
}
