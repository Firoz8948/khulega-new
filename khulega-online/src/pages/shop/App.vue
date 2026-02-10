<template>
  <div class="page page--shop">
    <AppHeader />

    <main class="main">
      <div class="container">
        <BreadCrumb :crumbs="[{ label: t('page.breadcrumb') }]" />

        <section class="section">
          <h1>{{ t('page.title') }}</h1>
          <p style="color: var(--color-text-secondary); margin-top: var(--space-sm);">
            {{ t('page.subtitle') }}
          </p>

          <!-- Filters -->
          <div class="shop__filters">
            <BaseButton
              v-for="filter in ['all', 'popular', 'newest']"
              :key="filter"
              :variant="activeFilter === filter ? 'primary' : 'outline'"
              size="sm"
              @click="activeFilter = filter"
            >
              {{ t(`filters.${filter}`) }}
            </BaseButton>
          </div>

          <!-- Products Grid -->
          <div class="shop__grid">
            <BaseCard hoverable v-for="i in 6" :key="i">
              <template #image>
                <img :src="`https://picsum.photos/400/300?random=${i}`" alt="Product" />
              </template>
              <h5>Product {{ i }}</h5>
              <p style="color: var(--color-text-secondary); margin: var(--space-sm) 0;">
                Product description
              </p>
              <template #footer>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <strong>{{ t('product.currency') }}999</strong>
                  <BaseButton size="sm">{{ t('buttons.buyNow') }}</BaseButton>
                </div>
              </template>
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
import { ref } from 'vue'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('shop')
const activeFilter = ref('all')
</script>
