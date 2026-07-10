import type { ExperienceRole } from "@/lib/types";
import ScrollFadeIn from "./ScrollFadeIn";

interface ExperienceItemProps {
  role: ExperienceRole;
  index: number;
  from?: "up" | "down" | "left" | "right";
}

export default function ExperienceItem({ role, index, from = "up" }: ExperienceItemProps) {
  return (
    <ScrollFadeIn as="article" delay={index * 0.04} from={from} className="group border-t border-border pt-8 transition-colors duration-300 hover:border-accent/40">
      <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h3 className="text-h2 font-bold text-ink transition-colors duration-300 group-hover:text-accent">{role.company}</h3>
          <p className="mt-2 text-body text-muted">{role.title}</p>
        </div>
        <div className="text-meta text-muted md:text-right">
          <p>
            {role.startDate} – {role.endDate}
          </p>
          <p>{role.location}</p>
        </div>
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
