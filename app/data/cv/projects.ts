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
      de: "Ich entwickelte eine live betriebene Ressourcenplanungs-Anwendung in einem Scrum-Team mit fünf Entwicklern und drei Product Ownern über den gesamten Stack weiter und verantwortete Architekturentscheidungen, Testing-Strategie und KI-gestützte Entwicklung mit Claude Code.",
      en: "I continued the development of a live resource planning application across the whole stack in a Scrum team of five developers and three product owners and owned architecture decisions, the testing strategy and AI-assisted development with Claude Code.",
    },
    tasks: [
      {
        de: "Anforderungsklärung mit den Fachbereichen: Meeting-Aufzeichnungen per LLM gegen Annahmen und Codebasis geprüft, 12 PRDs verfasst",
        en: "Clarified requirements with business stakeholders: checked meeting recordings against assumptions and the codebase with an LLM, wrote 12 PRDs",
      },
      {
        de: "Zerlegung der Epics in kleine, agentengerechte Jira-Tickets mit Aufwandsschätzung: 149 Tickets verfasst (31 Stories, 97 Teilaufgaben), 192 abgeschlossen",
        en: "Broke epics down into small, agent-sized Jira tickets including effort estimates: wrote 149 tickets (31 stories, 97 sub-tasks), resolved 192",
      },
      {
        de: "UI/UX-Konzeption mit 9 agentisch erzeugten HTML-Prototypen für Entscheidungen mit den Product Ownern",
        en: "UI/UX concept work with 9 agent-generated HTML prototypes for decisions with the product owners",
      },
      {
        de: "Architektur-Dokumentation für Team und Coding-Agenten: 42 ADRs, Glossar mit 57 Begriffen; Neuordnung des Datenmodells mit 15 SQL-Migrationen; Shared-Types-Paket als Frontend-Backend-Vertrag",
        en: "Architecture documentation for team and coding agents: 42 ADRs, 57-term glossary; data model redesign with 15 SQL migrations; shared-types package as the frontend-backend contract",
      },
      {
        de: "Testing-Strategie für das bis dahin testfreie Produkt: Akzeptanzspezifikation mit AC-IDs (30 ACs, 77 % in Tests referenziert), 66 Vitest-Suites, Test-Gate in der PR-Pipeline, Git-Hooks",
        en: "Testing strategy for a product that had no tests: acceptance spec with AC IDs (30 ACs, 77 % referenced by tests), 66 Vitest suites, test gate in the PR pipeline, Git hooks",
      },
      {
        de: "KI-gestützte Entwicklung mit Claude Code: TDD als Standard, repo-übergreifender Review-Skill nach Googles Code-Review-Standard (23 Reviews), Docker-Sandbox-Schleife; dem Team vorgestellt, das danach ein automatisiertes PR-Review einführte",
        en: "AI-assisted development with Claude Code: TDD as the default, a cross-repo review skill following Google's code review standard (23 reviews), a Docker sandbox loop; presented to the team, which then introduced an automated PR review",
      },
      {
        de: "Backend mit Node.js und Prisma auf MSSQL (91 Pull Requests): REST-Endpunkte für Equipment, Personen, Kapazitäten und Qualifikationen, Bryntum-CrudManager-Sync, Register fachlicher Ablehnungscodes",
        en: "Backend with Node.js and Prisma on MSSQL (91 pull requests): REST endpoints for equipment, persons, capacities and qualifications, Bryntum CrudManager sync, a refusal-code registry",
      },
      {
        de: "Performance: Endpunkt von 8,4 s auf rund 1 s, Batch-Inserts, Chunking unter dem 2100-Parameter-Limit von SQL Server; zeitzonenneutrale Datumslogik",
        en: "Performance: one endpoint from 8.4 s to about 1 s, batch inserts, chunking under SQL Server's 2100-parameter limit; timezone-neutral date logic",
      },
      {
        de: "Frontend: Scheduler mit Bryntum und AG Grid, Einführung von Pinia Colada, Migration von Webpack auf Vite; Review von 89 Pull Requests von sieben Kollegen",
        en: "Frontend: scheduler with Bryntum and AG Grid, introduced Pinia Colada, migrated from Webpack to Vite; reviewed 89 pull requests from seven colleagues",
      },
    ],
    outcomes: [
      {
        de: "Test- und Review-Gates in der PR-Pipeline, Architektur- und Testentscheidungen in 42 ADRs nachlesbar",
        en: "Test and review gates in the PR pipeline; architecture and testing decisions readable in 42 ADRs",
      },
    ],
  },
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "INDTACT GMBH",
    industry: {
      sector: "automotive",
      segment: { de: "Fertigung / Industrie-IoT", en: "Manufacturing / industrial IoT" },
    },
    period: { start: "2024-10", end: "2025-06" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "Nuxt",
      "Tailwind CSS",
      "Node.js",
      "WebSocket",
      "Drizzle ORM",
      "PostgreSQL",
      "Python",
      "Docker",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Ich entwickelte das Frontend und das BFF (Backend-for-Frontend) für ein Qualitätssicherungssystem, das in der Automobilfertigung eingesetzt wird. Das System kommuniziert mit spezialisierten Bluetooth-Geräten (SmartClicks), um Klangsignaturen zu erfassen und die korrekte Installation von Steckverbindern sicherzustellen.",
      en: "I developed the frontend and BFF (Backend-for-Frontend) for a quality assurance system used in automotive manufacturing. The system interfaces with specialized Bluetooth devices (SmartClicks) to collect sound signatures and ensure correct connector installation.",
    },
    tasks: [
      {
        de: "Entwurf einer domain-driven Frontend-Architektur mit Nuxt und TypeScript",
        en: "Architecting a domain-driven frontend structure using Nuxt and TypeScript",
      },
      {
        de: "Implementierung von Echtzeit-WebSocket-Verbindungen zur Datenerfassung und Live-Überwachung",
        en: "Implementing real-time WebSocket connections for data collection and live monitoring",
      },
      {
        de: "Erstellung eines Gerätemanagement-Dashboards für die Konfiguration von Gateways und SmartClicks",
        en: "Building a device management dashboard for gateway and SmartClick configuration",
      },
      {
        de: "Entwicklung von Datenerfassungsschnittstellen für die Aufzeichnung und Kennzeichnung von Klangsignaturen",
        en: "Creating data collection interfaces for sound signature recording and labeling",
      },
      {
        de: "Entwurf und Implementierung von RESTful APIs mit Drizzle ORM und PostgreSQL",
        en: "Designing and implementing RESTful APIs using Drizzle ORM and PostgreSQL",
      },
      {
        de: "Entwicklung von Echtzeit-Visualisierungen für Feedback zur Verbindungsqualität",
        en: "Developing real-time visualizations for connection quality feedback",
      },
    ],
    outcomes: [],
  },
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "SMG",
    industry: { sector: "realEstate" },
    period: { start: "2023-11", end: "2024-12" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "Vite",
      "Vitest",
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
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Ich arbeitete mit einem internationalen Team an der Verbesserung der Verkaufsprozesse von Homegate.ch und Immoscout24.ch. Ich leitete die Migration des Frontends von Vue 2 auf Vue 3 und der Backend-Infrastruktur von Serverless zu AWS CDK. Ich richtete Datadog-Monitoring ein und wendete SRE-Prinzipien an, um Zuverlässigkeit und Leistung zu verbessern.",
      en: "I worked with an international team to improve the sales funnels of Homegate.ch and Immoscout24.ch. I led the upgrades of the frontend from Vue 2 to Vue 3 and of the backend infrastructure from Serverless to AWS CDK. I set up Datadog monitoring and applied SRE principles to improve reliability and performance.",
    },
    tasks: [
      {
        de: "Migration zu AWS CDK für besseres Infrastrukturmanagement",
        en: "Migrating to AWS CDK for better infrastructure management",
      },
      {
        de: "Planung und Durchführung der Migration auf Vue 3",
        en: "Planning and executing Vue 2 to Vue 3 upgrade",
      },
      {
        de: "Implementierung von Datadog und SRE-Praktiken zur Steigerung der Zuverlässigkeit",
        en: "Implementing Datadog and SRE practices to boost reliability",
      },
      {
        de: "Verbesserung der Entwicklungsumgebung für höhere Codequalität und Entwicklerproduktivität",
        en: "Improving the dev environment for higher code quality and developer productivity",
      },
    ],
    outcomes: [],
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
      "Tailwind CSS",
      "Jest",
      "GitHub",
      "Kubernetes",
      "Jenkins",
      "SonarQube",
      "Helm Charts",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Als Teil eines internationalen Teams trug ich zur Entwicklung der Mercedes Me Webshop-Plattform bei.",
      en: "As part of an international team, I contributed to developing the Mercedes Me web storefront.",
    },
    tasks: [
      {
        de: "Definition von Feature-Spezifikationen und Koordination mit externen Teams",
        en: "Defining feature specifications and coordinating with external teams",
      },
      {
        de: "Leitung eines Teams von 5-8 Entwicklern",
        en: "Leading a team of 5-8 developers",
      },
      {
        de: "Planung und Durchführung der Migration auf Vue 3",
        en: "Driving the upgrade from Vue 2 to Vue 3",
      },
      {
        de: "Wartung und Support der bestehenden Angular-Codebasis",
        en: "Maintaining and supporting legacy Angular code base",
      },
      {
        de: "Migration der Testsuite von Jest zu Vitest",
        en: "Migrating the test suite from Jest to Vitest",
      },
      {
        de: "Implementierung von TypeScript",
        en: "Implementing TypeScript",
      },
      {
        de: "Entwicklung neuer Features und DevOps-Pipelines",
        en: "Building new features and DevOps pipelines",
      },
      {
        de: "Behebung von Frontend-Problemen",
        en: "Debugging frontend issues",
      },
      {
        de: "Verbesserung der Codequalität und Sicherheit",
        en: "Improving code quality and security",
      },
    ],
    outcomes: [],
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
