<script setup lang="ts"></script>

<template>
  <div class="flex w-full flex-col items-center">
    <div class="flex h-[297mm] w-[210mm] border-x print:border-none">
      <div class="flex w-[78mm] flex-col bg-zinc-900 text-slate-50">
        <img
          class="min-h-[100mm] object-cover mix-blend-screen"
          src="~/assets/images/Professional.BW.png"
          alt=""
        />
        <div class="flex h-full flex-col gap-12 p-4 text-sm font-thin">
          <!-- ADDRESS -->
          <div>
            <div class="inline-flex gap-2">
              <LucideSmartphone />004915906562753
            </div>
            <div class="inline-flex gap-2">
              <LucideMail />hello@philmataz.dev
            </div>
            <div class="inline-flex gap-2">
              <LucideGlobe />https://www.philmataz.dev
            </div>
            <div class="inline-flex gap-2">
              <LucideMap />Inselstr. 23, 45326 Essen
            </div>
          </div>
  <div>Hello CV!</div>
        </div>
      </div>
      <div>Phillip Matambanadzo</div>
    </div>
  </div>
</template>
