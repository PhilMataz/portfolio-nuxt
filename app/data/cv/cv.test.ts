import { describe, expect, it } from "vitest";
import type { Project } from "~/types/cv";
import { TECH } from "./tech";
import { SKILLS } from "./skills";
import { PROJECTS } from "./projects";
import { EXPERIENCES } from "./experiences";
import { timelineProblems } from "../../utils/timeline";
import { industriesOf } from "../../utils/industries";
import { PROFILE } from "./profile";
import { SECTORS } from "./sectors";

describe("tech catalogue", () => {
  it("spells Vue.js and has no bare Vue", () => {
    expect(TECH).toContain("Vue.js");
    expect(TECH).not.toContain("Vue");
    expect(SKILLS).toContain("Vue.js");
  });
});

describe("projects", () => {
  it("every segment is in both locales", () => {
    const segments = PROJECTS.flatMap((p: Project) =>
      p.industry.segment ? [p.industry.segment] : [],
    );
    expect(segments.length).toBe(3);
    for (const segment of segments) {
      expect(segment.de).toBeTruthy();
      expect(segment.en).toBeTruthy();
    }
  });

  it("every project has context and tasks in both locales", () => {
    for (const project of PROJECTS) {
      expect(project.context.de).toBeTruthy();
      expect(project.context.en).toBeTruthy();
      expect(project.tasks.length).toBeGreaterThan(0);
    }
  });

  it("context is at most three sentences and does not end with a colon", () => {
    for (const project of PROJECTS) {
      for (const text of [project.context.de, project.context.en]) {
        expect(text.trim().endsWith(":")).toBe(false);
        const sentences = text.split(/[.!?](\s|$)/).filter((s) => s.trim());
        expect(sentences.length).toBeLessThanOrEqual(3);
      }
    }
  });
});

describe("timeline", () => {
  it("has sound Periods, one open Project, and an Experience behind every Project month", () => {
    expect(timelineProblems(PROJECTS, EXPERIENCES)).toEqual([]);
  });
});

describe("profile", () => {
  it("title names the role and stack", () => {
    expect(PROFILE.title.de).toBe("Senior Fullstack-Entwickler (TypeScript / Node.js / Vue.js)");
    expect(PROFILE.title.en).toBe("Senior Fullstack Engineer (TypeScript / Node.js / Vue.js)");
  });

  it("summary opens with the full name and the title's role in both locales", () => {
    expect(PROFILE.summary.de.trim()).toMatch(
      /^Phillip Matambanadzo ist ein Senior Fullstack-Entwickler/,
    );
    expect(PROFILE.summary.en.trim()).toMatch(
      /^Phillip Matambanadzo is a Senior Fullstack Engineer/,
    );
  });

  it("has four to seven Focus areas in both locales", () => {
    expect(PROFILE.focusAreas.length).toBeGreaterThanOrEqual(4);
    expect(PROFILE.focusAreas.length).toBeLessThanOrEqual(7);
    for (const area of PROFILE.focusAreas) {
      expect(area.de).toBeTruthy();
      expect(area.en).toBeTruthy();
    }
  });
});

describe("industries", () => {
  const industries = industriesOf(PROJECTS);

  it("every Sector in the catalogue is used by at least one Project, and each appears once", () => {
    const used = industries.map((group) => group.sector);
    expect(new Set(used).size).toBe(used.length);
    expect(new Set(used)).toEqual(new Set(Object.keys(SECTORS)));
  });

  it("orders Sectors by Project count, then by the most recent Project", () => {
    expect(industries.map((group) => group.sector)).toEqual([
      "automotive",
      "industrialServices",
      "realEstate",
      "digitalSignage",
      "printing",
    ]);
  });

  it("orders Segments within a Sector by the most recent Project", () => {
    expect(industries[0]?.segments.map((segment) => segment.de)).toEqual([
      "Fertigung / Industrie-IoT",
      "E-Commerce",
      "Aftermarket / Ersatzteile",
    ]);
  });

  it("every Sector name and Segment is in both locales", () => {
    for (const group of industries) {
      expect(group.name.de).toBeTruthy();
      expect(group.name.en).toBeTruthy();
    }
  });
});

describe("experiences", () => {
  it("has no student job", () => {
    for (const experience of EXPERIENCES) {
      expect(experience.title.en).not.toMatch(/student/i);
      expect(experience.title.de).not.toMatch(/werkstudent/i);
    }
  });
});
