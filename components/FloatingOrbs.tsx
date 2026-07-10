"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Ambient motion layer: large soft gradient orbs that continuously drift,
 * scale, and morph (CSS keyframe orbFloat, defined in tailwind.config), now
 * with a very gentle pointer parallax — each orb shifts a few px against the
 * cursor for subtle depth. The keyframe drift lives on the inner element and
 * the parallax translate on an outer wrapper, so they never fight. Parallax is
 * skipped entirely under prefers-reduced-motion (orbs still drift slowly).
 */
const ORBS = [
  {
    c: "left-[-8rem] top-[8%] h-[22rem] w-[22rem] animate-orb-1",
    g: "rgba(245,181,58,0.13)",
    depth: 16,
  },
  {
    c: "right-[-6rem] top-[30%] h-[26rem] w-[26rem] animate-orb-2",
    g: "rgba(91,141,239,0.11)",
    depth: 28,
  },
  {
    c: "left-[30%] top-[62%] h-[20rem] w-[20rem] animate-orb-3",
    g: "rgba(245,181,58,0.10)",
    depth: 12,
  },
];

export default function FloatingOrbs() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        el.querySelectorAll<HTMLElement>("[data-orb]").forEach((orb) => {
          const depth = Number(orb.dataset.depth || 0);
          orb.style.transform = `translate3d(${(-dx * depth).toFixed(1)}px, ${(
            -dy * depth
          ).toFixed(1)}px, 0)`;
        });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {ORBS.map((o, i) => (
        <div
          key={i}
          data-orb
          data-depth={o.depth}
          className="absolute inset-0 transition-transform duration-500 ease-out"
        >
          <div
            className={`absolute blur-2xl ${o.c}`}
            style={{
              background: `radial-gradient(circle, ${o.g}, transparent 70%)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
