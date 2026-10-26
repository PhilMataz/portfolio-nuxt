<script setup lang="ts">
import { CV } from "~/data/cv";

const { tr } = useTranslated();
</script>

<template>
  <div>
    <CVSectionHeader
      title="cv.references"
      class="-ml-px"
    />
    <div class="flex flex-col gap-6">
      <div
        v-for="reference in CV.references"
        :key="reference.name"
      >
        <div class="mb-2">
          <h5 class="text-md font-medium">
            {{ reference.name.toUpperCase() }} &#183;
            {{ reference.company.toUpperCase() }}
          </h5>
          <span class="-mt-2 text-sm leading-tight">
            {{ tr(reference.role) }}
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
