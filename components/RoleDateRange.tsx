"use client";

import { useEffect, useState } from "react";

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parseMonthYear(dateStr: string): { month: number; year: number } | null {
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length !== 2) return null;
  const month = MONTHS[parts[0]];
  const year = Number(parts[1]);
  if (month === undefined || !Number.isInteger(year)) return null;
  return { month, year };
}

export function formatRoleDuration(
  startDate: string,
  endDate: string,
  now: Date = new Date()
): string | null {
  const start = parseMonthYear(startDate);
  if (!start) return null;

  let end: { month: number; year: number } | null;
  if (endDate === "Present") {
    end = { month: now.getMonth(), year: now.getFullYear() };
  } else {
    end = parseMonthYear(endDate);
  }
  if (!end) return null;

  const rawMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  const totalMonths = Math.max(1, rawMonths);

  if (totalMonths < 12) {
    return `${totalMonths} ${totalMonths === 1 ? "mo" : "mos"}`;
  }

  const years = Math.floor(totalMonths / 12);
  const rem = totalMonths % 12;
  const yrPart = `${years} ${years === 1 ? "yr" : "yrs"}`;
  if (rem === 0) return yrPart;
  return `${yrPart} ${rem} ${rem === 1 ? "mo" : "mos"}`;
}

export default function RoleDateRange({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    if (endDate === "Present") {
      setNow(new Date());
    }
  }, [endDate]);

  const duration = formatRoleDuration(startDate, endDate, now);

  const text = duration
    ? `${startDate} – ${endDate} · ${duration}`
    : `${startDate} – ${endDate}`;

  return <span suppressHydrationWarning>{text}</span>;
}
