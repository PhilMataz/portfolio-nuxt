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
      },
    },
    de: {
      cv: {
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
      },
    },
  },
}));
