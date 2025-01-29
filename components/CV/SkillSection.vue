<script setup lang="ts">
const SKILLS = [
  "Javascript",
  "Typescript",
  "Node.js",
  "Vue",
  "Nuxt",
  "React",
  "Vite",
  "Webpack",
  "Vitest",
  "Jest",
  "Cypress",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "Kubernetes",
  "Docker",
  "PostgreSQL",
  "MongoDB",
];
</script>

<template>
  <div>
    <CVSectionHeader title="cv.techSkills" />
    <div>
      {{ SKILLS.join(", ") }}
    </div>
  </div>
</template>
