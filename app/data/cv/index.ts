import type { CvData } from "~/types/cv";
import { EDUCATION } from "./education";
import { EXPERIENCES } from "./experiences";
import { LANGUAGES } from "./languages";
import { PROFILE } from "./profile";
import { PROJECTS } from "./projects";
import { REFERENCES } from "./references";
import { SKILLS, type Skill } from "./skills";

export const CV = {
  profile: PROFILE,
  skills: SKILLS,
  projects: PROJECTS,
  experiences: EXPERIENCES,
  education: EDUCATION,
  references: REFERENCES,
  languages: LANGUAGES,
} satisfies CvData;

export type { Tech } from "./tech";
export type { Skill } from "./skills";

/**
 * Every skill must appear in at least one project's tech list.
 * If not, `vue-tsc` fails here and the error names the unused skill.
 */
type UsedTech = (typeof PROJECTS)[number]["technologies"][number];
type UnusedSkill = Exclude<Skill, UsedTech>;
type Assert<T extends true> = T;
export type SkillsAreUsed = Assert<UnusedSkill extends never ? true : UnusedSkill>;
