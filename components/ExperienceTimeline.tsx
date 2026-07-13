import type { ExperienceRole } from "@/lib/types";
import ScrollFadeIn from "./ScrollFadeIn";

// Badge shows the role's SPAN, not just its start year — otherwise long
// continuous roles (e.g. Oct 2022 – Jan 2025) read as a multi-year gap.
function yearBadge(role: ExperienceRole) {
  const start = role.startDate.match(/\d{4}/)?.[0];
  const end = role.endDate.match(/\d{4}/)?.[0];
  if (!start) return role.startDate;
  if (/present/i.test(role.endDate)) return `Since ${start}`;
  if (end && end !== start) return `${start} – ${end}`;
  return start;
}

function TimelineCard({ role }: { role: ExperienceRole }) {
  return (
    <div>
      {/* Year banner */}
      <div className="inline-flex items-center rounded-sm bg-accent px-3.5 py-1 text-meta font-bold tracking-tight text-ink-dark">
        {yearBadge(role)}
      </div>
      <div className="glass-panel mt-2.5 rounded-md p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-8px_rgba(245,181,58,0.35)]">
        <h3 className="text-body font-semibold text-ink transition-colors duration-300 hover:text-accent">{role.company}</h3>
        <p className="mt-0.5 text-meta text-muted">{role.title}</p>
        <p className="mt-0.5 text-xs text-muted">
          {role.startDate} – {role.endDate} · {role.location}
        </p>
        <ul className="mt-3.5 space-y-1.5">
          {role.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-meta leading-relaxed text-ink/90">
              <span
                className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExperienceTimeline({
  roles,
}: {
  roles: ExperienceRole[];
}) {
  return (
    <div className="relative">
      {/* Connecting line: left rail on mobile, center spine on desktop */}
      <div
        className="absolute left-4 top-1 h-full w-px bg-border-strong md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <ol className="space-y-10 md:space-y-12">
        {roles.map((role, i) => {
          const onLeft = i % 2 === 0;
          return (
            <li key={role.company + i} className="relative">
              {/* Timeline dot */}
              <span
                className="absolute left-4 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-bg transition-shadow duration-300 hover:shadow-[0_0_14px_3px_rgba(245,181,58,0.55)] md:left-1/2"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <div className="pl-12 md:grid md:grid-cols-2 md:gap-x-16 md:pl-0">
                {onLeft ? (
                  <>
                    <ScrollFadeIn from="left">
                      <TimelineCard role={role} />
                    </ScrollFadeIn>
                    <div className="hidden md:block" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" aria-hidden="true" />
                    <ScrollFadeIn from="right">
                      <TimelineCard role={role} />
                    </ScrollFadeIn>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
