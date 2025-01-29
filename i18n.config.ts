export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      cv: {
        title: "Senior Software Engineer",
        summary: {
          heading: "Summary",
          text: `Senior Full-Stack Engineer with extensive experience in building scalable
            web applications using modern JavaScript frameworks and cloud technologies.
            Skilled in both frontend (Vue.js, React) and backend (Node.js) development,
            with expertise in DevOps practices and cloud infrastructure. Proven track
            record of delivering high-performance applications, implementing robust CI/CD
            pipelines, and maintaining production systems using modern monitoring
            solutions. Strong focus on code quality through comprehensive
            testing strategies and best practices.`,
        },
        experience: {
          heading: "Work Experience",
          experiences: [
            {
              title: "Freelance Software Engineer",
              location: "Essen",
              duration: "01/2022 - today",
            },
            {
              title: "Software Engineer",
              location: "Ruhrkraft GmbH - Essen",
              duration: "06/2021 - 12/2021",
            },
            {
              title: "Software Engineer",
              location: "Westend Druckereibetriebe GmbH - Essen",
              duration: "01/2018 - 06/2021",
            },
            {
              title: "Student Assistant",
              location: "Hochschule Düsseldorf",
              duration: "06/2021 - 12/2027",
            },
          ],
        },
        techSkills: "Tech Skills",
        projects: {
          heading: "Project Experience",
          technologies: "Technologies",
          description: "Description",
          projects: [
            {
              title: "Senior Fullstack Engineer",
              company: "SMG",
              duration: "11/2023 - 12/2024 (1 year, 1 months)",
              technologies: [
                "Vue",
                "Typescript",
                "Vite",
                "Vitest",
                "Node.js",
                "AWS (Api Gateway, Cloudfront, Lambda, SQS, SNS, CDK)",
                "DataDog",
                "Git",
              ],
              description:
                "I worked with an international team to improve the sales funnels of Homegate.ch and Immoscout24.ch. I led the upgrades of the frontend from Vue 2 to Vue 3 and the backend infrastructure from Serverless to AWS CDK. I set up Datadog monitoring and applied SRE principles to enhance reliability and performance. My focus was on:",
              bullets: [
                "Migrating to AWS CDK for better infrastructure management",
                "Planning and executing Vue 2 to Vue 3 upgrade",
                "Implementing Datadog and SRE practices to boost reliability",
                "Improving the dev environment for higher code quality and developer productivity",
              ],
            },
            {
              title: "Senior Frontend Engineer",
              company: "Mercedes-benz.io",
              duration: "12/2021 - 09/2023 (1 year, 10 months)",
              technologies: [
                "Vue",
                "TypeScript",
                "Pinia",
                "VueX",
                "Vite",
                "Jest",
                "Vitest",
                "GitHub",
                "Kubernetes",
                "Jenkins",
                "SonarQube",
                "Helm Charts",
              ],
              description:
                "As part of an international team, I contributed to developing the Mercedes Me web storefront. My responsibilities included:",
              bullets: [
                "Defining feature specifications and coordinating with external teams",
                "Leading a team of 5-8 developers",
                "Driving the upgrade from Vue 2 to Vue 3",
                "Migrating the test suite from Jest to Vitest",
                "Implementing TypeScript",
                "Building new features and DevOps pipelines",
                "Debugging frontend issues",
                "Improving code quality and security",
              ],
            },
            {
              title: "Senior Fullstack Engineer",
              company: "Auteon",
              duration: "10/2021 - 04/2022 (6 months)",
              technologies: [
                "Vue",
                "TypeScript",
                "Google Cloud Functions",
                "Node.js",
                "Cheerio",
                "Puppeteer",
                "Postman",
                "GraphQL",
                "Hasura",
              ],
              description:
                "I built a proof of concept to reverse engineer automotive eCommerce websites and create a web scraping service. After completing it, I trained other developers on how to use it. My work involved:",
              bullets: [
                "Analyzing target websites to understand their structure",
                "Examining source code and network requests",
                "Identifying roadblocks like CAPTCHAs or AJAX calls",
                "Writing the scraping logic in TypeScript and Node.js",
                "Creating Postman tests to validate data extraction",
                "Documenting the scraping service architecture",
                "Training developers on using the service",
              ],
            },
            {
              title: "Fullstack Engineer",
              company: "Ruhrkraft GmbH",
              duration: "09/2020 - 09/2021 (1 year)",
              technologies: [
                "Vue",
                "React",
                "TypeScript",
                "VueX",
                "Meteor",
                "Node.js",
                "Jest",
              ],
              description:
                "I designed and built a scheduler for a Digital Signage CMS. This allowed users to easily plan, schedule, and upload ad campaigns to be displayed on screens in multiple locations. My main goals were:",
              bullets: [
                "Developing an intuitive interface for managing campaigns",
                "Writing algorithms to prevent ad overlap and enable smooth transitions",
                "Ensuring compatibility across various screen sizes and resolutions",
                "Creating a robust data structure for campaigns and playlists",
                "Thoroughly testing to guarantee reliable display on all screens",
              ],
            },
            {
              title: "Fullstack Engineer",
              company: "Westend Druckereibetriebe",
              duration: "01/2018 - 07/2021 (3 years, 6 months)",
              technologies: [
                "Meteor",
                "Node.js",
                "Vue",
                "React",
                "VueX",
                "Cypress",
                "Jest",
                "Docker",
                "Tailwind CSS",
              ],
              description:
                "At this major printing company, I was tasked with improving their digital processes. I designed and developed an order placement application that served as the main interface between the company and customers. I also created comprehensive end-to-end and unit test suites to ensure the app was reliable and bug-free. My key activities included:",
              bullets: [
                "Designing UIs and workflows for the order app",
                "Implementing and iterating on application features",
                "Monitoring user feedback and making improvements",
                "Building a full test suite using TDD, including E2E and unit tests",
                "Collaborating with cross-functional teams on cohesive development strategies",
              ],
            },
          ],
        },
        references: "References",
        languages: {
          heading: "Languages",
          languages: {
            english: "English",
            german: "German",
            portuguese: "Portuguese",
          },
          levels: {
            c2: "Native Speaker (C2)",
            c1: "Business Fluent (C1)",
            b1: "Intermediate (B1)",
          },
        },
      },
      common: {
        seniorSoftwareArchitect: "Senior Software Architect",
      },
    },
    de: {
      cv: {
        title: "Senior Software Ingenieur",
        summary: {
          heading: "Zusammenfassung",
          text: `Senior Full-Stack Entwickler mit umfangreicher Erfahrung in der Entwicklung
            skalierbarer Webanwendungen mit modernen JavaScript-Frameworks und Cloud-Technologien.
            Versiert in Frontend- (Vue.js, React) und Backend-Entwicklung (Node.js),
            mit Expertise in DevOps-Praktiken und Cloud-Infrastruktur. Nachgewiesene Erfolge
            in der Bereitstellung hochperformanter Anwendungen, Implementierung robuster
            CI/CD-Pipelines und Wartung von Produktionssystemen mit modernen Monitoring-Lösungen.
            Starker Fokus auf Code-Qualität durch umfassende Teststrategien und Best Practices.`,
        },
        experience: {
          heading: "Arbeitserfahrung",
          experiences: [
            {
              title: "Freiberuflicher Software Ingenieur",
              location: "Essen",
              duration: "01/2022 - heute",
            },
            {
              title: "Software Ingenieur",
              location: "Ruhrkraft GmbH - Essen",
              duration: "06/2021 - 12/2021",
            },
            {
              title: "Software Ingenieur",
              location: "Westend Druckereibetriebe GmbH - Essen",
              duration: "01/2018 - 06/2021",
            },
            {
              title: "Werkstudent",
              location: "Hochschule Düsseldorf",
              duration: "06/2021 - 12/2027",
            },
          ],
        },
        techSkills: "Tech Skills",
        projects: {
          heading: "Projekterfahrung",
          technologies: "Technologien",
          description: "Beschreibung",
          projects: [
            {
              title: "Senior Fullstack Entwickler",
              company: "SMG",
              duration: "11/2023 - 12/2024 (1 Jahr, 1 Monat)",
              technologies: [
                "Vue",
                "Typescript",
                "Vite",
                "Vitest",
                "Node.js",
                "AWS (Api Gateway, Cloudfront, Lambda, SQS, SNS, CDK)",
                "DataDog",
                "Git",
              ],
              description:
                "Ich arbeitete mit einem internationalen Team an der Verbesserung der Verkaufsprozesse von Homegate.ch und Immoscout24.ch. Ich leitete die Aktualisierung des Frontends von Vue 2 auf Vue 3 und der Backend-Infrastruktur von Serverless zu AWS CDK. Ich richtete Datadog-Monitoring ein und wendete SRE-Prinzipien an, um die Zuverlässigkeit und Leistung zu verbessern. Mein Fokus lag auf:",
              bullets: [
                "Migration zu AWS CDK für besseres Infrastrukturmanagement",
                "Planung und Durchführung des Vue 2 auf Vue 3 Upgrades",
                "Implementierung von Datadog und SRE-Praktiken zur Steigerung der Zuverlässigkeit",
                "Verbesserung der Entwicklungsumgebung für höhere Codequalität und Entwicklerproduktivität",
              ],
            },
            {
              title: "Senior Frontend Entwickler",
              company: "Mercedes-benz.io",
              duration: "12/2021 - 09/2023 (1 Jahr, 10 Monate)",
              technologies: [
                "Vue",
                "TypeScript",
                "Pinia",
                "VueX",
                "Vite",
                "Jest",
                "Vitest",
                "GitHub",
                "Kubernetes",
                "Jenkins",
                "SonarQube",
                "Helm Charts",
              ],
              description:
                "Als Teil eines internationalen Teams trug ich zur Entwicklung der Mercedes Me Webshop-Plattform bei. Meine Aufgaben umfassten:",
              bullets: [
                "Definition von Feature-Spezifikationen und Koordination mit externen Teams",
                "Leitung eines Teams von 5-8 Entwicklern",
                "Steuerung des Upgrades von Vue 2 auf Vue 3",
                "Migration der Testsuite von Jest zu Vitest",
                "Implementierung von TypeScript",
                "Entwicklung neuer Features und DevOps-Pipelines",
                "Behebung von Frontend-Problemen",
                "Verbesserung der Codequalität und Sicherheit",
              ],
            },
            {
              title: "Senior Fullstack Entwickler",
              company: "Auteon",
              duration: "10/2021 - 04/2022 (6 Monate)",
              technologies: [
                "Vue",
                "TypeScript",
                "Google Cloud Functions",
                "Node.js",
                "Cheerio",
                "Puppeteer",
                "Postman",
                "GraphQL",
                "Hasura",
              ],
              description:
                "Ich entwickelte einen Proof of Concept zur Analyse von Automotive-eCommerce-Websites und erstellte einen Webscrapingdienst. Nach Fertigstellung schulte ich andere Entwickler in der Nutzung. Meine Arbeit umfasste:",
              bullets: [
                "Analyse von Zielwebsites zum Verständnis ihrer Struktur",
                "Untersuchung von Quellcode und Netzwerkanfragen",
                "Identifizierung von Hindernissen wie CAPTCHAs oder AJAX-Aufrufen",
                "Entwicklung der Scraping-Logik in TypeScript und Node.js",
                "Erstellung von Postman-Tests zur Validierung der Datenextraktion",
                "Dokumentation der Scraping-Service-Architektur",
                "Schulung von Entwicklern in der Nutzung des Services",
              ],
            },
            {
              title: "Fullstack Entwickler",
              company: "Ruhrkraft GmbH",
              duration: "09/2020 - 09/2021 (1 Jahr)",
              technologies: [
                "Vue",
                "React",
                "TypeScript",
                "VueX",
                "Meteor",
                "Node.js",
                "Jest",
              ],
              description:
                "Ich entwarf und entwickelte einen Scheduler für ein Digital Signage CMS. Dies ermöglichte Benutzern die einfache Planung, Terminierung und das Hochladen von Werbekampagnen zur Anzeige auf Bildschirmen an verschiedenen Standorten. Meine Hauptziele waren:",
              bullets: [
                "Entwicklung einer intuitiven Oberfläche für das Kampagnenmanagement",
                "Programmierung von Algorithmen zur Vermeidung von Werbeüberschneidungen und für reibungslose Übergänge",
                "Sicherstellung der Kompatibilität mit verschiedenen Bildschirmgrößen und Auflösungen",
                "Erstellung einer robusten Datenstruktur für Kampagnen und Playlists",
                "Gründliche Tests zur Gewährleistung zuverlässiger Anzeige auf allen Bildschirmen",
              ],
            },
            {
              title: "Fullstack Entwickler",
              company: "Westend Druckereibetriebe",
              duration: "01/2018 - 07/2021 (3 Jahre, 6 Monate)",
              technologies: [
                "Meteor",
                "Node.js",
                "Vue",
                "React",
                "VueX",
                "Cypress",
                "Jest",
                "Docker",
                "Tailwind CSS",
              ],
              description:
                "Bei diesem großen Druckunternehmen war ich für die Verbesserung der digitalen Prozesse zuständig. Ich entwarf und entwickelte eine Auftragserfassungsanwendung, die als Hauptschnittstelle zwischen dem Unternehmen und den Kunden diente. Außerdem erstellte ich umfassende End-to-End- und Unit-Test-Suites, um die Zuverlässigkeit und Fehlerfreiheit der App sicherzustellen. Meine Haupttätigkeiten umfassten:",
              bullets: [
                "Gestaltung von Benutzeroberflächen und Workflows für die Auftragsapp",
                "Implementierung und Iteration von Anwendungsfunktionen",
                "Überwachung von Benutzerfeedback und Vornahme von Verbesserungen",
                "Aufbau einer vollständigen Test-Suite mit TDD, einschließlich E2E- und Unit-Tests",
                "Zusammenarbeit mit funktionsübergreifenden Teams bei kohärenten Entwicklungsstrategien",
              ],
            },
          ],
        },
        references: "Referenzen",
        languages: {
          heading: "Sprachen",
          languages: {
            english: "Englisch",
            german: "Deutsch",
            portuguese: "Portugiesisch",
          },
          levels: {
            c2: "Muttersprachlich (C2)",
            c1: "Verhandlungssicher(C1)",
            b1: "Mittelstufe (B1)",
          },
        },
      },
      common: {
        seniorSoftwareArchitect: "Senior Software Architekt",
      },
    },
  },
}));
