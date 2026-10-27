import type { Period, YearMonth, YearRange } from "~/types/cv";

export type PeriodWords = {
  today: string;
  year: string;
  years: string;
  month: string;
  months: string;
};

function parse(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split("-").map(Number);
  return { year: year!, month: month! };
}

/** Whole months from the first day of `start` to the first day of `end`. */
export function monthsBetween(start: YearMonth, end: YearMonth): number {
  const a = parse(start);
  const b = parse(end);
  return (b.year - a.year) * 12 + (b.month - a.month);
}

function formatYearMonth(value: YearMonth): string {
  const { year, month } = parse(value);
  return `${String(month).padStart(2, "0")}/${year}`;
}

function formatLength(totalMonths: number, words: PeriodWords): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0)
    parts.push(`${years} ${years === 1 ? words.year : words.years}`);
  if (months > 0)
    parts.push(`${months} ${months === 1 ? words.month : words.months}`);
  return parts.join(", ");
}

/**
 * "11/2023 - 12/2024 (1 year, 2 months)" or "08/2025 - today".
 * The length is shown only for finished periods, unless disabled.
 */
export function formatPeriod(
  period: Period,
  words: PeriodWords,
  options: { withLength?: boolean } = {},
): string {
  const { withLength = true } = options;
  const start = formatYearMonth(period.start);
  if (!period.end) return `${start} - ${words.today}`;
  const base = `${start} - ${formatYearMonth(period.end)}`;
  if (!withLength) return base;
  return `${base} (${formatLength(monthsBetween(period.start, period.end), words)})`;
}

/** "2010 - 2015" or "2009". */
export function formatYearRange(range: YearRange): string {
  if (range.to === undefined) return `${range.from}`;
  return `${range.from} - ${range.to}`;
}
