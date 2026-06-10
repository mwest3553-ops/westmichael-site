import type { PortableTextBlock } from "@portabletext/types";

// Sanity image reference — passed through to urlForImage() builder.
// Loosely typed to avoid pulling a deep submodule path that lacks .d.ts.
export type SanityImageRef =
  | {
      _type: "image";
      asset?: { _ref?: string; _type?: string };
      hotspot?: { x: number; y: number; height: number; width: number };
      crop?: { top: number; left: number; bottom: number; right: number };
      alt?: string;
    }
  | Record<string, unknown>;

export interface BlogPostMeta {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  coverImage?: SanityImageRef;
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  body: PortableTextBlock[];
}

export interface ExperienceRole {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
}

export interface TimelineEntry {
  institution: string;
  role: string;
  dates: string;
  location?: string;
  note?: string;
}

export type SkillCategory = "business" | "tech";

export interface SkillTag {
  label: string;
  certified?: boolean;
  category: SkillCategory;
}
