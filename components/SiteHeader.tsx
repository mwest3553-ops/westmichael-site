"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import NavMenu from "./NavMenu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/lab", label: "Behavior Lab" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-bg/70 backdrop-blur-lg transition-all duration-300 ${
        scrolled
          ? "border-border/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.65)]"
          : "border-border/40"
      }`}
    >
      {/* Site-wide reading progress — thin gold rule that fills as you scroll */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div
        className={`flex items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-meta font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          <Image
            src="/images/brand/logo-mark.png"
            alt="Michael A. West III monogram"
            width={30}
            height={30}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? "h-6" : "h-7"}`}
          />
          <span
            className={`inline-block w-0.5 bg-accent transition-all duration-300 ${
              scrolled ? "h-3.5" : "h-4"
            }`}
            aria-hidden="true"
          />
          {siteConfig.shortName}
        </Link>
        <NavMenu items={navItems} />
      </div>
    </header>
  );
}
