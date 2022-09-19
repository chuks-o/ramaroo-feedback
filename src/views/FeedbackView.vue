<script setup lang="ts">
import { ref, onMounted, watch, type Ref } from "vue";
import RTabs from "@/components/tabs/RTabs.vue";
import RTabItem from "@/components/tabs/RTabItem.vue";
import FeedbackKeyStats from "@/components/feedback/tabs/FeedbackKeyStats.vue";
import FeedbackStatsCard from "@/components/feedback/FeedbackStatsCard.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date: Ref<Date[]> = ref([]);
const feedbackCollected = [
  {
    title: "Number of feedback collected",
    data: [
      { year: 2020, value: 2.753, type: "reviews" },
      { year: 2019, value: 2.14, type: "reviews" },
    ],
  },
  {
    title: "Feedback collection conversion rate",
    data: [
      { year: 2020, value: 8.3, type: "percentage" },
      { year: 2019, value: 6.4, type: "percentage" },
    ],
  },
  {
    title: "Number of feedback put on hold",
    data: [
      { year: 2020, value: 153, type: "times" },
      { year: 2019, value: 53, type: "times" },
    ],
  },
];
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});
</script>

<template>
  <div>
    <div class="bg-white h-16 px-4 rounded-b-lg flex items-center mb-3">
      <h1 class="font-normal text-2xl">Feedback Insights</h1>
      <p class="ml-6 text-xs font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div class="ml-auto w-1/4">
        <Datepicker v-model="date" range multiCalendars></Datepicker>
      </div>
    </div>

    <div class="bg-white rounded-lg">
      <RTabs>
        <RTabItem title="Key Stats">
          <FeedbackKeyStats />
        </RTabItem>
        <RTabItem title="Product Reviews"> Graph </RTabItem>
        <RTabItem title="Company Reviews"> Company </RTabItem>
        <RTabItem title="On-hold Reviews"> On hold </RTabItem>
      </RTabs>
    </div>

    <div class="pt-6 grid grid-cols-3 gap-3">
      <FeedbackStatsCard
        v-for="(feedback, index) in feedbackCollected"
        :key="index"
      >
        <template #header>
          <p class="font-semibold text-r-navy pt-4">{{ feedback.title }}:</p>
        </template>

        <template #review>
          <div class="divide-y divide-y-gray-200">
            <div
              v-for="(fdata, j) in feedback.data"
              :key="j"
              class="flex items-center justify-between py-2.5"
            >
              <p class="text-xs text-r-navy font-light">{{ fdata.year }}</p>
              <p>
                <span class="text-lg text-r-navy font-semibold">{{
                  fdata.value
                }}</span>
                <span
                  v-if="fdata.type === 'percentage'"
                  class="text-lg text-r-navy font-semibold mr-1"
                  >%
                </span>
                <span v-else class="text-r-dark-grey text-xs ml-1">{{
                  fdata.type
                }}</span>
              </p>
            </div>
          </div>
        </template>
      </FeedbackStatsCard>
    </div>
  </div>
</template>

<style scoped>
input[type="radio"]:checked + label {
  background-color: #4262ff;
  color: #ffffff;
  transition: 0.3s;
}
</style>
