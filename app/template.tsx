"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Root route transition. Next.js re-mounts template.tsx on every navigation,
 * so this enter animation replays per route change. Content slides in
 * horizontally + fades (directional slide). Kept short so it reads "subtle."
 * Wraps only the page content (inside <main>), not the header/footer.
 * Reduced-motion → opacity only, no transform.
 */
export default function Template({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      key={usePathname()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0.1 : 0.18,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
