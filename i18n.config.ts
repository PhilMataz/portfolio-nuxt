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
        softSkills: {
          title: "Soft Skills",
          skills: {
            detailOriented: "Detail-oriented",
            adaptability: "Adaptability",
            teamwork: "Teamwork",
            analyticalSkill: "Analytical Skill",
            empathy: "Empathy",
            perseverance: "Perseverance",
          },
        },
        skillLevelSR: "{type} level: {level} out of {max}",
        references: "References",
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
        softSkills: {
          title: "Soft Skills",
          skills: {
            detailOriented: "Detail-oriented",
            adaptability: "Adaptability",
            teamwork: "Teamwork",
            analyticalSkill: "Analytical Skill",
            empathy: "Empathie",
            perseverance: "Beständigkeit",
          },
        },
        skillLevelSR: "{type} Niveau: {level} von {max}",
        references: "Referenzen",
      },
      common: {
        seniorSoftwareArchitect: "Senior Software Architekt",
      },
    },
  },
}));
