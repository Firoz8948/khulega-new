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
          aria-label="Seller stories"
        >
          <li
            v-for="seller in sellers"
            :key="seller.id"
            class="ss-sellers__card"
          >
            <div class="ss-sellers__logo" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span class="ss-sellers__logo-label">Photo or logo</span>
            </div>

            <p class="ss-sellers__category">{{ seller.category }}</p>
            <h4 class="ss-sellers__name">{{ seller.name }}</h4>
            <p class="ss-sellers__location">{{ seller.cityState }}</p>
            <p class="ss-sellers__highlight">{{ seller.highlight }}</p>
            <p class="ss-sellers__channels">
              <span class="ss-sellers__channels-label">Selling on:</span>
              {{ seller.marketplaces.join(' · ') }}
            </p>
            <a :href="seller.storyHref" class="ss-sellers__link">
              View story
              <span class="ss-sellers__link-arrow" aria-hidden="true">→</span>
            </a>
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
const sellers = [
  {
    id: 1,
    category: 'Apparel',
    name: 'Metro Threads Studio',
    cityState: 'Surat, Gujarat',
    highlight: '200+ listings live; steady week-on-week order growth.',
    marketplaces: ['Amazon', 'Flipkart'],
    storyHref: '#',
  },
  {
    id: 2,
    category: 'Handicrafts',
    name: 'Kashi Arts Collective',
    cityState: 'Varanasi, Uttar Pradesh',
    highlight: 'Catalog published and first orders within 12 days.',
    marketplaces: ['Meesho'],
    storyHref: '#',
  },
  {
    id: 3,
    category: 'Food',
    name: 'Spice Route Kitchens',
    cityState: 'Kochi, Kerala',
    highlight: 'FSSAI-aligned listings and repeat buyers on two networks.',
    marketplaces: ['ONDC', 'JioMart'],
    storyHref: '#',
  },
  {
    id: 4,
    category: 'Home & kitchen',
    name: 'Clay & Co. Homeware',
    cityState: 'Pune, Maharashtra',
    highlight: 'SKU sync cut manual updates; dispatch SLA back on track.',
    marketplaces: ['Amazon'],
    storyHref: '#',
  },
  {
    id: 5,
    category: 'Beauty',
    name: 'GlowNest Naturals',
    cityState: 'Bengaluru, Karnataka',
    highlight: 'Compliance checks cleared; sales up after multi-channel launch.',
    marketplaces: ['Flipkart', 'Meesho'],
    storyHref: '#',
  },
  {
    id: 6,
    category: 'Handicrafts',
    name: 'Desert Loom Workshop',
    cityState: 'Jodhpur, Rajasthan',
    highlight: 'ONDC storefront live with unified inventory.',
    marketplaces: ['ONDC'],
    storyHref: '#',
  },
  {
    id: 7,
    category: 'Apparel',
    name: 'NorthStar Kidswear',
    cityState: 'Ludhiana, Punjab',
    highlight: 'Seasonal catalog pushed to two large marketplaces.',
    marketplaces: ['Amazon', 'JioMart'],
    storyHref: '#',
  },
  {
    id: 8,
    category: 'Food',
    name: 'Himalayan Harvest Foods',
    cityState: 'Dehradun, Uttarakhand',
    highlight: 'Packaged goods listed; growth from tier-2 city demand.',
    marketplaces: ['Meesho', 'ONDC'],
    storyHref: '#',
  },
]
</script>