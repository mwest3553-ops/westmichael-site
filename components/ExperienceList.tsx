import type { ExperienceRole } from "@/lib/types";
import ScrollFadeIn from "./ScrollFadeIn";

// Clean stacked role list (dark section) — matches the design mockup's
// Relevant / Additional Experience layout.
export default function ExperienceList({ roles }: { roles: ExperienceRole[] }) {
  return (
    <div>
      {roles.map((role, i) => (
        <ScrollFadeIn
          as="article"
          key={role.company + i}
          delay={i * 0.05}
          className="border-t border-border py-7 md:py-8"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-7">
            <div>
              <h3 className="text-h3 font-bold text-ink">
                {role.url ? (
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline decoration-accent/50 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {role.company}
                  </a>
                ) : (
                  role.company
                )}
              </h3>
              <p className="mt-1.5 text-body text-muted">{role.title}</p>
            </div>
            <div className="shrink-0 md:text-right">
              <p className="text-meta font-semibold uppercase tracking-[0.12em] text-accent-deep">
                {role.startDate} – {role.endDate}
              </p>
              <p className="mt-1 text-meta text-muted">{role.location}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2.5">
            {role.bullets.map((bullet, j) => (
              <li key={j} className="flex gap-3 text-body text-ink/85">
                <span
                  className="mt-2.5 inline-block h-1 w-1 flex-none rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </ScrollFadeIn>
      ))}
    </div>
  );
}
