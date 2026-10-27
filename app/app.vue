<script setup lang="ts">
// Sets <html lang> and alternate links per Locale.
useHead(useLocaleHead());
</script>

<template>
  <NuxtLayout class="text-blue-grey-900">
    <NuxtPage />
  </NuxtLayout>
</template>
