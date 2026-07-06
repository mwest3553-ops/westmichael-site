"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The gold "line" motif, animated. Draws in from the top (scaleY 0→1) when
 * scrolled into view, then holds. Reuses the .gold-stripe utility (3px gold)
 * so it stays visually identical to the static stripes elsewhere.
 * Reduced-motion → appears instantly, no draw.
 */
export default function AnimatedStripe({
  className = "",
}: {
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={`gold-stripe origin-top ${className}`}
      initial={
        prefersReducedMotion
          ? { scaleY: 1, opacity: 1 }
          : { scaleY: 0, opacity: 0 }
      }
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
