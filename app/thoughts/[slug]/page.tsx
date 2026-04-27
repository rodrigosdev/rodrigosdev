import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getThoughtModule, getThoughtSlugs } from "~/lib/thoughts";

interface ThoughtPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getThoughtSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ThoughtPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { metadata } = await getThoughtModule(slug);

    return {
      description: metadata.description,
      title: metadata.title,
    };
  } catch {
    return {
      title: "Thought not found",
    };
  }
}

const ThoughtPage = async ({ params }: ThoughtPageProps) => {
  const { slug } = await params;

  try {
    const { default: Post, metadata } = await getThoughtModule(slug);

    return (
      <article className="px-4 sm:px-0 max-w-full sm:max-w-lg w-full mx-auto text-xs pt-0 xl:pt-14 pb-14">
        <Link href="/thoughts" className="link-underline cursor-alias">
          Back to thoughts
        </Link>
        <div className="mt-6 mb-6">
          <h1 className="text-left text-white mb-1">
            {metadata.title}
            <span className="animate-blink">_</span>
          </h1>
          <p>{metadata.description}</p>
        </div>
        <Post />
      </article>
    );
  } catch {
    notFound();
  }
};

export default ThoughtPage;
