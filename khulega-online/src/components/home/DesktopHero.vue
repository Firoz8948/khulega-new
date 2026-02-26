<template>
  <section class="hero">
    <!-- ===== DESKTOP LAYOUT (UNCHANGED) ===== -->
    <div class="hero__desktop">
      <!-- Left: Static text -->
      <div class="hero__left">
        <p class="hero__eyebrow">{{ t('hero.eyebrow') }}</p>

        <h1 class="hero__tagline">
          <span class="hero__tagline-line">{{ t('hero.tagline1prefix') }} <strong>{{ t('hero.tagline1') }}</strong></span>
          <span class="hero__tagline-line hero__tagline-line--highlight">{{ t('hero.tagline2prefix') }} <strong>{{ t('hero.tagline2') }}</strong></span>
        </h1>

        <p class="hero__desc">
          {{ t('hero.desc') }}
        </p>

        <div class="hero__brands">
          <div
            v-for="(brand, i) in heroBrands"
            :key="brand.key"
            class="hero__brand-card"
          >
            <template v-if="brand.logo">
              <img
                :src="brand.logo"
                :alt="brand.name"
                class="hero__brand-img"
              />
              <span class="hero__brand-name">{{ brand.name }}</span>
            </template>
            <span v-else class="hero__brand-more">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              More
            </span>
          </div>
        </div>

        <div class="hero__ctas">
          <a
            href="https://usc.khulega.online/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__btn hero__btn--primary"
          >
            {{ t('hero.ctaRegister') }}
          </a>
          <a href="/services/" class="hero__btn hero__btn--outline">
            {{ t('hero.ctaServices') }}
          </a>
        </div>
      </div>

      <!-- Right: Sliding stories -->
      <div class="hero__right">
        <div class="hero__carousel">
          <div
            class="hero__slide"
            v-for="(story, idx) in stories"
            :key="idx"
            :class="{ 'hero__slide--active': idx === activeSlide }"
          >
            <div class="hero__slide-img-wrap">
              <img
                :src="story.image"
                :alt="story.alt"
                class="hero__slide-img"
              />
              <div class="hero__slide-overlay"></div>
              <div class="hero__slide-story">
                <p class="hero__slide-name">{{ story.name }}</p>
                <p class="hero__slide-text">{{ story.text }}</p>
              </div>
            </div>
          </div>
          <div class="hero__dots">
            <button
              v-for="(story, idx) in stories"
              :key="'dot-' + idx"
              class="hero__dot"
              :class="{ 'hero__dot--active': idx === activeSlide }"
              @click="goToSlide(idx)"
              :aria-label="'Story ' + (idx + 1)"
            ></button>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== MOBILE LAYOUT (REDESIGNED) ===== -->
    <div class="hero__mobile" v-if="stories.length > 0">
      <!-- TOP HALF: Image + Story (takes ~50% of screen) -->
      <div class="hero__mob-top">
        <div class="hero__mob-image-container">
          <!-- All images stacked, only active visible -->
          <div
            v-for="(story, idx) in stories"
            :key="'mob-img-' + idx"
            class="hero__mob-image-slide"
            :class="{ 'hero__mob-image-slide--active': idx === activeSlide }"
          >
            <img
              :src="story.image"
              :alt="story.alt"
              class="hero__mob-image"
            />
          </div>

          <!-- Gradient overlay on image -->
          <div class="hero__mob-image-overlay"></div>

          <!-- Story text on image -->
          <div class="hero__mob-story-content">
            <p class="hero__mob-story-name">{{ stories[activeSlide]?.name }}</p>
            <p class="hero__mob-story-text">{{ stories[activeSlide]?.text }}</p>
          </div>

          <!-- Dots on image -->
          <div class="hero__mob-image-dots">
            <button
              v-for="(story, idx) in stories"
              :key="'mobdot-' + idx"
              class="hero__mob-dot"
              :class="{ 'hero__mob-dot--active': idx === activeSlide }"
              @click="goToSlide(idx)"
              :aria-label="'Story ' + (idx + 1)"
            ></button>
          </div>
        </div>
      </div>

      <!-- BOTTOM HALF: Tagline + Brands + CTAs (white/light background) -->
      <div class="hero__mob-bottom">
        <!-- Tagline -->
        <div class="hero__mob-tagline">
          <p class="hero__mob-tagline-line">
            जब <strong>shop.khulega.online</strong>
          </p>
          <p class="hero__mob-tagline-line hero__mob-tagline-line--blue">
            तब <strong>sab.milega.online</strong>
          </p>
        </div>

        <!-- Description -->
        <p class="hero__mob-desc">One solution for every need of your online business</p>

        <!-- Brand logos in a row -->
        <div class="hero__mob-brands">
          <div
            v-for="brand in heroBrands"
            :key="'mob-' + brand.key"
            class="hero__mob-brand"
          >
            <template v-if="brand.logo">
              <div class="hero__mob-brand-icon">
                <img :src="brand.logo" :alt="brand.name" />
              </div>
              <span class="hero__mob-brand-label">{{ brand.name }}</span>
            </template>
            <template v-else>
              <div class="hero__mob-brand-icon hero__mob-brand-icon--more">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
              <span class="hero__mob-brand-label">More</span>
            </template>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="hero__mob-ctas">
          <a href="/seller-register.html" class="hero__mob-btn hero__mob-btn--primary">
            <svg class="hero__mob-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
            {{ t('hero.ctaRegister') }}
          </a>
          <a href="/services/" class="hero__mob-btn hero__mob-btn--secondary">
            <svg class="hero__mob-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {{ t('hero.ctaServices') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('home')

const heroBrands = [
  { key: 'amazon', name: 'Amazon', logo: '/assets/images/brands/amazon.png' },
  { key: 'flipkart', name: 'Flipkart', logo: '/assets/images/brands/flipkart.png' },
  { key: 'meesho', name: 'Meesho', logo: '/assets/images/brands/meesho.png' },
  { key: 'ondc', name: 'ONDC', logo: '/assets/images/brands/ondc.png' },
  { key: 'more', name: 'More', logo: null }
]

const storyImages = [
  '/assets/images/image1.png',
  '/assets/images/image2.png',
  '/assets/images/image3.png'
]

const stories = computed(() => {
  const arr = t('hero.stories')
  if (!Array.isArray(arr)) return []
  return arr.map((story, i) => ({
    ...story,
    image: storyImages[i] || ''
  }))
})

const activeSlide = ref(0)
let timer = null

function goToSlide (idx) {
  activeSlide.value = idx
  restartTimer()
}

function nextSlide () {
  if (stories.value.length === 0) return
  activeSlide.value = (activeSlide.value + 1) % stories.value.length
}

function restartTimer () {
  if (timer) clearInterval(timer)
  timer = setInterval(nextSlide, 5000)
}

onMounted(() => {
  if (stories.value.length > 0) restartTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>