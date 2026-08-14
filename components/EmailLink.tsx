"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/lib/config";
import { track } from "@/lib/analytics";

interface EmailLinkProps {
  className?: string;
  /**
   * Optional label override (text or JSX). If omitted, renders the email address.
   */
  label?: React.ReactNode;
}

/**
 * Email link that opens the user's mail client via mailto AND copies the
 * address to the clipboard on click. On copy, shows a fixed toast at the
 * bottom of the screen (portaled to body) so the confirmation never overlaps
 * the email text or sits in an odd spot.
 */
export default function EmailLink({ className, label }: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    track("contact_click", { method: "email" });
    // Do not preventDefault — let mailto try to open.
    // Also copy to clipboard as a fallback.
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(siteConfig.email)
        .then(() => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          /* clipboard denied — silent fail */
        });
    }
  };

  return (
    <>
      <a
        href={`mailto:${siteConfig.email}`}
        onClick={handleClick}
        className={className}
        aria-label={`Email ${siteConfig.email}`}
      >
        {label ?? siteConfig.email}
      </a>

      {copied &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-md bg-accent px-4 py-2 text-meta font-semibold text-ink-dark shadow-xl animate-fade-in"
          >
            Email copied to clipboard
          </div>,
          document.body
        )}
    </>
  );
}
