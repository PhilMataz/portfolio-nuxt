<script setup lang="ts">
// Sets <html lang> and alternate links per Locale.
const head = useLocaleHead();

useHead(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang, dir: head.value.htmlAttrs?.dir },
  link: head.value.link,
  meta: head.value.meta,
}));
</script>

<template>
  <NuxtLayout class="text-blue-grey-900">
    <NuxtPage />
  </NuxtLayout>
</template>
