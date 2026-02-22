<template>
  <section class="cta" ref="sectionRef">
    <!-- Background decorations -->
    <div class="cta__bg" aria-hidden="true">
      <div class="cta__bg-circle cta__bg-circle--1"></div>
      <div class="cta__bg-circle cta__bg-circle--2"></div>
      <div class="cta__bg-circle cta__bg-circle--3"></div>
      <div class="cta__bg-grid"></div>
    </div>

    <div class="cta__container" :class="{ 'cta__container--visible': isVisible }">
      <!-- Eyebrow -->
      <p class="cta__eyebrow">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="13 17 18 12 13 7"/>
          <polyline points="6 17 11 12 6 7"/>
        </svg>
        Start Your Online Business Today
      </p>

      <!-- Main heading -->
      <h2 class="cta__title">
        Ready to Sell on Every
        <span class="cta__title-highlight">Marketplace in India?</span>
      </h2>

      <!-- Subtitle -->
      <p class="cta__subtitle">
        Join hundreds of sellers who manage Amazon, Flipkart, Meesho, ONDC & more from one single dashboard. Register now and start selling in minutes.
      </p>

      <!-- Brand logos strip -->
      <div class="cta__brands">
        <div
          v-for="(brand, i) in brands"
          :key="brand.key"
          class="cta__brand"
          :style="{ '--i': i }"
        >
          <template v-if="brand.logo">
            <img
              :src="brand.logo"
              :alt="brand.name"
              class="cta__brand-img"
              @error="handleLogoError(brand.key)"
            />
          </template>
          <template v-else>
            <span
              :class="brand.isMore ? 'cta__brand-more' : 'cta__brand-text'"
            >{{ brand.fallback }}</span>
          </template>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="cta__actions">
        <a
          href="https://usc.khulega.online"
          target="_blank"
          rel="noopener noreferrer"
          class="cta__btn cta__btn--primary"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="22" y1="11" x2="16" y2="11"/>
          </svg>
          <span>Register Now</span>
          <svg class="cta__btn-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

        <a href="/contact.html" class="cta__btn cta__btn--outline">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Talk to Our Team
        </a>
      </div>

      <!-- Trust line -->
      <p class="cta__trust">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
        Free to register &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Go live in 24 hours
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const brands = ref([
  { key: 'amazon',   name: 'Amazon',   logo: '/assets/images/brands/amazon.png',   fallback: 'Amazon' },
  { key: 'flipkart', name: 'Flipkart', logo: '/assets/images/brands/flipkart.png', fallback: 'Flipkart' },
  { key: 'meesho',   name: 'Meesho',   logo: '/assets/images/brands/meesho.png',   fallback: 'Meesho' },
  { key: 'ondc',     name: 'ONDC',     logo: '/assets/images/brands/ondc.png',     fallback: 'ONDC' },
  { key: 'jiomart',  name: 'JioMart',  logo: '/assets/images/brands/jiomart.svg',  fallback: 'JioMart' },
  { key: 'more',     name: 'More',     logo: null,                                 fallback: '+', isMore: true },
])

function handleLogoError (key) {
  const b = brands.value.find(x => x.key === key)
  if (!b) return
  b.logo = null
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.15 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
