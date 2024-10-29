<script setup lang="ts">
<script setup lang="ts"></script>

const skills = [
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
</script>

<template>
  <div class="flex w-full flex-col items-center">
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
            <h4 class="text-lg font-light tracking-widest">TECH SKILLS</h4>
            <div
              v-for="skill in skills"
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
  <div>Hello CV!</div>
        </div>
      </div>
      <div>Phillip Matambanadzo</div>
    </div>
    <div class="h-[297mm] w-[210mm] bg-red-500">Test</div>
  </div>
</template>
