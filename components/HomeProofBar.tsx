import ScrollFadeIn from "./ScrollFadeIn";

// Numeric credibility, high on the homepage. Every figure is honest and
// backed by a case study or the résumé — no rounding up.
const stats = [
  {
    n: "+14%",
    l: "Sales lift from process changes I pitched to senior leadership at Enterprise Mobility",
  },
  { n: "#1 / 10", l: "Ranked first of ten interns in customer engagement" },
  { n: "700+", l: "Weekly customer touchpoints across target segments" },
  {
    n: "Co-founder",
    l: "A client brand build that turned into a founding role at Keller Joseph Capital",
  },
];

export default function HomeProofBar() {
  return (
    <section className="border-y border-border/60 bg-bg py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="flex items-center gap-2.5 text-kicker uppercase text-accent">
            By the numbers
            <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
          </p>
        </ScrollFadeIn>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollFadeIn key={s.n} delay={i * 0.05}>
              <div>
                <div className="text-4xl font-extrabold tracking-tight text-accent md:text-5xl">
                  {s.n}
                </div>
                <p className="mt-3 text-meta leading-snug text-muted">{s.l}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
