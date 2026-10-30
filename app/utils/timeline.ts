import type { Period } from "~/types/cv";
import {
  covers,
  isValidPeriod,
  isValidYearMonth,
  latestMonth,
  monthsBetween,
  monthsOf,
} from "./period";

/** The part of a Project or Experience the timeline rules look at. */
export type Dated = { company: string; period: Period };

type Kind = "Project" | "Experience";

function label(kind: Kind, item: Dated): string {
  return `${kind} ${item.company} (${item.period.start})`;
}

function isOpen(item: Dated): boolean {
  return item.period.end === undefined;
}

/**
 * Every date rule the CV timeline must satisfy, as a list of problems that
 * name the offending Project or Experience. Empty when the data is sound.
 * Rules after the Period check run on well-formed Periods only.
 */
export function timelineProblems(
  projects: readonly Dated[],
  experiences: readonly Dated[],
): string[] {
  const sound = {
    projects: projects.filter((project) => isValidPeriod(project.period)),
    experiences: experiences.filter((experience) => isValidPeriod(experience.period)),
  };
  return [
    ...projects.flatMap((project) => periodProblems("Project", project)),
    ...experiences.flatMap((experience) => periodProblems("Experience", experience)),
    ...openProjectProblems(projects),
    ...coverageProblems(sound.projects, sound.experiences),
    ...openExperienceProblems(sound.projects, sound.experiences),
  ];
}

/** Start and end are year-months, and the start is not after the end. */
function periodProblems(kind: Kind, item: Dated): string[] {
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

/** At most one Project is open-ended: the current engagement, if there is one. */
function openProjectProblems(projects: readonly Dated[]): string[] {
  const open = projects.filter(isOpen);
  if (open.length <= 1) return [];
  return open.map((p) => `${label("Project", p)}: open-ended, but only one Project may be`);
}

/**
 * Every month of a Project falls within some Experience. Months are checked
 * up to the latest month in the data; see `openExperienceProblems` for the
 * months of an open Project beyond that.
 */
function coverageProblems(projects: readonly Dated[], experiences: readonly Dated[]): string[] {
  if (projects.length === 0) return [];
  const horizon = latestMonth([...projects, ...experiences].map((item) => item.period));
  return projects.flatMap((project) => {
    const gap = monthsOf(project.period, horizon).find(
      (month) => !experiences.some((experience) => covers(experience.period, month)),
    );
    return gap === undefined
      ? []
      : [`${label("Project", project)}: ${gap} is covered by no Experience`];
  });
}

/** An open Project's future months are covered only when some Experience is open too. */
function openExperienceProblems(
  projects: readonly Dated[],
  experiences: readonly Dated[],
): string[] {
  if (experiences.some(isOpen)) return [];
  return projects
    .filter(isOpen)
    .map((project) => `${label("Project", project)}: open-ended, but no Experience is open-ended`);
}
