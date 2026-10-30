import type { Profile } from "~/types/cv";

export const PROFILE = {
  firstName: "Phillip",
  lastName: "Matambanadzo",
  title: {
    de: "Senior Fullstack-Entwickler (TypeScript / Node.js / Vue.js)",
    en: "Senior Fullstack Engineer (TypeScript / Node.js / Vue.js)",
  },
  summary: {
    de: `Phillip Matambanadzo ist ein Senior Fullstack-Entwickler mit rund
      zehn Jahren Erfahrung im JavaScript-/TypeScript-Ökosystem.
      Sein Schwerpunkt liegt auf der Entwicklung und Modernisierung
      komplexer Webanwendungen, von Node.js-APIs und SQL-Datenbanken
      über Cloud-Infrastruktur auf AWS und Azure bis hin zu
      Frontend-Architekturen mit Vue.js und Nuxt. Er arbeitet eng mit
      Fachbereichen und Product Ownern zusammen, gestaltet Anforderungen
      aktiv mit und nutzt Prototyping, um Produktentscheidungen frühzeitig
      zu konkretisieren. In internationalen Enterprise-Projekten übernahm
      er technische Führungsverantwortung. Coding-Agenten setzt er
      strukturiert ein, mit TDD, automatisierten Qualitätsprüfungen und
      dokumentierten Architekturentscheidungen; diese Arbeitsweise führte
      er in einem Enterprise-Projekt ein und etablierte mit dem Team
      entsprechende Best Practices.`,
    en: `Phillip Matambanadzo is a Senior Fullstack Engineer with around
      ten years in the JavaScript and TypeScript ecosystem. He builds and
      modernises complex web applications across the whole stack: Node.js
      APIs and SQL databases, cloud infrastructure on AWS and Azure, and
      frontend architectures with Vue.js and Nuxt. He works closely with
      business stakeholders and product owners, helps shape requirements,
      and uses prototyping to turn product decisions into something
      concrete early on. On international enterprise projects he has
      taken on technical leadership and led large-scale modernisations.
      He uses coding agents in a structured way, with TDD, automated
      quality checks and documented architecture decisions, and
      introduced this approach on an enterprise project, establishing
      best practices together with the team.`,
  },
  focusAreas: [
    {
      de: "Fullstack-Produktentwicklung: TypeScript, Node.js, Vue.js und Nuxt",
      en: "Fullstack product development: TypeScript, Node.js, Vue.js and Nuxt",
    },
    {
      de: "KI-gestützte Softwareentwicklung: strukturierter Einsatz von Coding-Agenten (Claude Code), TDD, Qualitäts-Gates in CI/CD und Aufbau von Team-Best-Practices",
      en: "AI-assisted software development: structured use of coding agents (Claude Code), TDD, quality gates in CI/CD, and building team best practices",
    },
    {
      de: "Backend und Cloud: Node.js-APIs, Datenmodellierung, SQL-Datenbanken (PostgreSQL, MSSQL, Prisma, Drizzle), AWS (CDK, Lambda, SQS/SNS) und Azure",
      en: "Backend and cloud: Node.js APIs, data modelling, SQL databases (PostgreSQL, MSSQL, Prisma, Drizzle), AWS (CDK, Lambda, SQS/SNS) and Azure",
    },
    {
      de: "Frontend-Architektur und Modernisierung: große Vue.js-Anwendungen, Migrationen von Vue 2 auf Vue 3 und von Webpack auf Vite",
      en: "Frontend architecture and modernisation: large Vue.js applications, Vue 2 to Vue 3 and Webpack to Vite migrations",
    },
    {
      de: "Echtzeit-Anwendungen und Datenvisualisierung: WebSocket, Industrie-IoT",
      en: "Real-time applications and data visualisation: WebSocket, industrial IoT",
    },
    {
      de: "Testing, Monitoring und Zuverlässigkeit: Vitest, Cypress, Datadog und SRE-Praktiken",
      en: "Testing, monitoring and reliability: Vitest, Cypress, Datadog and SRE practices",
    },
    {
      de: "Technische Konzeption und Führung: Anforderungsklärung mit Fachbereichen, technische Leitung und Teamkoordination",
      en: "Technical design and leadership: requirements work with business stakeholders, technical lead and team coordination",
    },
  ],
  keywords: [
    "Senior Fullstack Engineer",
    "Freelancer",
    "TypeScript",
    "Node.js",
    "Vue.js",
    "Nuxt",
    "AWS",
    "Azure",
    "PostgreSQL",
    "Claude Code",
    "AI-assisted development",
  ],
  contact: {
    tel: "+49 1590 656 2753",
    email: "hello@philmataz.dev",
    address: "Inselstr. 23, 45326 Essen",
    website: { label: "philmataz.dev", href: "http://www.philmataz.dev" },
    github: {
      label: "github.com/PhilMataz",
      href: "http://www.github.com/PhilMataz",
    },
    linkedin: {
      label: "linkedin.com/in/phillip-matambanadzo",
      href: "http://www.linkedin.com/in/phillip-matambanadzo/",
    },
  },
} as const satisfies Profile;
