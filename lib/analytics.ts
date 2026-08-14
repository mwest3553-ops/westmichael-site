// Provider-agnostic event tracking. No-ops until an analytics provider is
// present on the page (GA4 via NEXT_PUBLIC_GA_ID, or Plausible). Safe to call
// anywhere on the client.
type Params = Record<string, unknown>;

interface AnalyticsWindow extends Window {
  gtag?: (command: string, event: string, params?: Params) => void;
  plausible?: (event: string, options?: { props: Params }) => void;
}

export function track(event: string, params?: Params) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", event, params ?? {});
    }
    if (typeof w.plausible === "function") {
      w.plausible(event, params ? { props: params } : undefined);
    }
  } catch {
    /* analytics must never break the page */
  }
}
