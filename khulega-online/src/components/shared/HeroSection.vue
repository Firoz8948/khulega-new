<template>
  <section class="hero-section">
    <div class="hero-section__bg-effects" aria-hidden="true">
      <div class="hero-section__orb hero-section__orb--1"></div>
      <div class="hero-section__orb hero-section__orb--2"></div>
      <div class="hero-section__orb hero-section__orb--3"></div>
      <div class="hero-section__orb hero-section__orb--4"></div>
      <div class="hero-section__wave hero-section__wave--1"></div>
      <div class="hero-section__wave hero-section__wave--2"></div>
      <div class="hero-section__grid-overlay"></div>
      <div class="hero-section__noise"></div>
    </div>

    <div class="hero-section__container">
      <span v-if="badge" class="hero-section__badge">
        <span class="hero-section__badge-dot" aria-hidden="true"></span>
        {{ badge }}
      </span>

      <h1 class="hero-section__title">
        {{ title }}
        <span v-if="highlightText" class="hero-section__title-highlight">
          {{ highlightText }}
        </span>
      </h1>

      <p v-if="subtitle" class="hero-section__subtitle">
        {{ subtitle }}
      </p>

      <div v-if="$slots.actions" class="hero-section__actions">
        <slot name="actions" />
      </div>

      <nav class="hero-section__breadcrumb" aria-label="Breadcrumb">
        <a href="/" class="hero-section__breadcrumb-link">Home</a>
        <svg class="hero-section__breadcrumb-sep" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span class="hero-section__breadcrumb-current">{{ breadcrumbText }}</span>
      </nav>
    </div>

    <div class="hero-section__bottom-fade" aria-hidden="true"></div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  badge: { type: String, default: '' },
  title: { type: String, required: true },
  highlightText: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  breadcrumb: { type: String, default: '' }
})

const breadcrumbText = computed(() => props.breadcrumb || props.badge || 'Page')
</script>