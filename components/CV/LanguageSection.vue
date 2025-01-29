<script setup lang="ts">
const LANGUAGES = {
  german: "c2",
  english: "c1",
  portuguese: "b1",
} as const;
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.languages.heading"
      class="-ml-px"
    />
    <div
      v-for="(level, language) in LANGUAGES"
      :key="language"
    >
      {{ $t(`cv.languages.languages.${language}`) }} -
      {{ $t(`cv.languages.levels.${level}`) }}
    </div>
  </div>
</template>
