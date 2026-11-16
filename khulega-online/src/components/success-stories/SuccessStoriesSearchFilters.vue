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
        <div class="ss-filters__results-card">
          <p class="ss-filters__results-stat">
            <span v-if="resultCopy.prefix" class="ss-filters__results-text">
              {{ resultCopy.prefix }}
            </span>
            <span class="ss-filters__results-value">
              {{ displayCount }}{{ resultCopy.showPlus ? '+' : '' }}
            </span>
            <span v-if="resultCopy.suffix" class="ss-filters__results-text">
              {{ resultCopy.suffix }}
            </span>
          </p>
          <p class="ss-filters__results-sub">
            {{ resultCopy.sub }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed, watch, onUnmounted } from 'vue'
import { resultCopyForSelections } from '@/utils/successStoriesFilterStats'

const query = ref('')

const selections = reactive({
  type: 'all',
  category: 'all',
  marketplace: 'any',
})

const resultCopy = computed(() => resultCopyForSelections(selections))
const displayCount = ref('0')

let frameIds = []
let animGeneration = 0

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

function formatCount(n) {
  return n.toLocaleString('en-IN')
}

function cancelCounterFrames() {
  frameIds.forEach((id) => cancelAnimationFrame(id))
  frameIds = []
}

function animateToCount(target, duration = 1600) {
  cancelCounterFrames()
  const gen = ++animGeneration
  displayCount.value = formatCount(0)
  const start = performance.now()

  const tick = (now) => {
    if (gen !== animGeneration) return
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const current = Math.round(target * easeOutCubic(progress))
    displayCount.value = formatCount(current)

    if (progress < 1) {
      const id = requestAnimationFrame(tick)
      frameIds.push(id)
    } else {
      displayCount.value = formatCount(target)
    }
  }

  const id = requestAnimationFrame(tick)
  frameIds.push(id)
}

watch(
  () => resultCopy.value.target,
  (target) => {
    animateToCount(target)
  },
  { immediate: true }
)

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

onUnmounted(() => {
  cancelCounterFrames()
})
</script>