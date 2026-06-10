import ScrollFadeIn from "./ScrollFadeIn";

export default function HomeIntro() {
  return (
    <section
      id="intro"
      className="section-light scroll-anchor border-y border-border-light py-20 md:py-32"
    >
      <div className="mx-auto max-w-prose px-6">
        <ScrollFadeIn>
          <p className="text-kicker uppercase text-accent-deep">Introduction</p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.05}>
          <h2 className="mt-5 text-page-h1-mobile text-balance text-ink-dark md:text-page-h1">
            Building a career at the seam where consumer psychology meets business growth.
          </h2>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.1}>
          <div className="mt-10 space-y-5 text-body-lg text-muted-light md:text-h3 md:font-normal">
            <p>
              I'm a Saint Louis University B.S. candidate, Class of 2029, with concentrations in marketing and applied psychology.
            </p>
            <p>
              Currently, I'm a Business Development/Marketing Intern at Enterprise Mobility's startup program — applying business insight and customer insight to commercial sales — and the founder of Westhird, a web design agency for small businesses and local trades.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
