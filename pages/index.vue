<script setup>
const { setLocale } = useI18n();
</script>

<template>
  <div>
    <div class="flex gap-2">
      <button
        class="inline-flex rounded bg-teal-500 px-4 py-2 text-white"
        @click="setLocale('en')"
      >
        en
      </button>
      <button
        class="inline-flex rounded bg-teal-500 px-4 py-2 text-white"
        @click="setLocale('fr')"
      >
        fr
      </button>
      <p>{{ $t("welcome") }}</p>
    </div>
  </div>
</template>
