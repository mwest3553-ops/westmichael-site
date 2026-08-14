import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getAllPostSlugs,
  getPostBySlug,
  getReadingTimeForBody,
} from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import { urlForImage } from "@/sanity/lib/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import ShareOnLinkedIn from "@/components/ShareOnLinkedIn";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import FloatingOrbs from "@/components/FloatingOrbs";

interface BlogPostPageProps {
  params: { slug: string };
}

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).url()
    : undefined;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const { text: readingTimeText } = getReadingTimeForBody(post.body ?? []);
  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage).width(1600).url()
    : null;

  return (
    <>
      <ReadingProgressBar />
      <article className="bg-bg">
        <section className="relative overflow-hidden bg-hero-gradient pt-14 pb-16 md:pt-20 md:pb-24">
          <FloatingOrbs />
          <div className="mx-auto max-w-prose px-6">
            <Link
              href="/blog"
              className="text-meta text-muted transition-colors hover:text-accent"
            >
              ← All writing
            </Link>
            <header className="mt-10">
              <span
                className="inline-block h-0.5 w-12 bg-accent"
                aria-hidden="true"
              />
              <div className="mt-5 flex items-center gap-3 text-meta text-muted">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span aria-hidden="true">·</span>
                <span>{readingTimeText}</span>
              </div>
              <h1 className="mt-3 text-page-h1-mobile text-balance text-ink md:text-page-h1">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="mt-3 text-body text-muted text-pretty md:text-body-lg">
                  {post.excerpt}
                </p>
              )}
              {(post.tags?.length ?? 0) > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags!.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border-strong bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>
          </div>

          {coverUrl && (
            <div className="mx-auto mt-10 max-w-5xl px-6 pb-10">
              <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border">
                <Image
                  src={coverUrl}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-prose px-6">
            <div className="prose prose-invert">
              <PortableTextRenderer value={post.body ?? []} />
            </div>

            <footer className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-meta text-muted">
                Found this useful? Pass it along.
              </p>
              <ShareOnLinkedIn slug={post.slug} title={post.title} />
            </footer>
          </div>
        </section>
      </article>
    </>
  );
}
