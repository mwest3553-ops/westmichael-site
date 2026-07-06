/**
 * Ambient motion layer: large soft gradient orbs that continuously drift,
 * scale, and morph their shape. Driven by CSS keyframes (orbFloat, defined in
 * tailwind.config) so the motion runs on the compositor — robust, performant,
 * and automatically stilled by the global prefers-reduced-motion rule.
 * Navy + gold tints, low opacity, blurred, behind content.
 */
const ORBS = [
  {
    c: "left-[-8rem] top-[8%] h-[22rem] w-[22rem] animate-orb-1",
    g: "rgba(245,181,58,0.13)",
  },
  {
    c: "right-[-6rem] top-[30%] h-[26rem] w-[26rem] animate-orb-2",
    g: "rgba(91,141,239,0.11)",
  },
  {
    c: "left-[30%] top-[62%] h-[20rem] w-[20rem] animate-orb-3",
    g: "rgba(245,181,58,0.10)",
  },
];

export default function FloatingOrbs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {ORBS.map((o, i) => (
        <div
          key={i}
          className={`absolute blur-2xl ${o.c}`}
          style={{
            background: `radial-gradient(circle, ${o.g}, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}
