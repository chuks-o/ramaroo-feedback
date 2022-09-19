<template>
  <ul aria-orientation="vertical" class="rounded py-2 border-b">
    <RSidebarLink
      v-for="item in campaignSection"
      :key="item.name"
      :item="item"
    ></RSidebarLink>
  </ul>
</template>

<script lang="ts" setup>
import RSidebarLink from "./RSidebarLink.vue";
const campaignSection = [
  {
    id: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-highlight" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M12.5 5.5l4 4" />
  <path d="M4.5 13.5l4 4" />
  <path d="M21 15v4h-8l4 -4z" />
</svg>`,
    title: "Automated Campaigns",
    name: "home",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="7" y1="15" x2="7.01" y2="15" />
                <line x1="11" y1="15" x2="13" y2="15" />
                </svg>`,
    title: "Manual Campaigns",
    name: "home",
  },
];
</script>
