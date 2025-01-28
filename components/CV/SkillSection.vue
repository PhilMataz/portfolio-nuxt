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
    <h4 class="mb-5 text-xl tracking-widest">
      {{ $t("cv.techSkills").toUpperCase() }}
    </h4>
    <div>
      {{ SKILLS.join(", ") }}
    </div>
  </div>
</template>
