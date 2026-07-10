import Link from "next/link";
import { siteConfig } from "@/lib/config";
import AnimatedStripe from "./AnimatedStripe";
import FloatingOrbs from "./FloatingOrbs";
import HeroHeadline from "./HeroHeadline";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient">
      <FloatingOrbs />
      <div
        className="radiance animate-glow-pulse pointer-events-none absolute left-[-6rem] top-1/4 h-[30rem] w-[36rem]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="flex gap-6 md:gap-8">
          <AnimatedStripe className="mt-3 self-stretch" />

          <div className="flex-1">
            <p className="text-kicker uppercase text-accent animate-fade-in-up">
              {siteConfig.authorJobTitle}
            </p>
            <HeroHeadline />
            <p className="mt-6 max-w-2xl text-body-lg text-muted text-pretty animate-fade-in-up [animation-delay:0.5s] md:text-h2 md:font-normal">
              {siteConfig.tagline}
            </p>
            <div className="mt-10 flex flex-col gap-4 animate-fade-in-up [animation-delay:0.65s] sm:flex-row">
              <Link
                href="/experience"
                className="btn-sheen group inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-meta font-semibold text-ink-dark transition-colors hover:bg-accent-hover"
              >
                View My Experience
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-sm border border-border-strong px-6 py-3 text-meta font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get In Touch
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
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
