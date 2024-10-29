export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
      cv: {
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
        techSkills: "Technische Fähigkeiten",
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
