<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const languages = computed(() =>
  locales.value.map((entry) => ({
    id: entry.code,
    label: entry.name ?? entry.code,
  })),
);

const selectedIndex = computed(() =>
  languages.value.findIndex((language) => language.id === locale.value),
);
</script>

<template>
  <div>
    <div
      role="tablist"
      aria-label="Select a language"
      class="relative flex border-b border-blue-grey-200"
    >
      <NuxtLink
        v-for="language in languages"
        :id="`${language.id}-tab`"
        :key="language.id"
        role="tab"
        :to="switchLocalePath(language.id)"
        :aria-selected="locale === language.id"
        :aria-controls="`${language.id}-panel`"
        class="flex-1 px-4 py-2 text-center text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-vivid-300 focus:ring-offset-2"
        :class="{
          'border-b-2 border-red-vivid-300 text-red-vivid-300': locale === language.id,
          'text-blue-grey-500 hover:border-blue-grey-300 hover:text-blue-grey-700':
            locale !== language.id,
        }"
      >
        {{ language.label }}
      </NuxtLink>

      <!-- Sliding indicator - animates based on selected tab -->
      <div
        class="absolute bottom-0 h-0.5 bg-red-vivid-300 transition-all duration-300"
        :style="{
          left: `${(selectedIndex * 100) / languages.length}%`,
          width: `${100 / languages.length}%`,
        }"
      />
    </div>
  </div>
</template>
