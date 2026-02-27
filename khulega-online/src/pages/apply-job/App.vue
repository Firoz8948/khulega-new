<template>
  <div class="page page--apply-job">
    <AppHeader />

    <main class="main">
      <HeroSection
        :badge="t('page.breadcrumb')"
        :title="t('page.titleMain')"
        :highlight-text="t('page.titleHighlight')"
        :subtitle="t('page.subtitle')"
        :breadcrumb="t('page.breadcrumb')"
      />
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
const { t } = useI18n('applyJob')
</script>
