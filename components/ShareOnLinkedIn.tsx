import { siteConfig } from "@/lib/config";

interface ShareOnLinkedInProps {
  slug: string;
  title: string;
}

export default function ShareOnLinkedIn({ slug, title }: ShareOnLinkedInProps) {
  const articleUrl = `${siteConfig.url}/blog/${slug}`;
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    articleUrl
  )}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Share "${title}" on LinkedIn`}
      className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-4 py-2 text-meta text-ink transition-colors hover:border-accent hover:text-accent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.75 1.75 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
      Share on LinkedIn
    </a>
  );
}
