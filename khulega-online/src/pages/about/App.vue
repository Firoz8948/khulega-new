<template>
  <div class="page page--about">
    <AppHeader />

    <main class="main">
      <HeroSection
        :badge="t('sidebar.aboutUs')"
        :title="t('sidebar.aboutUs')"
        :subtitle="t('sidebar.aboutSubtitle')"
        :breadcrumb="t('sidebar.aboutUs')"
      />
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
const { t } = useI18n()
</script>
