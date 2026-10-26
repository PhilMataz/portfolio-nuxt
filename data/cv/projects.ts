import type { Project } from "~/types/cv";

export const PROJECTS = [
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "Bilfinger Global IT",
    period: { start: "2025-08" },
    technologies: [
      "TypeScript",
      "Vue",
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
    description: {
      de: "Im Rahmen einer Modernisierung übernehme ich die technische Leitung beim Neubau einer Ressourcenplanungs- und Scheduling-Applikation. Der Fokus liegt auf der Verbesserung von Performance, Wartbarkeit und UX durch den Einsatz moderner Frontend-Technologien. Meine Aufgaben umfassen:",
      en: "I am leading the redevelopment of a legacy resource allocation and scheduling application. The project focuses on improving performance, maintainability, and user experience by adopting a cutting-edge Vue 3 ecosystem and modern build tools. My responsibilities include:",
    },
    bullets: [
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
  },
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "INDTACT GMBH",
    period: { start: "2024-10", end: "2025-06" },
    technologies: [
      "TypeScript",
      "Vue",
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
    description: {
      de: "Ich entwickelte das Frontend und das BFF (Backend-for-Frontend) für ein Qualitätssicherungssystem, das in der Automobilfertigung eingesetzt wird. Das System kommuniziert mit spezialisierten Bluetooth-Geräten (SmartClicks), um Klangsignaturen zu erfassen und die korrekte Installation von Steckverbindern sicherzustellen. Zu meinen Aufgaben gehörten:",
      en: "I developed the frontend and BFF (Backend-for-Frontend) for a quality assurance system used in automotive manufacturing. The system interfaces with specialized Bluetooth devices (SmartClicks) to collect sound signatures and ensure correct connector installations. My responsibilities included:",
    },
    bullets: [
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
  },
  {
    role: { de: "Senior Fullstack Engineer", en: "Senior Fullstack Engineer" },
    company: "SMG",
    period: { start: "2023-11", end: "2024-12" },
    technologies: [
      "TypeScript",
      "Vue",
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
    description: {
      de: "Ich arbeitete mit einem internationalen Team an der Verbesserung der Verkaufsprozesse von Homegate.ch und Immoscout24.ch. Ich leitete die Migration des Frontends von Vue 2 auf Vue 3 und der Backend-Infrastruktur von Serverless zu AWS CDK. Ich richtete Datadog-Monitoring ein und wendete SRE-Prinzipien an, um die Zuverlässigkeit und Leistung zu verbessern. Mein Fokus lag auf:",
      en: "I worked with an international team to improve the sales funnels of Homegate.ch and Immoscout24.ch. I led the upgrades of the frontend from Vue 2 to Vue 3 and the backend infrastructure from Serverless to AWS CDK. I set up Datadog monitoring and applied SRE principles to enhance reliability and performance. My focus was on:",
    },
    bullets: [
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
  },
  {
    role: { de: "Senior Frontend Engineer", en: "Senior Frontend Engineer" },
    company: "Mercedes-benz.io",
    period: { start: "2021-12", end: "2023-09" },
    technologies: [
      "Vue",
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
    description: {
      de: "Als Teil eines internationalen Teams trug ich zur Entwicklung der Mercedes Me Webshop-Plattform bei. Meine Aufgaben umfassten:",
      en: "As part of an international team, I contributed to developing the Mercedes Me web storefront. My responsibilities included:",
    },
    bullets: [
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
  },
  {
    role: { de: "Fullstack Engineer", en: "Fullstack Engineer" },
    company: "Auteon",
    period: { start: "2021-10", end: "2022-04" },
    technologies: [
      "TypeScript",
      "Vue",
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
    description: {
      de: "Ich entwickelte einen Proof of Concept zur Analyse von Automotive-eCommerce-Websites und erstellte einen Webscrapingdienst. Nach Fertigstellung schulte ich andere Entwickler in der Nutzung. Meine Arbeit umfasste:",
      en: "I built a proof of concept to reverse engineer automotive eCommerce websites and create a web scraping service. After completing it, I trained other developers on how to use it. My work involved:",
    },
    bullets: [
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
  },
  {
    role: { de: "Fullstack Engineer", en: "Fullstack Engineer" },
    company: "Ruhrkraft GmbH",
    period: { start: "2020-09", end: "2021-09" },
    technologies: [
      "TypeScript",
      "Vue",
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
    description: {
      de: "Ich entwarf und entwickelte einen Scheduler für ein Digital Signage CMS. Dies ermöglichte Benutzern die einfache Planung, Terminierung und das Hochladen von Werbekampagnen zur Anzeige auf Bildschirmen an verschiedenen Standorten. Meine Hauptziele waren:",
      en: "I designed and built a scheduler for a Digital Signage CMS. This allowed users to easily plan, schedule, and upload ad campaigns to be displayed on screens in multiple locations. My main goals were:",
    },
    bullets: [
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
  },
  {
    role: { de: "Fullstack Engineer", en: "Fullstack Engineer" },
    company: "Westend Druckereibetriebe",
    period: { start: "2018-01", end: "2021-07" },
    technologies: [
      "TypeScript",
      "Vue",
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
    description: {
      de: "Bei diesem großen Druckunternehmen war ich für die Verbesserung der digitalen Prozesse zuständig. Ich entwarf und entwickelte eine Auftragserfassungsanwendung, die als Hauptschnittstelle zwischen dem Unternehmen und den Kunden diente. Außerdem erstellte ich umfassende End-to-End- und Unit-Test-Suites, um die Zuverlässigkeit und Fehlerfreiheit der App sicherzustellen. Meine Haupttätigkeiten umfassten:",
      en: "At this major printing company, I was tasked with improving their digital processes. I designed and developed an order placement application that served as the main interface between the company and customers. I also created comprehensive end-to-end and unit test suites to ensure the app was reliable and bug-free. My key activities included:",
    },
    bullets: [
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
  },
] as const satisfies readonly Project[];
