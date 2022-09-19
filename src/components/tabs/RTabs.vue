<template>
  <div class="">
    <ul class="flex border-b px-5 pb-5">
      <li
        v-for="(tab, tabIndex) in state.tabs"
        :key="tabIndex"
        @click="activeTab(tab)"
        class="text-sm flex flex-col justify-between pt-3 rounded-t mr-8 font-normal cursor-pointer"
      >
        <span class="text-r-navy mb-1 text-sm">{{ tab.props.title }}</span>
        <div
          v-if="tab.props.title === state.selectedIndex"
          class="w-full h-0.5 bg-r-blue"
        ></div>
      </li>
    </ul>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  provide,
  onBeforeMount,
  onBeforeUpdate,
  useSlots,
} from "vue";

interface TabState {
  selectedIndex: string;
  tabs: [];
}
const slots = useSlots();
const state = reactive<TabState>({
  selectedIndex: "",
  tabs: [],
});

provide("TabsProvider", state);

function update() {
  state.tabs = slots.default();
  state.selectedIndex = state.selectedIndex || state.tabs?.[0].props.title;
}
onBeforeMount(() => update());
onBeforeUpdate(() => update());

const activeTab = (tab: any) => {
  state.selectedIndex = tab.props.title;
};
</script>
