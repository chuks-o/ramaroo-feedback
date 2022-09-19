<script lang="ts" setup>
import IconChevronLeft from "@/components/icons/IconChevronLeft.vue";
import IconChevronRight from "@/components/icons/IconChevronRight.vue";
</script>

<template>
  <div
    class="flex items-center border border-r-light-grey rounded-lg w-full h-[51px]"
  >
    <button type="button" class="outline-none focus:outline-none">
      <IconChevronLeft />
    </button>
    <div class="flex overflow-scroll">
      <slot></slot>
    </div>

    <button type="button" class="ml-auto outline-none focus:outline-none">
      <IconChevronRight />
    </button>
  </div>
</template>
