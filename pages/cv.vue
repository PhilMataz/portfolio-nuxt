<script setup lang="ts">
import type { Experience, Project } from "~/types/cv";
import { CV } from "~/data/cv";

const { profile, projects } = CV;
const experiences: readonly Experience[] = CV.experiences;

useHead({
  title: `CV - ${profile.firstName} ${profile.lastName}`,
});

const { tr, period } = useTranslated();

const projectTuples: (readonly Project[])[] = [];
for (let i = 0; i < projects.length; i += 2) {
  projectTuples.push(projects.slice(i, i + 2));
}
</script>

<template>
  <div class="flex w-full flex-col items-center font-light text-blue-grey-900">
    <CVLanguageSelector
      class="mx-auto w-full max-w-screen-sm p-4 print:hidden"
    />

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
      <div class="p-6">
        <div class="mb-14">
          <h1 class="font-display flex flex-col leading-none">
            <span class="-ml-1 -mt-2 text-9xl"> {{ profile.firstName }} </span>
            <span class="-mt-4 text-6xl">{{ profile.lastName }}</span>
          </h1>
          <h4 class="mb-5 ml-[2px] text-xl tracking-widest text-blue-grey-500">
            {{ tr(profile.title).toUpperCase() }}
          </h4>
        </div>

        <!-- SUMMARY -->
        <div class="mb-14">
          <CVSectionHeader
            title="cv.summary"
            class="text-red-vivid-300"
          />
          <p>
            {{ tr(profile.summary) }}
          </p>
        </div>

        <!-- WORK EXPERIENCE -->
        <CVSectionHeader
          title="cv.experience"
          class="text-red-vivid-300"
        />
        <div class="flex flex-col gap-6">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="flex flex-col gap-1"
          >
            <h4 class="font-medium">
              {{ tr(experience.title).toUpperCase() }}
            </h4>
            <span class="text-sm"
              >{{ experience.company }} - {{ experience.city }}</span
            >
            <span class="text-sm">{{
              period(experience.period, { withLength: false })
            }}</span>
            <span
              v-if="experience.note"
              class="text-sm italic"
              >{{ tr(experience.note) }}</span
            >
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
