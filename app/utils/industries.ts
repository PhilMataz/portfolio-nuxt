import { SECTORS, type SectorId } from "../data/cv/sectors";
import type { Industry, Project, Translated } from "~/types/cv";

/** One entry of the Industries line: a Sector with the Segments worked in it. */
export type IndustryGroup = {
  sector: SectorId;
  name: Translated;
  segments: readonly Translated[];
};

/** Sort key for recency: an ongoing Project outranks every finished one. */
const recency = (project: Project): string => project.period.end ?? "9999-99";

const latest = (group: readonly Project[]): string => group.map(recency).toSorted().at(-1) ?? "";

/**
 * Industries: the Sectors across all Projects, grouped, each with its Segments.
 * Sectors are ordered by number of Projects, then by the most recent Project;
 * Segments within a Sector by the most recent Project. Derived for page one and
 * never stored on their own (see CONTEXT.md).
 */
export function industriesOf(projects: readonly Project[]): IndustryGroup[] {
  const bySector = new Map<SectorId, Project[]>();
  for (const project of projects) {
    const group = bySector.get(project.industry.sector) ?? [];
    group.push(project);
    bySector.set(project.industry.sector, group);
  }
  return [...bySector.entries()]
    .toSorted(([, a], [, b]) => b.length - a.length || latest(b).localeCompare(latest(a)))
    .map(([sector, group]) => ({
      sector,
      name: SECTORS[sector],
      segments: group
        .toSorted((a, b) => recency(b).localeCompare(recency(a)))
        .flatMap((p) => (p.industry.segment ? [p.industry.segment] : [])),
    }));
}

type Tr = (text: Translated) => string;

/** "Sector (segment, segment)" for the page-one line, or just the Sector. */
export function industryGroupText(group: IndustryGroup, tr: Tr): string {
  const segments = group.segments.map(tr).join(", ");
  return segments ? `${tr(group.name)} (${segments})` : tr(group.name);
}

/** "Sector · Segment" for a Project's industry line, or just the Sector. */
export function industryText(industry: Industry, tr: Tr): string {
  const sector = tr(SECTORS[industry.sector]);
  return industry.segment ? `${sector} · ${tr(industry.segment)}` : sector;
}
