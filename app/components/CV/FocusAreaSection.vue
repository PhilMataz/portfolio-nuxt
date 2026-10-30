<script setup lang="ts">
import { CV } from "~/data/cv";

const { tr } = useTranslated();
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.focusAreas"
      class="text-red-vivid-300"
    />
    <ul class="ml-5 list-outside list-disc text-sm leading-tight">
      <li
        v-for="area in CV.profile.focusAreas"
        :key="area.en"
      >
        {{ tr(area) }}
      </li>
    </ul>
  </div>
</template>
