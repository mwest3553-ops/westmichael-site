import type { Metadata } from "next";
import Link from "next/link";
import { workItems } from "@/lib/work";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected marketing work by Michael A. West III — brand and web for a private investment group, a self-initiated channel strategy at Enterprise Mobility, a nonprofit earned-media plan, and a consumer-psychology spec teardown.",
  alternates: { canonical: "/work" },
};

function CardVisual({ slug }: { slug: string }) {
  if (slug === "keller-joseph-capital") {
    return (
      <div className="cs-card-visual">
        <img src="/images/work/kj-hero.jpg" alt="Keller Joseph Capital homepage" />
        <div className="cs-card-scrim" aria-hidden="true" />
      </div>
    );
  }

  if (slug === "enterprise-mobility") {
    return (
      <div
        className="cs-card-visual"
        style={{
          padding: "26px 28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 9",
            borderRadius: 6,
            overflow: "hidden",
            background: "#0A1628",
            boxShadow: "0 18px 40px -22px rgba(0,0,0,.9)",
          }}
        >
          <div style={{ position: "absolute", inset: 0, clipPath: "polygon(0 0,57% 0,43% 100%,0 100%)" }}>
            <img
              src="/images/work/deck/s01.png"
              alt="Midpoint SDR report"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center", display: "block" }}
            />
          </div>
          <div style={{ position: "absolute", inset: 0, clipPath: "polygon(58% 0,100% 0,100% 100%,44% 100%)" }}>
            <img
              src="/images/work/deck-final/f01.png"
              alt="Final SDR report"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.25) translateX(30%)", transformOrigin: "center", display: "block" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: 14,
              bottom: 12,
              fontSize: 9,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.72)",
              fontWeight: 600,
            }}
          >
            Midpoint · Jul 1
          </div>
        </div>
      </div>
    );
  }

  if (slug === "rise-yp-board") {
    return (
      <div
        className="cs-card-visual"
        style={{ padding: 22, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            width: "100%",
            background: "#FAF7F0",
            borderRadius: 6,
            padding: "20px 18px",
            boxShadow: "0 18px 40px -20px rgba(0,0,0,.9)",
            color: "#0A1628",
          }}
        >
          <div style={{ fontSize: 8, letterSpacing: ".16em", textTransform: "uppercase", color: "#8a7d5f" }}>
            Rise Young Professionals (YP) Board
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-.01em", marginTop: 5, lineHeight: 1.15 }}>
            Impact Report Amplification Plan
          </div>
          <div style={{ fontSize: 8.5, color: "#6b6f78", marginTop: 4 }}>
            Prepared by the Marketing Subcommittee · 2025–2026
          </div>
          <div style={{ height: 1, background: "#dcd6c6", margin: "11px 0" }} />
          <div style={{ fontSize: 7.5, letterSpacing: ".16em", textTransform: "uppercase", color: "#8a7d5f", marginBottom: 6 }}>
            Contents
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3.5, fontSize: 9 }}>
            {[
              ["01", "Objective"],
              ["02", "Target Audiences"],
              ["03", "Amplification Tactics"],
              ["04", "Local PR Outreach & Target Publications"],
              ["05", "Timeline"],
              ["06", "Measurement"],
              ["07", "Ready-to-Use Content"],
            ].map(([n, t]) => (
              <div key={n} style={{ display: "flex", gap: 8, color: "#2b3242" }}>
                <span style={{ color: "#b08d2e", fontWeight: 700 }}>{n}</span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // spotify
  return (
    <div className="cs-card-visual" style={{ background: "#0b0e0c" }}>
      <img
        src="/images/work/chapters-fall.png"
        alt="Chapters season recap card concept"
        loading="lazy"
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </div>
  );
}

export default function WorkIndexPage() {
  return (
    <article>
      <div className="cs-index-hero">
        <div className="cs-radiance" aria-hidden="true" />
        <div className="cs-wrap">
          <div className="cs-kicker">Selected work</div>
          <h1 className="cs-index-title">The work I stand behind.</h1>
        </div>
      </div>

      <div className="cs-wrap">
        <div className="cs-cards">
          {workItems.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="cs-card-link">
              <div className="cs-card-body">
                <div className="cs-card-eyebrow">
                  <span className="cs-card-num">{item.num}</span>
                  <span className="cs-tag">{item.tag}</span>
                </div>
                <h2 className="cs-card-title">{item.cardTitle}</h2>
                <p className="cs-card-blurb">{item.cardBlurb}</p>
                <span className="cs-card-cue">Read the case study →</span>
              </div>
              <CardVisual slug={item.slug} />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
