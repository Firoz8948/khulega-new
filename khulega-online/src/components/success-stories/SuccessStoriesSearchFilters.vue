<template>
  <section
    id="showcase"
    class="ss-filters ss-showcase__anchor"
    aria-labelledby="ss-filters-heading"
  >
    <div class="ss-filters__inner">
      <header class="ss-filters__header">
        <span class="ss-showcase__eyebrow">SEARCH &amp; FILTERS</span>
        <h2 id="ss-filters-heading" class="ss-filters__title">
          Browse the showcase
        </h2>
      </header>

      <label class="ss-filters__search" for="ss-showcase-search">
        <span class="ss-filters__search-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          id="ss-showcase-search"
          v-model="query"
          type="search"
          class="ss-filters__search-input"
          placeholder="Search by name, category or city"
          autocomplete="off"
        >
      </label>

      <div class="ss-filters__groups">
        <section
          v-for="group in filterGroups"
          :key="group.key"
          class="ss-filters__group"
          :aria-label="group.label"
        >
          <span class="ss-filters__group-label">{{ group.label }}</span>
          <div
            class="ss-filters__tabs"
            role="tablist"
            :aria-label="group.label"
          >
            <button
              v-for="opt in group.options"
              :key="opt.value"
              type="button"
              role="tab"
              class="ss-filters__tab"
              :class="{ 'ss-filters__tab--active': selections[group.key] === opt.value }"
              :aria-selected="selections[group.key] === opt.value"
              @click="setSelection(group.key, opt.value)"
            >
              {{ opt.label }}
            </button>
          </div>
        </section>
      </div>

      <div class="ss-filters__results" aria-live="polite" aria-atomic="true">
        <div class="ss-filters__results-placeholder">
          Showcase listings will appear here - filter logic.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const query = ref('')

const selections = reactive({
  type: 'all',
  category: 'all',
  marketplace: 'any',
})

const filterGroups = [
  {
    key: 'type',
    label: 'Type',
    options: [
      { value: 'all', label: 'All' },
      { value: 'individual', label: 'Individual sellers' },
      { value: 'enterprise', label: 'Enterprises' },
    ],
  },
  {
    key: 'category',
    label: 'Category',
    options: [
      { value: 'all', label: 'All categories' },
      { value: 'apparel', label: 'Apparel' },
      { value: 'handicrafts', label: 'Handicrafts' },
      { value: 'food', label: 'Food' },
      { value: 'home-kitchen', label: 'Home & kitchen' },
      { value: 'beauty', label: 'Beauty' },
    ],
  },
  {
    key: 'marketplace',
    label: 'Marketplace',
    options: [
      { value: 'any', label: 'Any' },
      { value: 'amazon', label: 'Amazon' },
      { value: 'flipkart', label: 'Flipkart' },
      { value: 'meesho', label: 'Meesho' },
      { value: 'jiomart', label: 'JioMart' },
      { value: 'ondc', label: 'ONDC' },
    ],
  },
]

function setSelection(key, value) {
  selections[key] = value
}
</script>