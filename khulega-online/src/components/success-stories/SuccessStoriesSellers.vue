<template>
  <section class="ss-sellers" aria-labelledby="ss-sellers-heading">
    <div class="ss-sellers__inner">
      <header class="ss-sellers__header">
        <span class="ss-showcase__eyebrow">FROM THE SHOWCASE</span>
        <h2 id="ss-sellers-heading" class="ss-sellers__title">
          Stories from sellers like you
        </h2>
        <h3 class="ss-sellers__subtitle">Sellers</h3>
        <p class="ss-sellers__intro">
          Individual and small-business sellers working with TechSandhya.
        </p>
      </header>

      <div class="ss-sellers__track-wrap">
        <ul
          class="ss-sellers__grid"
          role="list"
          aria-label="Seller showcase"
        >
          <li
            v-for="seller in sellers"
            :key="seller.id"
            class="ss-sellers__card"
          >
            <div class="ss-sellers__logo">
              <img
                :src="seller.logoSrc"
                :alt="seller.logoAlt"
                class="ss-sellers__logo-img"
                width="200"
                height="120"
                loading="lazy"
                decoding="async"
              >
            </div>

            <p class="ss-sellers__category">{{ seller.category }}</p>
            <h4 class="ss-sellers__name">{{ seller.name }}</h4>
            <p class="ss-sellers__location">{{ seller.cityState }}</p>
            <p class="ss-sellers__listings">
              <span class="ss-sellers__listings-label">Listing count:</span>
              {{ seller.listingCount }}
            </p>
            <div class="ss-sellers__channels">
              <span class="ss-sellers__channels-label">Selling on</span>
              <ul class="ss-sellers__marketplaces" role="list">
                <li
                  v-for="(market, mi) in seller.marketplaces"
                  :key="`${seller.id}-${mi}`"
                  class="ss-sellers__marketplace"
                >
                  <img
                    v-if="marketplaceLogo(market)"
                    :src="marketplaceLogo(market).src"
                    :alt="marketplaceLogo(market).alt"
                    class="ss-sellers__marketplace-img"
                    width="72"
                    height="28"
                    loading="lazy"
                    decoding="async"
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <p class="ss-sellers__scroll-hint" aria-hidden="true">
          Swipe to see more
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { showcaseSellers } from '@/data/showcaseSellers.js'
import { marketplaceBrandLogos } from '@/data/marketplaceBrandLogos.js'

const sellers = showcaseSellers

function marketplaceLogo(name) {
  return marketplaceBrandLogos[name] || null
}
</script>