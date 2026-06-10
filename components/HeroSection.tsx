import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-start overflow-hidden bg-hero-gradient">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-12 pb-32 md:pt-20 md:pb-40">
        <div className="flex gap-6 md:gap-8">
          <div className="gold-stripe mt-3 self-stretch" aria-hidden="true" />

          <div className="flex-1 animate-fade-in-up">
            <p className="text-kicker uppercase text-accent">
              {siteConfig.authorJobTitle}
            </p>
            <h1 className="mt-6 text-hero-mobile text-balance text-ink md:text-display">
              Michael A.
              <br />
              West III
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-muted text-pretty md:text-h2 md:font-normal">
              {siteConfig.tagline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#experience"
                className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-meta font-semibold text-ink-dark transition-colors hover:bg-accent-hover"
              >
                View My Experience
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border border-border-strong px-6 py-3 text-meta font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-kicker uppercase text-muted opacity-60 animate-fade-in">
          <span>Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 animate-bounce"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="m5 12 7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
