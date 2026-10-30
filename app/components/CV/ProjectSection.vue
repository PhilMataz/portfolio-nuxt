<script setup lang="ts">
// The Projects are one flowing document, not fixed pages: the browser places as many
// Projects on a page as fit and moves the next one over whole (see docs/adr/0002).
import type { Project } from "~/types/cv";
import { CV } from "~/data/cv";
import { industryText } from "~/utils/industries";

// Widened from the literal tuple so optional fields (teamSize, workload) are addressable.
const projects: readonly Project[] = CV.projects;

const { tr, period } = useTranslated();
</script>

<template>
  <div
    class="grid min-h-[297mm] w-[210mm] grid-cols-[37%_1fr] rounded border border-blue-grey-200 print:border-none"
  >
    <!-- Print page frame: a fixed box repeats the side column on every page the Projects
         flow onto, since the grid's own column background ends with its first page. -->
    <div
      aria-hidden="true"
      class="hidden print:fixed print:inset-y-0 print:left-0 print:-z-10 print:block print:w-[37%] bg-blue-grey-900 print:[print-color-adjust:exact]"
    />
    <CVSide>
      <div class="flex flex-col gap-8 p-6 text-sm">
        <CVExperienceSection />
        <CVEducationSection />
        <CVReferencesSection />
      </div>
    </CVSide>
    <div class="p-6">
      <CVSectionHeader
        title="cv.projects"
        class="text-red-vivid-300"
      />

      <div class="flex flex-col">
        <!-- Padding, not gap, spaces the Projects: a Project moved to a new page keeps
             its top padding, while a margin would be truncated at the page break.
             data-project lets the PDF export measure each Project and name one that is
             taller than a page (scripts/cv/export-pdf.ts). -->
        <div
          v-for="project in projects"
          :key="project.company + project.period.start"
          :data-project="`${project.company} (${project.period.start})`"
          class="flex flex-col gap-1 pt-10 break-inside-avoid-page first:pt-0"
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
            {{ industryText(project.industry, tr) }}
            <template v-if="project.teamSize">
              · <span class="italic">{{ $t("cv.teamSize") }}:</span>
              {{ project.teamSize }}
            </template>
          </div>
          <div class="mt-2">
            <h5 class="text-sm italic">
              {{ $t("cv.technologies") }}
            </h5>
            <div class="text-sm leading-tight">
              {{ project.technologies.join(", ") }}
            </div>
          </div>
          <div class="mt-2">
            <h5 class="text-sm italic">
              {{ $t("cv.context") }}
            </h5>
            <div class="text-sm leading-tight">
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
  </div>
</template>
