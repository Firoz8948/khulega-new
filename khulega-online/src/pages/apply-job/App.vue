<template>
  <div class="page page--apply-job">
    <AppHeader />

    <main class="main">
      <div class="container">
        <BreadCrumb :crumbs="[{ label: t('page.breadcrumb') }]" />

        <section class="section">
          <h1>{{ t('page.title') }}</h1>
          <p style="color: var(--color-text-secondary); margin-top: var(--space-sm); margin-bottom: var(--space-2xl);">
            {{ t('page.subtitle') }}
          </p>

          <div class="job__list">
            <BaseCard hoverable v-for="(job, idx) in t('jobs')" :key="idx">
              <div class="job__card">
                <div>
                  <h4>{{ job.title }}</h4>
                  <p style="color: var(--color-text-secondary); margin-top: var(--space-xs);">
                    {{ job.location }} &bull; {{ job.type }}
                  </p>
                </div>
                <BaseButton size="sm">{{ t('buttons.apply') }}</BaseButton>
              </div>
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
const { t } = useI18n('applyJob')
</script>
