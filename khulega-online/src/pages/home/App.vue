<template>
  <div class="page page--home">
    <AppHeader />

    <main class="main">
      <!-- Hero -->
      <DesktopHero />
      <OurServices />
      <Capacity />
      <SellerJourney />
      <SellersOnKhulega />
      <AboutUs />
      <CtaSection />

      <YouTubeVideo />
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton phone="919226697740" />
  </div>
</template>

<script setup>
import DesktopHero from '@/components/home/DesktopHero.vue'
import OurServices from '@/components/home/OurServices.vue'
import Capacity from '@/components/home/Capacity.vue'
import SellerJourney from '@/components/home/SellerJourney.vue'
import SellersOnKhulega from '@/components/home/SellersOnKhulega.vue'
import AboutUs from '@/components/home/AboutUs.vue'
import YouTubeVideo from '@/components/home/YouTubeVideo.vue'
import CtaSection from '@/components/home/CtaSection.vue'
</script>
