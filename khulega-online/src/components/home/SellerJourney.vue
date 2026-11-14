<template>
  <section class="sj" ref="sectionRef">
    <div class="sj__container">
      <div class="sj__header" :class="{ 'sj__header--visible': isVisible }">
        <p class="sj__label">{{ t('sellerJourney.label') }}</p>
        <h2 class="sj__title">
          {{ t('sellerJourney.title') }}
          <span class="sj__title-highlight">{{ t('sellerJourney.titleHighlight') }}</span>
        </h2>
        <p class="sj__subtitle">{{ t('sellerJourney.subtitle') }}</p>
      </div>

      <div class="sj__track-wrap" :class="{ 'sj__track-wrap--visible': isVisible }">
        <ol class="sj__grid" role="list">
          <li
            v-for="(step, idx) in steps"
            :key="idx"
            class="sj__item"
            :style="{ '--delay': `${0.08 + idx * 0.06}s` }"
          >
            <article class="sj__card">
              <div class="sj__card-head">
                <span class="sj__num" aria-hidden="true">{{ idx + 1 }}</span>
                <p class="sj__step-title">{{ step.title }}</p>
                <div class="sj__icon" :class="`sj__icon--${step.color}`">
                  <div v-html="step.icon" class="sj__icon-svg" />
                </div>
              </div>
              <p class="sj__step-desc">{{ step.desc }}</p>
            </article>
          </li>
        </ol>
        <p class="sj__scroll-hint" aria-hidden="true">Swipe to see all steps</p>
      </div>

      <div class="sj__footer" :class="{ 'sj__footer--visible': isVisible }">
        <a href="/user-journey/" class="sj__cta">
          <span>{{ t('sellerJourney.cta') }}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('home')

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const stepIcons = [
  { color: 'blue', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
      <polyline points="10 17 15 12 10 7"/>
      <line x1="15" y1="12" x2="3" y2="12"/>
    </svg>` },
  { color: 'indigo', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>` },
  { color: 'emerald', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>` },
  { color: 'amber', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>` },
  { color: 'violet', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="2"/>
      <circle cx="4" cy="6" r="2"/>
      <circle cx="20" cy="6" r="2"/>
      <circle cx="4" cy="18" r="2"/>
      <circle cx="20" cy="18" r="2"/>
      <line x1="6" y1="6" x2="10" y2="11"/>
      <line x1="18" y1="6" x2="14" y2="11"/>
      <line x1="6" y1="18" x2="10" y2="13"/>
      <line x1="18" y1="18" x2="14" y2="13"/>
    </svg>` },
  { color: 'green', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>` },
]

const steps = computed(() => {
  const tr = t('sellerJourney.steps')
  if (!Array.isArray(tr) || tr.length !== stepIcons.length) {
    return stepIcons.map((s) => ({ ...s, title: '', desc: '' }))
  }
  return tr.map((item, i) => ({
    ...stepIcons[i],
    title: item.title || '',
    desc: item.desc || '',
  }))
})

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>