<template>
  <ul aria-orientation="vertical" class="rounded py-2 border-b">
    <RSidebarLink
      v-for="item in feedbackSection"
      :key="item.name"
      :item="item"
    ></RSidebarLink>
  </ul>
</template>

<script lang="ts" setup>
import RSidebarLink from "./RSidebarLink.vue";
const feedbackSection = [
  {
    id: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="14" cy="6" r="2" />
  <line x1="4" y1="6" x2="12" y2="6" />
  <line x1="16" y1="6" x2="20" y2="6" />
  <circle cx="8" cy="12" r="2" />
  <line x1="4" y1="12" x2="6" y2="12" />
  <line x1="10" y1="12" x2="20" y2="12" />
  <circle cx="17" cy="18" r="2" />
  <line x1="4" y1="18" x2="15" y2="18" />
  <line x1="19" y1="18" x2="20" y2="18" />
</svg>
          `,
    title: "Feedback Collection Settings",
    name: "home",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apps" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="6" rx="1" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
  <rect x="14" y="14" width="6" height="6" rx="1" />
  <line x1="14" y1="7" x2="20" y2="7" />
  <line x1="17" y1="4" x2="17" y2="10" />
</svg>`,
    title: "Templates",
    name: "home",
  },
];
</script>
