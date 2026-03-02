<!-- pages/SellerGuidelines.vue -->
<template>
  <div class="page page--seller-guidelines">
    <AppHeader />

    <main class="main">
      <HeroSection
        :badge="t('hero.badge')"
        :title="t('hero.title')"
        :highlightText="t('hero.highlightText')"
        :subtitle="t('hero.subtitle')"
        :breadcrumb="t('hero.breadcrumb')"
      />

      <!-- ====== CONTENT ====== -->
      <section class="sgl-content">
        <div class="sgl-content__container">

          <!-- Intro -->
          <div class="sgl-intro">
            <div class="sgl-intro__icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <p class="sgl-intro__text">
              <strong>Khulega Online</strong> {{ t('intro.text') }}
              <strong>{{ t('intro.usc') }}</strong>
              {{ t('intro.text2') }}
            </p>
            <a href="https://usc.khulega.online" target="_blank" rel="noopener" class="sgl-intro__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {{ t('intro.linkText') }}
            </a>
            <p class="sgl-intro__text sgl-intro__text--mt">
              {{ t('intro.text3') }}
            </p>
            <div class="sgl-marketplace-tags">
              <span v-for="(m, i) in (t('intro.marketplaces') || [])" :key="i" class="sgl-marketplace-tag">{{ m }}</span>
            </div>
            <p class="sgl-intro__text sgl-intro__text--mt">
              {{ t('intro.text4') }}
            </p>
            <div class="sgl-intro__notice">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>{{ t('intro.notice') }}</span>
            </div>
          </div>

          <!-- Section Cards -->
          <div class="sgl-sections">
            <div v-for="(sec, idx) in sections" :key="idx" class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">{{ idx + 2 }}</span>
                <h2 class="sgl-card__title">{{ sec.title }}</h2>
              </div>
              <div class="sgl-card__body">
                <p v-if="sec.intro" class="sgl-card__text">{{ sec.intro }}</p>
                <ul v-if="sec.listCheck" class="sgl-list sgl-list--check">
                  <li v-for="(item, i) in sec.listCheck" :key="i">{{ item }}</li>
                </ul>
                <template v-if="sec.features">
                  <div class="sgl-feature-grid">
                    <div v-for="(f, i) in sec.features" :key="i" class="sgl-feature-chip">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                      {{ f }}
                    </div>
                  </div>
                </template>
                <p v-if="sec.intro2" class="sgl-card__text sgl-card__text--mt">{{ sec.intro2 }}</p>
                <ul v-if="sec.listArrow" class="sgl-list sgl-list--arrow">
                  <li v-for="(item, i) in sec.listArrow" :key="i">{{ item }}</li>
                </ul>
                <ul v-if="sec.listWarning" class="sgl-list sgl-list--warning">
                  <li v-for="(item, i) in sec.listWarning" :key="i">{{ item }}</li>
                </ul>
                <ul v-if="sec.listCross" class="sgl-list sgl-list--cross">
                  <li v-for="(item, i) in sec.listCross" :key="i">{{ item }}</li>
                </ul>
                <template v-if="sec.subsections">
                  <div class="sgl-sub-sections">
                    <div v-for="(sub, si) in sec.subsections" :key="si" class="sgl-sub">
                      <h3 class="sgl-sub__title">{{ sub.title }}</h3>
                      <ul class="sgl-list sgl-list--check">
                        <li v-for="(item, i) in (sub.listCheck || [])" :key="i">{{ item }}</li>
                      </ul>
                    </div>
                  </div>
                </template>
                <template v-if="sec.metrics">
                  <div class="sgl-metric-grid">
                    <div v-for="(m, i) in sec.metrics" :key="i" class="sgl-metric">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                      <span>{{ m }}</span>
                    </div>
                  </div>
                </template>
                <div v-if="sec.alert" class="sgl-card__alert">{{ sec.alert }}</div>
                <div v-if="sec.alertDanger" class="sgl-card__alert sgl-card__alert--danger">{{ sec.alertDanger }}</div>
                <div v-if="sec.highlight" class="sgl-card__highlight">{{ sec.highlight }}</div>
              </div>
            </div>
          </div>

          <!-- Acknowledgment -->
          <div class="sgl-acknowledgment">
            <div class="sgl-acknowledgment__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 class="sgl-acknowledgment__title">{{ t('acknowledgment.title') }}</h2>
            <p class="sgl-acknowledgment__text">
              {{ t('acknowledgment.text') }}
            </p>
            <ul class="sgl-acknowledgment__list">
              <li v-for="(item, i) in (t('acknowledgment.list') || [])" :key="i">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>

        </div>
      </section>
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
import { computed } from 'vue'

const { t } = useI18n('sellerGuidelines')
const sections = computed(() => t('sections') || [])
</script>