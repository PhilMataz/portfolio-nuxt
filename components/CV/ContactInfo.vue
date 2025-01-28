<template>
  <div class="flex flex-col gap-2 text-xs">
    <div class="inline-flex items-center gap-2">
      <LucideSmartphone class="size-4" />+49 1590 656 2753
    </div>
    <div class="inline-flex items-center gap-2">
      <LucideMail class="size-4" />hello@philmataz.dev
    </div>
    <div class="inline-flex items-center gap-2">
      <LucideGlobe class="size-4" /><a
        href="http://www.philmataz.dev"
        target="_blank"
        >philmataz.dev</a
      >
    </div>
    <div class="inline-flex items-center gap-2">
      <LucideMap class="size-4" />Inselstr. 23, 45326 Essen
    </div>
    <div class="inline-flex items-center gap-2">
      <GithubLogoIcon class="size-4 fill-white" />
      <a
        href="http://www.github.com/PhilMataz"
        target="_blank"
        >github.com/PhilMataz</a
      >
    </div>
    <div class="inline-flex items-center gap-2">
      <LinkedInLogoIcon class="size-4 fill-white" />
      <a
        href="http://www.linkedin.com/in/phillip-matambanadzo/"
        target="_blank"
        >linkedin.com/in/phillip-matambanadzo</a
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import GithubLogoIcon from "../icons/github.vue";
import LinkedInLogoIcon from "../icons/linkedIn.vue";
</script>
