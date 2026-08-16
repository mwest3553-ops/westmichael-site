import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkItem, workItems } from "@/lib/work";
import { siteConfig } from "@/lib/config";
import KellerJosephBody from "@/components/work/KellerJosephBody";
import EnterpriseBody from "@/components/work/EnterpriseBody";
import RiseBody from "@/components/work/RiseBody";
import SpotifyBody from "@/components/work/SpotifyBody";

interface WorkPageProps {
  params: { slug: string };
}

const BODIES: Record<string, () => JSX.Element> = {
  "keller-joseph-capital": KellerJosephBody,
  "enterprise-mobility": EnterpriseBody,
  "rise-yp-board": RiseBody,
  "spotify-teardown": SpotifyBody,
};

export function generateStaticParams() {
  return workItems.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const item = getWorkItem(params.slug);
  if (!item) return {};
  return {
    title: item.seoTitle,
    description: item.seoDesc,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title: `${item.seoTitle} · ${siteConfig.name}`,
      description: item.seoDesc,
      type: "article",
      url: `${siteConfig.url}/work/${item.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.seoTitle} · ${siteConfig.name}`,
      description: item.seoDesc,
    },
  };
}

export default function WorkCaseStudyPage({ params }: WorkPageProps) {
  const item = getWorkItem(params.slug);
  const Body = BODIES[params.slug];
  if (!item || !Body) notFound();

  return (
    <article>
      <Body />
    </article>
  );
}
