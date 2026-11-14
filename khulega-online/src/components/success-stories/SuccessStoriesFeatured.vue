<template>
  <section class="ss-featured" aria-labelledby="ss-featured-name">
    <div class="ss-featured__inner">
      <div class="ss-featured__section-header">
        <span class="ss-showcase__eyebrow">ONE STANDOUT SELLER OR ENTERPRISE</span>
      </div>

      <div class="ss-featured__layout">
        <div class="ss-featured__visual">
          <div class="ss-featured__placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span>Image placeholder</span>
          </div>
        </div>

        <article class="ss-featured__content">
          <p class="ss-featured__kicker">Featured story</p>
          <h2 id="ss-featured-name" class="ss-featured__name">
            {{ story.name }}
          </h2>
          <p class="ss-featured__meta">
            <span>{{ story.cityState }}</span>
            <span class="ss-featured__meta-dot" aria-hidden="true">·</span>
            <span>{{ story.category }}</span>
            <span class="ss-featured__meta-dot" aria-hidden="true">·</span>
            <span>Selling on {{ story.marketplaces }}</span>
          </p>

          <blockquote class="ss-featured__quote">
            <p>{{ story.quote }}</p>
          </blockquote>

          <ul class="ss-featured__metrics">
            <li
              v-for="(metric, index) in story.metrics"
              :key="index"
              class="ss-featured__metric"
            >
              <span class="ss-featured__metric-value">{{ metric.value }}</span>
              <span class="ss-featured__metric-label">{{ metric.label }}</span>
            </li>
          </ul>

          <a :href="story.storyHref" class="ss-featured__link">
            Read the full story
            <span class="ss-featured__link-arrow" aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
/** Dummy featured story — replace with a verified seller when ready */
const story = {
  name: 'Jaipur Heritage Crafts Pvt. Ltd.',
  cityState: 'Jaipur, Rajasthan',
  category: 'Handicrafts',
  marketplaces: 'Amazon, Flipkart, Meesho & ONDC',
  quote:
    'We used to manage orders in spreadsheets and miss dispatch cut-offs. With TechSandhya, our catalog went live on four channels in weeks—and returns and reconciliation finally sit in one place.',
  metrics: [
    { value: '3.2×', label: 'Monthly order volume after going multi-channel' },
    { value: '18 days', label: 'Time to first marketplace go-live' },
    { value: '94%', label: 'On-time dispatch rate (last 90 days)' },
  ],
  storyHref: '#',
}
</script>