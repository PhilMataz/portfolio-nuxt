// Pure rules of the PDF export: paths, file names, metadata and the one-page-per-Project
// check. The browser and file system work lives in export-pdf.ts; this module is tested.
import type { Locale, Translated } from "../../app/types/cv";

/** The parts of the Profile the export needs. */
export type ExportProfile = { firstName: string; lastName: string; title: Translated };

export type PdfMetadata = { title: string; author: string; subject: string; keywords: string[] };

/** Height of one Project as rendered for print, in CSS px. */
export type ProjectMeasurement = { name: string; heightPx: number };

/** A4 is 297mm; CSS defines 96px per inch, so this is the printable page height in CSS px. */
export const A4_HEIGHT_PX = (297 / 25.4) * 96;

const SUBJECT: Translated = {
  de: "Freelancer-Profil / Projektliste",
  en: "Freelancer profile / Project list",
};

/** German is the default Locale and lives at the unprefixed path (see nuxt.config.ts). */
export function cvPath(locale: Locale): string {
  return locale === "de" ? "/cv" : `/${locale}/cv`;
}

export function exportFileName(profile: ExportProfile, locale: Locale, year: number): string {
  return `${profile.firstName}_${profile.lastName}_CV_${year}_${locale.toUpperCase()}.pdf`;
}

/** The title matches the document title the page sets in useHead. */
export function metadataFor(
  profile: ExportProfile,
  locale: Locale,
  keywords: readonly string[],
): PdfMetadata {
  const name = `${profile.firstName} ${profile.lastName}`;
  return {
    title: `${name} – ${profile.title[locale]}`,
    author: name,
    subject: SUBJECT[locale],
    keywords: [...keywords],
  };
}

/**
 * Names the Projects taller than one page. The browser keeps each Project whole
 * (break-inside: avoid-page), so a taller one would be cut at the page edge (see docs/adr/0002).
 */
export function oversizedProjects(
  measured: readonly ProjectMeasurement[],
  pageHeightPx: number,
): string[] {
  return measured.filter(({ heightPx }) => heightPx > pageHeightPx).map(({ name }) => name);
}
