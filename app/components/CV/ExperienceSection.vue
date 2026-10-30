<script setup lang="ts">
import { CV } from "~/data/cv";

const { tr, period } = useTranslated();
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.experience"
      class="-ml-px"
    />
    <div class="flex flex-col gap-3">
      <div
        v-for="(experience, index) in CV.experiences"
        :key="index"
        class="flex flex-col gap-px text-xs"
      >
        <h5 class="text-sm font-medium uppercase">
          {{ tr(experience.title) }}
        </h5>
        <span>
          {{ experience.company }} - {{ experience.city }} ·
          {{ period(experience.period, { withLength: false }) }}
        </span>
        <span
          v-if="experience.note"
          class="italic"
          >{{ tr(experience.note) }}</span
        >
      </div>
    </div>
  </div>
</template>
