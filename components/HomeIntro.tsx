import ScrollFadeIn from "./ScrollFadeIn";

export default function HomeIntro() {
  return (
    <section
      id="intro"
      className="section-light scroll-anchor border-y border-border-light py-24 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="flex items-center gap-2.5 text-kicker uppercase text-accent-deep">
            <span className="text-muted-dark">01</span>
            <span className="h-px w-5 bg-accent-deep/40" aria-hidden="true" />
            Introduction
          </p>
        </ScrollFadeIn>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-7">
            <ScrollFadeIn delay={0.05}>
              <h2 className="text-page-h1-mobile text-balance text-ink-dark md:text-page-h1">
                Building a career where consumer psychology meets business growth.
              </h2>
            </ScrollFadeIn>
          </div>

          <div className="md:col-span-6 md:pt-2 lg:col-span-5">
            <ScrollFadeIn delay={0.12} from="right">
              <div className="space-y-6 text-body-lg leading-relaxed text-muted-light md:text-h3 md:font-normal md:leading-relaxed">
                <p>
                  Driven by curiosity and a bias for action, I build things that connect people to what they need, treating every project as a test kitchen to experiment, learn, and grow.
                </p>
                <p>
                  Marketing and psychology are my lens; people are the through-line. Whether it's a client, a fund, or a classroom, the goal's the same: understand what drives someone, and help them get there.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
