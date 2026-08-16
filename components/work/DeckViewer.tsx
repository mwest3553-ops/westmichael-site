"use client";

import { useState } from "react";

interface Slide {
  n: number;
  label: string;
  src: string;
}

const MID_LABELS = [
  "Title", "Inside the Funnel", "Contents", "Executive summary", "Program impact",
  "Key findings", "Report detail", "The tracking system", "Channel performance",
  "Lead flow", "Ramp-up", "Customer signals", "Recommendations", "Looking ahead",
];

const FINAL_LABELS = [
  "Nine Weeks, Two Cadences", "The bottom line", "Contents", "Nine weeks, two cadences",
  "What worked, what didn't", "One recommendation shipped, one forecast scored",
  "Answer rate by touch", "What people say on the phone", "Technology",
  "A tuned cadence", "What a qualified lead costs", "Covering the network",
  "Training the next rep", "Recommendations, then and now", "Where this could be wrong",
  "What I'm taking with me",
];

const pad = (n: number) => String(n).padStart(2, "0");

function slidesFor(track: "mid" | "final"): Slide[] {
  if (track === "final") {
    return FINAL_LABELS.map((label, i) => ({
      n: i + 1,
      label,
      src: `/images/work/deck-final/f${pad(i + 1)}.png`,
    }));
  }
  return MID_LABELS.map((label, i) => ({
    n: i + 1,
    label,
    // s02 was exported as .jpg
    src: i === 1 ? "/images/work/deck/s02.jpg" : `/images/work/deck/s${pad(i + 1)}.png`,
  }));
}

export default function DeckViewer() {
  const [track, setTrack] = useState<"mid" | "final">("mid");
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const slides = slidesFor(track);
  const cur = slides[index] ?? slides[0];

  const pickTrack = (t: "mid" | "final") => {
    setTrack(t);
    setIndex(0);
    setFlip(false);
  };

  const step = (dir: number) => {
    const n = slides.length;
    setFlip(true);
    window.setTimeout(() => {
      setIndex((i) => (i + dir + n) % n);
      setFlip(false);
    }, 200);
  };

  return (
    <div className="cs-deck">
      <div className="cs-deck-tabs">
        <button
          type="button"
          className={`cs-deck-tab${track === "mid" ? " active" : ""}`}
          onClick={() => pickTrack("mid")}
        >
          Midpoint · July 1
        </button>
        <button
          type="button"
          className={`cs-deck-tab${track === "final" ? " active" : ""}`}
          onClick={() => pickTrack("final")}
        >
          Final · August 7
        </button>
      </div>

      <div className="cs-deck-stage">
        <div className={`cs-deck-frame${flip ? " flip" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cur.src} alt={`${track === "final" ? "Final" : "Midpoint"} report: ${cur.label}`} />
        </div>
      </div>

      <div className="cs-deck-controls">
        <button type="button" className="cs-deck-btn" onClick={() => step(-1)} aria-label="Previous slide">
          ← Prev
        </button>
        <div className="cs-deck-pos">
          {index + 1} of {slides.length} · {cur.label}
        </div>
        <button type="button" className="cs-deck-btn" onClick={() => step(1)} aria-label="Next slide">
          Next →
        </button>
      </div>
    </div>
  );
}
