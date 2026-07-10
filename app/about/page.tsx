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
import { businessSkills, techSkills, skills } from "@/lib/experience";
import type { SkillTag } from "@/lib/types";

export const metadata: Metadata = {
  title: "About",
  description:
    "Michael A. West III — pursuing a B.S. in Marketing and Psychology at Saint Louis University. Founder of Westhird.",
};

async function getAboutHtml() {
  const filePath = path.join(process.cwd(), "content", "about.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  return processed.toString();
}

function SkillBox({ skill }: { skill: SkillTag }) {
  if (skill.certified) {
    return (
      <li className="flex min-h-[3.75rem] items-center justify-center gap-2 rounded-md border border-accent bg-accent px-4 py-3 text-center text-meta font-semibold leading-snug text-ink-dark shadow-[0_10px_24px_-12px_rgba(245,181,58,0.75)] transition-transform duration-300 hover:-translate-y-1">
      <span aria-hidden="true" className="text-sm">
          ★
        </span>
        <span>{skill.label}</span>
      </li>
    );
  }
  return (
    <li className="skill-chip flex min-h-[3.75rem] items-center justify-center rounded-md border border-border-light bg-white px-4 py-3 text-center text-meta font-medium leading-snug text-ink-dark shadow-sm">
      <span className="relative z-[1]">{skill.label}</span>
    </li>
  );
}

function CategoryHeader({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-3">
      <h3 className="text-kicker uppercase text-muted-light">{label}</h3>
      <span className="font-mono text-xs text-muted-dark">
        {String(count).padStart(2, "0")}
      </span>
      <span className="h-px flex-1 bg-border-light" aria-hidden="true" />
    </div>
  );
}

export default async function AboutPage() {
  const html = await getAboutHtml();
  const hasCertified = skills.some((s) => s.certified);

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
                  A little background.
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
              Where I've been.
            </h2>
          </ScrollFadeIn>
          <div className="mt-12">
            <TimelineList />
          </div>
        </div>
      </section>

      <section className="section-light-alt py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollFadeIn>
            <p className="text-kicker uppercase text-accent-deep">Skills</p>
            <h2 className="mt-5 text-h2 font-bold text-ink-dark md:text-page-h1">
              What I bring.
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.05}>
            <div className="mt-12">
              <CategoryHeader label="Business" count={businessSkills.length} />
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {businessSkills.map((skill) => (
                  <SkillBox key={skill.label} skill={skill} />
                ))}
              </ul>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <div className="mt-12">
              <CategoryHeader label="Tech" count={techSkills.length} />
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {techSkills.map((skill) => (
                  <SkillBox key={skill.label} skill={skill} />
                ))}
              </ul>
            </div>
          </ScrollFadeIn>

          {hasCertified && (
            <ScrollFadeIn delay={0.15}>
              <p className="mt-8 flex items-center gap-2 text-xs text-muted-light">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-ink-dark">
                  ★
                </span>
                Gold badge indicates a certified skill
              </p>
            </ScrollFadeIn>
          )}
        </div>
      </section>
    </article>
  );
}
