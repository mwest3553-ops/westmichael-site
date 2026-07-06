import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import ArticleCard from "@/components/ArticleCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedStripe from "@/components/AnimatedStripe";
import FloatingOrbs from "@/components/FloatingOrbs";

const POSTS_PER_PAGE = 6;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays and notes by Michael A. West III.",
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const posts = await getAllPosts();
  const pageNum = Math.max(1, parseInt(searchParams.page ?? "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const start = (pageNum - 1) * POSTS_PER_PAGE;
  const visible = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <article>
      <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28">
        <FloatingOrbs />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-6 md:gap-8">
            <AnimatedStripe className="self-stretch" />
            <div>
              <ScrollFadeIn>
                <p className="text-kicker uppercase text-accent">Writing</p>
                <h1 className="mt-5 text-page-h1-mobile text-balance text-ink md:text-page-h1">
                  Essays and notes.
                </h1>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {posts.length === 0 ? (
            <ScrollFadeIn>
              <div className="mx-auto max-w-prose rounded-md border border-border bg-surface px-6 py-16 text-center md:py-20">
                <h2 className="text-h2 font-bold text-accent">Coming soon</h2>
                <p className="mt-4 text-body text-muted">
                  New writing is on the way — check back soon.
                </p>
              </div>
            </ScrollFadeIn>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((post, i) => (
                  <ScrollFadeIn
                    key={post._id}
                    delay={i * 0.05}
                    from={i % 2 === 0 ? "left" : "right"}
                  >
                    <ArticleCard post={post} />
                  </ScrollFadeIn>
                ))}
              </div>

              {totalPages > 1 && (
                <nav
                  aria-label="Pagination"
                  className="mt-12 flex items-center justify-center gap-3"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
                    const isActive = n === pageNum;
                    return (
                      <a
                        key={n}
                        href={n === 1 ? "/blog" : `/blog?page=${n}`}
                        className={`rounded-sm border px-3 py-1.5 text-meta transition-colors ${
                          isActive
                            ? "border-accent bg-accent text-ink-dark"
                            : "border-border-strong text-muted hover:border-accent hover:text-accent"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {n}
                      </a>
                    );
                  })}
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </article>
  );
}
