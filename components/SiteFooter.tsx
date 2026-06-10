import Link from "next/link";
import { siteConfig } from "@/lib/config";
import EmailLink from "./EmailLink";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-bg-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-meta text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={siteConfig.linkedIn}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <EmailLink
            className="transition-colors hover:text-ink"
            label="Email"
          />
          <Link href="/blog" className="transition-colors hover:text-ink">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
