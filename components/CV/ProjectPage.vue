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
          <span class="-mt-2 text-sm">
            {{ period(project.period) }}
            <template v-if="project.workload">
              · {{ $t("cv.workload") }}: {{ project.workload.hoursPerWeek }}
              {{ $t("cv.hoursPerWeek") }}
            </template>
          </span>
          <div class="text-sm">
            <span class="italic">{{ $t("cv.industry") }}:</span>
            {{ tr(project.industry) }}
            <template v-if="project.teamSize">
              · <span class="italic">{{ $t("cv.teamSize") }}:</span>
              {{ project.teamSize }}
            </template>
          </div>
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
              {{ $t("cv.context") }}
            </h5>
            <div class="leading-tight">
              {{ tr(project.context) }}
            </div>
          </div>
          <div class="mt-2">
            <h5 class="text-sm italic">
              {{ $t("cv.tasks") }}
            </h5>
            <ul class="ml-8 list-outside list-disc text-sm">
              <li
                v-for="task in project.tasks"
                :key="task.en"
              >
                {{ tr(task) }}
              </li>
            </ul>
          </div>
          <div
            v-if="project.outcomes.length"
            class="mt-2"
          >
            <h5 class="text-sm italic">
              {{ $t("cv.outcomes") }}
            </h5>
            <ul class="ml-8 list-outside list-disc text-sm">
              <li
                v-for="outcome in project.outcomes"
                :key="outcome.en"
              >
                {{ tr(outcome) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </CVPageContainer>
</template>
