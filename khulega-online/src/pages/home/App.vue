<template>
  <div class="page page--home">
    <AppHeader />

    <main class="main">
      <!-- Hero -->
      <DesktopHero />

      <!-- Features -->
      <section class="section">
        <div class="container">
          <h2 class="text-center" style="margin-bottom: var(--space-2xl);">
            {{ t('features.title') }}
          </h2>
          <div class="features__grid">
            <BaseCard hoverable v-for="(feature, idx) in t('features.items')" :key="idx">
              <h4>{{ feature.icon }} {{ feature.title }}</h4>
              <p style="margin-top: var(--space-sm); color: var(--color-text-secondary);">
                {{ feature.description }}
              </p>
            </BaseCard>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section" style="background: var(--color-bg-secondary);">
        <div class="container text-center">
          <h2>{{ t('cta.title') }}</h2>
          <p style="color: var(--color-text-secondary); margin: var(--space-md) 0 var(--space-xl);">
            {{ t('cta.subtitle') }}
          </p>
          <BaseButton size="lg">{{ t('cta.button') }}</BaseButton>
        </div>
      </section>
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton phone="91XXXXXXXXXX" />
  </div>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
import DesktopHero from '@/components/home/DesktopHero.vue'
const { t } = useI18n('home')
</script>
