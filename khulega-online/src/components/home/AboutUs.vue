<template>
  <section class="au" ref="sectionRef">
    <div class="au__container">
      <!-- ===== LEFT COLUMN (Desktop) ===== -->
      <div class="au__left">
        <!-- Image -->
        <div class="au__image-side" :class="{ 'au__image-side--visible': isVisible }">
          <div class="au__image-frame">
            <div class="au__image-pattern" aria-hidden="true"></div>
            <div class="au__image-accent" aria-hidden="true"></div>
            <div class="au__image-wrap">
              <img
                src="/assets/images/aboutus.webp"
                :alt="t('aboutUs.imageAlt')"
                class="au__image"
                loading="lazy"
              />
            </div>
            <div class="au__float-card au__float-card--top">
              <span class="au__float-number">5+</span>
              <span class="au__float-label">{{ t('aboutUs.marketplaces') }}</span>
            </div>
            <div class="au__float-card au__float-card--bottom">
              <span class="au__float-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </span>
              <span class="au__float-label">{{ t('aboutUs.helpingSellersGrow') }}</span>
            </div>
          </div>
        </div>

        <!-- Highlights (below image on desktop, below desc on mobile) -->
        <div class="au__highlights" :class="{ 'au__highlights--visible': isVisible }">
          <div class="au__highlight">
            <span class="au__highlight-icon au__highlight-icon--blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </span>
            <div>
              <p class="au__highlight-title">{{ t('aboutUs.highlight1Title') }}</p>
              <p class="au__highlight-desc">{{ t('aboutUs.highlight1Desc') }}</p>
            </div>
          </div>
          <div class="au__highlight">
            <span class="au__highlight-icon au__highlight-icon--emerald">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </span>
            <div>
              <p class="au__highlight-title">{{ t('aboutUs.highlight2Title') }}</p>
              <p class="au__highlight-desc">{{ t('aboutUs.highlight2Desc') }}</p>
            </div>
          </div>
          <div class="au__highlight">
            <span class="au__highlight-icon au__highlight-icon--amber">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </span>
            <div>
              <p class="au__highlight-title">{{ t('aboutUs.highlight3Title') }}</p>
              <p class="au__highlight-desc">{{ t('aboutUs.highlight3Desc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== RIGHT COLUMN (Desktop) ===== -->
      <div class="au__right">
        <!-- Header -->
        <div class="au__header" :class="{ 'au__header--visible': isVisible }">
          <p class="au__label">{{ t('aboutUs.label') }}</p>
          <h2 class="au__title">
            {{ t('aboutUs.title') }}
            <span class="au__title-highlight">{{ t('aboutUs.titleHighlight') }}</span>
          </h2>

          <!-- Marketplace brand cards -->
          <div class="au__brands" :class="{ 'au__brands--visible': isVisible }">
            <div
              v-for="(brand, i) in brands"
              :key="brand.key"
              class="au__brand-card"
              :style="{ '--i': i }"
            >
              <template v-if="brand.logo">
                <img
                  :src="brand.logo"
                  :alt="brand.name"
                  class="au__brand-img"
                />
                <span class="au__brand-name">{{ brand.name }}</span>
              </template>
              <span v-else class="au__brand-more">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                {{ t('aboutUs.more') }}
              </span>
            </div>
          </div>

          <div class="au__identity">
            <p class="au__identity-text">
              {{ t('aboutUs.identityWeAre') }}
              <strong class="au__brand">Khulega.online</strong>
              - {{ t('aboutUs.identityPoweredBy') }}
              <strong>Sandhya Technology Solutions & Operations LLP</strong>
            </p>
          </div>
        </div>

        <!-- Mobile only: Image appears here -->
        <div class="au__image-side au__image-side--mobile" :class="{ 'au__image-side--visible': isVisible }">
          <div class="au__image-frame">
            <div class="au__image-pattern" aria-hidden="true"></div>
            <div class="au__image-accent" aria-hidden="true"></div>
            <div class="au__image-wrap">
              <img
                src="/assets/images/aboutus.webp"
                :alt="t('aboutUs.imageAlt')"
                class="au__image"
                loading="lazy"
              />
            </div>
            <div class="au__float-card au__float-card--top">
              <span class="au__float-number">5+</span>
              <span class="au__float-label">{{ t('aboutUs.marketplaces') }}</span>
            </div>
            <div class="au__float-card au__float-card--bottom">
              <span class="au__float-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </span>
              <span class="au__float-label">{{ t('aboutUs.helpingSellersGrow') }}</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="au__desc-wrap" :class="{ 'au__desc-wrap--visible': isVisible }">
          <div class="au__desc">
            <p>
              {{ t('aboutUs.desc1') }}
            </p>
            <p>
              {{ t('aboutUs.desc2') }}
              <strong>Amazon, Flipkart, Meesho, ONDC, JioMart</strong>,
              {{ t('aboutUs.desc2End') }}
              <a href="https://usc.khulega.online" target="_blank" rel="noopener noreferrer" class="au__link">usc.khulega.online</a>.
            </p>
            <p>
              {{ t('aboutUs.desc3') }} <strong>{{ t('aboutUs.desc3Bold') }}</strong>.
            </p>
          </div>
        </div>

        <!-- Mobile only: Highlights appear here -->
        <div class="au__highlights au__highlights--mobile" :class="{ 'au__highlights--visible': isVisible }">
          <div class="au__highlight">
            <span class="au__highlight-icon au__highlight-icon--blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </span>
            <div>
              <p class="au__highlight-title">{{ t('aboutUs.highlight1Title') }}</p>
              <p class="au__highlight-desc">{{ t('aboutUs.highlight1Desc') }}</p>
            </div>
          </div>
          <div class="au__highlight">
            <span class="au__highlight-icon au__highlight-icon--emerald">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </span>
            <div>
              <p class="au__highlight-title">{{ t('aboutUs.highlight2Title') }}</p>
              <p class="au__highlight-desc">{{ t('aboutUs.highlight2Desc') }}</p>
            </div>
          </div>
          <div class="au__highlight">
            <span class="au__highlight-icon au__highlight-icon--amber">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </span>
            <div>
              <p class="au__highlight-title">{{ t('aboutUs.highlight3Title') }}</p>
              <p class="au__highlight-desc">{{ t('aboutUs.highlight3Desc') }}</p>
            </div>
          </div>
        </div>

        <!-- CTAs -->
        <div class="au__ctas" :class="{ 'au__ctas--visible': isVisible }">
          <a href="https://techsandhya.com" target="_blank" rel="noopener noreferrer" class="au__btn au__btn--primary">
            <span>{{ t('aboutUs.learnMoreAboutUs') }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="/contact/" class="au__btn au__btn--outline">
            {{ t('aboutUs.getInTouch') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('home')

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const brands = [
  { key: 'amazon',   name: 'Amazon',   logo: '/assets/images/brands/amazon.png'   },
  { key: 'flipkart', name: 'Flipkart', logo: '/assets/images/brands/flipkart.png' },
  { key: 'meesho',   name: 'Meesho',   logo: '/assets/images/brands/meesho.png'   },
  { key: 'ondc',     name: 'ONDC',     logo: '/assets/images/brands/ondc.png'     },
  { key: 'jiomart',  name: 'JioMart',  logo: '/assets/images/brands/jiomart.svg'  },
  { key: 'more',     name: 'More',     logo: null                                 },
]

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.12 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>