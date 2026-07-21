import { timeline } from "@/lib/experience";
import ScrollFadeIn from "./ScrollFadeIn";

export default function TimelineList() {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {timeline.map((entry, i) => (
        <ScrollFadeIn
          as="li"
          key={entry.institution + i}
          delay={i * 0.04}
          distance={20}
          className="group relative"
        >
          {/* relative on the li keeps this dot anchored to its own row for the
              whole reveal (a transformed ancestor would otherwise hijack the
              anchor mid-animation and make the dot snap to the rail after) */}
          <span
            className="absolute -left-[29px] mt-1.5 inline-block h-2 w-2 rounded-full bg-accent ring-4 ring-bg transition-[transform,box-shadow] duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_2px_rgba(245,181,58,0.6)]"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-h3 font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
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
