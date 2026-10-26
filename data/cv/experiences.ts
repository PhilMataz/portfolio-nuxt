import type { Experience } from "~/types/cv";

export const EXPERIENCES = [
  {
    title: {
      de: "Freiberuflicher Software Engineer",
      en: "Freelance Software Engineer",
    },
    company: "Freelance",
    city: "Essen",
    period: { start: "2022-01" },
  },
  {
    title: { de: "Software Engineer", en: "Software Engineer" },
    company: "Ruhrkraft GmbH",
    city: "Essen",
    period: { start: "2021-06", end: "2021-12" },
  },
  {
    title: { de: "Software Engineer", en: "Software Engineer" },
    company: "Westend Druckereibetriebe GmbH",
    city: "Essen",
    period: { start: "2018-01", end: "2021-06" },
  },
] as const satisfies readonly Experience[];
