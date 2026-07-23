<script setup lang="ts">
const SKILLS = [
  "Javascript",
  "Typescript",
  "Node.js",
  "Vue",
  "Nuxt",
  "Pinia",
  "Pinia Colada",
  "React",
  "Angular",
  "Vite",
  "Webpack",
  "Vitest",
  "Jest",
  "Cypress",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "WebSocket",
  "Git",
  "Python",
  "Kubernetes",
  "Docker",
  "AWS",
  "Azure",
  "Drizzle ORM",
  "Prisma ORM",
  "PostgreSQL",
  "MongoDB",
  "MSSQL",
  "Supabase",
];
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.techSkills"
      class="-ml-px"
    />
    <div class="text-sm">
      {{ SKILLS.join(", ") }}
    </div>
  </div>
</template>
