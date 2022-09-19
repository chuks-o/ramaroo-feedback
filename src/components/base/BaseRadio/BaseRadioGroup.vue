<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="flex flex-col text-center">
    <p class="text-[9px] font-light mb-0.5 text-r-navy">{{ title }}</p>
    <div
      class="xl:flex grid grid-cols-2 whitespace-nowrap items-center justify-center divide-x border rounded-[10px] overflow-hidden"
    >
      <slot></slot>
    </div>
  </div>
</template>
