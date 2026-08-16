import type { Metadata } from "next";
import { experienceRoles } from "@/lib/experience";
import type { ExperienceRole } from "@/lib/types";
import ExperienceList from "@/components/ExperienceList";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedStripe from "@/components/AnimatedStripe";
import FloatingOrbs from "@/components/FloatingOrbs";

const RELEVANT = ["Westhird", "Enterprise Mobility", "St. Louis Sports Commission"];
const ADDITIONAL = ["The Gatesworth", "Adams Park Boys & Girls Club"];
const LEADERSHIP = ["Keller Joseph Capital", "Rise Young Professionals Board"];

function pick(names: string[]): ExperienceRole[] {
  return names
    .map((n) => experienceRoles.find((r) => r.company === n))
    .filter((r): r is ExperienceRole => Boolean(r));
}

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience by Michael A. West III: Westhird, Enterprise Mobility, Keller Joseph Capital, the Rise YP Board, and more.",
  alternates: { canonical: "/experience" },
};

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
      {children}
      <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
    </p>
  );
}

export default function ExperiencePage() {
  const relevant = pick(RELEVANT);
  const additional = pick(ADDITIONAL);
  const leadership = pick(LEADERSHIP);

  return (
    <article>
      <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28">
        <FloatingOrbs />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-6 md:gap-8">
            <AnimatedStripe className="self-stretch" />
            <div className="flex-1">
              <ScrollFadeIn>
                <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
                  Experience
                  <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
                </p>
                <h1 className="mt-5 text-page-h1-mobile text-balance text-sheen md:text-page-h1">
                  The work behind the résumé.
                </h1>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.05}>
                <a
                  href="/Michael-A-West-III-Resume.pdf"
                  download="Michael A West III Resume.pdf"
                  data-track="resume_download"
                  className="btn-sheen group mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-meta font-semibold text-ink-dark transition-colors hover:bg-accent-hover"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollFadeIn>
            <GroupLabel>Relevant Experience</GroupLabel>
          </ScrollFadeIn>
          <div className="mt-8">
            <ExperienceList roles={relevant} />
          </div>

          <ScrollFadeIn>
            <div className="mt-16 md:mt-20">
              <GroupLabel>Additional Experience</GroupLabel>
            </div>
          </ScrollFadeIn>
          <div className="mt-8">
            <ExperienceList roles={additional} />
          </div>
        </div>
      </section>

      <section className="section-light border-y border-border-light py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollFadeIn>
            <p className="flex items-center gap-2.5 text-kicker uppercase text-accent-deep">
              Leadership &amp; Ventures
              <span className="h-px w-5 bg-accent-deep/40" aria-hidden="true" />
            </p>
            <h2 className="mt-5 text-h2 font-bold text-ink-dark md:text-page-h1">
              Beyond the day-to-day.
            </h2>
          </ScrollFadeIn>
          <div className="mt-12 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            {leadership.map((role, i) => (
              <ScrollFadeIn
                key={role.company + i}
                delay={i * 0.05}
                from={i % 2 === 0 ? "left" : "right"}
              >
                <article className="lift-card group flex h-full flex-col rounded-md border border-border-light bg-white p-6 shadow-sm hover:border-accent/60 md:p-8">
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-h3 font-semibold text-ink-dark transition-colors duration-300 group-hover:text-accent-deep">
                        {role.company}
                      </h3>
                      <p className="mt-1 text-meta text-muted-light">{role.title}</p>
                    </div>
                    <p className="shrink-0 text-meta text-muted-light md:pl-4 md:text-right">
                      {role.startDate} – {role.endDate}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {role.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2.5 text-body text-muted-light">
                        <span
                          className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-accent-deep"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
