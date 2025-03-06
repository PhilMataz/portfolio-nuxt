<script setup lang="ts">
const EDUCATIONS = [
  {
    degree: "Abitur",
    school: "Alfred-Krupp-Schule Essen",
    time: "2009",
  },
  {
    degree: "Bachelor of Science",
    program: "cv.education.civilEngineering",
    school: "Ruhr Uni Bochum",
    time: "2010 - 2015",
  },
  {
    degree: "Bachelor of Science",
    program: "cv.education.mediaIT",
    school: "HS Düsseldorf",
    time: "2015 - 2018",
  },
];
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.education.heading"
      class="-ml-px"
    />
    <div class="flex flex-col gap-4">
      <div
        class="text-xs"
        v-for="(education, index) in EDUCATIONS"
        :key="index"
      >
        <h5 class="text-md font-medium uppercase text-sm">
          {{ education.degree }}
        </h5>
        <div>
          <span v-if="education.program"> {{ $t(education.program) }} · </span>
          {{ education.school }}
        </div>
        <span>
          {{ education.time }}
        </span>
      </div>
    </div>
  </div>
</template>
