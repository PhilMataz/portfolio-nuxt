<script setup lang="ts">
import { CV } from "~/data/cv";
import { industriesOf } from "~/utils/industries";

const { tr } = useTranslated();

/** Derived from the Projects on every render; never stored. */
const industries = industriesOf(CV.projects);
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.industries"
      class="text-red-vivid-300"
    />
    <div class="text-sm leading-snug">
      {{ industries.map(tr).join(" · ") }}
    </div>
  </div>
</template>
