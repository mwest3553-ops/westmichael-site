import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import EmailLink from "@/components/EmailLink";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <article>
      <section className="bg-hero-gradient py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-6 md:gap-8">
            <div className="gold-stripe self-stretch" aria-hidden="true" />
            <div>
              <ScrollFadeIn>
                <p className="text-kicker uppercase text-accent">Contact</p>
                <h1 className="mt-5 text-page-h1-mobile text-balance text-ink md:text-page-h1">
                  Get in touch.
                </h1>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-prose px-6">
          <ScrollFadeIn delay={0.05}>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between rounded-md border border-border bg-surface p-5 transition-colors hover:border-accent md:p-6"
                >
                  <span className="text-h3 font-semibold text-ink group-hover:text-accent">
                    LinkedIn
                  </span>
                  <span className="text-meta text-muted group-hover:text-accent">
                    →
                  </span>
                </a>
              </li>
              <li>
                <EmailLink
                  className="group flex items-center justify-between rounded-md border border-border bg-surface p-5 transition-colors hover:border-accent md:p-6"
                  label={
                    <>
                      <span className="text-h3 font-semibold text-ink group-hover:text-accent">
                        {siteConfig.email}
                      </span>
                      <span className="text-meta text-muted group-hover:text-accent">
                        →
                      </span>
                    </>
                  }
                />
              </li>
            </ul>
          </ScrollFadeIn>
        </div>
      </section>
    </article>
  );
}
