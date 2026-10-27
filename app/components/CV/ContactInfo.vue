<script lang="ts" setup>
import GithubLogoIcon from "../icons/github.vue";
import LinkedInLogoIcon from "../icons/linkedIn.vue";
import { CV } from "~/data/cv";

const contact = CV.profile.contact;
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="inline-flex items-center gap-2">
      <LucideSmartphone class="size-4" />{{ contact.tel }}
    </div>
    <div class="inline-flex items-center gap-2">
      <LucideMail class="size-4" />{{ contact.email }}
    </div>

    <div class="inline-flex items-center gap-2">
      <LucideMap class="size-4" />{{ contact.address }}
    </div>
    <div class="inline-flex items-center gap-2 hover:text-red-vivid-300">
      <LucideGlobe class="size-4 text-white" />
      <a
        class="underline"
        :href="contact.website.href"
        target="_blank"
        >{{ contact.website.label }}</a
      >
    </div>
    <div class="inline-flex items-center gap-2 hover:text-red-vivid-300">
      <GithubLogoIcon class="size-4 fill-white" />
      <a
        class="underline"
        :href="contact.github.href"
        target="_blank"
        >{{ contact.github.label }}</a
      >
    </div>
    <div class="inline-flex items-center gap-2 hover:text-red-vivid-300">
      <LinkedInLogoIcon class="size-4 fill-white" />
      <a
        class="underline"
        :href="contact.linkedin.href"
        target="_blank"
        >{{ contact.linkedin.label }}</a
      >
    </div>
  </div>
</template>
