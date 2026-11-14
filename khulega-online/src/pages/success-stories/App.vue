<template>
  <div class="page page--success-stories">
    <AppHeader />

    <main class="main">
      <SuccessStoriesShowcase />
      <SuccessStoriesImpactStrip />
      <SuccessStoriesSearchFilters />
      <SuccessStoriesFeatured />
      <SuccessStoriesSellers />
      <SuccessStoriesEnterprises />
      <SuccessStoriesHowItWorks />
      <SuccessStoriesLeadCta />
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import SuccessStoriesShowcase from '@/components/success-stories/SuccessStoriesShowcase.vue'
import SuccessStoriesImpactStrip from '@/components/success-stories/SuccessStoriesImpactStrip.vue'
import SuccessStoriesSearchFilters from '@/components/success-stories/SuccessStoriesSearchFilters.vue'
import SuccessStoriesFeatured from '@/components/success-stories/SuccessStoriesFeatured.vue'
import SuccessStoriesSellers from '@/components/success-stories/SuccessStoriesSellers.vue'
import SuccessStoriesEnterprises from '@/components/success-stories/SuccessStoriesEnterprises.vue'
import SuccessStoriesHowItWorks from '@/components/success-stories/SuccessStoriesHowItWorks.vue'
import SuccessStoriesLeadCta from '@/components/success-stories/SuccessStoriesLeadCta.vue'
</script>