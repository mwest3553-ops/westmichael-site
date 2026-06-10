import { businessSkills, techSkills, skills } from "@/lib/experience";
import type { SkillTag } from "@/lib/types";
import ScrollFadeIn from "./ScrollFadeIn";

function SkillBox({ skill }: { skill: SkillTag }) {
  return (
    <li className="relative flex h-16 items-center justify-center rounded-md border border-border-light bg-white px-4 text-center text-meta font-medium text-ink-dark shadow-sm transition-shadow hover:shadow-md">
      <span className="whitespace-nowrap">{skill.label}</span>
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

export default function HomeSkills() {
  const hasCertified = skills.some((s) => s.certified);

  return (
    <section
      id="skills"
      className="section-light-alt scroll-anchor py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="text-kicker uppercase text-accent-deep">Skills</p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.05}>
          <h2 className="mt-5 max-w-3xl text-page-h1-mobile text-balance text-ink-dark md:text-page-h1">
            What I bring to the table.
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div className="mt-14">
            <h3 className="text-kicker uppercase text-muted-light">Business</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {businessSkills.map((skill) => (
                <SkillBox key={skill.label} skill={skill} />
              ))}
            </ul>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <div className="mt-10">
            <h3 className="text-kicker uppercase text-muted-light">Tech</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {techSkills.map((skill) => (
                <SkillBox key={skill.label} skill={skill} />
              ))}
            </ul>
          </div>
        </ScrollFadeIn>

        {hasCertified && (
          <ScrollFadeIn delay={0.2}>
            <p className="mt-6 text-xs text-muted-light">
              <span className="text-accent-deep">★</span> indicates a certified skill
            </p>
          </ScrollFadeIn>
        )}
      </div>
    </section>
  );
}
