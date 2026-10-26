import type { Project } from "~/types/cv";

export const PROJECTS = [
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "Bilfinger Global IT",
    industry: {
      de: "Industrieservices / Engineering",
      en: "Industrial services / engineering",
    },
    period: { start: "2025-08" },
    technologies: [
      "TypeScript",
      "Vue.js",
      "Vite",
      "Vitest",
      "Pinia",
      "Pinia Colada",
      "Tailwind CSS",
      "Node.js",
      "Prisma ORM",
      "MSSQL",
      "Bryntum",
      "AG Grid",
      "Azure",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    context: {
      de: "Im Rahmen einer Modernisierung übernehme ich die technische Leitung beim Neubau einer Ressourcenplanungs- und Scheduling-Applikation. Der Fokus liegt auf der Verbesserung von Performance, Wartbarkeit und UX durch den Einsatz moderner Frontend-Technologien.",
      en: "I am leading the redevelopment of a legacy resource allocation and scheduling application. The project focuses on improving performance, maintainability and user experience by adopting the Vue 3 ecosystem and modern build tools.",
    },
    tasks: [
      {
        de: "Migration von Webpack auf Vite",
        en: "Driving the migration from Webpack to Vite for faster builds and improved DX",
      },
      {
        de: "Einführung von Pinia und Pinia Colada für intelligentes, cache-basiertes State-Management",
        en: "Introducing Pinia and Pinia Colada for intelligent, cache-aware state management",
      },
      {
        de: "Neuentwicklung der Ressourcen- und Planungsmodule",
        en: "Rebuilding the scheduling and resource planning modules in Vue 3",
      },
      {
        de: "Integration und Anpassung komplexer UI-Komponenten (Bryntum, AgGrid)",
        en: "Integrating and customizing advanced UI components (Bryntum, AgGrid)",
      },
      {
        de: "Implementierung serverseitiger Logik und APIs mit Node.js, MSSQL und Prisma ORM",
        en: "Implementing backend APIs and logic with Node.js, MSSQL and Prisma ORM",
      },
      {
        de: "Sicherstellung der reibungslosen Integration in die bestehende Azure-Infrastruktur",
        en: "Ensuring smooth integration with the existing Azure infrastructure",
      },
    ],
    outcomes: [],
  },
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "INDTACT GMBH",
    industry: {
      de: "Automobilindustrie / Industrie-IoT",
      en: "Automotive / industrial IoT",
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
    industry: {
      de: "Immobilienplattformen / Online-Marktplätze",
      en: "Real estate platforms / online marketplaces",
    },
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
      de: "Automobilindustrie / E-Commerce",
      en: "Automotive / e-commerce",
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
      de: "Automotive-Aftermarket / E-Commerce",
      en: "Automotive aftermarket / e-commerce",
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
    industry: {
      de: "Digital Signage / Werbetechnik",
      en: "Digital signage / advertising",
    },
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
    industry: { de: "Druckindustrie", en: "Printing industry" },
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
