# westmichael.com

Personal brand website for Michael A. West III. Next.js 14 (App Router) + TypeScript + Tailwind CSS + Sanity CMS. Deployed on Netlify.

## Running locally

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

Studio (Sanity CMS editor) is at [http://localhost:3000/studio](http://localhost:3000/studio).

## Environment variables

Local: copy `.env.local.example` to `.env.local` and fill in your Sanity project ID, dataset, API version, and (optionally) write token.

Netlify: add these in **Site Settings → Environment Variables**:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (e.g., `2024-01-01`)

The `SANITY_API_TOKEN` is only needed for server-side mutations (not required for the public site to work).

## Restoring / running from scratch

Everything needed to **build** the site is in this repo — all code, styles, config, and static assets (fonts, images, and the résumé PDF). A few things it needs to **operate** live outside git, on purpose:

| Not in the repo | Where it lives | How to restore |
| --- | --- | --- |
| Secrets / env vars | your local `.env.local` + Netlify → Environment Variables | copy `.env.local.example` → `.env.local` and fill in the Sanity values (the API token is regenerable in Sanity → API → Tokens) |
| Blog posts | Sanity's cloud (not the repo) | already there — edit at `/studio` |
| `node_modules` | not tracked | `pnpm install` (rebuilt from the lockfile) |
| Hosting + domain | Netlify + Namecheap DNS | see "Deploying to Netlify" below |

**Clone → running:** `pnpm install` → create `.env.local` with the four Sanity vars → `pnpm dev`. Every page works without Sanity except `/blog` (which needs the CMS connection).

## Editing content

### Writing blog posts

Posts live in Sanity, not in the repo. Two ways to publish:

1. **In-browser:** go to `/studio`, log in with your Sanity account, click **Create** under Blog Post, fill it in, and click **Publish**.
2. **Via API:** scripted uploads using the `SANITY_API_TOKEN`.

Articles appear on `/blog` within a second or two of publishing — no rebuild required.

### Update About content

Edit `content/about.md`. Plain markdown, no frontmatter.

### Update constants (name, tagline, LinkedIn URL, email)

Edit `lib/config.ts`. Everything text-y on the site reads from this file.

### Update experience / resume

Edit `lib/experience.ts`. Arrays: `experienceRoles`, `projects`, `timeline`, plus `skills` (split into business/tech categories).

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify, **Add new site → Import from Git → GitHub → select this repo**.
3. Build settings auto-detect (Next.js framework, `pnpm build`). Deploy.
4. Add the env vars listed above in **Site Settings → Environment Variables**, then redeploy.
5. **Domain Management → Add custom domain →** `westmichael.com`. Follow Netlify's DNS instructions at Namecheap.
6. SSL is automatic (Let's Encrypt).

### Replacing the resume PDF

Replace `public/Michael-A-West-III-Resume.pdf` with the new file — **keep the same filename**, since the "Download Resume" button links to that exact path.

## Stack

- **Next.js 14** App Router (TypeScript)
- **Tailwind CSS** + `@tailwindcss/typography`
- **Sanity CMS** for blog content (`sanity`, `next-sanity`, `@sanity/client`, `@portabletext/react`)
- **Framer Motion** for subtle scroll-triggered fades
- Hosted on **Netlify** with the Next.js runtime plugin

## File map

```
app/             Routes (App Router) + sitemap + robots
app/studio/      Sanity Studio embed (CMS editor)
components/      UI components
content/         About markdown (blog content lives in Sanity)
lib/             Site config, blog loader, experience data, types
sanity/          Schema definitions, GROQ queries, Sanity clients
public/          Static assets (fonts, images, Michael-A-West-III-Resume.pdf)
app/icon.svg      Favicon (MW badge)
netlify.toml     Build + hosting config
sanity.config.ts Sanity Studio configuration
```
