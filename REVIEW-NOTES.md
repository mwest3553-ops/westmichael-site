# Portfolio review — October 19, 2026

## Current baseline

`main` and `origin/main` point to `161eaaafa4a81a7735aaffac4780a850087b9520`
(`Remove Spotify case study`). The supplied portfolio brief identifies that commit
as matching the live site. These notes replace the stale claim that
`feature/work-case-studies` is unmerged and undeployed.

Git records the Spotify case study removal on September 7, 2026, at 16:56:16
-0500, in `161eaaafa4a81a7735aaffac4780a850087b9520`. Its diff removes
`components/work/SpotifyBody.tsx`, the registry entry, the page integration, and
`public/images/work/chapters-fall.png`. The current work registry contains
`keller-joseph-capital`, `enterprise-mobility`, and `rise-yp-board`.

## Items on `codex/portfolio-fixes-20261019`

1. **Analytics — no code change.** `app/layout.tsx` mounts `Analytics`.
   `components/Analytics.tsx` returns `null` without `NEXT_PUBLIC_GA_ID`;
   `lib/analytics.ts` safely ignores events without a provider. Michael must
   supply the GA4 measurement ID for Netlify's environment, followed by a rebuild.
2. **Résumé — legacy URL redirect.** `public/resume.pdf` is zero bytes and remains
   untouched; a forced 301 in `netlify.toml` now sends `/resume.pdf` to
   `/Michael-A-West-III-Resume.pdf` (separate redirect commit). The Experience download links to
   `/Michael-A-West-III-Resume.pdf` (133,355 bytes), with download name
   `Michael A West III Resume.pdf`. `public/README.txt` still describes the old
   `/resume.pdf` link. The external report inventories references and proposes
   interim behavior; no résumé content, link, or PDF file is changed.
3. **Default OG image.** `lib/config.ts` now points `ogImage` to the existing
   `/opengraph-image.png` route, backed by `app/opengraph-image.png` (1200×630).
   The root layout already uses that file through Next.js metadata conventions.
   No image was generated; the old `/images/og-default.png` URL remains absent.
4. **SEO description.** `lib/config.ts` reuses the exact description already in
   `app/about/page.tsx`: “Michael A. West III is pursuing a B.S. in Marketing and
   Psychology at Saint Louis University. Founder of Westhird.” This removes the
   stale Enterprise Mobility reference from the default description only.
   **Final wording is flagged for Michael's review.**
5. **VISUAL CHANGE — hide Blog navigation.** Removed Blog from the shared header
   menu and footer in `components/SiteHeader.tsx` and `components/SiteFooter.tsx`.
   `/blog`, its Coming soon state, and sitemap entry remain available. Restore
   those links when posts exist. This item is separate from the metadata fixes.
6. **Review notes.** Replaced this stale document with baseline evidence,
   the six-item inventory, and open questions.

## Verification and delivery limits

Unconfigured baseline lint passes. Unconfigured baseline build fails with
`Error: Missing environment variable: NEXT_PUBLIC_SANITY_DATASET` while collecting
page data for `/sitemap.xml`. The same environment limitation applies after the
code changes. Public Sanity configuration (`l6jywyq1`, `production`) was obtained
from the live site's public Studio JavaScript for additional local preview
checks; no token or environment file was created. Both configured production
builds passed, and after-change lint passed. Ten routes return HTTP 200 before
and after, with identical main page text. The OG route returns 200; the legacy
OG path remains 404; the résumé responses remain unchanged. Before/after screenshots
were captured in Codex run 2 and are stored outside the repository (see below).

Run 1 could not write Git commits because its sandbox blocked `.git/index.lock`.
Run 2 commits items 3–6 separately on `codex/portfolio-fixes-20261019`.
The original item patches remain outside the repository in
`~/Developer/review/portfolio-checks-20261019/`. No merge, deploy, PR, rebase,
force push, or change to `main` was performed. See the external report for
run-2 verification, screenshots, and final push results.

## Open questions for Michael

- What is the GA4 measurement ID to set as `NEXT_PUBLIC_GA_ID` in Netlify?
- Which PDF is current, and should the legacy `/resume.pdf` URL eventually
  redirect to the named PDF? Supply/approve the PDF before replacing either file.
- Approve the reused About description as the default SEO wording.
- Keep Blog hidden until posts exist, or retain its navigation with Coming soon?
- Confirm the existing branded Open Graph image remains the desired default.

Full report: `~/Developer/review/portfolio-report-20261019.md`.
Screenshots: `~/Developer/review/portfolio-screenshots-20261019/`.
