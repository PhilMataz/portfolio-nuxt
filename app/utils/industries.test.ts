import { describe, expect, it } from "vitest";
import type { Project } from "~/types/cv";
import { industriesOf } from "./industries";

const project = (industry: Project["industry"]): Project => ({
  role: { de: "r", en: "r" },
  company: "c",
  industry,
  period: { start: "2020-01" },
  context: { de: "k", en: "k" },
  tasks: [],
  outcomes: [],
  technologies: [],
});

describe("industriesOf", () => {
  it("keeps the first occurrence of each Industry in Project order", () => {
    const a = { de: "A-de", en: "A-en" };
    const b = { de: "B-de", en: "B-en" };
    expect(industriesOf([project(a), project(b), project({ ...a })])).toEqual([a, b]);
  });

  it("treats two Industries as the same only when both locales match", () => {
    const a = { de: "A-de", en: "A-en" };
    const a2 = { de: "A-de", en: "Other" };
    expect(industriesOf([project(a), project(a2)])).toEqual([a, a2]);
  });

  it("is empty for no Projects", () => {
    expect(industriesOf([])).toEqual([]);
  });
});
