import Link from "next/link";
import { siteConfig } from "@/lib/config";
import MobileNav from "./MobileNav";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-meta font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          <span className="inline-block h-4 w-0.5 bg-accent" aria-hidden="true" />
          {siteConfig.shortName}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-meta text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav items={navItems} />
      </div>
    </header>
  );
}
