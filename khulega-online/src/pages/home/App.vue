<template>
  <div class="page page--home">
    <AppHeader />

    <main class="main">
      <!-- Hero -->
      <DesktopHero />
      <OurServices />
      <SellerJourney />
      <SellersOnKhulega />
      <AboutUs />
      <CtaSection />

      <YouTubeVideo />
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton phone="91XXXXXXXXXX" />
  </div>
</template>

<script setup>
import DesktopHero from '@/components/home/DesktopHero.vue'
import OurServices from '@/components/home/OurServices.vue'
import SellerJourney from '@/components/home/SellerJourney.vue'
import SellersOnKhulega from '@/components/home/SellersOnKhulega.vue'
import AboutUs from '@/components/home/AboutUs.vue'
import YouTubeVideo from '@/components/home/YouTubeVideo.vue'
import CtaSection from '@/components/home/CtaSection.vue'
</script>
