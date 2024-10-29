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
</script>

<template>
  <div>
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
</template>
