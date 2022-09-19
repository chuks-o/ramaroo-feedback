<template>
  <ul aria-orientation="vertical" class="rounded py-2 border-b">
    <RSidebarLink
      v-for="item in reviewsSection"
      :key="item.name"
      :item="item"
    ></RSidebarLink>
  </ul>
</template>

<script lang="ts" setup>
import RSidebarLink from "./RSidebarLink.vue";
const reviewsSection = [
  {
    id: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg>`,
    title: "Reviews showcase page",
    name: "home",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-components" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#050038" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12l3 3l3 -3l-3 -3z" />
  <path d="M15 12l3 3l3 -3l-3 -3z" />
  <path d="M9 6l3 3l3 -3l-3 -3z" />
  <path d="M9 18l3 3l3 -3l-3 -3z" />
</svg>`,
    title: "Reviews Widget",
    name: "home",
  },
  {
    id: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="7" y1="15" x2="7.01" y2="15" />
                <line x1="11" y1="15" x2="13" y2="15" />
                </svg>`,
    title: "Reviews API",
    name: "home",
  },
];
</script>
