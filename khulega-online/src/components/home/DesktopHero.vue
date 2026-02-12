<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">{{ t('hero.title') }}</h1>
      <p class="hero__subtitle">{{ t('hero.subtitle') }}</p>
      <div class="hero__actions">
        <BaseButton variant="secondary" size="lg">
          <a href="/shop.html">{{ t('hero.cta1') }}</a>
        </BaseButton>
        <BaseButton variant="outline" size="lg" style="border-color: white; color: white;">
          <a href="/services.html">{{ t('hero.cta2') }}</a>
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('home')
</script>

