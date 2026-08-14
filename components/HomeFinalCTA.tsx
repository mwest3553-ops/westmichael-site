import { siteConfig } from "@/lib/config";
import ScrollFadeIn from "./ScrollFadeIn";
import EmailLink from "./EmailLink";

export default function HomeFinalCTA() {
  return (
    <section
      id="contact"
      className="relative scroll-anchor overflow-hidden bg-bg py-24 md:py-36"
    >
      <div className="absolute left-0 top-1/2 hidden h-1 w-12 bg-accent md:block" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
            <span className="text-muted-light">04</span>
            <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
            Get in touch
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.05}>
          <h2 className="mt-5 max-w-5xl text-page-h1-mobile text-pretty text-sheen md:text-page-h1">
            Let&apos;s build something useful.
          </h2>
        </ScrollFadeIn>

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ScrollFadeIn as="li" from="left" delay={0.1}>
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-full flex-col justify-between rounded-md glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-8px_rgba(245,181,58,0.35)] md:p-8"
            >
              <span className="text-kicker uppercase text-muted group-hover:text-accent">
                LinkedIn
              </span>
              <span className="mt-8 inline-flex items-center gap-2 text-h3 font-semibold text-ink group-hover:text-accent">
                Connect
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </a>
          </ScrollFadeIn>
          <ScrollFadeIn as="li" from="right" delay={0.18}>
            <EmailLink
              className="group flex h-full flex-col justify-between rounded-md glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-8px_rgba(245,181,58,0.35)] md:p-8"
              label={
                <>
                  <span className="text-kicker uppercase text-muted group-hover:text-accent">
                    Email
                  </span>
                  <span className="mt-8 inline-flex items-center break-all text-h3 font-semibold text-ink group-hover:text-accent">
                    {siteConfig.email}
                  </span>
                </>
              }
            />
          </ScrollFadeIn>
        </ul>
      </div>
    </section>
  );
}
