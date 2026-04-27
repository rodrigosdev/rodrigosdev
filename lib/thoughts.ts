import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";

const thoughtsDirectory = path.join(process.cwd(), "content/thoughts");

interface ThoughtMetadata {
  title: string;
  description: string;
  publishedAt: string;
}

interface ThoughtModule {
  default: ComponentType;
  metadata: ThoughtMetadata;
}

export interface ThoughtPost extends ThoughtMetadata {
  slug: string;
}

const isMdxFile = (fileName: string) => fileName.endsWith(".mdx");

export async function getThoughtSlugs(): Promise<string[]> {
  const fileNames = await readdir(thoughtsDirectory);

  return fileNames.filter(isMdxFile).map((fileName) => path.basename(fileName, ".mdx"));
}

export async function getThoughtModule(slug: string): Promise<ThoughtModule> {
  const slugs = await getThoughtSlugs();

  if (!slugs.includes(slug)) {
    throw new Error(`Unknown thought: ${slug}`);
  }

  return import(`~/content/thoughts/${slug}.mdx`) as Promise<ThoughtModule>;
}

export async function getThoughtPosts(): Promise<ThoughtPost[]> {
  const slugs = await getThoughtSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await getThoughtModule(slug);

      return {
        slug,
        ...metadata,
      };
    }),
  );

  return posts.sort(
    (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
  );
}
