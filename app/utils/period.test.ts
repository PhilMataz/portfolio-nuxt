import { describe, expect, it } from "vitest";
import {
  covers,
  formatPeriod,
  formatYearRange,
  isValidYearMonth,
  monthsBetween,
  monthsOf,
} from "./period";

const words = {
  today: "today",
  year: "year",
  years: "years",
  month: "month",
  months: "months",
};

describe("monthsBetween", () => {
  it("counts whole months between the two month starts", () => {
    expect(monthsBetween("2023-11", "2024-12")).toBe(13);
    expect(monthsBetween("2024-10", "2025-06")).toBe(8);
    expect(monthsBetween("2020-09", "2021-09")).toBe(12);
    expect(monthsBetween("2018-01", "2021-07")).toBe(42);
  });
});

describe("formatPeriod", () => {
  it("renders an ongoing period without a length", () => {
    expect(formatPeriod({ start: "2025-08" }, words)).toBe("08/2025 - today");
  });

  it("renders months only below a year", () => {
    expect(formatPeriod({ start: "2024-10", end: "2025-06" }, words)).toBe(
      "10/2024 - 06/2025 (8 months)",
    );
  });

  it("renders years and months with singular forms", () => {
    expect(formatPeriod({ start: "2023-11", end: "2024-12" }, words)).toBe(
      "11/2023 - 12/2024 (1 year, 1 month)",
    );
    expect(formatPeriod({ start: "2021-12", end: "2023-09" }, words)).toBe(
      "12/2021 - 09/2023 (1 year, 9 months)",
    );
  });

  it("omits months when the length is whole years", () => {
    expect(formatPeriod({ start: "2020-09", end: "2021-09" }, words)).toBe(
      "09/2020 - 09/2021 (1 year)",
    );
  });

  it("can hide the length", () => {
    expect(
      formatPeriod({ start: "2021-06", end: "2021-12" }, words, {
        withLength: false,
      }),
    ).toBe("06/2021 - 12/2021");
  });
});

describe("formatYearRange", () => {
  it("renders a range or a single year", () => {
    expect(formatYearRange({ from: 2010, to: 2015 })).toBe("2010 - 2015");
    expect(formatYearRange({ from: 2009 })).toBe("2009");
  });
});

describe("monthsOf", () => {
  it("lists every month from start to end, both included", () => {
    expect(monthsOf({ start: "2021-11", end: "2022-02" }, "2025-12")).toEqual([
      "2021-11",
      "2021-12",
      "2022-01",
      "2022-02",
    ]);
  });

  it("runs an open Period up to the horizon", () => {
    expect(monthsOf({ start: "2025-10" }, "2026-01")).toEqual([
      "2025-10",
      "2025-11",
      "2025-12",
      "2026-01",
    ]);
  });
});

describe("covers", () => {
  it("includes the start and end months and nothing outside", () => {
    const period = { start: "2021-06", end: "2021-12" } as const;
    expect(covers(period, "2021-06")).toBe(true);
    expect(covers(period, "2021-12")).toBe(true);
    expect(covers(period, "2021-05")).toBe(false);
    expect(covers(period, "2022-01")).toBe(false);
  });

  it("covers every month after the start of an open Period", () => {
    expect(covers({ start: "2022-01" }, "2031-07")).toBe(true);
    expect(covers({ start: "2022-01" }, "2021-12")).toBe(false);
  });
});

describe("isValidYearMonth", () => {
  it("accepts a four-digit year and a month from 01 to 12", () => {
    expect(isValidYearMonth("2023-11")).toBe(true);
    expect(isValidYearMonth("2024-01")).toBe(true);
  });

  it("rejects a month outside 01 to 12 or a malformed year", () => {
    expect(isValidYearMonth("2023-13")).toBe(false);
    expect(isValidYearMonth("2023-00")).toBe(false);
    expect(isValidYearMonth("23-11")).toBe(false);
    expect(isValidYearMonth("2023-1")).toBe(false);
  });
});
