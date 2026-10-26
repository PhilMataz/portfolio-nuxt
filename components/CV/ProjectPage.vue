<script setup lang="ts">
import type { Project } from "~/types/cv";

interface Props {
  projects: readonly Project[];
  hasHeader: boolean;
}

defineProps<Props>();

const { tr, period } = useTranslated();
</script>

<template>
  <CVPageContainer>
    <CVSide>
      <div class="flex h-full flex-col justify-between p-6 text-sm">
        <template v-if="hasHeader">
          <CVEducationSection />
          <CVReferencesSection />
        </template>
      </div>
    </CVSide>
    <div class="p-6">
      <CVSectionHeader
        v-if="hasHeader"
        title="cv.projects"
        class="text-red-vivid-300"
      />

      <div class="flex flex-col gap-10">
        <div
          v-for="project in projects"
          :key="project.company + project.period.start"
          class="flex flex-col gap-1"
        >
          <h4 class="font-semibold text-sm mb-1">
            {{ tr(project.role).toUpperCase() }} |
            {{ project.company.toUpperCase() }}
          </h4>
          <span class="-mt-2 text-sm">{{ period(project.period) }}</span>
          <div class="mt-2">
            <h5 class="text-sm italic">
              {{ $t("cv.technologies") }}
            </h5>
            <div class="leading-tight">
              {{ project.technologies.join(", ") }}
            </div>
          </div>
          <div class="mt-2">
            <h5 class="text-sm italic">
              {{ $t("cv.description") }}
            </h5>
            <div class="leading-tight">
              {{ tr(project.description) }}
            </div>
            <ul class="ml-8 mt-2 list-outside list-disc text-sm">
              <li
                v-for="bullet in project.bullets"
                :key="bullet.en"
              >
                {{ tr(bullet) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </CVPageContainer>
</template>
