// Interface text only. CV content lives in data/cv (see CONTEXT.md).
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      cv: {
        summary: "Summary",
        experience: "Work Experience",
        techSkills: "Tech Skills",
        projects: "Project Experience",
        technologies: "Technologies",
        description: "Description",
        references: "References",
        languages: "Languages",
        education: "Education",
      },
      period: {
        today: "today",
        year: "year",
        years: "years",
        month: "month",
        months: "months",
      },
      language: {
        english: "English",
        german: "German",
        portuguese: "Portuguese",
      },
      level: {
        c2: "Native Speaker (C2)",
        c1: "Business Fluent (C1)",
        b1: "Intermediate (B1)",
      },
    },
    de: {
      cv: {
        summary: "Zusammenfassung",
        experience: "Arbeitserfahrung",
        techSkills: "Tech Skills",
        projects: "Projekterfahrung",
        technologies: "Technologien",
        description: "Beschreibung",
        references: "Referenzen",
        languages: "Sprachen",
        education: "Ausbildung",
      },
      period: {
        today: "heute",
        year: "Jahr",
        years: "Jahre",
        month: "Monat",
        months: "Monate",
      },
      language: {
        english: "Englisch",
        german: "Deutsch",
        portuguese: "Portugiesisch",
      },
      level: {
        c2: "Muttersprachlich (C2)",
        c1: "Verhandlungssicher (C1)",
        b1: "Mittelstufe (B1)",
      },
    },
  },
}));
