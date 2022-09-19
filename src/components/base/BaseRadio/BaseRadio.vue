<script setup lang="ts">
defineProps<{
  name: string;
  label: string;
  value: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="flex items-center justify-center h-6">
    <input
      :id="label"
      type="radio"
      :name="name"
      class="appearance-none hidden"
      :value="value"
      :checked="modelValue === value"
      @change="handleChange"
    />
    <label
      :for="label"
      class="cursor-pointer text-[9px] px-7 h-full w-full text-r-dark-grey flex items-center justify-center whitespace-nowrap"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
input[type="radio"]:checked + label {
  background-color: #4262ff;
  color: #ffffff;
  transition: 0.3s;
}
</style>
