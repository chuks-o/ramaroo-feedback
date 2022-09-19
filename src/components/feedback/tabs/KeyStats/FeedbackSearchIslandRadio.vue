<script lang="ts" setup>
import { ref } from "vue";

type IslandValues = {
  value: string;
  year: number;
};

const p = defineProps<{
  id: string;
  name: string;
  value: IslandValues;
  modelValue: any;
}>();

const emit = defineEmits<{
  (e: "onChange", value: IslandValues): void;
}>();

const propValue = ref(p.value);

const handleChange = () => emit("onChange", propValue.value);
</script>

<template>
  <div class="flex items-center justify-center h-10">
    <input
      :id="p.id"
      :value="p.value"
      :checked="propValue === p.value"
      type="radio"
      :name="p.name"
      class="appearance-none hidden"
      @change="handleChange"
    />
    <label
      :for="p.id"
      class="cursor-pointer text-xs h-full rounded-lg px-8 min-w-fit border border-transparent text-r-dark-grey flex flex-col justify-center whitespace-nowrap items-center"
    >
      <p>
        {{ p.value.value }}
      </p>
      <p>
        {{ p.value.year }}
      </p>
    </label>
  </div>
</template>

<style scoped>
input[type="radio"]:checked + label {
  color: #4262ff;
  border: 1px solid #4262ff;
  transition: 0.3s;
}
</style>
