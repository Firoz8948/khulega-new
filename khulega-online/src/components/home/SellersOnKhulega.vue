<template>
  <section class="sok" ref="sectionRef">
    <div class="sok__container">
      <!-- Header -->
      <div class="sok__header" :class="{ 'sok__header--visible': isVisible }">
        <p class="sok__label">{{ t('sellersOnKhulega.label') }}</p>
        <h2 class="sok__title">
          {{ t('sellersOnKhulega.title') }}
          <br class="sok__title-br" aria-hidden="true" />
          <span class="sok__title-highlight">{{ t('sellersOnKhulega.titleHighlight') }}</span>
        </h2>
        <p class="sok__subtitle">{{ t('sellersOnKhulega.subtitle') }}</p>
      </div>

      <!-- Row 1: Right to Left -->
      <div class="sok__row-wrap">
        <div class="sok__row sok__row--rtl">
          <div class="sok__track">
            <SellerCard
              v-for="(seller, idx) in duplicatedSellers"
              :key="'r1-' + idx"
              :name="seller.name"
              :image="seller.image"
              :state="seller.state"
            />
          </div>
        </div>
      </div>

    </div>

    <!-- Edge fades -->
    <div class="sok__fade sok__fade--left" aria-hidden="true"></div>
    <div class="sok__fade sok__fade--right" aria-hidden="true"></div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/i18n/index.js'
import SellerCard from '@shared/SellerCard.vue'

const { t } = useI18n('home')

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const sellerImages = [
  '/assets/images/sellers/fivestar.jpeg',
  '/assets/images/sellers/freshokit.jpeg',
  '/assets/images/sellers/millet.jpeg',
  '/assets/images/sellers/mohraj.jpeg',
  '/assets/images/sellers/oneindia.jpeg',
  '/assets/images/sellers/safaltashg.jpeg',
  '/assets/images/sellers/swarajya.jpeg'
]

const sellers = computed(() => {
  const tr = t('sellersOnKhulega.sellers')
  if (!Array.isArray(tr) || tr.length !== sellerImages.length) {
    return sellerImages.map((img, i) => ({ name: '', state: '', image: img }))
  }
  return tr.map((item, i) => ({
    name: item.name || '',
    state: item.state || '',
    image: sellerImages[i]
  }))
})

// Duplicate sellers 4 times to create seamless infinite loop
const duplicatedSellers = computed(() => {
  const list = sellers.value
  return [...list, ...list, ...list, ...list]
})

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>