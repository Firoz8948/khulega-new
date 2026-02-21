<template>
  <div class="sc">
    <div class="sc__image-wrap">
      <img
        :src="image"
        :alt="name"
        class="sc__image"
        loading="lazy"
      />
    </div>
    <div class="sc__info">
      <p class="sc__name">{{ name }}</p>
      <p class="sc__location">
        <svg class="sc__pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        {{ state }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true },
  state: { type: String, required: true }
})
</script>

<style src="@css/components/seller-card.css"></style>
