"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Loads GA4 only when NEXT_PUBLIC_GA_ID is set (so it's a no-op locally / until
 * Michael adds an ID), and installs a delegated click listener so any element
 * with a `data-track="event_name"` attribute fires an analytics event without
 * needing to become its own client component.
 *
 * To activate: add NEXT_PUBLIC_GA_ID="G-XXXXXXX" to the environment.
 * (Plausible also works — drop its script in and the same events flow.)
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (el?.dataset.track) track(el.dataset.track);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
