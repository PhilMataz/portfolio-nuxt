import { describe, expect, it } from "vitest";
import type { YearMonth } from "~/types/cv";
import { type Dated, timelineProblems } from "./timeline";

/** A fixture with the dates as written, so malformed months can be tested too. */
function dated(company: string, start: string, end?: string): Dated {
  const period = end === undefined ? { start } : { start, end };
  return { company, period: period as { start: YearMonth; end?: YearMonth } };
}

const freelance = dated("Freelance", "2022-01");
const ruhrkraft = dated("Ruhrkraft GmbH", "2021-06", "2021-12");
const openProject = dated("Beta", "2024-01");

describe("timelineProblems", () => {
  it("names a Project or Experience whose Period has a malformed month", () => {
    const problems = timelineProblems(
      [dated("Acme", "2022-13", "2023-01")],
      [dated("Freelance", "2022-1")],
    );
    expect(problems).toContainEqual(expect.stringContaining("Project Acme"));
    expect(problems).toContainEqual(expect.stringContaining("Experience Freelance"));
  });

  it("names a Project whose start lies after its end", () => {
    const problems = timelineProblems([dated("Acme", "2023-02", "2023-01")], [freelance]);
    expect(problems).toContainEqual(expect.stringContaining("Project Acme"));
    expect(problems).toContainEqual(expect.stringContaining("2023-02"));
  });

  it("reports when no Project is open-ended", () => {
    expect(timelineProblems([dated("Acme", "2023-01", "2023-06")], [freelance])).toContainEqual(
      expect.stringContaining("no Project is open-ended"),
    );
  });

  it("names every open-ended Project when there is more than one", () => {
    const problems = timelineProblems([dated("Acme", "2023-01"), openProject], [freelance]);
    expect(problems).toContainEqual(expect.stringContaining("Project Acme"));
    expect(problems).toContainEqual(expect.stringContaining("Project Beta"));
  });

  it("names the Project and the first month no Experience covers", () => {
    const problems = timelineProblems(
      [dated("Acme", "2021-04", "2021-08"), openProject],
      [freelance, ruhrkraft],
    );
    expect(problems).toEqual([expect.stringContaining("Project Acme")]);
    expect(problems[0]).toContain("2021-04");
  });

  it("accepts a Project that spans a change of Experience", () => {
    const projects = [dated("Acme", "2021-10", "2022-04"), openProject];
    expect(timelineProblems(projects, [freelance, ruhrkraft])).toEqual([]);
  });

  it("requires an open-ended Experience behind an open-ended Project", () => {
    const problems = timelineProblems([dated("Beta", "2021-07")], [ruhrkraft]);
    expect(problems).toEqual([expect.stringContaining("Project Beta")]);
    expect(problems[0]).toContain("open-ended");
  });

  it("accepts a Period that starts and ends in the same month", () => {
    const projects = [dated("Acme", "2023-01", "2023-01"), openProject];
    expect(timelineProblems(projects, [freelance, ruhrkraft])).toEqual([]);
  });
});
