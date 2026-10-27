import type { Tech } from "~/data/cv/tech";

export type Locale = "de" | "en";

/** A piece of content carried in every supported locale at once. */
export type Translated = Record<Locale, string>;

type Month = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";

/** "2023-11" */
export type YearMonth = `${number}-${Month}`;

/** A period in months. No `end` means ongoing. */
export type Period = { start: YearMonth; end?: YearMonth };

/** A period in whole years. No `to` means ongoing. */
export type YearRange = { from: number; to?: number };

/** Hours per week, stated only when a Project was not full-time. */
export type Workload = { hoursPerWeek: number };

/** One engagement for a client or employer. See CONTEXT.md. */
export type Project = {
  role: Translated;
  company: string;
  /** The sector the client operates in, named so a recruiter can match it. */
  industry: Translated;
  period: Period;
  teamSize?: number;
  /** One to three sentences saying what the Project was and why it existed. */
  context: Translated;
  /** Concrete activities done, one per entry. */
  tasks: readonly Translated[];
  /** What changed because of the work. May be empty, which the review flags. */
  outcomes: readonly Translated[];
  technologies: readonly Tech[];
  workload?: Workload;
};

/** A span of contractual status: employed or self-employed. Carries no work content. */
export type Experience = {
  title: Translated;
  company: string;
  city: string;
  period: Period;
  /** One line explaining an overlap with another Experience or Project. */
  note?: Translated;
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
  /** Shown in the page-one header and used as the source of the document title. */
  title: Translated;
  summary: Translated;
  /** Four to six short themes saying what the user is hired for. Each is backed by Projects. */
  focusAreas: readonly Translated[];
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
