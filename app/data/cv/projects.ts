import type { Project } from "~/types/cv";

export const PROJECTS = [
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "Bilfinger Global IT",
    industry: { sector: "industrialServices" },
    period: { start: "2025-08", end: "2026-10" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "Vite",
      "Vitest",
      "Playwright",
      "Pinia",
      "Pinia Colada",
      "Tailwind CSS",
      "Bryntum",
      "AG Grid",
      "Node.js",
      "Prisma ORM",
      "MSSQL",
      "Azure",
      "Azure DevOps",
      "Jira",
      "Claude Code",
      "Docker",
      "Git",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Er entwickelte eine live betriebene Ressourcenplanungs-Anwendung in einem Scrum-Team mit fünf Entwicklern und drei Product Ownern über den gesamten Stack weiter und verantwortete Architekturentscheidungen, Testing-Strategie und KI-gestützte Entwicklung mit Claude Code.",
      en: "He continued the development of a live resource planning application across the whole stack in a Scrum team of five developers and three product owners and owned architecture decisions, the testing strategy and AI-assisted development with Claude Code.",
    },
    tasks: [
      {
        de: "Anforderungsklärung mit den Fachbereichen und Erstellung von 12 PRDs",
        en: "Clarified requirements with business stakeholders and wrote 12 PRDs",
      },
      {
        de: "Zerlegung von Epics in agentengerechte Jira-Tickets mit Aufwandsschätzung",
        en: "Broke epics down into agent-sized Jira tickets with effort estimates",
      },
      {
        de: "UI/UX-Konzeption mit HTML-Prototypen als Entscheidungsgrundlage für die Product Owner",
        en: "UI/UX concept work with HTML prototypes as the decision basis for the product owners",
      },
      {
        de: "Architektur-Dokumentation in ADRs und einem Fachglossar für Team und Coding-Agenten",
        en: "Architecture documentation in ADRs and a domain glossary for team and coding agents",
      },
      {
        de: "Neuordnung des Datenmodells mit 15 SQL-Migrationen; Shared-Types-Paket als Frontend-Backend-Vertrag",
        en: "Data model redesign with 15 SQL migrations; shared-types package as the frontend-backend contract",
      },
      {
        de: "Aufbau der Testing-Strategie für das bis dahin testfreie Produkt: Akzeptanzkriterien mit IDs, Vitest-Suites, Test-Gate in der PR-Pipeline, Git-Hooks",
        en: "Built the testing strategy for a product that had no tests: acceptance criteria with IDs, Vitest suites, test gate in the PR pipeline, Git hooks",
      },
      {
        de: "Einführung KI-gestützter Entwicklung mit Claude Code: TDD als Standard, Review-Skill, Docker-Sandbox für Agentenläufe",
        en: "Introduced AI-assisted development with Claude Code: TDD as the default, a review skill, a Docker sandbox for agent runs",
      },
      {
        de: "Entwicklung von REST-Endpunkten mit Node.js, Prisma und MSSQL (Equipment, Personen, Kapazitäten, Qualifikationen) inkl. Bryntum-CrudManager-Sync; Batch-Inserts und Chunking unter dem Parameterlimit von SQL Server",
        en: "Developed REST endpoints with Node.js, Prisma and MSSQL (equipment, persons, capacities, qualifications) including Bryntum CrudManager sync; batch inserts and chunking under SQL Server's parameter limit",
      },
      {
        de: "Entwicklung des Schedulers mit Bryntum und AG Grid; Einführung von Pinia Colada; Migration von Webpack auf Vite",
        en: "Developed the scheduler with Bryntum and AG Grid; introduced Pinia Colada; migrated from Webpack to Vite",
      },
      {
        de: "Code-Reviews für das Team (89 Pull Requests von sieben Kollegen)",
        en: "Code reviews for the team (89 pull requests from seven colleagues)",
      },
    ],
    outcomes: [
      {
        de: "Antwortzeit eines zentralen Endpunkts von 8,4 s auf rund 1 s reduziert",
        en: "Response time of a central endpoint reduced from 8.4 s to about 1 s",
      },
      {
        de: "Produkt von null auf 66 Vitest-Suites gebracht; 77 % der Akzeptanzkriterien in Tests referenziert; Tests als Pflicht-Gate in der PR-Pipeline",
        en: "Took the product from zero to 66 Vitest suites; 77 % of acceptance criteria referenced by tests; tests as a mandatory gate in the PR pipeline",
      },
      {
        de: "42 Architekturentscheidungen als ADRs nachvollziehbar dokumentiert",
        en: "42 architecture decisions documented as traceable ADRs",
      },
      {
        de: "KI-Review-Ansatz im Team vorgestellt; das Team führte daraufhin ein automatisiertes PR-Review ein",
        en: "Presented the AI review approach to the team, which then introduced an automated PR review",
      },
    ],
  },
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "Kakadu Labs",
    industry: {
      sector: "automotive",
      segment: {
        de: "Fertigung / Industrie-IoT / Machine Learning",
        en: "Manufacturing / industrial IoT / machine learning",
      },
    },
    period: { start: "2024-10", end: "2025-06" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "Nuxt",
      "Tailwind CSS",
      "DaisyUI",
      "ECharts",
      "WebSocket",
      "Node.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Zod",
      "Docker",
      "Git",
      "GitHub",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "SmartClick Training Suite für die iNDTact GmbH: Sensordaten von Bluetooth-Geräten (SmartClicks) in der Automobilfertigung werden erfasst und gelabelt, neuronale Netze darauf trainiert und auf die Geräte gespielt. Ich verantwortete die Nuxt-Anwendung vom Tablet-HMI bis zum BFF, bis Dezember 2024 in Teilzeit neben SMG, danach in Vollzeit.",
      en: "SmartClick Training Suite for iNDTact GmbH: sensor data from Bluetooth SmartClick devices on automotive production lines is collected and labelled, neural networks are trained on it and deployed to the devices. I owned the Nuxt application from the tablet HMI to the BFF, part-time alongside SMG until December 2024, then full-time.",
    },
    tasks: [
      {
        de: "Konkretisierung vager Anforderungen mit Kakadu Labs und iNDTact mit Rückfragen und Prototypen, die die Nutzung prägten",
        en: "Turned vague requirements from Kakadu Labs and iNDTact into concrete ones with questions and prototypes that shaped its use",
      },
      {
        de: "Tablet-HMI zur Datenerfassung: Aufzeichnung von Sensormessungen, Tagging und Labeling mit Autocomplete, Dark Theme, Optimierung für iPad",
        en: "Tablet HMI for data collection: recording sensor measurements, tagging and labelling with autocomplete, dark theme, optimised for iPad",
      },
      {
        de: "Gerätemanagement: Gateways und SmartClicks mit Batteriestand und RSSI, Konfiguration von Burst-Erkennung, Filtern und Übertragungsmodus, Soll-Ist-Abgleich",
        en: "Device management: gateways and SmartClicks with battery level and RSSI, configuration of burst detection, filters and transmit mode, desired-versus-current sync",
      },
      {
        de: "Live-Ansicht über WebSocket: Echtzeit-Charts von Rohsensordaten und Ergebnissen des neuronalen Netzes (ECharts), Migration auf v2-Endpunkte",
        en: "Live view over WebSocket: real-time charts of raw sensor data and neural-network results (ECharts), migrated to v2 endpoints",
      },
      {
        de: "Data Explorer: Sichtung erfasster Sensordaten mit Charts und Metadaten-Tabelle, Start von Trainingsläufen",
        en: "Data Explorer: reviewing collected sensor data with charts and a metadata table, starting training runs",
      },
      {
        de: "BFF mit Nuxt-Server-Routen auf PostgreSQL (Drizzle ORM): 8 Routenmodule für Gateways, Gerätekonfiguration, Sensordaten, Tags und Labels, Validierung mit Zod",
        en: "BFF with Nuxt server routes on PostgreSQL (Drizzle ORM): 8 route modules for gateways, device configuration, sensor data, tags and labels, validation with Zod",
      },
      {
        de: "Domain-Refactoring: Repository-Logik in Domänenmodule für SmartClicks und Explorer, Gerätemodell auf SmartClick-Modell migriert; schnellere Gateway-Geräteabfrage",
        en: "Domain refactoring: repository logic into domain modules for SmartClicks and Explorer, device model migrated to the SmartClick model; faster gateway devices query",
      },
      {
        de: "Setup: ESLint, Prettier, Runtime-Config, Upgrade auf Tailwind CSS 4 und DaisyUI 5, Corporate Design, semantische Fieldsets (Barrierefreiheit), i18n DE/EN",
        en: "Setup: ESLint, Prettier, runtime config, upgrade to Tailwind CSS 4 and DaisyUI 5, corporate design, semantic fieldsets (accessibility), i18n EN/DE",
      },
      {
        de: "Leitung der Frontend-Arbeit: Schätzung und Aufgabenverteilung mit einem Backend-Kollegen, Review und Mentoring in Vue und Nuxt; manuelle Tests gegen BLE-Emulator und Docker-Compose-Stack; 134 Commits per GitHub-Pull-Request",
        en: "Led the frontend work: estimated and split tasks with a backend colleague, reviewed and mentored him in Vue and Nuxt; manual testing against the BLE emulator and Docker Compose stack; 134 commits via GitHub pull requests",
      },
    ],
    outcomes: [
      {
        de: "Inbetriebnahme in einer Automobil-Produktionslinie, mit dem vollständigen Kreislauf von Datenerfassung über Training bis Live-Auswertung",
        en: "In use on an automotive production line, with the complete loop from data collection through training to live evaluation",
      },
      {
        de: "Die Nuxt-Anwendung ging vom Prototyp zum ausgelieferten Produkt, mit mir als Hauptautor",
        en: "The Nuxt application went from prototype to delivered product, with me as its main author",
      },
    ],
  },
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "SMG",
    industry: { sector: "realEstate" },
    period: { start: "2023-11", end: "2024-12" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "Vue Router",
      "VueX",
      "Vue I18n",
      "Vite",
      "Vitest",
      "Cypress",
      "Auth0",
      "Node.js",
      "AWS",
      "AWS API Gateway",
      "AWS CloudFront",
      "AWS Lambda",
      "AWS SQS",
      "AWS SNS",
      "AWS CDK",
      "Datadog",
      "Git",
      "GitHub",
      "Jira",
      "Scrum",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Homegate.ch und ImmoScout24.ch, die beiden größten Immobilienportale der Schweiz, teilen sich einen Inserate-Funnel, in dem Privatverkäufer und Agenturen Inserate erfassen und bezahlen, die umsatzstärkste Sparte der Gruppe. Für die Vue-3-Migration geholt, arbeitete ich zuerst in Backend und Frontend des Funnels und plante und führte die Migration dann weitgehend allein durch.",
      en: "Homegate.ch and ImmoScout24.ch, Switzerland's two largest property portals, share one listing-insertion funnel where private sellers and agencies create and pay for property ads, the group's largest revenue line. Hired for the Vue 3 migration, I first worked across the funnel's Lambda backend and Vue frontend, then planned and executed the migration essentially alone.",
    },
    tasks: [
      {
        de: "Planung, Leitung und Durchführung der Vue-2-auf-Vue-3-Migration des Multi-Brand-Frontends (155 Komponenten, 726 Dateien) in drei Monaten, regelmäßig rebased, während das Team weiter umsatzrelevante Features lieferte",
        en: "Planned, led and executed the Vue 2 to Vue 3 migration of the multi-brand frontend (155 components, 726 files) in three months, rebasing regularly while the team kept shipping revenue features on main",
      },
      {
        de: "Vite und Vitest statt Nachrüsten der Webpack-Toolchain durchgesetzt, damit die App nur einmal migriert; Repo als Proof of Concept für die Vue-3-Gilde",
        en: "Chose Vite and Vitest over patching the webpack toolchain so the app migrated only once; the repo became the proof of concept for the other teams in the cross-team Vue 3 guild",
      },
      {
        de: "Ablösung des Headless-Chromium-Prerenderers durch vite-ssg für die SEO-Landingpages beider Marken; Auth, Routing und Designsystem Node-fähig gemacht",
        en: "Replaced the headless-Chromium webpack prerenderer with vite-ssg for the localised SEO landing pages of both brands, making auth, routing and the design system run without a browser",
      },
      {
        de: "Migration der Testsuite von Jest und Vue Test Utils 1 auf Vitest und Vue Test Utils 2 bei gleicher Testabdeckung",
        en: "Migrated the test suite from Jest and Vue Test Utils 1 to Vitest and Vue Test Utils 2, coverage maintained",
      },
      {
        de: "Neuaufbau von Router, Auth0-Plugin und vue-i18n-Setup für Vue 3, Ablösung der Mixins durch Composables",
        en: "Rewrote router, Auth0 plugin and vue-i18n setup for Vue 3 and replaced mixins with composables",
      },
      {
        de: "Migration eines zweiten Frontend-Services (Suchabos) auf Vue 3 und Vite in zwei Wochen nach demselben Vorgehen",
        en: "Migrated a second frontend service (search alerts) to Vue 3 and Vite in two weeks the same way",
      },
      {
        de: "Migration der Backend-Lambdas inkl. SQS- und SNS-Listener von Serverless auf AWS CDK, mit zwei Kollegen",
        en: "Co-migrated the backend Lambdas, including the SQS and SNS listeners, from Serverless Framework to AWS CDK",
      },
      {
        de: "Datadog-Metriken in API und Frontend, darauf Alerts, SLOs, Dashboards und Slack-Alarmkanal",
        en: "Instrumented API and frontend with Datadog metrics and built alerts, SLOs, dashboards and a Slack alert channel on top",
      },
      {
        de: "Entwicklung des Crosslistings: ein Inserat der einen Marke auf der anderen buchen",
        en: "Built crosslisting, so a listing on one brand can be booked onto the other",
      },
      {
        de: "Präsentation der Ergebnisse und einer Phase-2-Roadmap (Composition API, Pinia, vue-i18n 10) vor allen Engineering-Teams und Stakeholdern, damit „fertig“ nicht als „schuldenfrei“ gilt",
        en: 'Presented the results and a phase-two roadmap (Composition API, Pinia, vue-i18n 10) to all engineering teams and stakeholders, so "migration done" was not read as "debt gone"',
      },
    ],
    outcomes: [
      {
        de: "Dev-Server-Start von rund 35 s auf unter eine Sekunde, Produktions-Build halbiert, Unit-Tests rund 30 % schneller",
        en: "Dev-server start from about 35 s to under a second, production build halved, unit test suite about 30% faster",
      },
      {
        de: "Für beide Marken live nach einer Woche teamweiter Tests auf Staging, nur kleine Korrekturen, kein Rollback",
        en: "Live for both brands after a week of team-wide testing on staging, only minor fixes, no revert",
      },
    ],
  },
  {
    role: { de: "Senior Frontend Engineer", en: "Senior Frontend Engineer" },
    company: "Mercedes-benz.io",
    industry: {
      sector: "automotive",
      segment: { de: "E-Commerce", en: "E-commerce" },
    },
    period: { start: "2021-12", end: "2023-09" },
    technologies: [
      "Vue.js",
      "Nuxt",
      "Angular",
      "TypeScript",
      "Pinia",
      "VueX",
      "Vite",
      "Vitest",
      "Cypress",
      "Tailwind CSS",
      "Jest",
      "GitHub",
      "GitHub Actions",
      "Flux CD",
      "Kubernetes",
      "Helm Charts",
      "Docker",
      "SonarQube",
      "ESLint",
      "Prettier",
      "Jira",
      "Scrum",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Mercedes-Benz-Webshop, in dem Mercedes-me-Nutzer digitale Fahrzeugdienste kaufen und verlängern; Vue-Monorepo auf zwei Kubernetes-Clustern für Europa und Übersee. Internationales Frontend-Team von rund 12 Entwicklern, von Vue 2 über Vue 3 bis zur Domänenmigration auf Pinia und TypeScript.",
      en: "Mercedes-Benz web shop where Mercedes me users buy and renew digital in-vehicle products, run as a Vue monorepo and deployed to two Kubernetes clusters for European and overseas markets. Part of an international frontend team of about 12 developers, from Vue 2 to Vue 3 and the domain migration to Pinia and TypeScript.",
    },
    tasks: [
      {
        de: "Leitung der Migration der Domänen Orders, Products und Subscriptions von Vuex auf Pinia und TypeScript-Modelle/Services, Model-Factories als Anti-Corruption-Layer",
        en: "Led the migration of the Orders, Products and Subscriptions domains from Vuex to Pinia, TypeScript models and services, with model factories as an anti-corruption layer",
      },
      {
        de: "Planung und Koordination der Migration von Vue 2 auf Vue 3",
        en: "Planned and coordinated the migration from Vue 2 to Vue 3",
      },
      {
        de: "Planung und Koordination der Umstellung von Jest auf Vitest",
        en: "Planned and coordinated the move of the test suite from Jest to Vitest",
      },
      {
        de: "Konzeption und Pitch der Migration auf Nuxt 3 mit zwei Kollegen",
        en: "Pitched and planned the migration to Nuxt 3 together with two colleagues",
      },
      {
        de: "Entwicklung von Checkout- und Payment-Features: Fast-Lane-Checkout, SEPA-Mandatsänderung, Leasing-Varianten, Buy-Now-Flow, B2B/B2C-Umschaltung, marktspezifische Preisausblendung",
        en: "Built checkout and payment features: fast-lane checkout, SEPA mandate change, leasing variants, buy-now flow, B2B/B2C toggle, market-specific hiding of prices",
      },
      {
        de: "Konfiguration von Helm-Chart-Optionen, Deployments per Flux CD GitOps in Nonprod und Prod auf zwei Clustern",
        en: "Configured Helm chart options and deployed via Flux CD GitOps to nonprod and prod environments on two clusters",
      },
      {
        de: "Release-Management der Releases 8.2 bis 8.4 und Hotfix 8.9.2",
        en: "Managed releases 8.2 to 8.4 and hotfix 8.9.2",
      },
      {
        de: "Wartung des bestehenden Angular-Shops",
        en: "Maintained the legacy Angular shop",
      },
      {
        de: "Schreiben von Vuex-Modul- und Komponententests",
        en: "Wrote Vuex module and component tests",
      },
      {
        de: "Einrichtung von ESLint und Prettier, Behebung von SonarQube-Findings, data-test-ids für die QA",
        en: "Set up ESLint and Prettier, fixed SonarQube findings, added data-test-ids for QA",
      },
      {
        de: "Dokumentation der Domänen, Präsentation des Migrationsansatzes im Team-Review",
        en: "Documented the domains and presented the migration approach in the team review",
      },
      {
        de: "Abstimmung mit Backend-, Content-, B2C- und QA-Team",
        en: "Coordinated with the backend, content, B2C and QA teams",
      },
      {
        de: "Code-Reviews",
        en: "Reviewed code",
      },
      {
        de: "Aufwandsschätzung im Scrum-Refinement",
        en: "Estimated work in Scrum refinement",
      },
      {
        de: "Behebung von Layout-Verschiebungen (CLS) auf der Startseite",
        en: "Fixed layout shift (CLS) on the homepage",
      },
    ],
    outcomes: [
      {
        de: "Shop-Frontend im laufenden Betrieb von Vue 2.6, Vuex und Vue CLI auf Vue 3.3, Pinia, Vite und Vitest umgestellt",
        en: "Shop frontend moved from Vue 2.6, Vuex and Vue CLI to Vue 3.3, Pinia, Vite and Vitest while in continuous production use",
      },
      {
        de: "Domänen Orders, Products und Subscriptions auf TypeScript-Modellen und Services mit Anti-Corruption-Layer neu aufgebaut und als Team-Muster dokumentiert",
        en: "Orders, Products and Subscriptions domains rebuilt on TypeScript models and services with an anti-corruption layer, documented and established as the team pattern",
      },
      {
        de: "Marktspezifische Features wie B2B/B2C-Umschaltung und Preisausblendung über Helm-Chart und Flux CD GitOps in die Produktion beider Cluster ausgeliefert",
        en: "Market-specific features such as the B2B/B2C toggle and hide-prices delivered end to end through Helm chart and Flux CD GitOps to production in both clusters",
      },
    ],
  },
  {
    role: { de: "Fullstack Engineer", en: "Fullstack Engineer" },
    company: "Auteon",
    industry: {
      sector: "automotive",
      segment: { de: "Aftermarket / Ersatzteile", en: "Aftermarket / spare parts" },
    },
    period: { start: "2021-10", end: "2022-04" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "Webpack",
      "Node.js",
      "Google Cloud Functions",
      "Cheerio",
      "Puppeteer",
      "Postman",
      "GraphQL",
      "Hasura",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Ich entwickelte einen Proof of Concept zur Analyse von Automotive-eCommerce-Websites und erstellte einen Webscraping-Dienst. Nach Fertigstellung schulte ich andere Entwickler in der Nutzung.",
      en: "I built a proof of concept to reverse engineer automotive eCommerce websites and create a web scraping service. After completing it, I trained other developers on how to use it.",
    },
    tasks: [
      {
        de: "Analyse von Zielwebsites zum Verständnis ihrer Struktur",
        en: "Analyzing target websites to understand their structure",
      },
      {
        de: "Untersuchung von Quellcode und Netzwerkanfragen",
        en: "Examining source code and network requests",
      },
      {
        de: "Identifizierung von Hindernissen wie CAPTCHAs oder AJAX-Aufrufen",
        en: "Identifying roadblocks like CAPTCHAs or AJAX calls",
      },
      {
        de: "Entwicklung der Scraping-Logik in TypeScript und Node.js",
        en: "Writing the scraping logic in TypeScript and Node.js",
      },
      {
        de: "Erstellung von Postman-Tests zur Validierung der Datenextraktion",
        en: "Creating Postman tests to validate data extraction",
      },
      {
        de: "Dokumentation der Scraping-Service-Architektur",
        en: "Documenting the scraping service architecture",
      },
      {
        de: "Schulung von Entwicklern in der Nutzung des Services",
        en: "Training developers on using the service",
      },
    ],
    outcomes: [],
  },
  {
    role: { de: "Fullstack Engineer", en: "Fullstack Engineer" },
    company: "Ruhrkraft GmbH",
    industry: { sector: "digitalSignage" },
    period: { start: "2020-09", end: "2021-09" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "VueX",
      "React",
      "Meteor",
      "MongoDB",
      "Node.js",
      "Jest",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Ich entwarf und entwickelte einen Scheduler für ein Digital Signage CMS. Dieser ermöglichte Benutzern die einfache Planung, Terminierung und das Hochladen von Werbekampagnen zur Anzeige auf Bildschirmen an verschiedenen Standorten.",
      en: "I designed and built a scheduler for a Digital Signage CMS. It allowed users to plan, schedule and upload ad campaigns for display on screens in multiple locations.",
    },
    tasks: [
      {
        de: "Entwicklung einer intuitiven Oberfläche für das Kampagnenmanagement",
        en: "Developing an intuitive interface for managing campaigns",
      },
      {
        de: "Programmierung von Algorithmen zur Vermeidung von Werbeüberschneidungen und für reibungslose Übergänge",
        en: "Writing algorithms to prevent ad overlap and enable smooth transitions",
      },
      {
        de: "Sicherstellung der Kompatibilität mit verschiedenen Bildschirmgrößen und Auflösungen",
        en: "Ensuring compatibility across various screen sizes and resolutions",
      },
      {
        de: "Erstellung einer robusten Datenstruktur für Kampagnen und Playlists",
        en: "Creating a robust data structure for campaigns and playlists",
      },
      {
        de: "Gründliche Tests zur Gewährleistung zuverlässiger Anzeige auf allen Bildschirmen",
        en: "Thoroughly testing to guarantee reliable display on all screens",
      },
    ],
    outcomes: [],
  },
  {
    role: { de: "Fullstack Engineer", en: "Fullstack Engineer" },
    company: "Westend Druckereibetriebe",
    industry: { sector: "printing" },
    period: { start: "2018-01", end: "2021-07" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
      "Meteor",
      "MongoDB",
      "Node.js",
      "React",
      "VueX",
      "Cypress",
      "Jest",
      "Docker",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Bei diesem großen Druckunternehmen war ich für die Verbesserung der digitalen Prozesse zuständig. Ich entwarf und entwickelte eine Auftragserfassungsanwendung, die als Hauptschnittstelle zwischen dem Unternehmen und den Kunden diente. Außerdem erstellte ich umfassende End-to-End- und Unit-Test-Suites, um die Zuverlässigkeit der App sicherzustellen.",
      en: "At this major printing company, I was tasked with improving its digital processes. I designed and developed an order placement application that served as the main interface between the company and its customers. I also created comprehensive end-to-end and unit test suites to keep the app reliable.",
    },
    tasks: [
      {
        de: "Gestaltung von Benutzeroberflächen und Workflows für die Auftragsapp",
        en: "Designing UIs and workflows for the order app",
      },
      {
        de: "Implementierung und Iteration von Anwendungsfunktionen",
        en: "Implementing and iterating on application features",
      },
      {
        de: "Überwachung von Benutzerfeedback und Vornahme von Verbesserungen",
        en: "Monitoring user feedback and making improvements",
      },
      {
        de: "Aufbau einer vollständigen Test-Suite mit TDD, einschließlich E2E- und Unit-Tests",
        en: "Building a full test suite using TDD, including E2E and unit tests",
      },
      {
        de: "Zusammenarbeit mit funktionsübergreifenden Teams bei kohärenten Entwicklungsstrategien",
        en: "Collaborating with cross-functional teams on cohesive development strategies",
      },
    ],
    outcomes: [],
  },
] as const satisfies readonly Project[];
