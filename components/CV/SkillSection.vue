<script setup lang="ts">
import type { Skills } from "~/types/cv";

interface Props {
  title: string;
  skills: Skills[];
}

defineProps<Props>();
</script>

<template>
  <div>
    <h4 class="mb-5 text-xl tracking-widest">
      {{ title.toUpperCase() }}
    </h4>
    <div
      v-for="skill in skills"
      :key="skill.title"
      class="grid grid-cols-12 items-center"
    >
      <div class="col-span-5">
        {{ skill.title }}
      </div>
      <div class="relative col-span-7 h-2 bg-zinc-500">
        <div
          class="absolute inset-y-0 left-0 bg-zinc-50"
          :style="{ width: `${(skill.level / 10) * 100}%` }"
          aria-hidden="true"
        />
        <span class="sr-only">
          {{
            $t("cv.skillLevelSR", {
              type: title,
              level: skill.level,
              max: 10,
            })
          }}
        </span>
      </div>
    </div>
  </div>
</template>
