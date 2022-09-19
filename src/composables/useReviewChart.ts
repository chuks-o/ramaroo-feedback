import { ref, onMounted, watch, type Ref, nextTick } from "vue";
import type {
  TimelineProperty,
  GranularItem,
  GranularValues,
  KeyStatsVariable,
} from "@/types/main";

export const useReviewChart = () => {
  const showPreviousPeriod = ref<"Yes" | "No">("No");
  const keyStatsVariable: Ref<KeyStatsVariable> = ref("of-feedback");
  const keyStatsTimeline: Ref<TimelineProperty> = ref("years");
  const granularSelected = ref();

  const granularValues = ref<GranularValues>();
  const granularData = ref();

  const fetchingChart = ref(false);
  const variableData = ref([
    { value: "conversion-rate", label: "% Conversion Rate" },
    { value: "invites-sent", label: "# Invites Sent" },
    { value: "of-feedback", label: "# of Feedback" },
    { value: "pre-review-delays", label: "Pre-Review Delays" },
  ]);

  const timelineData = ref([
    { value: "days", label: "Days" },
    { value: "weeks", label: "Weeks" },
    { value: "months", label: "Months" },
    { value: "years", label: "Years" },
  ]);

  const series = ref([
    {
      name: "Current Period",
      data: [],
    },
    {
      name: "Previous Period",
      data: [],
    },
  ]);

  const chartOptions = ref({
    colors: ["#4262FF", "#4262FF80"],
    chart: {
      id: "feedback-chart",
      height: 400,
      type: "area",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: "#808080",
        },
      },
      axisTicks: {
        show: false,
      },
      categories: [],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#050038",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    stroke: {
      width: 2.5,
      curve: "straight",
      dashArray: [0, 8],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: 0.1,
      colors: ["#4262FF", "#FFFFFF"],
      pattern: {
        style: "verticalLines",
        width: 6,
        height: 6,
        strokeWidth: 2,
      },
    },
    grid: {
      show: true,
      borderColor: "#EBEBEB",
      strokeDashArray: 0,
      position: "back",
    },
    plotOptions: {
      area: {
        fillTo: "end",
      },
    },
    markers: {
      size: 4,
      colors: ["#FFF"],
      strokeColors: ["#4262FF", "#4262FF80"],
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 1,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
  });

  const hidePreviousSeries = () => {
    window.ApexCharts.exec("feedback-chart", "hideSeries", ["Previous Period"]);
  };

  const showPreviousSeries = () => {
    window.ApexCharts.exec("feedback-chart", "showSeries", ["Previous Period"]);
  };

  const onSearchGranular = async () => {
    const params = {
      variable: keyStatsVariable.value,
      timeline: keyStatsTimeline.value,
      granular: granularSelected.value,
    };
    try {
      fetchingChart.value = true;
      let url = "feedback/search";
      url += "?" + new URLSearchParams(params).toString();

      // This is to enable the loading state visible
      setTimeout(async () => {
        const response = await fetch(url);
        const chartResponse = await response.json();
        updateChart(chartResponse);
        fetchingChart.value = false;
      }, 1000);
    } catch (error) {}
  };

  const onSelectGranular = (data: GranularItem) => {
    granularSelected.value = { ...data };
  };

  const getFirstGranularData = async () => {
    try {
      const response = await fetch("/feedback/init");
      granularValues.value = await response.json();
      granularData.value = granularValues.value?.[keyStatsTimeline.value];

      granularSelected.value =
        granularData.value?.[granularData.value.length - 1];
    } catch (error) {
      throw new Error("An error occured");
    }
  };

  const updateChart = (chartValues: {
    currentPeriod: number[];
    previousPeriod: number[];
    xCategory: string[] | number[];
  }) => {
    showPreviousPeriod.value = "No";
    chartOptions.value = {
      ...chartOptions.value,
      xaxis: {
        type: "category",
        categories: chartValues.xCategory,
        labels: {
          style: {
            colors: "#808080",
          },
        },
        axisTicks: {
          show: false,
        },
      },
    };

    series.value = [
      {
        name: "Current Period",
        data: chartValues.currentPeriod,
      },
      {
        name: "Previous Period",
        data: chartValues.previousPeriod,
      },
    ];

    nextTick(() => hidePreviousSeries());
  };

  onMounted(() => getFirstGranularData());

  watch(granularSelected, () => onSearchGranular());

  watch(keyStatsTimeline, (newValue) => {
    granularData.value = granularValues.value?.[newValue];
  });

  watch(showPreviousPeriod, (newValue) => {
    switch (newValue) {
      case "Yes":
        showPreviousSeries();
        break;
      case "No":
        hidePreviousSeries();
        break;
    }
  });

  return {
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
  };
};
