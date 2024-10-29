<script setup lang="ts">
const { setLocale } = useI18n();
const selectedLanguage = ref("de");

const languages = [
  { id: "de", label: "Deutsch" },
  { id: "en", label: "English" },
];

watchEffect(() => {
  setLocale(selectedLanguage.value);
});

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
</script>

<template>
  <div
    class="flex w-full flex-col items-center font-body font-light text-zinc-900"
  >
    <div class="mx-auto w-full max-w-screen-sm p-4 print:hidden">
      <div
        role="tablist"
        aria-label="Select a language"
        class="relative flex border-b border-zinc-200"
      >
        <button
          v-for="language in languages"
          :id="`${language.id}-tab`"
          :key="language.id"
          role="tab"
          :aria-selected="selectedLanguage === language.id"
          :aria-controls="`${language.id}-panel`"
          class="flex-1 px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          :class="{
            'border-b-2 border-blue-600 text-blue-600':
              selectedLanguage === language.id,
            'text-zinc-500 hover:border-zinc-300 hover:text-zinc-700':
              selectedLanguage !== language.id,
          }"
          @click="selectedLanguage = language.id"
        >
          {{ language.label }}
        </button>

        <!-- Sliding indicator - animates based on selected tab -->
        <div
          class="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300"
          :style="{
            left: `${(languages.findIndex((language) => language.id === selectedLanguage) * 100) / languages.length}%`,
            width: `${100 / languages.length}%`,
          }"
        />
      </div>
    </div>
    <div
      class="grid h-[297mm] w-[210mm] grid-cols-[37%_1fr] rounded border border-zinc-200 print:border-none"
    >
      <div class="flex flex-col bg-zinc-900 text-slate-50">
        <img
          class="min-h-[100mm] object-cover mix-blend-screen"
          src="~/assets/images/Professional.BW.png"
          alt=""
        />
        <div class="flex h-full flex-col gap-12 p-4 text-sm">
          <!-- ADDRESS -->
          <div>
            <div class="inline-flex gap-2">
              <LucideSmartphone />004915906562753
            </div>
            <div class="inline-flex gap-2">
              <LucideMail />hello@philmataz.dev
            </div>
            <div class="inline-flex gap-2">
              <LucideGlobe />https://www.philmataz.dev
            </div>
            <div class="inline-flex gap-2">
              <LucideMap />Inselstr. 23, 45326 Essen
            </div>
          </div>
          <!-- TECH SKILLS -->
          <div>
            <h4 class="text-xl tracking-widest">
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
            <h4 class="text-xl font-light tracking-widest">
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
      </div>
      <div class="p-4">
        <h1 class="flex flex-col font-heading leading-none">
          <span class="-ml-1 text-9xl"> Phillip </span>
          <span class="-mt-4 text-6xl">Matambanadzo</span>
        </h1>
        <h3 class="ml-[2px] text-xl tracking-widest text-zinc-500">
          {{ $t("cv.title").toUpperCase() }}
        </h3>

        <h3 class="ml-[2px] mt-20 text-xl tracking-widest text-zinc-500">
          {{ $t("cv.summary.heading").toUpperCase() }}
        </h3>
        <p class="mt-6 text-zinc-600">
          {{ $t("cv.summary.text") }}
        </p>
      </div>
    </div>
    <div class="h-[297mm] w-[210mm] bg-red-500">Test</div>
  </div>
</template>
