import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = imageUrlBuilder({ projectId, dataset });

// Accepts any Sanity image source shape — the builder validates at runtime.
export function urlForImage(source: unknown) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return builder.image(source as any).auto("format").fit("max");
}
