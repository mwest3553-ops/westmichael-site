import { timeline } from "@/lib/experience";
import ScrollFadeIn from "./ScrollFadeIn";

export default function TimelineList() {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {timeline.map((entry, i) => (
        <ScrollFadeIn as="li" key={entry.institution + i} delay={i * 0.04}>
          <span
            className="absolute -left-[5px] mt-1.5 inline-block h-2 w-2 rounded-full bg-accent"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-h3 font-semibold text-ink">
              {entry.institution}
            </h3>
            <p className="mt-1 text-body text-muted">{entry.role}</p>
            <p className="mt-1 text-meta text-muted">
              {entry.dates}
              {entry.location ? ` · ${entry.location}` : ""}
            </p>
            {entry.note && (
              <p className="mt-1 text-meta text-accent">{entry.note}</p>
            )}
          </div>
        </ScrollFadeIn>
      ))}
    </ol>
  );
}
