<template>
  <div class="card" :class="[`card--${variant}`, { 'card--hoverable': hoverable }]">
    <div class="card__image" v-if="$slots.image">
      <slot name="image" />
    </div>
    <div class="card__body">
      <slot />
    </div>
    <div class="card__footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'default' },
  hoverable: { type: Boolean, default: false }
})
</script>
