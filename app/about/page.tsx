import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { remark } from "remark";
import remarkHtml from "remark-html";
import matter from "gray-matter";
import TimelineList from "@/components/TimelineList";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AboutHero from "@/components/AboutHero";
import AnimatedStripe from "@/components/AnimatedStripe";
import FloatingOrbs from "@/components/FloatingOrbs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Michael A. West III is pursuing a B.S. in Marketing and Psychology at Saint Louis University. Founder of Westhird.",
  alternates: { canonical: "/about" },
};

async function getAboutHtml() {
  const filePath = path.join(process.cwd(), "content", "about.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  return processed.toString();
}

export default async function AboutPage() {
  const html = await getAboutHtml();

  return (
    <article>
      <section className="relative overflow-hidden bg-hero-gradient pt-20 pb-16 md:pt-28 md:pb-20">
        <FloatingOrbs />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-6 md:gap-8">
            <AnimatedStripe className="self-stretch" />
            <div>
              <ScrollFadeIn>
                <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
                  About
                  <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
                </p>
                <h1 className="mt-5 text-page-h1-mobile text-balance text-sheen md:text-page-h1">
                  A peek into who I am.
                </h1>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <AboutHero />
        </div>
      </section>

      <section className="section-light border-y border-border-light py-16 md:py-20">
        <div className="mx-auto max-w-prose px-6">
          <ScrollFadeIn>
            <div
              className="prose prose-light prose-lg max-w-none"
              style={{ color: "#3F3F46" }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </ScrollFadeIn>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollFadeIn>
            <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
              Timeline
              <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
            </p>
            <h2 className="mt-5 text-h2 font-bold text-sheen md:text-page-h1">
              Where I&apos;ve been.
            </h2>
          </ScrollFadeIn>
          <div className="mt-12">
            <TimelineList />
          </div>
        </div>
      </section>
    </article>
  );
}
