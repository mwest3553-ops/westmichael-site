"use client";

/**
 * Sanity Studio mounted at /studio
 * See sanity.config.ts for schema and settings.
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
