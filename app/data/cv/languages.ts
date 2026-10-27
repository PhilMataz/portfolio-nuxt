import type { LanguageSkill } from "~/types/cv";

export const LANGUAGES = [
  { language: "german", level: "c2" },
  { language: "english", level: "c1" },
  { language: "portuguese", level: "b1" },
] as const satisfies readonly LanguageSkill[];
