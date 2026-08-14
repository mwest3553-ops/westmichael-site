import { businessSkills, techSkills, skills } from "@/lib/experience";
import type { SkillTag } from "@/lib/types";
import ScrollFadeIn from "./ScrollFadeIn";

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

export default function HomeSkills() {
  const hasCertified = skills.some((s) => s.certified);

  return (
    <section
      id="skills"
      className="section-light-alt scroll-anchor py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="flex items-center gap-2.5 text-kicker uppercase text-accent-deep">
            <span className="text-muted-dark">03</span>
            <span className="h-px w-5 bg-accent-deep/40" aria-hidden="true" />
            Skills
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.05}>
          <h2 className="mt-5 max-w-3xl text-page-h1-mobile text-balance text-ink-dark md:text-page-h1">
            Built, tested, learned.
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div className="mt-14">
            <CategoryHeader label="Professional" count={businessSkills.length} />
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {businessSkills.map((skill) => (
                <SkillBox key={skill.label} skill={skill} />
              ))}
            </ul>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <div className="mt-12">
            <CategoryHeader label="Technical" count={techSkills.length} />
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {techSkills.map((skill) => (
                <SkillBox key={skill.label} skill={skill} />
              ))}
            </ul>
          </div>
        </ScrollFadeIn>

        {hasCertified && (
          <ScrollFadeIn delay={0.2}>
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
  );
}
