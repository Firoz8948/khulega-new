<template>
  <div class="page page--policy">
    <AppHeader />

    <main class="main">
      <HeroSection
        :badge="t('hero.badge')"
        :title="t('hero.title')"
        :highlightText="t('hero.highlightText')"
        :subtitle="t('hero.subtitle')"
        :breadcrumb="t('hero.breadcrumb')"
      />

      <section class="policy-content">
        <div class="policy-content__container">

          <!-- Intro -->
          <div class="policy-intro">
            <div class="policy-intro__icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 class="policy-intro__heading">{{ t('intro.heading') }}</h2>
            <p class="policy-intro__text">
              {{ t('intro.welcome') }} <strong>Khulega Online</strong>.
            </p>
            <p class="policy-intro__text">
              {{ t('intro.para1') }}
            </p>
            <div class="policy-links-grid">
              <a href="https://khulega.online" target="_blank" rel="noopener" class="policy-link-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div>
                  <span class="policy-link-card__label">{{ t('intro.linkWebsite') }}</span>
                  <span class="policy-link-card__url">khulega.online</span>
                </div>
              </a>
              <a href="https://usc.khulega.online" target="_blank" rel="noopener" class="policy-link-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <div>
                  <span class="policy-link-card__label">{{ t('intro.linkUSC') }}</span>
                  <span class="policy-link-card__url">usc.khulega.online</span>
                </div>
              </a>
            </div>
            <div class="policy-intro__notice">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>{{ t('intro.notice') }}</span>
            </div>

            <div class="policy-intro__updated">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{{ t('intro.lastUpdated') }} {{ currentDate }}</span>
            </div>
          </div>

          <!-- Section Cards -->
          <div class="policy-sections">
            <template v-for="(sec, idx) in policySections" :key="sec.num">
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">{{ sec.num }}</span>
                <h2 class="policy-card__title">{{ sec.title }}</h2>
              </div>
              <div class="policy-card__body">
                <p v-if="sec.intro" class="policy-card__text">{{ sec.intro }}</p>
                <p v-if="sec.intro2" class="policy-card__text policy-card__text--mt">{{ sec.intro2 }}</p>

                <!-- Role grid (section 2) -->
                <div v-if="sec.roleItems && sec.roleItems.length" class="policy-role-grid">
                  <div v-for="(item, i) in sec.roleItems" :key="i" class="policy-role-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    <span>{{ item }}</span>
                  </div>
                </div>

                <!-- Subsections (e.g. 3, 6) -->
                <template v-if="sec.subsections && sec.subsections.length">
                <div v-for="(sub, subIdx) in sec.subsections" :key="subIdx" class="policy-subsection">
                  <h3 class="policy-subsection__title">
                    <span class="policy-subsection__badge">{{ sub.badge }}</span>
                    {{ sub.title }}
                  </h3>
                  <p v-if="sub.intro" class="policy-card__text">{{ sub.intro }}</p>
                  <div v-if="sub.dataItems && sub.dataItems.length" class="policy-data-grid">
                    <div v-for="(item, di) in sub.dataItems" :key="di" class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>{{ item }}</span>
                    </div>
                  </div>
                  <p v-if="sub.intro2" class="policy-card__text policy-card__text--mt">{{ sub.intro2 }}</p>
                  <div v-if="sub.marketplaces && sub.marketplaces.length" class="policy-marketplace-tags">
                    <span v-for="(m, mi) in sub.marketplaces" :key="mi" class="policy-marketplace-tag">{{ m }}</span>
                  </div>
                  <ul v-if="sub.list && sub.list.length" class="policy-list" :class="'policy-list--' + (sub.listType || 'check')">
                    <li v-for="(item, li) in sub.list" :key="li">{{ item }}</li>
                  </ul>
                  <div v-if="sub.highlight" class="policy-card__highlight">{{ sub.highlight }}</div>
                </div>
                </template>

                <!-- Main list -->
                <ul v-if="sec.list && sec.list.length && !sec.subsections" class="policy-list" :class="'policy-list--' + (sec.listType || 'check')">
                  <li v-for="(item, li) in sec.list" :key="li">{{ item }}</li>
                </ul>

                <!-- Basis grid (section 5) -->
                <div v-if="sec.basisItems && sec.basisItems.length" class="policy-basis-grid">
                  <div v-for="(item, i) in sec.basisItems" :key="i" class="policy-basis-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>{{ item }}</span>
                  </div>
                </div>

                <!-- Security grid (section 7) -->
                <div v-if="sec.securityItems && sec.securityItems.length" class="policy-security-grid">
                  <div v-for="(item, i) in sec.securityItems" :key="i" class="policy-security-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>{{ item }}</span>
                  </div>
                </div>

                <!-- Rights grid (section 10) -->
                <div v-if="sec.rightsItems && sec.rightsItems.length" class="policy-rights-grid">
                  <div v-for="(item, i) in sec.rightsItems" :key="i" class="policy-rights-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>{{ item }}</span>
                  </div>
                </div>
                <div v-if="sec.infoBox" class="policy-card__info-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{{ sec.infoBox }}
                    <a href="mailto:admin@techsandhya.com">admin@techsandhya.com</a>
                  </span>
                </div>

                <!-- Contact grid (section 15) -->
                <div v-if="sec.num === 15 && sec.contactLabelEmail" class="policy-contact-grid">
                  <a href="mailto:admin@techsandhya.com" class="policy-contact-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <span class="policy-contact-card__label">{{ sec.contactLabelEmail }}</span>
                      <span class="policy-contact-card__value">admin@techsandhya.com</span>
                    </div>
                  </a>
                  <a href="https://khulega.online" target="_blank" rel="noopener" class="policy-contact-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <div>
                      <span class="policy-contact-card__label">{{ sec.contactLabelWebsite }}</span>
                      <span class="policy-contact-card__value">khulega.online</span>
                    </div>
                  </a>
                </div>

                <div v-if="sec.highlight" class="policy-card__highlight">{{ sec.highlight }}</div>
                <div v-if="sec.alert" class="policy-card__alert">{{ sec.alert }}</div>
                <div v-if="sec.alertDanger" class="policy-card__alert policy-card__alert--danger">{{ sec.alertDanger }}</div>
              </div>
            </div>
            </template>

          </div>

          <!-- Consent / Acceptance -->
          <div class="policy-acceptance">
            <div class="policy-acceptance__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 class="policy-acceptance__title">{{ t('consent.title') }}</h2>
            <p class="policy-acceptance__text">
              {{ t('consent.text') }}
            </p>
            <ul class="policy-acceptance__list">
              <li v-for="(item, i) in (t('consent.list') || [])" :key="i">
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

const { t } = useI18n('policy')

const policySections = computed(() => t('sections') || [])

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>