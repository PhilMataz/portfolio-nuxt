import type { Education } from "~/types/cv";

export const EDUCATION = [
  {
    degree: "Abitur",
    school: "Alfred-Krupp-Schule Essen",
    years: { from: 2009 },
  },
  {
    degree: "Bachelor of Science",
    program: { de: "Bauingenieurwesen", en: "Civil Engineering" },
    school: "Ruhr Uni Bochum",
    years: { from: 2010, to: 2015 },
  },
  {
    degree: "Bachelor of Science",
    program: { de: "Medieninformatik", en: "Media IT" },
    school: "HS Düsseldorf",
    years: { from: 2015, to: 2018 },
  },
] as const satisfies readonly Education[];
