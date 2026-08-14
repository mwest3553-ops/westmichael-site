import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import EmailLink from "./EmailLink";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 bg-bg-deep shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-4 text-meta text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <EmailLink
              className="link-underline transition-colors hover:text-ink"
              label="Email"
            />
            <Link href="/blog" className="link-underline transition-colors hover:text-ink">
              Blog
            </Link>
          </div>
        </div>

        {/* Powered by Westhird */}
        <div className="mt-8 flex justify-center border-t border-border/40 pt-6">
          <a
            href="https://westhird.com"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 text-meta text-muted transition-colors hover:text-ink"
          >
            <span>Designed and built by Michael West through</span>
            <Image
              src="/images/westhird-logo.png"
              alt="Westhird"
              width={20}
              height={20}
              className="rounded-[5px]"
            />
            <span className="font-semibold text-ink/90 transition-colors group-hover:text-accent">
              Westhird
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
