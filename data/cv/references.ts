import type { Reference } from "~/types/cv";

const SENIOR_SOFTWARE_ARCHITECT = {
  de: "Senior Software Architekt",
  en: "Senior Software Architect",
};

export const REFERENCES = [
  {
    name: "David Müller",
    company: "Hakobu",
    role: SENIOR_SOFTWARE_ARCHITECT,
    tel: "+49 177 634 002",
    email: "david.mueller@hakobu.de",
  },
  {
    name: "Chi Nguyen",
    company: "May Solutions",
    role: SENIOR_SOFTWARE_ARCHITECT,
    tel: "+49 176 553 684 96",
    email: "chi@may-solutions.io",
  },
] as const satisfies readonly Reference[];
