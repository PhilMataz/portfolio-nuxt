<script setup lang="ts">
import type { Project } from "~/types/cv";
import { CV } from "~/data/cv";

const { profile, experiences, projects } = CV;

const { tr, period } = useTranslated();

// The document title (and so the PDF metadata) comes from the same Profile title as the header.
useHead({
  title: computed(() => `${profile.firstName} ${profile.lastName} – ${tr(profile.title)}`),
});

const projectTuples: (readonly Project[])[] = [];
for (let i = 0; i < projects.length; i += 2) {
  projectTuples.push(projects.slice(i, i + 2));
}
</script>

<template>
  <div class="flex w-full flex-col items-center font-light text-blue-grey-900">
    <CVLanguageSelector class="mx-auto w-full max-w-screen-sm p-4 print:hidden" />

    <CVPageContainer>
      <CVSide>
        <img
          class="min-h-[100mm] object-cover mix-blend-screen"
          src="~/assets/images/Professional.BW.png"
          alt=""
        />
        <div class="flex h-full flex-col gap-8 p-6 text-sm">
          <CVContactInfo />
          <CVSkillSection class="mt-auto" />
          <CVLanguageSection />
        </div>
      </CVSide>
      <div class="flex flex-col gap-5 p-6">
        <div>
          <h1 class="font-display flex flex-col leading-none">
            <span class="-ml-1 -mt-2 text-9xl"> {{ profile.firstName }} </span>
            <span class="-mt-4 text-6xl">{{ profile.lastName }}</span>
          </h1>
          <h4 class="ml-[2px] text-lg tracking-widest text-blue-grey-500">
            {{ tr(profile.title).toUpperCase() }}
          </h4>
        </div>

        <!-- SUMMARY -->
        <div>
          <CVSectionHeader
            title="cv.summary"
            class="text-red-vivid-300"
          />
          <p class="text-sm leading-snug">
            {{ tr(profile.summary) }}
          </p>
        </div>

        <CVFocusAreaSection />

        <CVIndustrySection />

        <!-- WORK EXPERIENCE -->
        <div>
          <CVSectionHeader
            title="cv.experience"
            class="text-red-vivid-300"
          />
          <div class="flex flex-col gap-3">
            <div
              v-for="(experience, index) in experiences"
              :key="index"
              class="flex flex-col gap-px"
            >
              <h4 class="text-sm font-medium">
                {{ tr(experience.title).toUpperCase() }}
              </h4>
              <span class="text-sm">
                {{ experience.company }} - {{ experience.city }} ·
                {{ period(experience.period, { withLength: false }) }}
              </span>
              <span
                v-if="experience.note"
                class="text-sm italic"
                >{{ tr(experience.note) }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </CVPageContainer>
    <CVProjectPage
      v-for="(projects, index) in projectTuples"
      :key="index"
      :projects="projects"
      :has-header="index === 0"
    />
  </div>
</template>
