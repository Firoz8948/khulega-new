<template>
  <div class="page page--services">
    <AppHeader />

    <main class="main">
      <div class="container">
        <BreadCrumb :crumbs="[{ label: t('page.breadcrumb') }]" />

        <section class="section">
          <h1>{{ t('page.title') }}</h1>
          <p style="color: var(--color-text-secondary); margin-top: var(--space-sm); margin-bottom: var(--space-2xl);">
            {{ t('page.subtitle') }}
          </p>

          <div class="services__grid">
            <BaseCard hoverable v-for="(service, idx) in t('items')" :key="idx">
              <div class="service-card__icon">{{ service.icon }}</div>
              <h4>{{ service.title }}</h4>
              <p style="color: var(--color-text-secondary); margin-top: var(--space-sm);">
                {{ service.description }}
              </p>
            </BaseCard>
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
const { t } = useI18n('services')
</script>
