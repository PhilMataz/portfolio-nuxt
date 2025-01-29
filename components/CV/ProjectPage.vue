<script setup lang="ts">
import type { Project } from "~/types/cv";

interface Props {
  projects: Project[];
  hasHeader: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    class="grid h-[297mm] w-[210mm] grid-cols-[35%_1fr] rounded border border-zinc-200 print:border-none"
  >
    <CVSide
      ><div class="flex h-full flex-col justify-between p-4 text-sm"></div
    ></CVSide>
    <div class="p-4 pr-12 pt-12">
      <h3
        v-if="hasHeader"
        class="mb-6 ml-[2px] text-xl tracking-widest text-zinc-500"
      >
        {{ $t("cv.projects.heading").toUpperCase() }}
      </h3>
      <div class="flex flex-col gap-10">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col gap-1"
        >
          <h4 class="font-medium">
            {{ project.title.toUpperCase() }} |
            {{ project.company.toUpperCase() }}
          </h4>
          <span class="-mt-2 text-sm">{{ project.duration }}</span>
          <div class="mt-4">
            <h5 class="text-sm italic">
              {{ $t("cv.projects.technologies") }}
            </h5>
            <div class="leading-tight">
              {{ project.technologies.join(", ") }}
            </div>
          </div>
          <div class="mt-4">
            <h5 class="text-sm italic">
              {{ $t("cv.projects.description") }}
            </h5>
            <div class="leading-tight">
              {{ project.description }}
            </div>
            <ul class="ml-8 mt-4 list-outside list-disc leading-tight">
              <li
                v-for="bullet in project.bullets"
                :key="bullet"
              >
                {{ bullet }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
