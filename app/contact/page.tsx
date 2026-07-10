import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedStripe from "@/components/AnimatedStripe";
import FloatingOrbs from "@/components/FloatingOrbs";
import EmailLink from "@/components/EmailLink";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <article>
      <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28">
        <FloatingOrbs />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex gap-6 md:gap-8">
            <AnimatedStripe className="self-stretch" />
            <div>
              <ScrollFadeIn>
                <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
                  Contact
                  <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
                </p>
                <h1 className="mt-5 text-page-h1-mobile text-balance text-sheen md:text-page-h1">
                  Get in touch.
                </h1>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-prose px-6">
          <ul className="space-y-4">
            <ScrollFadeIn as="li" from="left" delay={0.1}>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between rounded-md glass-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-8px_rgba(245,181,58,0.35)] md:p-6"
              >
                <span className="text-h3 font-semibold text-ink group-hover:text-accent">
                  LinkedIn
                </span>
                <span className="text-meta text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true">
                  →
                </span>
              </a>
            </ScrollFadeIn>
            <ScrollFadeIn as="li" from="right" delay={0.18}>
              <EmailLink
                className="group flex items-center justify-between rounded-md glass-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-8px_rgba(245,181,58,0.35)] md:p-6"
                label={
                  <>
                    <span className="text-h3 font-semibold text-ink group-hover:text-accent">
                      {siteConfig.email}
                    </span>
                    <span className="text-meta text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true">
                      →
                    </span>
                  </>
                }
              />
            </ScrollFadeIn>
          </ul>
        </div>
      </section>
    </article>
  );
}
