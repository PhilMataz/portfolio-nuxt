<script setup lang="ts">
const REFERENCES = [
  {
    name: "David Müller",
    company: "Hakobu",
    position: "common.seniorSoftwareArchitect",
    tel: "+49 177 634 002",
    email: "david.mueller@hakobu.de",
  },
  {
    name: "Chi Nguyen",
    company: "May Solutions",
    position: "common.seniorSoftwareArchitect",
    tel: "+49 176 553 684 96",
    email: "chi@may-solutions.io",
  },
];
</script>

<template>
  <div class="mt-auto">
    <CVSectionHeader title="cv.references" />
    <div class="flex flex-col gap-6">
      <div
        v-for="reference in REFERENCES"
        :key="reference.name"
      >
        <div class="mb-2">
          <h5 class="text-md font-medium">
            {{ reference.name.toUpperCase() }} &#183;
            {{ reference.company.toUpperCase() }}
          </h5>
          <span class="-mt-2 text-sm leading-tight">
            {{ $t(reference.position) }}
          </span>
        </div>
        <div class="inline-flex items-center gap-2 text-xs">
          <LucideSmartphone class="size-4" />{{ reference.tel }}
        </div>
        <div class="inline-flex items-center gap-2 text-xs">
          <LucideMail class="size-4" />{{ reference.email }}
        </div>
      </div>
    </div>
  </div>
</template>
