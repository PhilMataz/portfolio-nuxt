<script setup lang="ts">
import type { Skills } from "~/types/cv";

const { tm, t } = useI18n();

type Experience = {
  title: string;
  location: string;
  duration: string;
};

const TECH_SKILLS: Skills[] = [
  {
    title: "Javascript",
    level: 9,
  },
  {
    title: "Typescript",
    level: 8,
  },
  {
    title: "Vue",
    level: 9,
  },
  {
    title: "React",
    level: 8,
  },
  {
    title: "Node.js",
    level: 9,
  },
  {
    title: "HTML",
    level: 9,
  },
  {
    title: "CSS",
    level: 9,
  },
  {
    title: "UI/UX",
    level: 7,
  },
  {
    title: "Git",
    level: 9,
  },
  {
    title: "Kubernetes",
    level: 6,
  },
  {
    title: "Docker",
    level: 6,
  },
  {
    title: "PostgreSQL",
    level: 7,
  },
  {
    title: "MongoDB",
    level: 7,
  },
  {
    title: "DataDog",
    level: 7,
  },
];

const SOFT_SKILLS = [
  {
    title: "detailOriented",
    level: 9,
  },
  {
    title: "adaptability",
    level: 9,
  },
  {
    title: "teamwork",
    level: 10,
  },
  {
    title: "analyticalSkill",
    level: 8,
  },
  {
    title: "empathy",
    level: 9,
  },
  {
    title: "perseverance",
    level: 10,
  },
];

const softSkills = SOFT_SKILLS.map((skill) => ({
  ...skill,
  title: t(`cv.softSkills.skills.${skill.title}`),
}));

const experiences = computed<Experience[]>(() =>
  tm("cv.experience.experiences"),
);
</script>

<template>
  <div
    class="flex w-full flex-col items-center font-body font-light text-zinc-900"
  >
    <CVLanguageSelector
      class="mx-auto w-full max-w-screen-sm p-4 print:hidden"
    />

    <div
      class="grid h-[297mm] w-[210mm] grid-cols-[37%_1fr] rounded border border-zinc-200 print:border-none"
    >
      <CVSide>
        <img
          class="min-h-[100mm] object-cover mix-blend-screen"
          src="~/assets/images/Professional.BW.png"
          alt=""
        />
        <div class="flex h-full flex-col justify-between p-4 text-sm">
          <CVContactInfo />
          <CVSkillSection
            :title="$t('cv.techSkills')"
            :skills="TECH_SKILLS"
          />
          <CVSkillSection
            :title="$t('cv.softSkills.title')"
            :skills="softSkills"
          />
        </div>
      </CVSide>
      <div class="p-4">
        <h1 class="flex flex-col font-heading leading-none">
          <span class="-ml-1 text-9xl"> Phillip </span>
          <span class="-mt-4 text-6xl">Matambanadzo</span>
        </h1>
        <h3 class="ml-[2px] text-xl tracking-widest text-zinc-500">
          {{ $t("cv.title").toUpperCase() }}
        </h3>

        <!-- SUMMARY -->
        <h3 class="mb-6 ml-[2px] mt-14 text-xl tracking-widest text-zinc-500">
          {{ $t("cv.summary.heading").toUpperCase() }}
        </h3>
        <p class="text-zinc-600">
          {{ $t("cv.summary.text") }}
        </p>

        <!-- WORK EXPERIENCE -->
        <h3 class="mb-6 ml-[2px] mt-14 text-xl tracking-widest text-zinc-500">
          {{ $t("cv.experience.heading").toUpperCase() }}
        </h3>
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
    <div class="h-[297mm] w-[210mm] bg-red-500">Test</div>
  </div>
</template>
