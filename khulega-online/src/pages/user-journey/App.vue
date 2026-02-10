<template>
  <div class="page page--user-journey">
    <AppHeader />

    <main class="main">
      <div class="container">
        <BreadCrumb :crumbs="[{ label: t('page.breadcrumb') }]" />

        <section class="section">
          <h1>{{ t('page.title') }}</h1>
          <p style="color: var(--color-text-secondary); margin-top: var(--space-sm); margin-bottom: var(--space-2xl);">
            {{ t('page.subtitle') }}
          </p>

          <div class="journey__timeline">
            <div v-for="(step, idx) in t('steps')" :key="idx" class="journey__step">
              <h4>{{ step.title }}</h4>
              <p style="color: var(--color-text-secondary); margin-top: var(--space-xs);">
                {{ step.description }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
const { t } = useI18n('userJourney')
</script>
