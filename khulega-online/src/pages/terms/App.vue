<template>
  <div class="page page--terms">
    <AppHeader />

    <main class="main">
      <HeroSection
        :badge="t('hero.badge')"
        :title="t('hero.title')"
        :highlightText="t('hero.highlightText')"
        :subtitle="t('hero.subtitle')"
        :breadcrumb="t('hero.breadcrumb')"
      />

      <section class="terms-content">
        <div class="terms-content__container">

          <!-- Intro -->
          <div class="terms-intro">
            <div class="terms-intro__icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h2 class="terms-intro__heading">{{ t('intro.heading') }}</h2>
            <p class="terms-intro__text">
              {{ t('intro.welcome') }} <strong>Khulega Online</strong>.
            </p>
            <p class="terms-intro__text">
              {{ t('intro.para1') }}
            </p>
            <div class="terms-links-grid">
              <a href="https://khulega.online" target="_blank" rel="noopener" class="terms-link-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div>
                  <span class="terms-link-card__label">{{ t('intro.linkWebsite') }}</span>
                  <span class="terms-link-card__url">khulega.online</span>
                </div>
              </a>
              <a href="https://usc.khulega.online" target="_blank" rel="noopener" class="terms-link-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <div>
                  <span class="terms-link-card__label">{{ t('intro.linkUSC') }}</span>
                  <span class="terms-link-card__url">usc.khulega.online</span>
                </div>
              </a>
            </div>
            <p class="terms-intro__text terms-intro__text--mt">
              {{ t('intro.para2') }}
            </p>
            <div class="terms-intro__notice">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>{{ t('intro.notice') }}</span>
            </div>

            <div class="terms-intro__updated">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{{ t('intro.lastUpdated') }} {{ currentDate }}</span>
            </div>
          </div>

          <!-- Section Cards -->
          <div class="terms-sections">
            <template v-for="(sec, idx) in termsSections" :key="sec.num">
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">{{ sec.num }}</span>
                <h2 class="terms-card__title">{{ sec.title }}</h2>
              </div>
              <div class="terms-card__body">
                <p v-if="sec.intro" class="terms-card__text">{{ sec.intro }}</p>
                <div v-if="sec.marketplaces && sec.marketplaces.length" class="terms-marketplace-tags">
                  <span v-for="(m, mi) in sec.marketplaces" :key="mi" class="terms-marketplace-tag">{{ m }}</span>
                </div>
                <div v-if="sec.ipTags && sec.ipTags.length" class="terms-ip-tags">
                  <span v-for="(tag, i) in sec.ipTags" :key="i" class="terms-ip-tag">{{ tag }}</span>
                </div>
                <p v-if="sec.intro2" class="terms-card__text terms-card__text--mt">{{ sec.intro2 }}</p>

                <ul v-if="sec.list && sec.list.length" class="terms-list" :class="'terms-list--' + (sec.listType || 'check')">
                  <li v-for="(item, li) in sec.list" :key="li">{{ item }}</li>
                </ul>
                <ul v-if="sec.list2 && sec.list2.length" class="terms-list" :class="'terms-list--' + (sec.list2Type || 'arrow')">
                  <li v-for="(item, li) in sec.list2" :key="li">{{ item }}</li>
                </ul>

                <div v-if="sec.responsibilityItems && sec.responsibilityItems.length" class="terms-responsibility-grid">
                  <div v-for="(item, i) in sec.responsibilityItems" :key="i" class="terms-responsibility-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>{{ item }}</span>
                  </div>
                </div>

                <div v-if="sec.infoBox" class="terms-card__info-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>{{ sec.infoBox }}
                    <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>
                  </span>
                </div>

                <div v-if="sec.num === 17 && sec.contactLabelEmail" class="terms-contact-grid">
                  <a href="mailto:admin@techsandhya.com" class="terms-contact-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <span class="terms-contact-card__label">{{ sec.contactLabelEmail }}</span>
                      <span class="terms-contact-card__value">admin@techsandhya.com</span>
                    </div>
                  </a>
                  <a href="https://khulega.online" target="_blank" rel="noopener" class="terms-contact-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <div>
                      <span class="terms-contact-card__label">{{ sec.contactLabelWebsite }}</span>
                      <span class="terms-contact-card__value">khulega.online</span>
                    </div>
                  </a>
                </div>

                <div v-if="sec.highlight" class="terms-card__highlight">{{ sec.highlight }}</div>
                <div v-if="sec.alert" class="terms-card__alert">{{ sec.alert }}</div>
                <div v-if="sec.alertDanger" class="terms-card__alert terms-card__alert--danger">{{ sec.alertDanger }}</div>
              </div>
            </div>
            </template>

          </div>

          <!-- Acceptance -->
          <div class="terms-acceptance">
            <div class="terms-acceptance__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 class="terms-acceptance__title">{{ t('acceptance.title') }}</h2>
            <p class="terms-acceptance__text">
              {{ t('acceptance.text') }}
            </p>
            <ul class="terms-acceptance__list">
              <li v-for="(item, i) in (t('acceptance.list') || [])" :key="i">
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
import { computed } from 'vue'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('terms')

const termsSections = computed(() => t('sections') || [])

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>