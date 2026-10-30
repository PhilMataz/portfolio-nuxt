import { describe, expect, it } from "vitest";
import type { Industry, Period, Project, Translated } from "~/types/cv";
import { industriesOf, industryGroupText, industryText } from "./industries";

const project = (industry: Industry, period: Period = { start: "2020-01" }): Project => ({
  role: { de: "r", en: "r" },
  company: "c",
  industry,
  period,
  context: { de: "k", en: "k" },
  tasks: [],
  outcomes: [],
  technologies: [],
});

const seg = (text: string): Translated => ({ de: text, en: text });
const de = (text: Translated) => text.de;

describe("industriesOf", () => {
  it("lists each Sector once with the Segments of its Projects", () => {
    const groups = industriesOf([
      project({ sector: "automotive", segment: seg("one") }),
      project({ sector: "printing" }),
      project({ sector: "automotive", segment: seg("two") }),
    ]);
    expect(groups.map((g) => g.sector)).toEqual(["automotive", "printing"]);
    expect(groups[0]?.segments.map(de)).toEqual(["one", "two"]);
    expect(groups[1]?.segments).toEqual([]);
  });

  it("orders Sectors by Project count before recency", () => {
    const groups = industriesOf([
      project({ sector: "printing" }, { start: "2024-01" }),
      project({ sector: "automotive" }, { start: "2019-01", end: "2019-06" }),
      project({ sector: "automotive" }, { start: "2018-01", end: "2018-06" }),
    ]);
    expect(groups.map((g) => g.sector)).toEqual(["automotive", "printing"]);
  });

  it("breaks a tie in Project count by the most recent Project, ongoing first", () => {
    const groups = industriesOf([
      project({ sector: "printing" }, { start: "2018-01", end: "2021-07" }),
      project({ sector: "realEstate" }, { start: "2023-11", end: "2024-12" }),
      project({ sector: "industrialServices" }, { start: "2025-08" }),
    ]);
    expect(groups.map((g) => g.sector)).toEqual(["industrialServices", "realEstate", "printing"]);
  });

  it("orders Segments within a Sector by the most recent Project", () => {
    const groups = industriesOf([
      project({ sector: "automotive", segment: seg("old") }, { start: "2018-01", end: "2018-06" }),
      project({ sector: "automotive", segment: seg("new") }, { start: "2024-01", end: "2024-06" }),
    ]);
    expect(groups[0]?.segments.map(de)).toEqual(["new", "old"]);
  });

  it("is empty for no Projects", () => {
    expect(industriesOf([])).toEqual([]);
  });
});

describe("industry text", () => {
  it("renders a group as Sector (segments) and a bare Sector without brackets", () => {
    const [auto, print] = industriesOf([
      project({ sector: "automotive", segment: seg("a") }),
      project({ sector: "automotive", segment: seg("b") }),
      project({ sector: "printing" }),
    ]);
    expect(industryGroupText(auto!, de)).toBe("Automotive / Automobilindustrie (a, b)");
    expect(industryGroupText(print!, de)).toBe("Druckindustrie");
  });

  it("renders a Project's Industry as Sector · Segment", () => {
    expect(industryText({ sector: "automotive", segment: seg("E-Commerce") }, de)).toBe(
      "Automotive / Automobilindustrie · E-Commerce",
    );
    expect(industryText({ sector: "printing" }, de)).toBe("Druckindustrie");
  });
});
