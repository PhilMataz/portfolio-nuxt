<script setup lang="ts">
import type { Experience, Project } from "~/types/cv";

const { tm } = useI18n();

const experiences = computed<Experience[]>(() =>
  tm("cv.experience.experiences"),
);

const projectTuples = computed(() => {
  const result: Project[][] = [];
  const projects: Project[] = tm("cv.projects.projects");

  for (let i = 0; i < projects.length; i += 2) {
    result.push(projects.slice(i, i + 2));
  }

  return result;
});
</script>

<template>
  <div
    class="flex w-full flex-col items-center font-body font-light text-zinc-900"
  >
    <CVLanguageSelector
      class="mx-auto w-full max-w-screen-sm p-4 print:hidden"
    />

    <div
      class="grid h-[297mm] w-[210mm] grid-cols-[35%_1fr] rounded border border-zinc-200 print:border-none"
    >
      <CVSide>
        <img
          class="min-h-[100mm] object-cover mix-blend-screen"
          src="~/assets/images/Professional.BW.png"
          alt=""
        />
        <div class="flex h-full flex-col gap-8 p-4 text-sm">
          <CVContactInfo />
          <CVSkillSection />
          <CVReferencesSection />
        </div>
      </CVSide>
      <div class="p-4 pr-12">
        <div class="mb-14">
          <h1 class="flex flex-col font-heading leading-none">
            <span class="-ml-1 text-9xl"> Phillip </span>
            <span class="-mt-4 text-6xl">Matambanadzo</span>
          </h1>
          <CVSectionHeader
            title="cv.title"
            class="ml-[2px] text-zinc-500"
          />
        </div>

        <!-- SUMMARY -->
        <div class="mb-14">
          <CVSectionHeader
            title="cv.summary.heading"
            class="text-zinc-500"
          />
          <p class="text-zinc-600">
            {{ $t("cv.summary.text") }}
          </p>
        </div>

        <!-- WORK EXPERIENCE -->
        <CVSectionHeader
          title="cv.experience.heading"
          class="text-zinc-500"
        />
        <div class="flex flex-col gap-6">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="flex flex-col gap-1"
          >
            <h4 class="font-medium">
              {{ experience.title.toUpperCase() }}
            </h4>
            <span class="text-sm">{{ experience.location }}</span>
            <span class="text-sm">{{ experience.duration }}</span>
          </div>
        </div>
      </div>
    </div>
    <CVProjectPage
      v-for="(projects, index) in projectTuples"
      :key="index"
      :projects="projects"
      :has-header="index === 0"
    />
  </div>
</template>
