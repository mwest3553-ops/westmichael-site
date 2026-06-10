import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

// Write-capable client (for server-side mutations only; never expose token to client)
export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: "raw",
});
