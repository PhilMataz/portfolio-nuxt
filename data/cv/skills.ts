import type { Tech } from "./tech";

/** The subset of the tech catalogue shown in the sidebar skills section. */
export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Vue.js",
  "Nuxt",
  "Pinia",
  "Pinia Colada",
  "React",
  "Angular",
  "Vite",
  "Webpack",
  "Vitest",
  "Jest",
  "Cypress",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "WebSocket",
  "Git",
  "Python",
  "Kubernetes",
  "Docker",
  "AWS",
  "Azure",
  "Drizzle ORM",
  "Prisma ORM",
  "PostgreSQL",
  "MongoDB",
  "MSSQL",
] as const satisfies readonly Tech[];

export type Skill = (typeof SKILLS)[number];
