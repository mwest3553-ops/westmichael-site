"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config";

interface NavItem {
  href: string;
  label: string;
}

interface NavMenuProps {
  items: NavItem[];
}

/**
 * Full-screen overlay navigation, used at all breakpoints.
 * Hamburger in the header opens an opaque navy takeover with large
 * stacked nav links; X / Escape / route-change closes it.
 */
export default function NavMenu({ items }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:text-accent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-hero-gradient animate-fade-in"
        >
          {/* Top bar mirrors the site header exactly (same full-width padding)
              so the brand hugs the left edge and the X lands precisely where
              the hamburger was */}
          <div className="flex h-16 shrink-0 items-center justify-between gap-4 px-5 sm:px-8">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 whitespace-nowrap text-meta font-semibold tracking-tight text-ink transition-colors hover:text-accent"
            >
              <span className="inline-block h-4 w-0.5 bg-accent" aria-hidden="true" />
              {siteConfig.shortName}
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Large stacked nav links, vertically centered */}
          <nav className="flex w-full flex-1 flex-col justify-center px-5 sm:px-8">
            <ul className="flex flex-col">
              {items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-5 py-3 md:py-4"
                    >
                      <span
                        className={`inline-block h-7 w-1 shrink-0 origin-top transition-all md:h-10 ${
                          active
                            ? "bg-accent"
                            : "bg-accent/0 group-hover:bg-accent"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-page-h1-mobile font-bold tracking-tight transition-colors md:text-page-h1 ${
                          active ? "text-accent" : "text-ink group-hover:text-accent"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>,
          document.body
        )}
    </>
  );
}
