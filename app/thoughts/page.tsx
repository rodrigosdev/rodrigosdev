import { Metadata } from "next";
import Link from "next/link";
import { getThoughtPosts } from "~/lib/thoughts";

export const metadata: Metadata = {
  title: "Thoughts",
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(new Date(date));

const Thoughts = async () => {
  const posts = await getThoughtPosts();

  return (
    <div className="px-4 sm:px-0 max-w-full sm:max-w-lg w-full mx-auto text-xs pt-0 xl:pt-14 pb-14">
      <h1 className="text-left text-white mb-1">
        Thoughts<span className="animate-blink">_</span>
      </h1>
      <p className="text-left mb-4">Writing and Reflections</p>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/thoughts/${post.slug}`}
              className="link-underline cursor-alias text-white"
            >
              {post.title}
            </Link>
            <p className="mt-1 mb-1">{post.description}</p>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Thoughts;
