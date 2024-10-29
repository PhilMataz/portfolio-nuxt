<script setup lang="ts">
const { setLocale } = useI18n();
const selectedLanguage = ref("de");

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
  <div class="flex w-full flex-col items-center">
    <fieldset class="fixed bottom-8 right-8">
      <legend>Select a language:</legend>

      <div>
        <input
          id="de"
          v-model="selectedLanguage"
          type="radio"
          name="language"
          value="de"
        />
        <label for="de">Deutsch</label>
      </div>

      <div>
        <input
          id="en"
          v-model="selectedLanguage"
          type="radio"
          name="language"
          value="en"
        />
        <label for="en">English</label>
      </div>
    </fieldset>
    <div class="flex h-[297mm] w-[210mm] border-x print:border-none">
      <div class="flex w-[78mm] flex-col bg-zinc-900 text-slate-50">
        <img
          class="min-h-[100mm] object-cover mix-blend-screen"
          src="~/assets/images/Professional.BW.png"
          alt=""
        />
        <div class="flex h-full flex-col gap-12 p-4 text-sm font-thin">
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
            <h4 class="text-lg font-light tracking-widest">
              {{ $t("cv.techSkills") }}
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
                ></div>
              </div>
            </div>
          </div>
          <!-- TECH SKILLS -->
          <div>
            <h4 class="text-lg font-light tracking-widest">
              {{ $t("cv.softSkills.title") }}
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
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Phillip Matambanadzo</div>
    </div>
    <div class="h-[297mm] w-[210mm] bg-red-500">Test</div>
  </div>
</template>
