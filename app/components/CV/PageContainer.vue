<template>
  <!-- Page one is a fixed A4 box; in print it ends its page (see docs/adr/0002). -->
  <div
    class="grid h-[297mm] w-[210mm] grid-cols-[37%_1fr] rounded border border-blue-grey-200 break-after-page print:border-none"
  >
    <slot />
  </div>
</template>
