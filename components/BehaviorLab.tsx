"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

// Anchoring demo. The Eiffel Tower is 1,083 ft. We show the visitor a random
// "anchor" number, ask a throwaway taller/shorter question, then ask them to
// estimate — and reveal that the random number quietly moved their guess.
const ACTUAL_FT = 1083;
const LOW_ANCHOR = 180;
const HIGH_ANCHOR = 1600;

type Phase = "intro" | "anchor" | "estimate" | "reveal";

export default function BehaviorLab() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [anchor, setAnchor] = useState<number>(LOW_ANCHOR);
  const [guess, setGuess] = useState("");
  const [finalGuess, setFinalGuess] = useState<number | null>(null);

  function start() {
    // Coin flip decides the anchor. Chosen in an event handler (not render)
    // so there's no server/client hydration mismatch.
    setAnchor(Math.random() < 0.5 ? LOW_ANCHOR : HIGH_ANCHOR);
    setGuess("");
    setFinalGuess(null);
    setPhase("anchor");
    track("behavior_lab_start");
  }

  function submitGuess() {
    const n = Number(guess.replace(/[^0-9.]/g, ""));
    if (!n || n <= 0) return;
    setFinalGuess(n);
    setPhase("reveal");
    track("behavior_lab_complete", { anchor, guess: n });
  }

  const pulledToward =
    finalGuess !== null &&
    ((anchor === HIGH_ANCHOR && finalGuess > ACTUAL_FT) ||
      (anchor === LOW_ANCHOR && finalGuess < ACTUAL_FT));

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative overflow-hidden rounded-xl border border-border-strong bg-surface p-8 shadow-2xl md:p-10">
        <div className="radiance pointer-events-none absolute -left-24 -top-24 h-64 w-64" aria-hidden="true" />

        {/* progress dots */}
        <div className="relative mb-8 flex items-center gap-2" aria-hidden="true">
          {(["intro", "anchor", "estimate", "reveal"] as Phase[]).map((p, i) => {
            const order = ["intro", "anchor", "estimate", "reveal"];
            const active = order.indexOf(phase) >= i;
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
            <p className="text-kicker uppercase text-accent">Behavior Lab</p>
            <h3 className="mt-3 text-h2 font-bold text-ink">
              I can move your answer with a number that means nothing.
            </h3>
            <p className="mt-4 text-body text-muted">
              Thirty seconds, two taps. Answer fast and don&apos;t overthink it — the
              point is what happens when you&apos;re not trying to be careful.
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
              <button
                type="button"
                onClick={() => setPhase("estimate")}
                className="rounded-md border border-border-strong bg-white/5 px-6 py-3 text-meta font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Taller
              </button>
              <button
                type="button"
                onClick={() => setPhase("estimate")}
                className="rounded-md border border-border-strong bg-white/5 px-6 py-3 text-meta font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Shorter
              </button>
            </div>
          </div>
        )}

        {phase === "estimate" && (
          <div className="relative">
            <p className="text-kicker uppercase text-muted-light">Question 2 of 2</p>
            <h3 className="mt-3 text-h2 font-bold text-ink">
              Now your best guess — how tall is it?
            </h3>
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

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-md border border-border bg-bg p-4">
                <div className="text-xs uppercase tracking-wide text-muted-light">
                  The number I showed you
                </div>
                <div className="mt-1 text-2xl font-extrabold text-muted">
                  {anchor.toLocaleString()}
                </div>
              </div>
              <div className="rounded-md border border-border bg-bg p-4">
                <div className="text-xs uppercase tracking-wide text-muted-light">Your guess</div>
                <div className="mt-1 text-2xl font-extrabold text-accent">
                  {finalGuess.toLocaleString()}
                </div>
              </div>
              <div className="rounded-md border border-border bg-bg p-4">
                <div className="text-xs uppercase tracking-wide text-muted-light">The truth</div>
                <div className="mt-1 text-2xl font-extrabold text-ink">1,083</div>
              </div>
            </div>

            <p className="mt-6 text-body text-muted">
              Here&apos;s the trick: that first number —{" "}
              <span className="text-ink">{anchor.toLocaleString()} feet</span> — was decided by a
              coin flip. It has nothing to do with the real height. But your brain grabbed it as a
              starting point and adjusted from there.{" "}
              {pulledToward ? (
                <span className="text-ink">
                  Your guess landed on the same side of the truth as that random number — exactly the
                  pull I was counting on.
                </span>
              ) : (
                <span className="text-ink">
                  Even when people resist it, the anchor usually shrinks how far they&apos;re willing
                  to move.
                </span>
              )}
            </p>
            <p className="mt-4 text-body text-muted">
              That&apos;s <span className="font-semibold text-ink">anchoring</span>. It&apos;s why
              &ldquo;$1,200, now $499&rdquo; works, why menus float one absurdly expensive dish, and
              why the first number in a negotiation matters most. I don&apos;t memorize tactics like
              these — I study <span className="text-ink">why</span> they work on people, then build
              the campaign around it.
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
          </div>
        )}
      </div>
    </div>
  );
}
