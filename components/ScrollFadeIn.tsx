"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "ul";
  /** Direction the element flies in FROM as it enters view. */
  from?: Direction;
  /** Travel distance in px (defaults: 80 vertical, 110 horizontal). */
  distance?: number;
}

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: -32 },
  right: { x: 32 },
};

/**
 * Scroll-triggered reveal. Content flies/slides in from `from` as it enters
 * the viewport, and re-fires when it re-enters (once: false) so motion is
 * felt continuously while scrolling. Reduced-motion → a quick opacity fade,
 * no movement.
 */
export default function ScrollFadeIn({
  children,
  delay = 0,
  className,
  as = "div",
  from = "up",
  distance,
}: ScrollFadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    return (
      <MotionTag
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {children}
      </MotionTag>
    );
  }

  const base = OFFSETS[from];
  const off = {
    x:
      base.x === undefined
        ? 0
        : Math.sign(base.x) * (distance ?? Math.abs(base.x)),
    y:
      base.y === undefined
        ? 0
        : Math.sign(base.y) * (distance ?? Math.abs(base.y)),
  };

  return (
    <MotionTag
      initial={{ opacity: 0, x: off.x, y: off.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
