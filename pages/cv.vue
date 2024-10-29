<script setup lang="ts">
const { tm } = useI18n();

type Experience = {
  title: string;
  location: string;
  duration: string;
};

const techSkills = [
  {
    name: "Javascript",
    level: 9,
  },
  {
    name: "Typescript",
    level: 8,
  },
  {
    name: "Vue",
    level: 9,
  },
  {
    name: "React",
    level: 8,
  },
  {
    name: "Node.js",
    level: 9,
  },
  {
    name: "HTML",
    level: 9,
  },
  {
    name: "CSS",
    level: 9,
  },
  {
    name: "UI/UX",
    level: 7,
  },
  {
    name: "Git",
    level: 9,
  },
  {
    name: "Kubernetes",
    level: 6,
  },
  {
    name: "Docker",
    level: 6,
  },
  {
    name: "PostgreSQL",
    level: 7,
  },
  {
    name: "MongoDB",
    level: 7,
  },
  {
    name: "DataDog",
    level: 7,
  },
];

const softSkills = [
  {
    name: "detailOriented",
    level: 9,
  },
  {
    name: "adaptability",
    level: 9,
  },
  {
    name: "teamwork",
    level: 10,
  },
  {
    name: "analyticalSkill",
    level: 8,
  },
  {
    name: "empathy",
    level: 9,
  },
  {
    name: "perseverance",
    level: 10,
  },
];

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
          <!-- ADDRESS -->
          <CVContactInfo />
          <!-- TECH SKILLS -->
          <div>
            <h4 class="mb-5 text-xl tracking-widest">
              {{ $t("cv.techSkills").toUpperCase() }}
            </h4>
            <div
              v-for="skill in techSkills"
              :key="skill.name"
              class="grid grid-cols-12 items-center"
            >
              <div class="col-span-5">{{ skill.name }}</div>
              <div class="relative col-span-7 h-2 bg-zinc-500">
                <div
                  class="absolute inset-y-0 left-0 bg-zinc-50"
                  :style="{ width: `${(skill.level / 10) * 100}%` }"
                  aria-hidden="true"
                ></div>
                <span class="sr-only">
                  {{
                    $t("cv.skillLevelSR", {
                      type: $t("cv.techSkills"),
                      level: skill.level,
                      max: 10,
                    })
                  }}
                </span>
              </div>
            </div>
          </div>
          <!-- SOFT SKILLS -->
          <div>
            <h4 class="mb-5 text-xl font-light tracking-widest">
              {{ $t("cv.softSkills.title").toUpperCase() }}
            </h4>
            <div
              v-for="skill in softSkills"
              :key="skill.name"
              class="grid grid-cols-12 items-center"
            >
              <div class="col-span-5">
                {{ $t(`cv.softSkills.skills.${skill.name}`) }}
              </div>
              <div class="relative col-span-7 h-2 bg-zinc-500">
                <div
                  class="absolute inset-y-0 left-0 bg-zinc-50"
                  :style="{ width: `${(skill.level / 10) * 100}%` }"
                  aria-hidden="true"
                ></div>
                <span class="sr-only">
                  {{
                    $t("cv.skillLevelSR", {
                      type: $t("cv.softSkills.title"),
                      level: skill.level,
                      max: 10,
                    })
                  }}
                </span>
              </div>
            </div>
          </div>
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
