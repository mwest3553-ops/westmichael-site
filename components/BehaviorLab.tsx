"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import type { Stats } from "@/lib/behaviorLabStore";

// Anchoring demo, run as a live experiment. The Eiffel Tower is 1,083 ft.
// Each visitor gets a random anchor; we record their guess and show the real
// between-groups gap — the honest way to demonstrate anchoring (a group effect).
const ACTUAL_FT = 1083;
const ANCHOR_FT = { low: 180, high: 1600 } as const;
type AnchorKey = keyof typeof ANCHOR_FT;
type Phase = "intro" | "anchor" | "estimate" | "reveal";

function avg(b: { count: number; sum: number }) {
  return b.count > 0 ? Math.round(b.sum / b.count) : null;
}

export default function BehaviorLab() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [anchorKey, setAnchorKey] = useState<AnchorKey>("low");
  const [guess, setGuess] = useState("");
  const [finalGuess, setFinalGuess] = useState<number | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const recorded = useRef(false);

  const anchor = ANCHOR_FT[anchorKey];

  function start() {
    // Coin flip in an event handler (not render) → no hydration mismatch.
    setAnchorKey(Math.random() < 0.5 ? "low" : "high");
    setGuess("");
    setFinalGuess(null);
    setPhase("anchor");
    track("behavior_lab_start");
  }

  async function submitGuess() {
    const n = Number(guess.replace(/[^0-9.]/g, ""));
    if (!n || n <= 0) return;
    setFinalGuess(n);
    setLoading(true);
    setPhase("reveal");
    track("behavior_lab_complete", { anchor: anchorKey, guess: n });

    try {
      // Record only the first completion this session; replays read-only so
      // repeat plays don't pollute the data.
      const res = recorded.current
        ? await fetch("/api/behavior-lab", { cache: "no-store" })
        : await fetch("/api/behavior-lab", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ anchor: anchorKey, guess: n }),
          });
      recorded.current = true;
      setStats((await res.json()) as Stats);
    } catch {
      setStats(null);
    } finally {
      setLoading(false);
    }
  }

  const lowAvg = stats ? avg(stats.low) : null;
  const highAvg = stats ? avg(stats.high) : null;
  const total = stats ? stats.low.count + stats.high.count : 0;
  const gap = lowAvg !== null && highAvg !== null ? highAvg - lowAvg : null;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative overflow-hidden rounded-xl border border-border-strong bg-surface p-8 shadow-2xl md:p-10">
        <div className="radiance pointer-events-none absolute -left-24 -top-24 h-64 w-64" aria-hidden="true" />

        <div className="relative mb-8 flex items-center gap-2" aria-hidden="true">
          {(["intro", "anchor", "estimate", "reveal"] as Phase[]).map((p, i) => {
            const active = ["intro", "anchor", "estimate", "reveal"].indexOf(phase) >= i;
            return (
              <span
                key={p}
                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                  active ? "bg-accent" : "bg-border-strong"
                }`}
              />
            );
          })}
        </div>

        {phase === "intro" && (
          <div className="relative">
            <p className="text-kicker uppercase text-accent">Behavior Lab · live experiment</p>
            <h3 className="mt-3 text-h2 font-bold text-ink">
              I can move your answer with a number that means nothing.
            </h3>
            <p className="mt-4 text-body text-muted">
              Thirty seconds, two taps. Answer fast and don&apos;t overthink it — then I&apos;ll show
              you the live results from everyone else who&apos;s taken this.
            </p>
            <button
              type="button"
              onClick={start}
              className="btn-sheen mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-meta font-semibold text-ink-dark transition-colors hover:bg-accent-hover"
            >
              Start the demo →
            </button>
          </div>
        )}

        {phase === "anchor" && (
          <div className="relative">
            <p className="text-kicker uppercase text-muted-light">Question 1 of 2</p>
            <h3 className="mt-3 text-h2 font-bold text-ink">
              Is the Eiffel Tower taller or shorter than{" "}
              <span className="text-accent">{anchor.toLocaleString()} feet</span>?
            </h3>
            <p className="mt-4 text-body text-muted">Gut reaction. There&apos;s no wrong answer here.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Taller", "Shorter"].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setPhase("estimate")}
                  className="rounded-md border border-border-strong bg-white/5 px-6 py-3 text-meta font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === "estimate" && (
          <div className="relative">
            <p className="text-kicker uppercase text-muted-light">Question 2 of 2</p>
            <h3 className="mt-3 text-h2 font-bold text-ink">Now your best guess — how tall is it?</h3>
            <p className="mt-4 text-body text-muted">One number, in feet. Trust your gut.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <input
                type="text"
                inputMode="numeric"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitGuess()}
                placeholder="e.g. 900"
                aria-label="Your height guess in feet"
                className="w-40 rounded-md border border-border-strong bg-bg px-4 py-3 text-body text-ink outline-none focus:border-accent"
              />
              <span className="text-body text-muted">feet</span>
              <button
                type="button"
                onClick={submitGuess}
                className="btn-sheen rounded-md bg-accent px-6 py-3 text-meta font-semibold text-ink-dark transition-colors hover:bg-accent-hover"
              >
                Reveal →
              </button>
            </div>
          </div>
        )}

        {phase === "reveal" && finalGuess !== null && (
          <div className="relative">
            <p className="text-kicker uppercase text-accent">What just happened</p>
            <h3 className="mt-3 text-h2 font-bold text-ink">
              It&apos;s actually <span className="text-accent">1,083 feet</span>.
            </h3>

            {loading ? (
              <p className="mt-6 text-body text-muted">Tallying the room…</p>
            ) : (
              <>
                <p className="mt-5 text-body text-muted">
                  Here&apos;s the experiment: everyone is shown a random first number — a coin flip
                  decides <span className="text-ink">180 ft</span> or{" "}
                  <span className="text-ink">1,600 ft</span>. It has nothing to do with the real
                  height. Watch what it does to the two groups:
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div
                    className={`rounded-md border bg-bg p-4 ${
                      anchorKey === "low" ? "border-accent" : "border-border"
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wide text-muted-light">
                      Shown 180 ft {anchorKey === "low" && "· you"}
                    </div>
                    <div className="mt-1 text-2xl font-extrabold text-ink">
                      {lowAvg !== null ? `${lowAvg.toLocaleString()} ft` : "—"}
                    </div>
                    <div className="mt-1 text-xs text-muted-light">
                      avg of {stats?.low.count ?? 0}
                    </div>
                  </div>
                  <div
                    className={`rounded-md border bg-bg p-4 ${
                      anchorKey === "high" ? "border-accent" : "border-border"
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wide text-muted-light">
                      Shown 1,600 ft {anchorKey === "high" && "· you"}
                    </div>
                    <div className="mt-1 text-2xl font-extrabold text-ink">
                      {highAvg !== null ? `${highAvg.toLocaleString()} ft` : "—"}
                    </div>
                    <div className="mt-1 text-xs text-muted-light">
                      avg of {stats?.high.count ?? 0}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted">
                  You were shown{" "}
                  <span className="text-ink">{anchor.toLocaleString()} ft</span> and guessed{" "}
                  <span className="font-semibold text-accent">
                    {finalGuess.toLocaleString()} ft
                  </span>
                  .
                </p>

                {gap !== null && total >= 8 ? (
                  <p className="mt-5 text-body text-muted">
                    Same tower, same question. The only difference between those two groups is the
                    random number they saw first — and the high-anchor group is guessing{" "}
                    <span className="font-semibold text-ink">
                      {Math.abs(gap).toLocaleString()} ft {gap >= 0 ? "higher" : "lower"}
                    </span>
                    . That&apos;s <span className="font-semibold text-ink">anchoring</span>. You
                    can&apos;t feel it happening — that&apos;s exactly why it works.
                  </p>
                ) : (
                  <p className="mt-5 text-body text-muted">
                    You&apos;re one of the first to run this, so the groups are still thin. As more
                    people play, watch them pull apart — anchoring predicts the group shown the high
                    number drifts higher, on the same tower. That&apos;s{" "}
                    <span className="font-semibold text-ink">anchoring</span>, and you can&apos;t feel
                    it happening.
                  </p>
                )}

                <p className="mt-4 text-body text-muted">
                  It&apos;s why &ldquo;$1,200, now $499&rdquo; works, why menus float one absurdly
                  expensive dish, and why the first number in a negotiation matters most. I don&apos;t
                  memorize tactics like these — I study <span className="text-ink">why</span> they
                  work on people, then build the campaign around it.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={start}
                    className="rounded-md border border-border-strong px-6 py-3 text-meta font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Run it again ↺
                  </button>
                  <Link
                    href="/contact"
                    data-track="behavior_lab_contact"
                    className="btn-sheen inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-meta font-semibold text-ink-dark transition-colors hover:bg-accent-hover"
                  >
                    This is how I think — let&apos;s talk →
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
