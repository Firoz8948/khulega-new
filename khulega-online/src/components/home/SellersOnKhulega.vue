<template>
  <section class="sok" ref="sectionRef">
    <div class="sok__container">
      <!-- Header -->
      <div class="sok__header" :class="{ 'sok__header--visible': isVisible }">
        <p class="sok__label">Our Sellers</p>
        <h2 class="sok__title">Sellers on Khulega</h2>
        <p class="sok__subtitle">Trusted businesses across India growing with our platform</p>
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
import SellerCard from '@shared/SellerCard.vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const sellers = [
  { name: 'FiveStar', image: '/assets/images/sellers/fivestar.jpeg', state: 'Maharashtra' },
  { name: 'FreshOKit', image: '/assets/images/sellers/freshokit.jpeg', state: 'Gujarat' },
  { name: 'Millet', image: '/assets/images/sellers/millet.jpeg', state: 'Karnataka' },
  { name: 'Mohraj', image: '/assets/images/sellers/mohraj.jpeg', state: 'Rajasthan' },
  { name: 'OneIndia', image: '/assets/images/sellers/oneindia.jpeg', state: 'Delhi' },
  { name: 'SafaltaSHG', image: '/assets/images/sellers/safaltashg.jpeg', state: 'Madhya Pradesh' },
  { name: 'Swarajya', image: '/assets/images/sellers/swarajya.jpeg', state: 'Tamil Nadu' }
]

// Duplicate sellers 4 times to create seamless infinite loop
const duplicatedSellers = computed(() => {
  return [...sellers, ...sellers, ...sellers, ...sellers]
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