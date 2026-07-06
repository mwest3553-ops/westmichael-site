import Link from "next/link";
import { siteConfig } from "@/lib/config";
import NavMenu from "./NavMenu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-bg/70 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-meta font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          <span className="inline-block h-4 w-0.5 bg-accent" aria-hidden="true" />
          {siteConfig.shortName}
        </Link>
        <NavMenu items={navItems} />
      </div>
    </header>
  );
}
