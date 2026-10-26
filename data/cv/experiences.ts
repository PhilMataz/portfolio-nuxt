import type { Experience } from "~/types/cv";

export const EXPERIENCES = [
  {
    role: {
      de: "Freiberuflicher Software Engineer",
      en: "Freelance Software Engineer",
    },
    location: "Essen",
    period: { start: "2022-01" },
  },
  {
    role: { de: "Software Engineer", en: "Software Engineer" },
    location: "Ruhrkraft GmbH - Essen",
    period: { start: "2021-06", end: "2021-12" },
  },
  {
    role: { de: "Software Engineer", en: "Software Engineer" },
    location: "Westend Druckereibetriebe GmbH - Essen",
    period: { start: "2018-01", end: "2021-06" },
  },
  {
    role: { de: "Werkstudent", en: "Student Assistant" },
    location: "Hochschule Düsseldorf",
    period: { start: "2016-06", end: "2017-12" },
  },
] as const satisfies readonly Experience[];
