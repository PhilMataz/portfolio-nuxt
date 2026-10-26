<script setup lang="ts">
import { CV } from "~/data/cv";
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.languages"
      class="-ml-px"
    />
    <div
      v-for="{ language, level } in CV.languages"
      :key="language"
    >
      {{ $t(`language.${language}`) }} -
      {{ $t(`level.${level}`) }}
    </div>
  </div>
</template>
