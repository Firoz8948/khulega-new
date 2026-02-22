<template>
  <div class="page page--home">
    <AppHeader />

    <main class="main">
      <!-- Hero -->
      <DesktopHero />
      <SellerJourney />
      <SellersOnKhulega />
      <AboutUs />

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

      <YouTubeVideo />
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton phone="91XXXXXXXXXX" />
  </div>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
import DesktopHero from '@/components/home/DesktopHero.vue'
import SellerJourney from '@/components/home/SellerJourney.vue'
import SellersOnKhulega from '@/components/home/SellersOnKhulega.vue'
import AboutUs from '@/components/home/AboutUs.vue'
import YouTubeVideo from '@/components/home/YouTubeVideo.vue'

const { t } = useI18n('home')
</script>
