import type { Profile } from "~/types/cv";

export const PROFILE = {
  firstName: "Phillip",
  lastName: "Matambanadzo",
  title: { de: "Senior Software Engineer", en: "Senior Software Engineer" },
  summary: {
    de: `Senior Fullstack-Entwickler mit Frontend-Schwerpunkt
      und rund zehn Jahren Erfahrung im JavaScript/TypeScript-Ökosystem.
      Mein Schwerpunkt liegt auf Vue.js – insbesondere auf der Modernisierung
      großer, langlebiger Produktivanwendungen:
      Migrationen von Vue 2 auf Vue 3, Umstellungen der Build-Toolchain
      von Webpack auf Vite sowie die Arbeit an Performance,
      Testing und Zuverlässigkeit, die umfangreiche Frontends wartbar hält.
      Ich arbeite über den gesamten Stack mit Node.js und SQL-Datenbanken
      auf AWS und Azure und bin in Enterprise-Umgebungen zu Hause,
      in denen Stabilität und nachvollziehbare Qualitätsstandards zählen.`,
    en: `Senior full-stack engineer with a frontend focus and
      roughly ten years in the JavaScript/TypeScript
      ecosystem. My specialisation is Vue.js — specifically
      the modernisation of large, long-lived production
      applications: Vue 2→3 migrations, Webpack→Vite build overhauls,
      and the performance, testing, and reliability work that
      keeps sizeable frontends maintainable. I work across the
      stack with Node.js and SQL databases on AWS and Azure,
      and I'm at home in enterprise environments where stability
      and clear quality standards count.`,
  },
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
