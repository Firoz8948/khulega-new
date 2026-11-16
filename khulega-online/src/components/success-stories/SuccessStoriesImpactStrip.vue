<template>
  <section
    ref="sectionRef"
    class="ss-impact"
    aria-labelledby="ss-impact-heading"
  >
    <span class="ss-impact__sr-only" id="ss-impact-heading">Impact figures</span>
    <div class="ss-impact__inner">
      <div class="ss-impact__header">
        <span class="ss-showcase__eyebrow">OUR IMPACT IN NUMBERS</span>
      </div>
      <ul class="ss-impact__grid">
        <li
          v-for="(item, i) in stats"
          :key="item.label"
          class="ss-impact__item"
        >
          <p class="ss-impact__value">{{ displayValues[i] }}</p>
          <p class="ss-impact__label">{{ item.label }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const hasAnimated = ref(false)

const stats = [
  { target: 5689, suffix: '+', label: 'Sellers onboarded' },
  { target: 534, suffix: '+', label: 'Enterprises served' },
  { target: 5, suffix: '+', label: 'Marketplaces connected' },
  { target: 25135, suffix: '', label: 'Products Listed' },
]

const displayValues = ref(stats.map(() => formatValue(0, '')))

let observer = null
let frameIds = []

function formatValue(n, suffix) {
  const formatted = n.toLocaleString('en-IN')
  return `${formatted}${suffix}`
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

function animateStat(index, { target, suffix }, duration = 2200) {
  const start = performance.now()

  const tick = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const current = Math.round(target * easeOutCubic(progress))
    displayValues.value[index] = formatValue(current, suffix)

    if (progress < 1) {
      const id = requestAnimationFrame(tick)
      frameIds.push(id)
    } else {
      displayValues.value[index] = formatValue(target, suffix)
    }
  }

  const id = requestAnimationFrame(tick)
  frameIds.push(id)
}

function runCounters() {
  if (hasAnimated.value) return
  hasAnimated.value = true
  displayValues.value = stats.map(() => formatValue(0, ''))

  stats.forEach((item, i) => {
    animateStat(i, item, 2200 + i * 120)
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        runCounters()
      }
    },
    { threshold: 0.25 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  frameIds.forEach((id) => cancelAnimationFrame(id))
  frameIds = []
})
</script>