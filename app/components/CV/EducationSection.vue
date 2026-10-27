<script setup lang="ts">
import { CV } from "~/data/cv";
import { formatYearRange } from "~/utils/period";

const { tr } = useTranslated();
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.education"
      class="-ml-px"
    />
    <div class="flex flex-col gap-4">
      <div
        v-for="(education, index) in CV.education"
        :key="index"
        class="text-xs"
      >
        <h5 class="text-md font-medium uppercase text-sm">
          {{ education.degree }}
        </h5>
        <div>
          <span v-if="'program' in education">
            {{ tr(education.program) }} ·
          </span>
          {{ education.school }}
        </div>
        <span>
          {{ formatYearRange(education.years) }}
        </span>
      </div>
    </div>
  </div>
</template>
