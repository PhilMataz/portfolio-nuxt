import type { Tech } from "~/data/cv/tech";

export type Locale = "de" | "en";

/** A piece of content carried in every supported locale at once. */
export type Translated = Record<Locale, string>;

type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

/** "2023-11" */
export type YearMonth = `${number}-${Month}`;

/** A period in months. No `end` means ongoing. */
export type Period = { start: YearMonth; end?: YearMonth };

/** A period in whole years. No `to` means ongoing. */
export type YearRange = { from: number; to?: number };

export type Project = {
  role: Translated;
  company: string;
  period: Period;
  technologies: readonly Tech[];
  description: Translated;
  bullets: readonly Translated[];
};

export type Experience = {
  role: Translated;
  location: string;
  period: Period;
};

export type Education = {
  degree: string;
  program?: Translated;
  school: string;
  years: YearRange;
};

export type Reference = {
  name: string;
  company: string;
  role: Translated;
  tel: string;
  email: string;
};

export type LanguageLevel = "c2" | "c1" | "b1";
export type LanguageName = "german" | "english" | "portuguese";
export type LanguageSkill = { language: LanguageName; level: LanguageLevel };

export type Link = { label: string; href: string };

export type Profile = {
  firstName: string;
  lastName: string;
  title: Translated;
  summary: Translated;
  contact: {
    tel: string;
    email: string;
    address: string;
    website: Link;
    github: Link;
    linkedin: Link;
  };
};

export type CvData = {
  profile: Profile;
  skills: readonly Tech[];
  projects: readonly Project[];
  experiences: readonly Experience[];
  education: readonly Education[];
  references: readonly Reference[];
  languages: readonly LanguageSkill[];
};
