import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { remark } from "remark";
import remarkHtml from "remark-html";
import matter from "gray-matter";
import TimelineList from "@/components/TimelineList";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AboutHero from "@/components/AboutHero";
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
  return (
    <li className="relative flex min-h-[3.75rem] items-center justify-center rounded-md border border-border-light bg-white px-4 py-3 text-center text-meta font-medium leading-snug text-ink-dark shadow-sm">
      <span>{skill.label}</span>
      {skill.certified && (
        <span
          className="absolute right-2.5 top-2 text-xs leading-none text-accent-deep"
          title="Certified"
          aria-label="Certified"
        >
          ★
        </span>
      )}
    </li>
  );
}

export default async function AboutPage() {
  const html = await getAboutHtml();
  const hasCertified = skills.some((s) => s.certified);

  return (
    <article>
      <section className="bg-hero-gradient pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-prose px-6">
          <div className="flex gap-6 md:gap-8">
            <div className="gold-stripe self-stretch" aria-hidden="true" />
            <div>
              <ScrollFadeIn>
                <p className="text-kicker uppercase text-accent">About</p>
                <h1 className="mt-5 text-page-h1-mobile text-balance text-ink md:text-page-h1">
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
            <p className="text-kicker uppercase text-accent">Timeline</p>
            <h2 className="mt-5 text-h2 font-bold text-ink md:text-page-h1">
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
              <h3 className="text-kicker uppercase text-muted-light">Business</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {businessSkills.map((skill) => (
                  <SkillBox key={skill.label} skill={skill} />
                ))}
              </ul>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <div className="mt-10">
              <h3 className="text-kicker uppercase text-muted-light">Tech</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {techSkills.map((skill) => (
                  <SkillBox key={skill.label} skill={skill} />
                ))}
              </ul>
            </div>
          </ScrollFadeIn>

          {hasCertified && (
            <ScrollFadeIn delay={0.15}>
              <p className="mt-6 text-xs text-muted-light">
                <span className="text-accent-deep">★</span> indicates a certified skill
              </p>
            </ScrollFadeIn>
          )}
        </div>
      </section>
    </article>
  );
}
