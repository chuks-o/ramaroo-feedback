<template>
  <ul aria-orientation="vertical" class="rounded py-2 border-b">
    <RSidebarLink
      v-for="item in productSection"
      :key="item.name"
      :item="item"
    ></RSidebarLink>
  </ul>
</template>

<script lang="ts" setup>
import RSidebarLink from "./RSidebarLink.vue";
const productSection = [
  {
    id: 1,
    icon: `
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-headset" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="13" rx="2" width="4" height="6" />
  <rect x="16" y="13" rx="2" width="4" height="6" />
  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
  <path d="M18 19a6 3 0 0 1 -6 3" />
</svg>`,
    title: "E-CRM",
    name: "home",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
  <line x1="13" y1="8" x2="15" y2="8" />
  <line x1="13" y1="12" x2="15" y2="12" />
</svg>`,
    title: "Product & Assets Library",
    name: "home",
  },
];
</script>
