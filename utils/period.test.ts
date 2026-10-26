import { describe, expect, it } from "vitest";
import { formatPeriod, formatYearRange, monthsBetween } from "./period";

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
