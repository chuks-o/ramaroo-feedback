<script setup lang="ts"></script>

<template>
  <div class="card bg-white rounded-lg px-5">
    <div class="md:w-3/5">
      <slot name="header"></slot>
    </div>

    <div>
      <slot name="review"></slot>
    </div>
  </div>
</template>
