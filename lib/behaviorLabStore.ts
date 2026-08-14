// Aggregate store for the Behavior Lab live experiment.
// Keeps a running count + sum of guesses per anchor bucket so the reveal can
// show the real between-groups difference (the honest way to demonstrate
// anchoring — it's a group effect, not an individual one).
//
// Production (Netlify): persisted via Netlify Blobs.
// Local dev / anywhere Blobs isn't available: in-memory (resets on restart).

export type Bucket = { count: number; sum: number };
export type Stats = { low: Bucket; high: Bucket };

const STORE_NAME = "behavior-lab";
const KEY = "eiffel-anchor-v1";

function empty(): Stats {
  return { low: { count: 0, sum: 0 }, high: { count: 0, sum: 0 } };
}

function applyGuess(stats: Stats, bucket: "low" | "high", guess: number): Stats {
  const next: Stats = {
    low: { ...stats.low },
    high: { ...stats.high },
  };
  next[bucket] = {
    count: next[bucket].count + 1,
    sum: next[bucket].sum + guess,
  };
  return next;
}

// ---- in-memory fallback ----
let mem: Stats = empty();
let blobsUnavailable = false;

async function getBlobStore() {
  if (blobsUnavailable) return null;
  try {
    const { getStore } = await import("@netlify/blobs");
    return getStore(STORE_NAME);
  } catch {
    blobsUnavailable = true;
    return null;
  }
}

export async function getStats(): Promise<Stats> {
  const store = await getBlobStore();
  if (!store) return mem;
  try {
    const data = (await store.get(KEY, { type: "json" })) as Stats | null;
    return data ?? empty();
  } catch {
    return mem;
  }
}

export async function recordGuess(
  bucket: "low" | "high",
  guess: number
): Promise<Stats> {
  const store = await getBlobStore();
  if (!store) {
    mem = applyGuess(mem, bucket, guess);
    return mem;
  }
  try {
    const current =
      ((await store.get(KEY, { type: "json" })) as Stats | null) ?? empty();
    const next = applyGuess(current, bucket, guess);
    await store.setJSON(KEY, next);
    return next;
  } catch {
    mem = applyGuess(mem, bucket, guess);
    return mem;
  }
}
