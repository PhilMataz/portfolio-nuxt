<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div>
    <div class="flex gap-2">
      <NuxtLink
        class="inline-flex rounded bg-teal-500 px-4 py-2 text-white"
        :to="localePath('/cv', 'de')"
      >
        CV (Deutsch)
      </NuxtLink>
      <NuxtLink
        class="inline-flex rounded bg-teal-500 px-4 py-2 text-white"
        :to="localePath('/cv', 'en')"
      >
        CV (English)
      </NuxtLink>
    </div>
  </div>
</template>
