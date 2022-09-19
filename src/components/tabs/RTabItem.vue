<template>
  <transition
    enter-active-class="transition ease-out duration-200 delay-200 transform"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-200 transform"
    leave-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div v-if="isActive" class="min-h-full px-5">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount, inject } from "vue";
interface TabsProvider {
  selectedIndex: "";
}
const props = defineProps<{
  title: string;
}>();

const isActive = ref(false);
const tabs: TabsProvider = inject("TabsProvider");

watch(
  () => tabs.selectedIndex,
  () => {
    isActive.value = props.title === tabs.selectedIndex;
  }
);

onBeforeMount(() => {
  isActive.value = props.title === tabs.selectedIndex;
});
</script>
