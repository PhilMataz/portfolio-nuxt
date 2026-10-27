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

/**
 * True when `value` is a four-digit year and a month from 01 to 12, as in "2023-11".
 * The `YearMonth` type already rejects a bad month; this adds the year length
 * and guards data that reached the tests through a cast.
 */
export function isValidYearMonth(value: string): value is YearMonth {
  return /^\d{4}-(0[1-9]|1[0-2])$/.test(value);
}

/** True when both months of `period` pass `isValidYearMonth`. */
export function isValidPeriod(period: Period): boolean {
  return (
    isValidYearMonth(period.start) && (period.end === undefined || isValidYearMonth(period.end))
  );
}

/** The latest month any of `periods` mentions, start or end. */
export function latestMonth(periods: readonly Period[]): YearMonth {
  return periods
    .flatMap((period) => [period.start, period.end ?? period.start])
    .reduce((latest, month) => (monthsBetween(latest, month) > 0 ? month : latest));
}

/** Whole months from the first day of `start` to the first day of `end`. */
export function monthsBetween(start: YearMonth, end: YearMonth): number {
  const a = parse(start);
  const b = parse(end);
  return (b.year - a.year) * 12 + (b.month - a.month);
}

/**
 * Every month of `period`, start and end included. An open Period runs
 * up to `horizon`, the latest month the caller knows about.
 */
export function monthsOf(period: Period, horizon: YearMonth): YearMonth[] {
  const { year, month } = parse(period.start);
  const count = monthsBetween(period.start, period.end ?? horizon) + 1;
  return Array.from({ length: Math.max(count, 0) }, (_, i) => {
    const index = year * 12 + (month - 1) + i;
    const m = String((index % 12) + 1).padStart(2, "0");
    return `${Math.floor(index / 12)}-${m}` as YearMonth;
  });
}

/** True when `month` lies within `period`, start and end included. An open Period covers every later month. */
export function covers(period: Period, month: YearMonth): boolean {
  if (monthsBetween(period.start, month) < 0) return false;
  return period.end === undefined || monthsBetween(month, period.end) >= 0;
}

function formatYearMonth(value: YearMonth): string {
  const { year, month } = parse(value);
  return `${String(month).padStart(2, "0")}/${year}`;
}

function formatLength(totalMonths: number, words: PeriodWords): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? words.year : words.years}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? words.month : words.months}`);
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
