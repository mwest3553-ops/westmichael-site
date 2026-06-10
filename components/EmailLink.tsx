"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

interface EmailLinkProps {
  className?: string;
  /**
   * Optional label override (text or JSX). If omitted, renders the email address.
   */
  label?: React.ReactNode;
  /**
   * If true, shows the email address even when label is provided.
   */
  showAddressBeside?: boolean;
}

/**
 * Email link that opens the user's mail client via mailto AND copies the
 * address to the clipboard on click. Works as a fallback when mailto
 * isn't wired up to anything on the visitor's system.
 */
export default function EmailLink({
  className,
  label,
  showAddressBeside = false,
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
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
    <a
      href={`mailto:${siteConfig.email}`}
      onClick={handleClick}
      className={`relative ${className ?? ""}`}
      aria-label={`Email ${siteConfig.email}`}
    >
      {label ?? siteConfig.email}
      {showAddressBeside && label && (
        <span className="ml-2 text-xs text-muted">({siteConfig.email})</span>
      )}
      {copied && (
        <span
          className="absolute right-3 top-3 rounded-sm bg-accent px-2 py-0.5 text-xs font-semibold text-ink-dark"
          aria-live="polite"
        >
          Copied!
        </span>
      )}
    </a>
  );
}
