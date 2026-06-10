import readingTime from "reading-time";
import { sanityClient } from "@/sanity/lib/client";
import {
  allPostSlugsQuery,
  allPostsQuery,
  postBySlugQuery,
} from "@/sanity/lib/queries";
import type { BlogPost, BlogPostMeta } from "./types";
import type { PortableTextBlock } from "@portabletext/types";

// Extract plain text from Portable Text blocks for reading-time calculation
function extractPlainText(blocks: PortableTextBlock[] = []): string {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !("children" in block)) return "";
      const children = (block as { children?: Array<{ text?: string }> }).children ?? [];
      return children.map((c) => c.text ?? "").join("");
    })
    .join("\n\n");
}

export function getReadingTimeForBody(body: PortableTextBlock[]): {
  text: string;
  minutes: number;
} {
  const plain = extractPlainText(body);
  const stats = readingTime(plain);
  return { text: stats.text, minutes: Math.max(1, Math.round(stats.minutes)) };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  return sanityClient.fetch<BlogPostMeta[]>(
    allPostsQuery,
    {},
    { cache: "no-store" }
  );
}

export async function getRecentPosts(limit = 3): Promise<BlogPostMeta[]> {
  const all = await getAllPosts();
  return all.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch<BlogPost | null>(
    postBySlugQuery,
    { slug },
    { cache: "no-store" }
  );
}

export async function getAllPostSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(
    allPostSlugsQuery,
    {},
    { cache: "no-store" }
  );
}
