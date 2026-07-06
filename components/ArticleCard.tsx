import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/types";
import { urlForImage } from "@/sanity/lib/image";

interface ArticleCardProps {
  post: BlogPostMeta;
  readingTimeText?: string;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleCard({ post, readingTimeText }: ArticleCardProps) {
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(800).height(450).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-md glass-panel transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-8px_rgba(245,181,58,0.35)]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-surface-2 via-bg to-bg-deep">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-meta text-muted">
            <span className="opacity-40">{post.tags?.[0] ?? "Essay"}</span>
          </div>
        )}
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 text-meta text-muted">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {readingTimeText && (
            <>
              <span aria-hidden="true">·</span>
              <span>{readingTimeText}</span>
            </>
          )}
        </div>
        <h3 className="mt-3 text-h3 font-semibold text-ink transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 text-meta text-muted line-clamp-3">{post.excerpt}</p>
        )}
        {(post.tags?.length ?? 0) > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags!.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-border bg-bg px-2 py-0.5 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
