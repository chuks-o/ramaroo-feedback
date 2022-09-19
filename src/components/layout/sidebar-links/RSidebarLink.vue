<script lang="ts" setup>
defineProps<{
  item: {
    id: number;
    icon: string;
    title: string;
    name: string;
  };
}>();
</script>
<template>
  <li class="flex w-full items-center py-2">
    <RouterLink
      :to="{ name: item.name }"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <!-- @click="toggleSidebar" -->
      <a :active="isActive" :href="href" @click="navigate">
        <div class="flex items-center">
          <div v-html="item.icon"></div>
          <span class="text-[11px] ml-2">{{ item.title }}</span>
        </div></a
      >
    </RouterLink>
  </li>
</template>
