export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
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
      },
    },
    de: {
      cv: {
        title: "Senior Software Engineer",
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
      },
    },
  },
}));
