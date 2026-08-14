# Review notes — `feature/work-case-studies`

Everything below is on this branch, **not merged to `main` and not deployed**. This doc is for
Michael + design to review before it goes live.

## Run it locally
```bash
pnpm install
pnpm dev            # http://localhost:3000
```
Key pages to review: `/work`, `/work/[case study]`, `/lab`, and the homepage (new proof bar).

---

## What changed

### 1. New `/work` case-study section
- `/work` index + four case studies: `keller-joseph-capital`, `enterprise-mobility`,
  `rise-yp-board`, `spotify-teardown`.
- Ported from the design handoff into native Next.js + Tailwind (site's real nav/footer, tokens).
- Interactive **Enterprise deck viewer** (Midpoint/Final tracks, prev/next).
- "Work" added to nav + sitemap; per-page SEO + canonical URLs.
- Code: `app/work/**`, `components/work/**`, `lib/work.ts`, images in `public/images/work/`.

### 2. Copy rewritten with a point of view
Headings across the site now carry an opinion (was → now):
- The full résumé → **The work behind the résumé.**
- A little background → **What I notice about people.**
- What I'm doing now → **Work that moved the number.**
- What I bring to the table → **Built, tested, learned.**
- Essays and notes → **Ideas I'm pressure-testing.**
- Let's connect → **Let's build something useful.**
- Footer: "Powered by Westhird" → **"Designed and built by Michael West through Westhird."**

### 3. Homepage "By the numbers" proof bar
- New `components/HomeProofBar.tsx`, high on the homepage. Honest, case-study-backed figures
  (+14% · #1/10 · 700+ · Co-founder).

### 4. SEO + credibility
- Person **structured data** (JSON-LD): `components/PersonJsonLd.tsx`.
- **Canonical URLs** on every route.
- `aria-current` on the active nav item; descriptive About alt text (with a TODO to make each
  photo-specific).
- Removed the undemonstrable **"AI Application Development"** skill label.

### 5. Behavior Lab — a live experiment  ⭐ the signature feature
- Route: **`/lab`**. An interactive anchoring demonstration.
- Flow: random anchor (180 or 1,600 ft) → estimate → reveal.
- **It's a real experiment.** Each guess is recorded into a per-anchor aggregate, and the reveal
  shows the true **between-groups gap** (low-anchor avg vs high-anchor avg, with sample sizes).
  This is the honest way to show anchoring — it's a group effect, not an individual one, so there is
  deliberately **no** "your guess was pulled" per-person claim.
- Storage: **Netlify Blobs** in production, in-memory fallback locally (local counts reset on server
  restart — that's expected).
- Code: `components/BehaviorLab.tsx`, `app/api/behavior-lab/route.ts`, `lib/behaviorLabStore.ts`.

### 6. Analytics — plumbed, dormant until activated
- `lib/analytics.ts` (`track()` helper) + `components/Analytics.tsx` (GA4 loader + a delegated
  `[data-track]` click listener). No-ops until an ID is set.
- **To activate:** add `NEXT_PUBLIC_GA_ID="G-XXXX"` to the environment. (Plausible also works.)
- Events wired: `resume_download`, `contact_click`, `behavior_lab_start/complete/contact`.

### 7. Résumé
- Site now serves the latest résumé; the download saves as **`Michael A West III Resume.pdf`**.

---

## Deliberately NOT done — for design / a decision
- **Visual polish** — fewer bordered cards, a homepage photograph, serif+mono type mix, oversized
  numbers, motion-that-explains. Design's lane. The homepage photo needs an actual asset from Michael.
- **Skills → projects consolidation** — attach skills to the projects that prove them and de-dupe the
  home/About skills lists. Has taste calls; left for a decision.
- **Publishing the notes** — the three planned notes aren't written/published yet.
- **Deploy** — held for Michael's explicit go.

## To deploy (when ready)
Merge `feature/work-case-studies` → `main` and push; Netlify builds from there. Confirm Netlify Blobs
is enabled on the site so the Behavior Lab tally persists in production.
