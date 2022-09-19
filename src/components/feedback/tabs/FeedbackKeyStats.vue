<script lang="ts" setup>
import FeedbackSearchIsland from "@/components/feedback/tabs/KeyStats/FeedbackSearchIsland.vue";
import FeedbackSearchIslandRadio from "@/components/feedback/tabs/KeyStats/FeedbackSearchIslandRadio.vue";
import BaseRadio from "@/components/base/BaseRadio/BaseRadio.vue";
import BaseRadioGroup from "@/components/base/BaseRadio/BaseRadioGroup.vue";
import VueApexCharts from "vue3-apexcharts";
import { useReviewChart } from "@/composables/useReviewChart";

const {
  series,
  chartOptions,
  variableData,
  timelineData,
  showPreviousPeriod,
  keyStatsVariable,
  keyStatsTimeline,
  granularData,
  granularSelected,
  fetchingChart,
  onSelectGranular,
} = useReviewChart();
</script>

<template>
  <div>
    <div class="mt-5 flex w-full mb-5">
      <BaseRadioGroup title="Show Previous Period:">
        <BaseRadio
          v-for="item in [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]"
          :key="item.label"
          :label="item.label"
          name="previousPeriod"
          :value="item.value"
          v-model="showPreviousPeriod"
        ></BaseRadio>
      </BaseRadioGroup>

      <div class="flex divide-x mx-auto">
        <BaseRadioGroup title="Select Variable:">
          <BaseRadio
            v-for="item in variableData"
            :key="item.label"
            :label="item.label"
            name="keyVariables"
            :value="item.value"
            v-model="keyStatsVariable"
          ></BaseRadio>
        </BaseRadioGroup>
      </div>

      <div class="flex divide-x ml-auto">
        <BaseRadioGroup title="Select Timeline:">
          <BaseRadio
            v-for="item in timelineData"
            :key="item.label"
            :label="item.label"
            name="keyStatsTimeline"
            :value="item.value"
            v-model="keyStatsTimeline"
          ></BaseRadio>
        </BaseRadioGroup>
      </div>
    </div>

    <div class="mb-5">
      <FeedbackSearchIsland>
        <FeedbackSearchIslandRadio
          v-for="(gValue, j) in granularData"
          :key="j"
          :id="`${gValue.value}-${gValue.year}`"
          name="keyGranularTimeline"
          :value="gValue"
          v-model="granularSelected"
          @onChange="onSelectGranular($event)"
        />
      </FeedbackSearchIsland>
    </div>

    <div class="relative">
      <div class="ml-4 flex items-center">
        <div class="flex items-center mr-4">
          <div
            class="h-[10px] w-[10px] flex-shrink-0 flex rounded-full border-2 border-r-blue mr-1"
          ></div>
          <p class="text-[9px] text-r-blue font-semibold">Current Period</p>
        </div>
        <div class="flex items-center mr-4">
          <div
            class="h-[10px] w-[10px] flex-shrink-0 flex rounded-full border border-dashed border-r-blue mr-1"
          ></div>
          <p class="text-[9px] text-r-blue font-light">Previous Period</p>
        </div>
      </div>
      <div
        v-if="fetchingChart"
        class="absolute flex justify-center items-center text-sm h-[360px] w-full bg-white bg-opacity-70 z-50"
      >
        <p class="text-sm font-bold text-r-navy">Loading...</p>
      </div>
      <vue-apex-charts height="350" :options="chartOptions" :series="series">
      </vue-apex-charts>
    </div>
  </div>
</template>
