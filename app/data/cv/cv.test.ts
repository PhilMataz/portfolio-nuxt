import { describe, expect, it } from "vitest";
import { TECH } from "./tech";
import { SKILLS } from "./skills";
import { PROJECTS } from "./projects";
import { EXPERIENCES } from "./experiences";
import { timelineProblems } from "../../utils/timeline";
import { industriesOf, translatedKey } from "../../utils/industries";
import { PROFILE } from "./profile";

describe("tech catalogue", () => {
  it("spells Vue.js and has no bare Vue", () => {
    expect(TECH).toContain("Vue.js");
    expect(TECH).not.toContain("Vue");
    expect(SKILLS).toContain("Vue.js");
  });
});

describe("projects", () => {
  it("every project has industry, context and tasks in both locales", () => {
    for (const project of PROJECTS) {
      expect(project.industry.de).toBeTruthy();
      expect(project.industry.en).toBeTruthy();
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
    expect(PROFILE.title.de).toBe("Senior Fullstack-Entwickler (Vue.js / TypeScript)");
    expect(PROFILE.title.en).toBe("Senior Fullstack Engineer (Vue.js / TypeScript)");
  });

  it("summary opens with the title's role in both locales", () => {
    expect(PROFILE.summary.de.trim()).toMatch(
      /^Senior Fullstack-Entwickler mit Vue.js- und TypeScript/,
    );
    expect(PROFILE.summary.en.trim()).toMatch(
      /^Senior Fullstack Engineer specialising in Vue.js and TypeScript/,
    );
  });

  it("has four to six Focus areas in both locales", () => {
    expect(PROFILE.focusAreas.length).toBeGreaterThanOrEqual(4);
    expect(PROFILE.focusAreas.length).toBeLessThanOrEqual(6);
    for (const area of PROFILE.focusAreas) {
      expect(area.de).toBeTruthy();
      expect(area.en).toBeTruthy();
    }
  });
});

describe("industries", () => {
  it("are exactly the distinct Project industries", () => {
    const derived = industriesOf(PROJECTS);
    const expected = new Set(PROJECTS.map((p) => translatedKey(p.industry)));
    expect(new Set(derived.map(translatedKey))).toEqual(expected);
    expect(derived.length).toBe(expected.size);
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
