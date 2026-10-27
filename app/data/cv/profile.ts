import type { Profile } from "~/types/cv";

export const PROFILE = {
  firstName: "Phillip",
  lastName: "Matambanadzo",
  title: {
    de: "Senior Fullstack-Entwickler (Vue.js / TypeScript)",
    en: "Senior Fullstack Engineer (Vue.js / TypeScript)",
  },
  summary: {
    de: `Senior Fullstack-Entwickler mit Vue.js- und TypeScript-Schwerpunkt
      und rund zehn Jahren Erfahrung im JavaScript-Ökosystem.
      Ich modernisiere große, langlebige Produktivanwendungen:
      Migrationen von Vue 2 auf Vue 3, Umstellungen der Build-Toolchain
      von Webpack auf Vite sowie die Arbeit an Performance,
      Testing und Zuverlässigkeit, die umfangreiche Frontends wartbar hält.
      Ich arbeite über den gesamten Stack mit Node.js und SQL-Datenbanken
      auf AWS und Azure und bin in Enterprise-Umgebungen zu Hause,
      in denen Stabilität und nachvollziehbare Qualitätsstandards zählen.`,
    en: `Senior Fullstack Engineer specialising in Vue.js and TypeScript,
      with roughly ten years in the JavaScript ecosystem.
      I modernise large, long-lived production applications:
      Vue 2 to Vue 3 migrations, Webpack to Vite build overhauls,
      and the performance, testing and reliability work that
      keeps sizeable frontends maintainable. I work across the
      stack with Node.js and SQL databases on AWS and Azure,
      and I'm at home in enterprise environments where stability
      and clear quality standards count.`,
  },
  focusAreas: [
    {
      de: "Modernisierung großer Vue.js-Anwendungen (Vue 2 → 3, Webpack → Vite)",
      en: "Modernising large Vue.js applications (Vue 2 → 3, Webpack → Vite)",
    },
    {
      de: "Frontend-Architektur mit Nuxt, TypeScript und Pinia",
      en: "Frontend architecture with Nuxt, TypeScript and Pinia",
    },
    {
      de: "Node.js-APIs und Backend-for-Frontend mit SQL-Datenbanken",
      en: "Node.js APIs and backend-for-frontend with SQL databases",
    },
    {
      de: "Echtzeit-Dashboards und Datenvisualisierung (WebSocket, IoT)",
      en: "Real-time dashboards and data visualisation (WebSocket, IoT)",
    },
    {
      de: "Testing, Monitoring und Zuverlässigkeit in Enterprise-Umgebungen",
      en: "Testing, monitoring and reliability in enterprise environments",
    },
    {
      de: "Technische Leitung und Teamkoordination",
      en: "Technical leadership and team coordination",
    },
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
