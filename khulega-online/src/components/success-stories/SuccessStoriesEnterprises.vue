<template>
  <section class="ss-enterprise" aria-labelledby="ss-enterprise-heading">
    <div class="ss-enterprise__inner">
      <header class="ss-enterprise__header">
        <span class="ss-showcase__eyebrow">ENTERPRISE IMPACT</span>
        <h2 id="ss-enterprise-heading" class="ss-enterprise__title">
          How established brands scale with confidence
        </h2>
        <h3 class="ss-enterprise__subtitle">Enterprises</h3>
        <p class="ss-enterprise__intro">
          Established businesses and brands working with TechSandhya.
        </p>
      </header>

      <div
        class="ss-enterprise__logo-marquee"
        role="region"
        aria-label="Partner logos"
      >
        <div class="ss-enterprise__logo-viewport">
          <div class="ss-enterprise__logo-track">
            <ul
              v-for="set in 2"
              :key="set"
              class="ss-enterprise__logo-set"
              :aria-hidden="set === 2 ? true : undefined"
            >
              <li
                v-for="(logo, index) in partnerLogos"
                :key="`${set}-${index}`"
                class="ss-enterprise__logo-item"
              >
                <img
                  :src="logo.src"
                  :alt="logo.alt"
                  class="ss-enterprise__logo-img"
                  width="160"
                  height="64"
                  loading="lazy"
                  decoding="async"
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="ss-enterprise__logo-fade ss-enterprise__logo-fade--left" aria-hidden="true" />
        <div class="ss-enterprise__logo-fade ss-enterprise__logo-fade--right" aria-hidden="true" />
      </div>

      <ul
        class="ss-enterprise__cases"
        role="list"
        aria-label="Enterprise case studies"
      >
        <li
          v-for="item in cases"
          :key="item.id"
          class="ss-enterprise__card"
        >
          <div class="ss-enterprise__card-logo">
            <img
              :src="item.logoSrc"
              :alt="item.logoAlt"
              class="ss-enterprise__card-logo-img"
              width="120"
              height="56"
              loading="lazy"
              decoding="async"
            >
          </div>

          <h4 class="ss-enterprise__name">{{ item.name }}</h4>
          <p v-if="item.fullName" class="ss-enterprise__full-name">
            {{ item.fullName }}
          </p>

          <p class="ss-enterprise__type-label">Type of enterprise</p>
          <p class="ss-enterprise__type-text">
            {{ item.enterpriseType }}
          </p>

          <div class="ss-enterprise__sku">
            <span class="ss-enterprise__sku-value">{{ item.skuCount }}</span>
            <span class="ss-enterprise__sku-label">SKU count</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { enterprisePartnerLogos } from '@/data/enterprisePartnerLogos.js'
import { enterpriseCaseCards } from '@/data/enterpriseCaseCards.js'

const partnerLogos = enterprisePartnerLogos
const cases = enterpriseCaseCards
</script>