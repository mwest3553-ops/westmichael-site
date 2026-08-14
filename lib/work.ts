// Case-study registry for /work and /work/[slug].
// Bodies live in components/work/*Body.tsx; this holds card + SEO metadata
// and the canonical order.

export interface WorkMeta {
  slug: string;
  order: number;
  num: string;
  /** card eyebrow / hero tag */
  tag: string;
  cardTitle: string;
  cardBlurb: string;
  seoTitle: string;
  seoDesc: string;
}

export const workItems: WorkMeta[] = [
  {
    slug: "keller-joseph-capital",
    order: 1,
    num: "01",
    tag: "Client work · Brand & web",
    cardTitle: "Building the credibility a new fund can't buy.",
    cardBlurb:
      "A new investment group needed a site and a reason for people to take them seriously. I built both.",
    seoTitle: "Keller Joseph Capital — Brand & Web",
    seoDesc:
      "Building credibility for a new private investment group through brand and web — a client project that turned into a co-founding role.",
  },
  {
    slug: "enterprise-mobility",
    order: 2,
    num: "02",
    tag: "Self-initiated · Channel & messaging strategy",
    cardTitle: "Same audience. Different message.",
    cardBlurb:
      "Nine weeks inside an internal startup: which channel actually reached buyers, why the message misfired, and what the fix was worth.",
    seoTitle: "Enterprise Mobility — Channel & Messaging Strategy",
    seoDesc:
      "A self-initiated channel and messaging analysis at Enterprise Mobility: tracked every touch, pitched a fix to leadership, and scored the forecast.",
  },
  {
    slug: "rise-yp-board",
    order: 3,
    num: "03",
    tag: "Nonprofit · Earned media plan",
    cardTitle: "Nine outlets, four angles, no ad budget.",
    cardBlurb:
      "The amplification plan for Rise's annual impact report: nine local outlets, four story angles, six weeks.",
    seoTitle: "Rise YP Board — Earned Media Plan",
    seoDesc:
      "An earned-media amplification plan for a volunteer nonprofit board: nine local outlets, four angles, no ad budget.",
  },
  {
    slug: "spotify-teardown",
    order: 4,
    num: "04",
    tag: "Spec project · Consumer psychology",
    cardTitle: "Same catalog everywhere. One service turns listening into identity.",
    cardBlurb:
      "An independent teardown of the psychology behind Wrapped, plus a campaign concept built on the same mechanics.",
    seoTitle: "Spotify — Marketing as Applied Psychology",
    seoDesc:
      "An independent spec teardown of the consumer psychology behind Spotify Wrapped, plus a campaign concept built on the same mechanics.",
  },
];

export function getWorkItem(slug: string): WorkMeta | undefined {
  return workItems.find((w) => w.slug === slug);
}

export const workSlugs = workItems.map((w) => w.slug);
