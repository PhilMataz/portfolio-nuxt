import type { Period, YearMonth } from "~/types/cv";
import { covers, isValidYearMonth, monthsBetween, monthsOf } from "./period";

/** The part of a Project or Experience the timeline rules look at. */
export type Dated = { company: string; period: Period };

function label(kind: "Project" | "Experience", item: Dated): string {
  return `${kind} ${item.company} (${item.period.start})`;
}

function periodProblems(kind: "Project" | "Experience", item: Dated): string[] {
  const { start, end } = item.period;
  const problems: string[] = [];
  if (!isValidYearMonth(start))
    problems.push(`${label(kind, item)}: start "${start}" is not a year-month`);
  if (end !== undefined && !isValidYearMonth(end))
    problems.push(`${label(kind, item)}: end "${end}" is not a year-month`);
  if (problems.length > 0) return problems;
  if (end !== undefined && monthsBetween(start, end) < 0)
    problems.push(`${label(kind, item)}: starts after it ends (${end})`);
  return problems;
}

/**
 * Every date rule the CV timeline must satisfy, as a list of problems that
 * name the offending Project or Experience. Empty when the data is sound.
 */
export function timelineProblems(
  projects: readonly Dated[],
  experiences: readonly Dated[],
): string[] {
  return [
    ...projects.flatMap((p) => periodProblems("Project", p)),
    ...experiences.flatMap((e) => periodProblems("Experience", e)),
    ...openProjectProblems(projects),
    ...coverageProblems(projects, experiences),
  ];
}

/**
 * Every month of a Project must fall within some Experience. Months are
 * checked up to the latest month in the data; an open Project's months
 * beyond that are covered only by an open Experience.
 */
function coverageProblems(projects: readonly Dated[], experiences: readonly Dated[]): string[] {
  const valid = (d: Dated) =>
    isValidYearMonth(d.period.start) &&
    (d.period.end === undefined || isValidYearMonth(d.period.end));
  const sound = { projects: projects.filter(valid), experiences: experiences.filter(valid) };
  const horizon = [...sound.projects, ...sound.experiences]
    .flatMap((d) => [d.period.start, d.period.end ?? d.period.start])
    .reduce((latest, m) => (monthsBetween(latest, m) > 0 ? m : latest), "0000-01" as YearMonth);

  return sound.projects.flatMap((project) => {
    const gap = monthsOf(project.period, horizon).find(
      (month) => !sound.experiences.some((e) => covers(e.period, month)),
    );
    if (gap !== undefined)
      return [`${label("Project", project)}: ${gap} is covered by no Experience`];
    if (
      project.period.end === undefined &&
      !sound.experiences.some((e) => e.period.end === undefined)
    )
      return [`${label("Project", project)}: open-ended, but no Experience is open-ended`];
    return [];
  });
}

function openProjectProblems(projects: readonly Dated[]): string[] {
  const open = projects.filter((p) => p.period.end === undefined);
  if (open.length === 1) return [];
  if (open.length === 0) return ["no Project is open-ended; exactly one must be"];
  return open.map((p) => `${label("Project", p)}: open-ended, but only one Project may be`);
}
