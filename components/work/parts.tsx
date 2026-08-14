import Link from "next/link";
import type { ReactNode } from "react";

/** Numbered case-study section with the gold stripe + kicker header. */
export function Section({
  num,
  title,
  sub,
  first,
  children,
}: {
  num: string;
  title: ReactNode;
  sub?: ReactNode;
  first?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`cs-section${first ? " first" : ""}`}>
      <div className="cs-head">
        <div className="cs-stripe" aria-hidden="true" />
        <div>
          <div className="cs-num">{num}</div>
          <h2 className="cs-h2">{title}</h2>
          {sub ? <p className="cs-subhead">{sub}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

/** Case-study hero: back link, tag pill, headline, lede, then optional children (e.g. a KPI row) and a meta row. */
export function CaseHero({
  tag,
  title,
  lede,
  meta,
  children,
}: {
  tag: string;
  title: ReactNode;
  lede: ReactNode;
  meta: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="cs-hero">
      <Link href="/work" className="cs-backlink">
        ← All work
      </Link>
      <div style={{ marginTop: 22 }}>
        <span className="cs-tag">{tag}</span>
      </div>
      <h1 className="cs-h1">{title}</h1>
      <p className="cs-lede">{lede}</p>
      {children}
      <div className="cs-meta">{meta}</div>
    </div>
  );
}

export function MetaDot() {
  return <span className="cs-dot" aria-hidden="true" />;
}

export function Takeaway({ children }: { children: ReactNode }) {
  return (
    <div className="cs-takeaway">
      <div className="cs-kicker">The takeaway</div>
      <p>{children}</p>
      <Link href="/contact" className="cs-cta">
        Let&apos;s talk →
      </Link>
    </div>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <div className="cs-disc">
      <div>{children}</div>
    </div>
  );
}
