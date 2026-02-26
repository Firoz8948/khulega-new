<template>
  <section class="svc" ref="sectionRef">
    <div class="svc__container">
      <!-- ── Header ── -->
      <header class="svc__header" :class="{ 'svc__header--in': isVisible }">
        <span class="svc__badge">What We Offer</span>
        <h2 class="svc__heading">
          Everything You Need to
          <span class="svc__heading-em">Sell Online Successfully</span>
        </h2>
        <p class="svc__intro">
          From business registration to order management — we handle every
          aspect of your online selling journey
        </p>
      </header>

      <!-- ── Category Pills ── -->
      <div class="svc__pills" :class="{ 'svc__pills--in': isVisible }">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="svc__pill"
          :class="{ 'svc__pill--active': activeCategory === cat.id }"
          @click="setCategory(cat.id)"
        >
          <span class="svc__pill-icon" v-html="cat.icon"></span>
          <span class="svc__pill-text">{{ cat.label }}</span>
        </button>
      </div>

      <!-- ── Carousel ── -->
      <div
        class="svc__carousel-wrap"
        :class="{ 'svc__carousel-wrap--in': isVisible }"
      >
        <!-- Progress bar -->
        <div class="svc__progress">
          <div
            class="svc__progress-bar"
            :style="{ width: progressWidth + '%' }"
          ></div>
        </div>

        <!-- Carousel -->
        <div
          class="svc__carousel"
          @mouseenter="pauseAuto"
          @mouseleave="resumeAuto"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
        >
          <div class="svc__track">
            <div
              v-for="(service, idx) in visibleSlides"
              :key="service.uniqueKey"
              class="svc__slide"
              :class="[slideClass(idx), { 'svc__slide--animating': isTransitioning }]"
              @click="handleSlideClick(idx)"
            >
              <!-- Tiny card (far-far positions - icon only) -->
              <div class="svc__tiny-card">
                <div
                  class="svc__tiny-icon"
                  v-html="service.icon"
                  :style="{ '--accent': colorMap[service.color]?.main, '--accent-bg': colorMap[service.color]?.bg }"
                ></div>
              </div>

              <!-- Small card (left/right) -->
              <div class="svc__small-card">
                <div
                  class="svc__small-icon"
                  v-html="service.icon"
                  :style="{ '--accent': colorMap[service.color]?.main, '--accent-bg': colorMap[service.color]?.bg }"
                ></div>
                <span class="svc__small-title">{{ service.title }}</span>
                <span v-if="service.isFree" class="svc__small-free">Free</span>
              </div>

              <!-- Big card (center) -->
              <div class="svc__big-card">
                <div class="svc__big-top">
                  <div
                    class="svc__big-icon"
                    v-html="service.icon"
                    :style="{ '--accent': colorMap[service.color]?.main, '--accent-bg': colorMap[service.color]?.bg, '--accent-bd': colorMap[service.color]?.border }"
                  ></div>
                  <div class="svc__big-meta">
                    <h3 class="svc__big-title">{{ service.title }}</h3>
                    <p class="svc__big-short">{{ service.shortDesc }}</p>
                  </div>
                </div>

                <p class="svc__big-detail">{{ service.detail }}</p>

                <!-- Platforms -->
                <div v-if="service.platforms" class="svc__big-platforms">
                  <span
                    v-for="p in service.platforms"
                    :key="p"
                    class="svc__big-tag"
                  >{{ p }}</span>
                </div>

                <div class="svc__big-footer">
                  <span v-if="service.isFree" class="svc__big-free">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Included Free
                  </span>
                  <span v-else class="svc__big-paid">Premium Service</span>
                  <span class="svc__big-link">
                    Learn more
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>

                <!-- Ribbon -->
                <span v-if="service.isFree" class="svc__big-ribbon">सीमित समय</span>
              </div>
            </div>
          </div>

          <!-- Nav arrows -->
          <button class="svc__arrow svc__arrow--left" @click="prev">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button class="svc__arrow svc__arrow--right" @click="next">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <!-- Dots -->
        <div class="svc__dots">
          <button
            v-for="(_, idx) in activeServices"
            :key="idx"
            class="svc__dot"
            :class="{ 'svc__dot--active': idx === currentIndex }"
            @click="goTo(idx)"
          ></button>
        </div>

        <!-- Counter -->
        <div class="svc__counter">
          <span class="svc__counter-current">{{ String(currentIndex + 1).padStart(2, '0') }}</span>
          <span class="svc__counter-sep">/</span>
          <span class="svc__counter-total">{{ String(activeServices.length).padStart(2, '0') }}</span>
        </div>
      </div>

      <!-- ── CTA ── -->
      <div class="svc__cta" :class="{ 'svc__cta--in': isVisible }">
        <a href="/services/" class="svc__cta-btn">
          <span>View All Services &amp; Pricing</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
const activeCategory = ref('registration')
const currentIndex = ref(0)
const isTransitioning = ref(false)
const slideDirection = ref('next') // 'next' or 'prev'

let observer = null
let autoTimer = null
let isPaused = false

const AUTO_INTERVAL = 3000

/* ── Colour map ── */
const colorMap = {
  blue: { main: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  indigo: { main: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe' },
  emerald: { main: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
  amber: { main: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  violet: { main: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd' },
  green: { main: '#16a34a', bg: '#f0fdf4', border: '#86efac' }
}

/* ── Categories ── */
const categories = [
  {
    id: 'registration',
    label: 'Registration',
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  },
  {
    id: 'branding',
    label: 'Branding',
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`
  },
  {
    id: 'operations',
    label: 'Operations',
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  }
]

/* ── Services ── */
const allServices = {
  registration: [
    {
      title: 'e-PAN Card',
      shortDesc: 'Instant digital PAN card generation',
      detail: 'Get your business PAN card digitally without visiting any office. Required for GST and marketplace registration.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
      color: 'blue',
      isFree: false
    },
    {
      title: 'GST Registration',
      shortDesc: 'Mandatory for online selling on marketplaces',
      detail: 'Complete GST registration with ARN generation. Required to sell on Amazon, Flipkart, and other marketplaces.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
      color: 'indigo',
      isFree: false
    },
    {
      title: 'Udyam Registration',
      shortDesc: 'MSME certificate for your business',
      detail: 'Register your business under MSME to avail government benefits, subsidies, and marketplace priority listing.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      color: 'emerald',
      isFree: false
    },
    {
      title: 'FSSAI License',
      shortDesc: 'Required for food & consumable products',
      detail: 'Mandatory food safety license for sellers dealing in food items, beverages, supplements, and consumable goods.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
      color: 'amber',
      isFree: false
    },
    {
      title: 'Taxation Support',
      shortDesc: 'GST filing & tax compliance assistance',
      detail: 'Regular GST return filing, tax computation, and compliance support to keep your business running smoothly.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      color: 'green',
      isFree: true
    }
  ],
  branding: [
    {
      title: 'Brand Identity Design',
      shortDesc: 'Name, Logo, Banner & Tagline creation',
      detail: 'Professional brand identity package including business name suggestions, logo design, marketplace banners, and a compelling tagline.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      color: 'violet',
      isFree: false
    },
    {
      title: 'Product Photography',
      shortDesc: 'Professional product images for listings',
      detail: 'High-quality product photography on white background, lifestyle shots, and infographic images optimized for marketplace listings.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
      color: 'blue',
      isFree: false
    },
    {
      title: 'AI Product Images',
      shortDesc: 'AI-generated professional product visuals',
      detail: 'Leverage AI technology to create stunning product images, background removal, lifestyle mockups, and A+ content visuals.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
      color: 'indigo',
      isFree: false
    },
    {
      title: 'Product Metadata',
      shortDesc: 'Titles, descriptions & keyword optimization',
      detail: 'SEO-optimized product titles, bullet points, descriptions, and backend keywords to maximize your product visibility and search ranking.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>`,
      color: 'emerald',
      isFree: false
    },
    {
      title: 'AI Content Writing',
      shortDesc: 'AI-powered product descriptions & content',
      detail: 'Use AI to generate compelling product descriptions, bullet points, and A+ content that converts browsers into buyers.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      color: 'amber',
      isFree: true
    },
    {
      title: 'Quality Check',
      shortDesc: 'Product quality verification & compliance',
      detail: 'Ensure your products meet marketplace quality standards and compliance requirements before listing.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      color: 'green',
      isFree: false
    }
  ],
  marketplace: [
    {
      title: 'Marketplace Onboarding',
      shortDesc: 'Account setup on all major platforms',
      detail: 'Complete seller account creation and verification on Amazon, Flipkart, Meesho, JioMart, and ONDC marketplaces.',
      platforms: ['Amazon', 'Flipkart', 'Meesho', 'JioMart'],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
      color: 'blue',
      isFree: false
    },
    {
      title: 'Khulega.online Listing',
      shortDesc: 'List products on our own marketplace',
      detail: 'Get your products listed on Khulega.online powered by ONDC network, reaching customers across India.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      color: 'indigo',
      isFree: false
    },
    {
      title: 'Product Listing',
      shortDesc: 'Upload & list products across platforms',
      detail: 'Bulk product listing with optimized content across all connected marketplaces from one dashboard.',
      platforms: ['Amazon', 'Flipkart', 'Meesho', 'JioMart'],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
      color: 'emerald',
      isFree: false
    },
    {
      title: 'Pricing Strategy',
      shortDesc: 'Competitive pricing across marketplaces',
      detail: 'Data-driven pricing recommendations considering marketplace fees, competition, and profit margins.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      color: 'amber',
      isFree: false
    },
    {
      title: 'Seller Training',
      shortDesc: 'Learn to manage your online business',
      detail: 'Comprehensive training on dashboard usage, order management, inventory handling, and marketplace best practices.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
      color: 'violet',
      isFree: false
    }
  ],
  operations: [
    {
      title: 'Order Management',
      shortDesc: 'Unified order tracking across platforms',
      detail: 'Track, process, and fulfill orders from all marketplaces in one dashboard. Never miss an order again.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      color: 'blue',
      isFree: true
    },
    {
      title: 'Inventory Management',
      shortDesc: 'Real-time stock sync across marketplaces',
      detail: 'Automated inventory synchronization to prevent overselling and stockouts across all connected platforms.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      color: 'emerald',
      isFree: true
    },
    {
      title: 'Shipping & Logistics',
      shortDesc: 'End-to-end shipping management',
      detail: 'Integrated shipping solutions with label generation, tracking, and delivery management for all orders.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      color: 'indigo',
      isFree: true
    },
    {
      title: 'Returns & Refunds',
      shortDesc: 'Hassle-free return processing',
      detail: 'Streamlined return management with automated refund processing and return analytics across platforms.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>`,
      color: 'amber',
      isFree: true
    },
    {
      title: 'Settlement & Payments',
      shortDesc: 'Track marketplace payments & settlements',
      detail: 'Monitor your earnings, settlement cycles, deductions, and payment reconciliation across all marketplaces.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      color: 'green',
      isFree: false
    },
    {
      title: 'Digital Marketing & Ads',
      shortDesc: 'Boost visibility with targeted advertising',
      detail: 'Marketplace ads management, social media marketing, and digital campaigns to drive traffic and increase sales.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
      color: 'violet',
      isFree: true
    },
    {
      title: 'Reporting & Analytics',
      shortDesc: 'Cross-marketplace performance insights',
      detail: 'Consolidated sales reports, performance analytics, and business intelligence across all connected platforms.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
      color: 'blue',
      isFree: false
    },
    {
      title: 'Marketplace Support',
      shortDesc: 'Dedicated support for all platforms',
      detail: 'Expert assistance for marketplace issues including account health, policy violations, and performance optimization.',
      platforms: ['Amazon', 'Flipkart', 'Meesho', 'JioMart'],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
      color: 'emerald',
      isFree: true
    }
  ]
}

/* ── Computed ── */
const activeServices = computed(() => allServices[activeCategory.value] || [])

const progressWidth = computed(() => {
  const total = activeServices.value.length
  if (total === 0) return 0
  return ((currentIndex.value + 1) / total) * 100
})

// Returns 7 slides: pos0, pos1, pos2, center(pos3), pos4, pos5, pos6
const visibleSlides = computed(() => {
  const services = activeServices.value
  const len = services.length
  if (len === 0) return []

  const indices = []
  for (let offset = -3; offset <= 3; offset++) {
    let idx = ((currentIndex.value + offset) % len + len) % len
    indices.push(idx)
  }

  return indices.map((idx, i) => ({
    ...services[idx],
    uniqueKey: `${activeCategory.value}-${idx}-${i}-${currentIndex.value}`,
    originalIndex: idx
  }))
})

/* ── Methods ── */
function slideClass(idx) {
  // 7 positions: 0=far-far-left, 1=far-left, 2=left, 3=center, 4=right, 5=far-right, 6=far-far-right
  const map = [
    'svc__slide--pos0',
    'svc__slide--pos1',
    'svc__slide--pos2',
    'svc__slide--center',
    'svc__slide--pos4',
    'svc__slide--pos5',
    'svc__slide--pos6'
  ]
  return map[idx] || ''
}

function handleSlideClick(idx) {
  if (idx < 3) prev()
  else if (idx > 3) next()
}

function next() {
  if (isTransitioning.value) return
  isTransitioning.value = true
  slideDirection.value = 'next'
  const len = activeServices.value.length
  currentIndex.value = (currentIndex.value + 1) % len
  resetAuto()
  setTimeout(() => { isTransitioning.value = false }, 600)
}

function prev() {
  if (isTransitioning.value) return
  isTransitioning.value = true
  slideDirection.value = 'prev'
  const len = activeServices.value.length
  currentIndex.value = (currentIndex.value - 1 + len) % len
  resetAuto()
  setTimeout(() => { isTransitioning.value = false }, 600)
}

function goTo(idx) {
  if (isTransitioning.value || idx === currentIndex.value) return
  isTransitioning.value = true
  slideDirection.value = idx > currentIndex.value ? 'next' : 'prev'
  currentIndex.value = idx
  resetAuto()
  setTimeout(() => { isTransitioning.value = false }, 600)
}

function setCategory(id) {
  activeCategory.value = id
  currentIndex.value = 0
  resetAuto()
}

function startAuto() {
  stopAuto()
  autoTimer = setInterval(() => {
    if (!isPaused) next()
  }, AUTO_INTERVAL)
}

function stopAuto() {
  if (autoTimer) clearInterval(autoTimer)
}

function resetAuto() {
  stopAuto()
  startAuto()
}

function pauseAuto() {
  isPaused = true
}

function resumeAuto() {
  isPaused = false
}

/* ── Touch ── */
let touchStartX = 0
function onTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX
  pauseAuto()
}

function onTouchEnd(e) {
  const diff = e.changedTouches[0].screenX - touchStartX
  if (Math.abs(diff) > 50) {
    diff < 0 ? next() : prev()
  }
  resumeAuto()
}

/* ── Lifecycle ── */
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        startAuto()
      }
    },
    { threshold: 0.06 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  stopAuto()
})

watch(activeCategory, () => {
  currentIndex.value = 0
})
</script>

<style>
/* ==============================================
   SERVICES — 7-Card Carousel Layout
   ============================================== */

/* ── Section ── */
.svc {
  padding: 100px 0 110px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f8fc 100%);
  position: relative;
  overflow: hidden;
}

.svc::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 10% 60%, rgba(37, 99, 235, 0.03) 0%, transparent 55%),
    radial-gradient(ellipse at 90% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 55%);
  pointer-events: none;
}

.svc__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 28px;
  position: relative;
  z-index: 1;
}

/* ── Header ── */
.svc__header {
  text-align: center;
  margin-bottom: 48px;
  opacity: 0;
  transform: translateY(26px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.svc__header--in {
  opacity: 1;
  transform: translateY(0);
}

.svc__badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.12);
  margin-bottom: 18px;
}

.svc__heading {
  font-size: 44px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.18;
  margin: 0 0 16px;
  letter-spacing: -0.025em;
}

.svc__heading-em {
  display: block;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.svc__intro {
  font-size: 17px;
  line-height: 1.65;
  color: #64748b;
  max-width: 560px;
  margin: 0 auto;
}

/* ── Category Pills ── */
.svc__pills {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 52px;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(18px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.08s;
}

.svc__pills--in {
  opacity: 1;
  transform: translateY(0);
}

.svc__pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  color: #475569;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.svc__pill:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
  transform: translateY(-1px);
}

.svc__pill--active {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
  transform: translateY(-1px);
}

.svc__pill--active:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

.svc__pill--active svg {
  stroke: #fff;
}

.svc__pill-icon {
  display: flex;
  align-items: center;
}

/* ── Carousel Wrap ── */
.svc__carousel-wrap {
  margin-bottom: 56px;
  opacity: 0;
  transform: translateY(22px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
}

.svc__carousel-wrap--in {
  opacity: 1;
  transform: translateY(0);
}

/* ── Progress ── */
.svc__progress {
  width: 100%;
  max-width: 400px;
  height: 3px;
  background: #e2e8f0;
  border-radius: 10px;
  margin: 0 auto 36px;
  overflow: hidden;
}

.svc__progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 10px;
  transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── Carousel ── */
.svc__carousel {
  position: relative;
  height: 380px;
  max-width: 1300px;
  margin: 0 auto;
}

/* ── Track ── */
.svc__track {
  position: relative;
  width: 100%;
  height: 100%;
}

/* ── Slide ── */
.svc__slide {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  will-change: transform, opacity;
}

/* ── Tiny card (icon only - for far positions) ── */
.svc__tiny-card {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 14px;
  border: 1.5px solid #e8ecf2;
  padding: 16px;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  opacity: 0;
  pointer-events: none;
}

.svc__tiny-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-bg, #eff6ff);
}

.svc__tiny-icon svg {
  stroke: var(--accent, #2563eb);
  width: 20px;
  height: 20px;
}

/* Small card (hidden on center, shown on sides) */
.svc__small-card {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #fff;
  border-radius: 18px;
  border: 1.5px solid #e8ecf2;
  padding: 24px 20px;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  opacity: 0;
  pointer-events: none;
}

.svc__small-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-bg, #eff6ff);
}

.svc__small-icon svg {
  stroke: var(--accent, #2563eb);
}

.svc__small-title {
  font-size: 14px;
  font-weight: 700;
  color: #334155;
  text-align: center;
  line-height: 1.3;
}

.svc__small-free {
  display: inline-flex;
  padding: 3px 12px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 700;
  background: #dcfce7;
  color: #15803d;
  border: 1px solid #86efac;
}

/* Big card (center) */
.svc__big-card {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 22px;
  border: 1.5px solid #e2e6ef;
  padding: 32px 36px;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.svc__big-top {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 18px;
}

.svc__big-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-bg, #eff6ff);
  border: 1px solid var(--accent-bd, #bfdbfe);
  flex-shrink: 0;
}

.svc__big-icon svg {
  stroke: var(--accent, #2563eb);
  width: 26px;
  height: 26px;
}

.svc__big-meta {
  flex: 1;
  min-width: 0;
}

.svc__big-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 4px;
  line-height: 1.2;
}

.svc__big-short {
  font-size: 14px;
  color: #64748b;
  margin: 0;
  font-weight: 500;
  line-height: 1.4;
}

.svc__big-detail {
  font-size: 14px;
  line-height: 1.7;
  color: #475569;
  margin: 0 0 18px;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
  flex: 1;
}

.svc__big-platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.svc__big-tag {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}

.svc__big-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid #f1f5f9;
}

.svc__big-free {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #16a34a;
}

.svc__big-paid {
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
}

.svc__big-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 700;
  color: #2563eb;
  cursor: pointer;
  transition: gap 0.2s ease;
}

.svc__big-link:hover {
  gap: 8px;
}

.svc__big-ribbon {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 14px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  color: #15803d;
  border: 1px solid #86efac;
  animation: svcPulse 2.5s ease-in-out infinite;
}

@keyframes svcPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
}

/* ==============================================
   DESKTOP: 7 CARD POSITIONS (3 left, center, 3 right)
   ============================================== */

/* Position 0: Far-far-left (icon only) */
.svc__slide--pos0 {
  width: 90px;
  height: 90px;
  transform: translate(-780%, -50%) scale(0.6);
  opacity: 0.2;
  z-index: 1;
  filter: blur(2px);
}
.svc__slide--pos0 .svc__tiny-card { opacity: 1; pointer-events: auto; }
.svc__slide--pos0 .svc__small-card { opacity: 0; pointer-events: none; }
.svc__slide--pos0 .svc__big-card { opacity: 0; pointer-events: none; }

/* Position 1: Far-left (icon only) */
.svc__slide--pos1 {
  width: 100px;
  height: 100px;
  transform: translate(-500%, -50%) scale(0.7);
  opacity: 0.35;
  z-index: 2;
  filter: blur(1px);
}
.svc__slide--pos1 .svc__tiny-card { opacity: 1; pointer-events: auto; }
.svc__slide--pos1 .svc__small-card { opacity: 0; pointer-events: none; }
.svc__slide--pos1 .svc__big-card { opacity: 0; pointer-events: none; }

/* Position 2: Left (icon + title) */
.svc__slide--pos2 {
  width: 160px;
  height: 200px;
  transform: translate(-280%, -50%) scale(0.85);
  opacity: 0.7;
  z-index: 3;
}
.svc__slide--pos2 .svc__tiny-card { opacity: 0; pointer-events: none; }
.svc__slide--pos2 .svc__small-card { opacity: 1; pointer-events: auto; }
.svc__slide--pos2 .svc__big-card { opacity: 0; pointer-events: none; }
.svc__slide--pos2:hover {
  opacity: 0.85;
  transform: translate(-280%, -52%) scale(0.88);
}

/* Position 3: Center (full card) */
.svc__slide--center {
  width: 460px;
  height: 360px;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  z-index: 5;
  cursor: default;
}
.svc__slide--center .svc__tiny-card { opacity: 0; pointer-events: none; }
.svc__slide--center .svc__small-card { opacity: 0; transform: scale(0.9); pointer-events: none; }
.svc__slide--center .svc__big-card { opacity: 1; transform: scale(1); pointer-events: auto; }

/* Position 4: Right (icon + title) */
.svc__slide--pos4 {
  width: 160px;
  height: 200px;
  transform: translate(180%, -50%) scale(0.85);
  opacity: 0.7;
  z-index: 3;
}
.svc__slide--pos4 .svc__tiny-card { opacity: 0; pointer-events: none; }
.svc__slide--pos4 .svc__small-card { opacity: 1; pointer-events: auto; }
.svc__slide--pos4 .svc__big-card { opacity: 0; pointer-events: none; }
.svc__slide--pos4:hover {
  opacity: 0.85;
  transform: translate(180%, -52%) scale(0.88);
}

/* Position 5: Far-right (icon only) */
.svc__slide--pos5 {
  width: 100px;
  height: 100px;
  transform: translate(400%, -50%) scale(0.7);
  opacity: 0.35;
  z-index: 2;
  filter: blur(1px);
}
.svc__slide--pos5 .svc__tiny-card { opacity: 1; pointer-events: auto; }
.svc__slide--pos5 .svc__small-card { opacity: 0; pointer-events: none; }
.svc__slide--pos5 .svc__big-card { opacity: 0; pointer-events: none; }

/* Position 6: Far-far-right (icon only) */
.svc__slide--pos6 {
  width: 90px;
  height: 90px;
  transform: translate(680%, -50%) scale(0.6);
  opacity: 0.2;
  z-index: 1;
  filter: blur(2px);
}
.svc__slide--pos6 .svc__tiny-card { opacity: 1; pointer-events: auto; }
.svc__slide--pos6 .svc__small-card { opacity: 0; pointer-events: none; }
.svc__slide--pos6 .svc__big-card { opacity: 0; pointer-events: none; }

/* ── Arrows ── */
.svc__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  z-index: 10;
  color: #475569;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.svc__arrow:hover {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
  box-shadow: 0 4px 18px rgba(37, 99, 235, 0.3);
  transform: translateY(-50%) scale(1.06);
}

.svc__arrow--left {
  left: 0;
}

.svc__arrow--right {
  right: 0;
}

/* ── Dots ── */
.svc__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}

.svc__dot {
  width: 8px;
  height: 8px;
  border-radius: 100px;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.svc__dot--active {
  width: 32px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
}

.svc__dot:hover:not(.svc__dot--active) {
  background: #94a3b8;
}

/* ── Counter ── */
.svc__counter {
  text-align: center;
  margin-top: 16px;
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.05em;
}

.svc__counter-current {
  color: #2563eb;
  font-size: 16px;
  font-weight: 800;
}

.svc__counter-sep {
  margin: 0 4px;
}

/* ── CTA ── */
.svc__cta {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
}

.svc__cta--in {
  opacity: 1;
  transform: translateY(0);
}

.svc__cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3), 0 1px 3px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.svc__cta-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s;
}

.svc__cta-btn:hover::before {
  transform: translateX(100%);
}

.svc__cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.4), 0 2px 6px rgba(0, 0, 0, 0.08);
}

.svc__cta-btn:active {
  transform: translateY(0) scale(0.98);
}

.svc__cta-btn svg {
  transition: transform 0.3s ease;
}

.svc__cta-btn:hover svg {
  transform: translateX(3px);
}

/* ==============================================
   RESPONSIVE — TABLET (1023px)
   ============================================== */
@media (max-width: 1023px) {
  .svc__heading {
    font-size: 36px;
  }

  .svc__carousel {
    height: 350px;
    max-width: 900px;
  }

  .svc__slide--center {
    width: 400px;
    height: 330px;
  }

  .svc__slide--pos2 {
    width: 140px;
    height: 180px;
    transform: translate(-250%, -50%) scale(0.8);
  }

  .svc__slide--pos4 {
    width: 140px;
    height: 180px;
    transform: translate(150%, -50%) scale(0.8);
  }

  .svc__slide--pos0,
  .svc__slide--pos1 {
    opacity: 0;
    pointer-events: none;
  }

  .svc__slide--pos5,
  .svc__slide--pos6 {
    opacity: 0;
    pointer-events: none;
  }

  .svc__big-title {
    font-size: 19px;
  }

  .svc__big-detail {
    font-size: 13px;
  }

  .svc__big-card {
    padding: 26px 28px;
  }
}

/* ==============================================
   RESPONSIVE — MOBILE (767px)
   5 cards: icon-only | icon+title | center | icon+title | icon-only
   ============================================== */
@media (max-width: 767px) {
  .svc {
    padding: 56px 0 64px;
  }

  .svc__container {
    padding: 0 12px;
  }

  .svc__header {
    margin-bottom: 32px;
  }

  .svc__heading {
    font-size: 26px;
  }

  .svc__heading-em {
    display: inline;
  }

  .svc__intro {
    font-size: 14px;
    max-width: 360px;
  }

  .svc__badge {
    font-size: 11px;
    padding: 5px 14px;
    margin-bottom: 14px;
  }

  .svc__pills {
    margin-bottom: 36px;
    gap: 6px;
  }

  .svc__pill {
    padding: 8px 14px;
    font-size: 12px;
    gap: 6px;
  }

  .svc__pill-icon svg {
    width: 14px;
    height: 14px;
  }

  .svc__carousel {
    height: 300px;
    max-width: 100%;
  }

  /* Position 0: Extreme left — icon only (tiny card) */
  .svc__slide--pos0 {
    width: 40px;
    height: 40px;
    transform: translate(-550%, -50%) scale(0.6);
    opacity: 0.25;
    filter: blur(1px);
  }
  .svc__slide--pos0 .svc__tiny-card { opacity: 1; border-radius: 10px; padding: 8px; }
  .svc__slide--pos0 .svc__tiny-icon { width: 28px; height: 28px; border-radius: 8px; }
  .svc__slide--pos0 .svc__tiny-icon svg { width: 14px; height: 14px; }

  /* Position 1: Far left — icon only (tiny card) */
  .svc__slide--pos1 {
    width: 48px;
    height: 48px;
    transform: translate(-340%, -50%) scale(0.7);
    opacity: 0.4;
    filter: blur(0.5px);
  }
  .svc__slide--pos1 .svc__tiny-card { opacity: 1; border-radius: 10px; padding: 8px; }
  .svc__slide--pos1 .svc__tiny-icon { width: 32px; height: 32px; border-radius: 8px; }
  .svc__slide--pos1 .svc__tiny-icon svg { width: 16px; height: 16px; }

  /* Position 2: Left — icon + heading (small card) */
  .svc__slide--pos2 {
    width: 80px;
    height: 100px;
    transform: translate(-200%, -50%) scale(0.8);
    opacity: 0.6;
    filter: none;
  }
  .svc__slide--pos2 .svc__small-card {
    opacity: 1;
    pointer-events: auto;
    padding: 12px 8px;
    gap: 6px;
    border-radius: 12px;
  }
  .svc__slide--pos2 .svc__small-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .svc__slide--pos2 .svc__small-icon svg {
    width: 16px;
    height: 16px;
  }
  .svc__slide--pos2 .svc__small-title {
    font-size: 9px;
    line-height: 1.2;
  }
  .svc__slide--pos2 .svc__small-free {
    font-size: 7px;
    padding: 2px 6px;
  }
  .svc__slide--pos2 .svc__tiny-card { opacity: 0; pointer-events: none; }

  /* Position 3: Center — full card (reduced size) */
  .svc__slide--center {
    width: calc(100vw - 140px);
    max-width: 280px;
    height: 280px;
  }
  .svc__slide--center .svc__big-card {
    padding: 18px 16px;
    border-radius: 16px;
  }
  .svc__slide--center .svc__big-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .svc__slide--center .svc__big-icon svg {
    width: 18px;
    height: 18px;
  }
  .svc__slide--center .svc__big-title {
    font-size: 15px;
  }
  .svc__slide--center .svc__big-short {
    font-size: 11px;
  }
  .svc__slide--center .svc__big-top {
    gap: 10px;
    margin-bottom: 10px;
  }
  .svc__slide--center .svc__big-detail {
    font-size: 11px;
    line-height: 1.5;
    margin-bottom: 10px;
    padding-top: 10px;
  }
  .svc__slide--center .svc__big-footer {
    padding-top: 10px;
  }
  .svc__slide--center .svc__big-free,
  .svc__slide--center .svc__big-paid {
    font-size: 10px;
  }
  .svc__slide--center .svc__big-link {
    font-size: 10px;
  }
  .svc__slide--center .svc__big-ribbon {
    top: 10px;
    right: 10px;
    font-size: 8px;
    padding: 2px 8px;
  }
  .svc__slide--center .svc__big-tag {
    font-size: 9px;
    padding: 2px 8px;
  }
  .svc__slide--center .svc__big-platforms {
    margin-bottom: 8px;
    gap: 4px;
  }

  /* Position 4: Right — icon + heading (small card) */
  .svc__slide--pos4 {
    width: 80px;
    height: 100px;
    transform: translate(100%, -50%) scale(0.8);
    opacity: 0.6;
    filter: none;
  }
  .svc__slide--pos4 .svc__small-card {
    opacity: 1;
    pointer-events: auto;
    padding: 12px 8px;
    gap: 6px;
    border-radius: 12px;
  }
  .svc__slide--pos4 .svc__small-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .svc__slide--pos4 .svc__small-icon svg {
    width: 16px;
    height: 16px;
  }
  .svc__slide--pos4 .svc__small-title {
    font-size: 9px;
    line-height: 1.2;
  }
  .svc__slide--pos4 .svc__small-free {
    font-size: 7px;
    padding: 2px 6px;
  }
  .svc__slide--pos4 .svc__tiny-card { opacity: 0; pointer-events: none; }

  /* Position 5: Far right — icon only (tiny card) */
  .svc__slide--pos5 {
    width: 48px;
    height: 48px;
    transform: translate(240%, -50%) scale(0.7);
    opacity: 0.4;
    filter: blur(0.5px);
  }
  .svc__slide--pos5 .svc__tiny-card { opacity: 1; border-radius: 10px; padding: 8px; }
  .svc__slide--pos5 .svc__tiny-icon { width: 32px; height: 32px; border-radius: 8px; }
  .svc__slide--pos5 .svc__tiny-icon svg { width: 16px; height: 16px; }

  /* Position 6: Extreme right — icon only (tiny card) */
  .svc__slide--pos6 {
    width: 40px;
    height: 40px;
    transform: translate(450%, -50%) scale(0.6);
    opacity: 0.25;
    filter: blur(1px);
  }
  .svc__slide--pos6 .svc__tiny-card { opacity: 1; border-radius: 10px; padding: 8px; }
  .svc__slide--pos6 .svc__tiny-icon { width: 28px; height: 28px; border-radius: 8px; }
  .svc__slide--pos6 .svc__tiny-icon svg { width: 14px; height: 14px; }

  /* Hover states disabled on mobile for side cards */
  .svc__slide--pos2:hover,
  .svc__slide--pos4:hover {
    transform: translate(-200%, -50%) scale(0.8);
    opacity: 0.6;
  }
  .svc__slide--pos4:hover {
    transform: translate(100%, -50%) scale(0.8);
  }

  .svc__arrow {
    width: 32px;
    height: 32px;
  }

  .svc__arrow svg {
    width: 14px;
    height: 14px;
  }

  .svc__arrow--left {
    left: 2px;
  }

  .svc__arrow--right {
    right: 2px;
  }

  .svc__dots {
    margin-top: 20px;
    gap: 6px;
  }

  .svc__dot {
    width: 6px;
    height: 6px;
  }

  .svc__dot--active {
    width: 24px;
  }

  .svc__counter {
    margin-top: 12px;
    font-size: 12px;
  }

  .svc__counter-current {
    font-size: 14px;
  }

  .svc__cta-btn {
    width: 100%;
    max-width: 360px;
    justify-content: center;
    padding: 14px 28px;
    font-size: 15px;
    border-radius: 12px;
  }
}

/* ==============================================
   RESPONSIVE — SMALL MOBILE (374px)
   ============================================== */
@media (max-width: 374px) {
  .svc__heading {
    font-size: 22px;
  }

  .svc__carousel {
    height: 280px;
  }

  .svc__slide--center {
    width: calc(100vw - 120px);
    max-width: 240px;
    height: 260px;
  }

  .svc__slide--center .svc__big-card {
    padding: 14px 12px;
  }

  .svc__slide--center .svc__big-title {
    font-size: 13px;
  }

  .svc__slide--center .svc__big-short {
    font-size: 10px;
  }

  .svc__slide--center .svc__big-detail {
    font-size: 10px;
  }

  .svc__slide--pos2 {
    width: 60px;
    height: 80px;
    transform: translate(-180%, -50%) scale(0.75);
  }

  .svc__slide--pos4 {
    width: 60px;
    height: 80px;
    transform: translate(80%, -50%) scale(0.75);
  }

  .svc__slide--pos2 .svc__small-title,
  .svc__slide--pos4 .svc__small-title {
    font-size: 8px;
  }

  .svc__slide--pos2 .svc__small-icon,
  .svc__slide--pos4 .svc__small-icon {
    width: 26px;
    height: 26px;
  }

  .svc__slide--pos0 {
    width: 32px;
    height: 32px;
    transform: translate(-420%, -50%) scale(0.5);
  }

  .svc__slide--pos1 {
    width: 38px;
    height: 38px;
    transform: translate(-280%, -50%) scale(0.6);
  }

  .svc__slide--pos5 {
    width: 38px;
    height: 38px;
    transform: translate(180%, -50%) scale(0.6);
  }

  .svc__slide--pos6 {
    width: 32px;
    height: 32px;
    transform: translate(320%, -50%) scale(0.5);
  }

  .svc__pill {
    padding: 7px 12px;
    font-size: 11px;
  }

  /* Fix hover states for small mobile */
  .svc__slide--pos2:hover {
    transform: translate(-180%, -50%) scale(0.75);
  }
  .svc__slide--pos4:hover {
    transform: translate(80%, -50%) scale(0.75);
  }
}
</style>