import type { Metadata } from "next";
import BehaviorLab from "@/components/BehaviorLab";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedStripe from "@/components/AnimatedStripe";
import FloatingOrbs from "@/components/FloatingOrbs";

export const metadata: Metadata = {
  title: "Behavior Lab",
  description:
    "A 30-second interactive demonstration of consumer psychology by Michael A. West III — experience anchoring firsthand, then see how it works.",
  alternates: { canonical: "/lab" },
};

export default function LabPage() {
  return (
    <article>
      <section className="relative overflow-hidden bg-hero-gradient pt-20 pb-14 md:pt-28 md:pb-16">
        <FloatingOrbs />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-6 md:gap-8">
            <AnimatedStripe className="self-stretch" />
            <div className="flex-1">
              <ScrollFadeIn>
                <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
                  Behavior Lab
                  <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
                </p>
                <h1 className="mt-5 max-w-[18ch] text-page-h1-mobile text-balance text-sheen md:text-page-h1">
                  Don&apos;t take my word for it. Let me show you.
                </h1>
                <p className="mt-5 max-w-prose text-body text-muted md:text-body-lg">
                  Anyone can list &ldquo;consumer psychology&rdquo; as a skill. Instead, here&apos;s a
                  30-second demonstration — I&apos;ll run a real principle on you, then explain exactly
                  what happened and why it matters in marketing.
                </p>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollFadeIn>
            <BehaviorLab />
          </ScrollFadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-light">
            One principle, demonstrated honestly. Your guess is added anonymously to a running tally —
            just a number and which anchor you saw, nothing personal.
          </p>
        </div>
      </section>
    </article>
  );
}
