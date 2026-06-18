import type { ExperienceRole } from "@/lib/types";
import ScrollFadeIn from "./ScrollFadeIn";

interface ExperienceItemProps {
  role: ExperienceRole;
  index: number;
}

export default function ExperienceItem({ role, index }: ExperienceItemProps) {
  return (
    <ScrollFadeIn as="article" delay={index * 0.04} className="border-t border-border pt-8">
      <header>
        <h3 className="text-h3 font-semibold text-ink">{role.company}</h3>
        <p className="mt-1 text-body text-muted">{role.title}</p>
        <p className="mt-1 text-meta text-muted">
          {role.startDate} – {role.endDate} · {role.location}
        </p>
      </header>
      <ul className="mt-5 space-y-3">
        {role.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-body text-ink/90">
            <span
              className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </ScrollFadeIn>
  );
}
