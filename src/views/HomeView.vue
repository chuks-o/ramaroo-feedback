<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(() => router.push("/feedback"));
</script>

<template>
  <main></main>
</template>
