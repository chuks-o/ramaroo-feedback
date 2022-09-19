<script setup lang="ts">
import { RouterView } from "vue-router";
import RNavigation from "@/components/layout/RNavigation.vue";
import RSidebar from "@/components/layout/RSidebar.vue";

const dropdownHandler = (event: Event) => {
  let single = (event.currentTarget as Element).getElementsByTagName("ul")[0];
  single.classList.toggle("hidden");
};
const sidebarHandler = () => {
  var sideBar = document.getElementById("mobile-nav") as HTMLElement;
  sideBar.classList.toggle("hidden");
};
</script>

<template>
  <div
    class="bg-r-background overflow-x-hidden px-4 py-3 w-full h-screen relative"
  >
    <!-- Sidebar starts -->
    <RSidebar />
    <!-- Sidebar ends -->

    <div class="md:ml-[211px]">
      <div class="pl-4">
        <!-- Navigation starts -->
        <RNavigation />
        <!-- Navigation ends -->

        <main class="w-full">
          <RouterView v-slot="{ Component }">
            <transition
              enter-active-class="transition ease-out duration-400 transform"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition ease-in duration-400 transform"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </RouterView>
        </main>
      </div>
    </div>
  </div>
</template>
