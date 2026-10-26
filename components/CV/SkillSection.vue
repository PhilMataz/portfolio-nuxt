<script setup lang="ts">
import { CV } from "~/data/cv";
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.techSkills"
      class="-ml-px"
    />
    <div class="text-sm">
      {{ CV.skills.join(", ") }}
    </div>
  </div>
</template>
