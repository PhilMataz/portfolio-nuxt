<script setup lang="ts">
const { locales } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div>
    <nav class="flex gap-2">
      <NuxtLink
        v-for="entry in locales"
        :key="entry.code"
        class="inline-flex rounded bg-teal-500 px-4 py-2 text-white"
        :to="localePath('/cv', entry.code)"
      >
        CV ({{ entry.name ?? entry.code }})
      </NuxtLink>
    </nav>
  </div>
</template>
