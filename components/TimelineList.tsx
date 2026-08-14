import { timeline } from "@/lib/experience";
import ScrollFadeIn from "./ScrollFadeIn";

// Table-style timeline: date · role/institution · location. Matches the
// design mockup. Collapses to a single column on mobile.
export default function TimelineList() {
  return (
    <div className="border-t border-border-strong">
      {timeline.map((entry, i) => (
        <ScrollFadeIn
          as="div"
          key={entry.institution + i}
          delay={i * 0.04}
          distance={16}
          className="grid grid-cols-1 items-baseline gap-2 border-b border-border py-5 md:grid-cols-[158px_1fr_190px] md:gap-7"
        >
          <span className="text-meta font-semibold uppercase tracking-[0.12em] text-accent-deep">
            {entry.dates}
          </span>
          <div>
            <h3 className="text-h3 font-semibold text-ink">
              {entry.url ? (
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline decoration-accent/50 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {entry.institution}
                </a>
              ) : (
                entry.institution
              )}
            </h3>
            <p className="mt-1 text-body text-muted">{entry.role}</p>
          </div>
          <span className="text-meta text-muted md:text-right">{entry.location}</span>
        </ScrollFadeIn>
      ))}
    </div>
  );
}
