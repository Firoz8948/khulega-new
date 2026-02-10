<template>
  <div class="page page--home">
    <AppHeader />

    <main class="main">
      <!-- Hero -->
      <section class="hero">
        <div class="container">
          <h1 class="hero__title">{{ t('hero.title') }}</h1>
          <p class="hero__subtitle">{{ t('hero.subtitle') }}</p>
          <div class="hero__actions">
            <BaseButton variant="secondary" size="lg">
              <a href="/shop.html">{{ t('hero.cta1') }}</a>
            </BaseButton>
            <BaseButton variant="outline" size="lg" style="border-color: white; color: white;">
              <a href="/services.html">{{ t('hero.cta2') }}</a>
            </BaseButton>
          </div>
        </div>
      </section>

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
const { t } = useI18n('home')
</script>
