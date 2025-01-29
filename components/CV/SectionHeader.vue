<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<template>
  <h4 class="mb-5 ml-[2px] text-xl tracking-widest">
    {{ $t(title).toUpperCase() }}
  </h4>
</template>
