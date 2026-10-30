import type { Translated } from "~/types/cv";

/**
 * Catalogue of every Sector a Project may belong to, each named once per Locale.
 * Variation within a Sector lives in the Project's Segment, never in a new Sector.
 */
export const SECTORS = {
  automotive: { de: "Automotive / Automobilindustrie", en: "Automotive" },
  industrialServices: {
    de: "Industrieservices / Engineering",
    en: "Industrial services / engineering",
  },
  realEstate: {
    de: "Immobilienplattformen / Online-Marktplätze",
    en: "Real estate platforms / online marketplaces",
  },
  digitalSignage: { de: "Digital Signage / Werbetechnik", en: "Digital signage / advertising" },
  printing: { de: "Druckindustrie", en: "Printing industry" },
} as const satisfies Record<string, Translated>;

export type SectorId = keyof typeof SECTORS;
