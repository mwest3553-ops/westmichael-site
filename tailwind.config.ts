import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A1628",
        "bg-deep": "#06101E",
        surface: "#112038",
        "surface-2": "#1A2944",
        cream: "#FAF7F0",
        "cream-alt": "#F2EDE0",
        ink: "#FFFFFF",
        "ink-dark": "#0A1628",
        muted: "#A8B0BD",
        "muted-light": "#5C6675",
        "muted-dark": "#52525B",
        accent: {
          DEFAULT: "#F5B53A",
          hover: "#FFC347",
          deep: "#C99020",
          soft: "rgba(245, 181, 58, 0.12)",
        },
        border: {
          DEFAULT: "#1E2D47",
          strong: "#2A3B58",
          light: "#E5E0D5",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(3rem, 8vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.035em", fontWeight: "800" }],
        hero: ["4.5rem", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "800" }],
        "hero-mobile": ["2.75rem", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "800" }],
        "page-h1": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" }],
        "page-h1-mobile": ["2.25rem", { lineHeight: "1.08", letterSpacing: "-0.022em", fontWeight: "700" }],
        h2: ["1.875rem", { lineHeight: "1.15", letterSpacing: "-0.018em", fontWeight: "700" }],
        h3: ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        "body-lg": ["1.25rem", { lineHeight: "1.55", letterSpacing: "-0.005em" }],
        meta: ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }],
        kicker: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.18em", fontWeight: "600" }],
      },
      maxWidth: {
        prose: "44rem",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-in": "fadeIn 800ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in-up": "fadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at top left, rgba(245, 181, 58, 0.08), transparent 50%), radial-gradient(ellipse at bottom right, rgba(91, 141, 239, 0.06), transparent 60%), linear-gradient(180deg, #0A1628 0%, #06101E 100%)",
        "section-dark":
          "linear-gradient(180deg, #0A1628 0%, #0E1B30 100%)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "44rem",
            color: "#E5E5E5",
            a: { color: "#F5B53A", textDecoration: "none", "&:hover": { color: "#FFC347", textDecoration: "underline" } },
            "h1, h2, h3, h4": { color: "#FFFFFF", fontWeight: "700", letterSpacing: "-0.015em" },
            strong: { color: "#FFFFFF" },
            code: { color: "#F5B53A", backgroundColor: "#112038", padding: "0.125rem 0.375rem", borderRadius: "4px", fontWeight: "500" },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            blockquote: { borderLeftColor: "#F5B53A", color: "#A8B0BD" },
            hr: { borderColor: "#1E2D47" },
          },
        },
        light: {
          css: {
            color: "#3F3F46",
            a: { color: "#C99020", "&:hover": { color: "#F5B53A" } },
            "h1, h2, h3, h4": { color: "#0A1628" },
            strong: { color: "#0A1628" },
            blockquote: { borderLeftColor: "#F5B53A", color: "#52525B" },
            hr: { borderColor: "#E5E0D5" },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
