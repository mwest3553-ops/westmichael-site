import type { Metadata } from "next";
import { experienceRoles, projects } from "@/lib/experience";
import ExperienceItem from "@/components/ExperienceItem";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and projects by Michael West III — Enterprise Mobility, Westhird, The Gatesworth, and more.",
};

export default function ExperiencePage() {
  return (
    <article>
      <section className="bg-hero-gradient py-20 md:py-28">
        <div className="mx-auto max-w-prose px-6">
          <div className="flex gap-6 md:gap-8">
            <div className="gold-stripe self-stretch" aria-hidden="true" />
            <div className="flex-1">
              <ScrollFadeIn>
                <p className="text-kicker uppercase text-accent">Experience</p>
                <h1 className="mt-5 text-page-h1-mobile text-balance text-ink md:text-page-h1">
                  The full résumé.
                </h1>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-20">
        <div className="mx-auto max-w-prose px-6">
          <ScrollFadeIn>
            <h2 className="text-h2 font-bold text-ink">Roles</h2>
          </ScrollFadeIn>
          <div className="mt-8 space-y-12">
            {experienceRoles.map((role, i) => (
              <ExperienceItem key={role.company + i} role={role} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-light border-y border-border-light py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollFadeIn>
            <p className="text-kicker uppercase text-accent-deep">Projects</p>
            <h2 className="mt-5 text-h2 font-bold text-ink-dark md:text-page-h1">
              Selected work.
            </h2>
          </ScrollFadeIn>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <ScrollFadeIn key={project.name} delay={i * 0.04}>
                <article className="rounded-md border border-border-light bg-white p-6 shadow-sm md:p-8">
                  <h3 className="text-h3 font-semibold text-ink-dark">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-body text-muted-light">
                    {project.description}
                  </p>
                </article>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
