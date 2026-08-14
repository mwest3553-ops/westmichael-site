import { NextResponse } from "next/server";
import { getStats, recordGuess } from "@/lib/behaviorLabStore";

export const dynamic = "force-dynamic";

// GET — current aggregate stats (used to show the group comparison).
export async function GET() {
  const stats = await getStats();
  return NextResponse.json(stats);
}

// POST { anchor: "low" | "high", guess: number } — record one guess.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { anchor?: unknown; guess?: unknown }
    | null;

  const anchor =
    body?.anchor === "high" ? "high" : body?.anchor === "low" ? "low" : null;
  const guess = Number(body?.guess);

  if (!anchor || !Number.isFinite(guess) || guess <= 0 || guess > 100000) {
    return NextResponse.json({ error: "invalid input" }, { status: 400 });
  }

  const stats = await recordGuess(anchor, guess);
  return NextResponse.json(stats);
}
