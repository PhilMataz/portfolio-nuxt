import { describe, expect, it } from "vitest";
import { TECH } from "./tech";
import { SKILLS } from "./skills";
import { PROJECTS } from "./projects";
import { EXPERIENCES } from "./experiences";
import { timelineProblems } from "../../utils/timeline";

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

describe("experiences", () => {
  it("has no student job", () => {
    for (const experience of EXPERIENCES) {
      expect(experience.title.en).not.toMatch(/student/i);
      expect(experience.title.de).not.toMatch(/werkstudent/i);
    }
  });
});
