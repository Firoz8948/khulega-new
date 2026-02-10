<template>
  <div class="page page--terms">
    <AppHeader />

    <main class="main">
      <div class="container">
        <BreadCrumb :crumbs="[{ label: t('page.breadcrumb') }]" />

        <section class="section">
          <div class="terms__content">
            <h1>{{ t('page.title') }}</h1>
            <p style="margin-top: var(--space-md);">
              {{ t('page.lastUpdated') }}
            </p>

            <template v-for="(section, idx) in t('sections')" :key="idx">
              <h2>{{ section.title }}</h2>
              <p>{{ section.content }}</p>
              <ol v-if="section.list">
                <li v-for="(item, i) in section.list" :key="i">{{ item }}</li>
              </ol>
            </template>
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
const { t } = useI18n('terms')
</script>
