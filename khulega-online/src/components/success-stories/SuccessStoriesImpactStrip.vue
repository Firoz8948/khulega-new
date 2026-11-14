<template>
  <section class="ss-impact" aria-labelledby="ss-impact-heading">
    <span class="ss-impact__sr-only" id="ss-impact-heading">Impact figures</span>
    <div class="ss-impact__inner">
      <div class="ss-impact__header">
        <span class="ss-showcase__eyebrow">OUR IMPACT IN NUMBERS</span>
      </div>
      <ul class="ss-impact__grid">
        <li v-for="(item, i) in stats" :key="i" class="ss-impact__item">
          <p class="ss-impact__value">{{ item.value }}</p>
          <p class="ss-impact__label">{{ item.label }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '00+', label: 'Sellers onboarded' },
  { value: '00+', label: 'Enterprises served' },
  { value: '00', label: 'Marketplaces connected' },
  { value: '0,000', label: 'Products listed' },
]
</script>