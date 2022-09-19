<script setup lang="ts">
import RSidebarLinks from "./sidebar-links/RSidebarLinks.vue";
import RLogo from "./RLogo.vue";
</script>

<template>
  <div
    class="fixed md:w-[211px] border-r rounded-lg bottom-3 top-3 bg-white z-20 p-4"
  >
    <div class="flex w-full">
      <div
        class="w-full flex justify-start flex-col transition duration-150 ease-in-out pt-6"
        id="mobile-nav"
      >
        <div class="w-full flex justify-center mb-6">
          <RLogo />
        </div>
        <RSidebarLinks />
      </div>
    </div>
  </div>
</template>
