import Link from "next/link";
import { experienceRoles } from "@/lib/experience";
import ScrollFadeIn from "./ScrollFadeIn";

export default function HomeSelectedExperience() {
  const selected = experienceRoles.slice(0, 3);

  return (
    <section
      id="experience"
      className="bg-bg scroll-anchor py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <div className="flex items-end justify-between">
            <div>
              <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
                <span className="text-muted-light">02</span>
                <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
                Selected Experience
              </p>
              <h2 className="mt-5 text-page-h1-mobile text-balance text-sheen md:text-page-h1">
                What I'm doing now.
              </h2>
            </div>
            <Link
              href="/experience"
              className="group hidden items-center gap-1.5 text-meta text-muted transition-colors hover:text-accent md:inline-flex"
            >
              <span className="link-underline">Full résumé</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollFadeIn>

        <div className="mt-14 space-y-12 md:mt-20">
          {selected.map((role, i) => (
            <ScrollFadeIn
              key={role.company + i}
              delay={i * 0.06}
              from={i % 2 === 0 ? "left" : "right"}
            >
              <article className="group flex gap-6 border-t border-border pt-10 transition-colors duration-300 hover:border-accent/40 md:gap-8">
                <div className="hidden h-1.5 w-1.5 flex-none translate-y-3 rounded-full bg-accent transition-all duration-300 group-hover:scale-[1.8] group-hover:shadow-[0_0_12px_2px_rgba(245,181,58,0.6)] md:block" aria-hidden="true" />
                <div className="flex-1">
                  <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-h2 font-bold text-ink transition-colors duration-300 group-hover:text-accent">
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
                      <p className="mt-2 text-body text-muted">{role.title}</p>
                    </div>
                    <div className="text-meta text-muted md:text-right">
                      <p>
                        {role.startDate} – {role.endDate}
                      </p>
                      <p>{role.location}</p>
                    </div>
                  </header>
                  <ul className="mt-6 space-y-3">
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
                </div>
              </article>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn delay={0.15}>
          <div className="mt-14 md:hidden">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-1.5 text-meta text-muted transition-colors hover:text-accent"
            >
              <span className="link-underline">See full résumé</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
