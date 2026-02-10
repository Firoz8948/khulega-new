<template>
  <div class="loader-wrapper" v-if="loading">
    <div class="loader">
      <div class="loader__spinner"></div>
      <p class="loader__text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: { type: Boolean, default: true },
  text: { type: String, default: 'Loading...' }
})
</script>
