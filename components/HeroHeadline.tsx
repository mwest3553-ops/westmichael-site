"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Hero name, revealed word-by-word on load: each word rises + un-blurs into
 * place with the signature out-expo easing. This is the site's boldest single
 * motion moment — a premium "settling into focus" entrance. Reduced-motion →
 * a plain opacity fade, no movement or blur.
 */
const LINES = ["Michael A.", "West III"];

export default function HeroHeadline() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  };

  const word: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: 30, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-6 text-hero-mobile text-balance md:text-display"
    >
      {LINES.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((w, wi) => (
            <motion.span
              key={`${li}-${wi}`}
              variants={word}
              className="mr-[0.24em] inline-block text-sheen"
            >
              {w}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
