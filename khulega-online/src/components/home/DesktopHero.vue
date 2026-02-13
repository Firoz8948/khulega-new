<template>
  <section class="hero">
    <!-- ===== DESKTOP LAYOUT ===== -->
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
          <a href="/seller-register.html" class="hero__btn hero__btn--primary">
            {{ t('hero.ctaRegister') }}
          </a>
          <a href="/services.html" class="hero__btn hero__btn--outline">
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
              <!-- Blue gradient overlay -->
              <div class="hero__slide-overlay"></div>

              <!-- Story text on image -->
              <div class="hero__slide-story">
                <p class="hero__slide-name">{{ story.name }}</p>
                <p class="hero__slide-text">{{ story.text }}</p>
              </div>
            </div>
          </div>

          <!-- Slide indicators -->
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

    <!-- ===== MOBILE LAYOUT ===== -->
    <div class="hero__mobile" v-if="stories.length > 0">
      <!-- Active story image + overlay text -->
      <div class="hero__mobile-slide">
        <img
          :src="stories[activeSlide]?.image"
          :alt="stories[activeSlide]?.alt"
          class="hero__mobile-img"
        />
        <div class="hero__mobile-overlay"></div>
        <div class="hero__mobile-content">
          <h1 class="hero__mobile-tagline">
            <span>जब <strong>shop.khulega.online</strong></span>
            <span>तब <strong>sab.milega.online</strong></span>
          </h1>
          <p class="hero__mobile-story">{{ stories[activeSlide]?.text }}</p>
        </div>
      </div>

      <!-- Mobile dots -->
      <div class="hero__mobile-dots">
        <button
          v-for="(story, idx) in stories"
          :key="'mdot-' + idx"
          class="hero__dot"
          :class="{ 'hero__dot--active': idx === activeSlide }"
          @click="goToSlide(idx)"
        ></button>
      </div>

      <!-- Mobile CTAs -->
      <div class="hero__mobile-ctas">
        <a href="/shop.html" class="hero__btn hero__btn--primary">
          {{ t('hero.ctaShopNow') }}
        </a>
        <a href="/services.html" class="hero__btn hero__btn--outline">
          {{ t('hero.ctaGetServices') }}
        </a>
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