import ScrollFadeIn from "./ScrollFadeIn";
import { skillCategories } from "@/lib/skills";

// Interactive skills → projects. Each skill expands to the roles that prove
// it. Native <details>/<summary>, no client JS. Matches the design mockup.
export default function HomeSkills() {
  return (
    <section id="skills" className="section-light-alt scroll-anchor py-20 md:py-32">
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
        <ScrollFadeIn delay={0.08}>
          <p className="mt-4 max-w-xl text-body text-muted-dark">
            Tap any skill to see where I&apos;ve done it.
          </p>
        </ScrollFadeIn>

        {skillCategories.map((cat, ci) => (
          <ScrollFadeIn key={cat.label} delay={0.1 + ci * 0.04}>
            <div className="mt-10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-light">
                  {cat.label}
                </span>
                <span className="h-px flex-1" style={{ background: "#E0D9C8" }} aria-hidden="true" />
                <span className="font-mono text-[11px] text-muted-light">
                  {String(cat.skills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-start gap-2.5">
                {cat.skills.map((s) => (
                  <details
                    key={s.label}
                    className="sk-details"
                    style={{
                      border: s.certified ? "1px solid #E3C078" : "1px solid #DDD5C2",
                      background: s.certified ? "rgba(245,181,58,0.16)" : "#FAF7F0",
                    }}
                  >
                    <summary className="flex items-center gap-2.5 px-[15px] py-3 text-[15px] font-medium text-ink-dark">
                      {s.label}
                      {s.certified && (
                        <span
                          className="font-mono text-[9px] font-semibold"
                          style={{ background: "#F5B53A", color: "#0A1628", padding: "4px 6px" }}
                        >
                          CERT
                        </span>
                      )}
                      <span className="sk-plus font-mono text-sm" style={{ color: "#A39B88" }}>
                        +
                      </span>
                    </summary>
                    <div
                      className="flex flex-wrap gap-[7px] px-[15px] py-[13px]"
                      style={{ background: "#0A1628" }}
                    >
                      {s.orgs.map((o) => (
                        <span
                          key={o}
                          className="font-mono text-[11px]"
                          style={{ color: "#FAF7F0", border: "1px solid #33456A", padding: "6px 9px" }}
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
