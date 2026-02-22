<template>
  <section class="sj" ref="sectionRef">
    <div class="sj__container">
      <!-- Section Header -->
      <div class="sj__header" :class="{ 'sj__header--visible': isVisible }">
        <p class="sj__label">How It Works</p>
        <h2 class="sj__title">
          Your Journey from
          <span class="sj__title-highlight">Signup to Sales</span>
        </h2>
        <p class="sj__subtitle">Six simple steps to launch your business across every major marketplace in India</p>
      </div>

      <!-- Journey Steps -->
      <div class="sj__journey">
        <!-- Vertical progress line (desktop) -->
        <div class="sj__progress-track" aria-hidden="true">
          <div
            class="sj__progress-fill"
            :style="{ height: isVisible ? '100%' : '0%' }"
          ></div>
        </div>

        <!-- Steps -->
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="sj__step"
          :class="{
            'sj__step--visible': isVisible,
            'sj__step--even': idx % 2 === 1
          }"
          :style="{ '--delay': `${0.15 + idx * 0.12}s` }"
        >
          <!-- Step number node on the line -->
          <div class="sj__node" :style="{ '--delay': `${0.2 + idx * 0.12}s` }">
            <span class="sj__node-num">{{ idx + 1 }}</span>
            <div class="sj__node-ring"></div>
          </div>

          <!-- Step content card -->
          <div class="sj__card">
            <!-- Icon -->
            <div class="sj__icon" :class="`sj__icon--${step.color}`">
              <div v-html="step.icon" class="sj__icon-svg"></div>
            </div>

            <!-- Text -->
            <div class="sj__text">
              <h3 class="sj__step-title">{{ step.title }}</h3>
              <p class="sj__step-desc">{{ step.desc }}</p>
            </div>

            <!-- Arrow connector to next step (mobile) -->
            <div v-if="idx < steps.length - 1" class="sj__mobile-arrow" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <polyline points="19 12 12 19 5 12"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="sj__footer" :class="{ 'sj__footer--visible': isVisible }">
        <a href="/seller-register.html" class="sj__cta">
          <span>Start Your Journey</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const steps = [
  {
    title: 'Register on Our Platform',
    desc: 'Click the Register button to visit usc.khulega.online and create your account in minutes. No complex paperwork — just a simple signup to get started.',
    color: 'blue',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
      <polyline points="10 17 15 12 10 7"/>
      <line x1="15" y1="12" x2="3" y2="12"/>
    </svg>`
  },
  {
    title: 'Submit Your Seller Application',
    desc: 'Complete your seller profile with basic business details and submit your application for review. Our team verifies and approves applications promptly.',
    color: 'indigo',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>`
  },
  {
    title: 'Access Your Seller Dashboard',
    desc: 'Once approved, your dashboard unlocks all seller tools — marketplace connectors, inventory management, order tracking, and analytics — all in one place.',
    color: 'emerald',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>`
  },
  {
    title: 'Get Expert Assistance',
    desc: 'Need help with documentation, branding, or compliance? Request services directly from your dashboard. Our team will guide you through every requirement to go live.',
    color: 'amber',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>`
  },
  {
    title: 'Connect Your Marketplaces',
    desc: 'Link Amazon, Flipkart, Meesho, ONDC, JioMart, and more from a single dashboard. Upload your product catalogue once and publish across all platforms simultaneously.',
    color: 'violet',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="2"/>
      <circle cx="4" cy="6" r="2"/>
      <circle cx="20" cy="6" r="2"/>
      <circle cx="4" cy="18" r="2"/>
      <circle cx="20" cy="18" r="2"/>
      <line x1="6" y1="6" x2="10" y2="11"/>
      <line x1="18" y1="6" x2="14" y2="11"/>
      <line x1="6" y1="18" x2="10" y2="13"/>
      <line x1="18" y1="18" x2="14" y2="13"/>
    </svg>`
  },
  {
    title: 'Start Selling & Earning',
    desc: 'Your products are now live across every connected marketplace. Manage orders, track performance, and scale your business — all from one unified platform.',
    color: 'green',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>`
  }
]

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
