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

      <!-- ── Body ── -->
      <div class="svc__body" :class="{ 'svc__body--in': isVisible }">
        <!-- Sidebar (desktop ≥ 1024) -->
        <aside class="svc__sidebar">
          <div class="svc__sidebar-inner">
            <button
              v-for="cat in categories"
              :key="cat.id"
              class="svc__nav"
              :class="{ 'svc__nav--active': activeCategory === cat.id }"
              @click="setCategory(cat.id)"
            >
              <span class="svc__nav-icon" v-html="cat.icon"></span>
              <span class="svc__nav-info">
                <strong class="svc__nav-label">{{ cat.label }}</strong>
                <small class="svc__nav-count">
                  {{ allServices[cat.id].length }} services
                </small>
              </span>
              <svg
                class="svc__nav-arrow"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </aside>

        <!-- Main content area -->
        <div class="svc__main">
          <!-- Mobile tabs (< 1024) -->
          <div class="svc__tabs">
            <button
              v-for="cat in categories"
              :key="'t-' + cat.id"
              class="svc__tab"
              :class="{ 'svc__tab--active': activeCategory === cat.id }"
              @click="setCategory(cat.id)"
            >
              <span class="svc__tab-icon" v-html="cat.icon"></span>
              <span class="svc__tab-text">{{ cat.label }}</span>
            </button>
          </div>

          <!-- Category title bar -->
          <div class="svc__cat-bar">
            <h3 class="svc__cat-title">
              {{ currentCategory?.label }}
            </h3>
            <span class="svc__cat-count">
              {{ activeServices.length }} services
            </span>
          </div>

          <!-- Grid -->
          <Transition name="svc-swap" mode="out-in">
            <div class="svc__grid" :key="activeCategory">
              <article
                v-for="(service, idx) in activeServices"
                :key="service.title"
                class="svc__card"
                :class="{ 'svc__card--free': service.isFree }"
                :style="{
                  '--accent': colorMap[service.color]?.main,
                  '--accent-bg': colorMap[service.color]?.bg,
                  '--accent-bd': colorMap[service.color]?.border,
                  '--delay': idx * 55 + 'ms'
                }"
              >
                <!-- Free ribbon -->
                <span v-if="service.isFree" class="svc__card-ribbon">
                  सीमित समय
                </span>

                <!-- Icon -->
                <div class="svc__card-icon" v-html="service.icon"></div>

                <!-- Title -->
                <h4 class="svc__card-title">{{ service.title }}</h4>

                <!-- Short desc -->
                <p class="svc__card-short">{{ service.shortDesc }}</p>

                <!-- Detail -->
                <p class="svc__card-detail">{{ service.detail }}</p>

                <!-- Platforms -->
                <div v-if="service.platforms" class="svc__card-platforms">
                  <span
                    v-for="p in service.platforms"
                    :key="p"
                    class="svc__card-tag"
                  >{{ p }}</span>
                </div>

                <!-- Learn more -->
                <span class="svc__card-link">
                  Learn more
                  <svg
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </article>
            </div>
          </Transition>
        </div>
      </div>

      <!-- ── CTA ── -->
      <div class="svc__cta" :class="{ 'svc__cta--in': isVisible }">
        <a href="/services.html" class="svc__cta-btn">
          <span>View All Services &amp; Pricing</span>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
const activeCategory = ref('registration')
let observer = null

/* ── Colour map ── */
const colorMap = {
  blue:    { main: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  indigo:  { main: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe' },
  emerald: { main: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
  amber:   { main: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  violet:  { main: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd' },
  green:   { main: '#16a34a', bg: '#f0fdf4', border: '#86efac' }
}

/* ── Categories ── */
const categories = [
  {
    id: 'registration',
    label: 'Registration & Compliance',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  },
  {
    id: 'branding',
    label: 'Branding & Cataloguing',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
  },
  {
    id: 'marketplace',
    label: 'Marketplace & Listing',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`
  },
  {
    id: 'operations',
    label: 'Operations & Growth',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  }
]

/* ── Services ── */
const allServices = {
  registration: [
    {
      title: 'e-PAN Card',
      shortDesc: 'Instant digital PAN card generation',
      detail:
        'Get your business PAN card digitally without visiting any office. Required for GST and marketplace registration.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
      color: 'blue',
      isFree: false
    },
    {
      title: 'GST Registration',
      shortDesc: 'Mandatory for online selling on marketplaces',
      detail:
        'Complete GST registration with ARN generation. Required to sell on Amazon, Flipkart, and other marketplaces.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
      color: 'indigo',
      isFree: false
    },
    {
      title: 'Udyam Registration',
      shortDesc: 'MSME certificate for your business',
      detail:
        'Register your business under MSME to avail government benefits, subsidies, and marketplace priority listing.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      color: 'emerald',
      isFree: false
    },
    {
      title: 'FSSAI License',
      shortDesc: 'Required for food & consumable products',
      detail:
        'Mandatory food safety license for sellers dealing in food items, beverages, supplements, and consumable goods.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
      color: 'amber',
      isFree: false
    },
    {
      title: 'Taxation Support',
      shortDesc: 'GST filing & tax compliance assistance',
      detail:
        'Regular GST return filing, tax computation, and compliance support to keep your business running smoothly.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      color: 'green',
      isFree: true
    }
  ],
  branding: [
    {
      title: 'Brand Identity Design',
      shortDesc: 'Name, Logo, Banner & Tagline creation',
      detail:
        'Professional brand identity package including business name suggestions, logo design, marketplace banners, and a compelling tagline.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      color: 'violet',
      isFree: false
    },
    {
      title: 'Product Photography',
      shortDesc: 'Professional product images for listings',
      detail:
        'High-quality product photography on white background, lifestyle shots, and infographic images optimized for marketplace listings.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
      color: 'blue',
      isFree: false
    },
    {
      title: 'AI Product Images',
      shortDesc: 'AI-generated professional product visuals',
      detail:
        'Leverage AI technology to create stunning product images, background removal, lifestyle mockups, and A+ content visuals.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
      color: 'indigo',
      isFree: false
    },
    {
      title: 'Product Metadata',
      shortDesc: 'Titles, descriptions & keyword optimization',
      detail:
        'SEO-optimized product titles, bullet points, descriptions, and backend keywords to maximize your product visibility and search ranking.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>`,
      color: 'emerald',
      isFree: false
    },
    {
      title: 'AI Content Writing',
      shortDesc: 'AI-powered product descriptions & content',
      detail:
        'Use AI to generate compelling product descriptions, bullet points, and A+ content that converts browsers into buyers.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      color: 'amber',
      isFree: true
    },
    {
      title: 'Quality Check',
      shortDesc: 'Product quality verification & compliance',
      detail:
        'Ensure your products meet marketplace quality standards and compliance requirements before listing.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      color: 'green',
      isFree: false
    }
  ],
  marketplace: [
    {
      title: 'Marketplace Onboarding',
      shortDesc: 'Account setup on all major platforms',
      detail:
        'Complete seller account creation and verification on Amazon, Flipkart, Meesho, JioMart, and ONDC marketplaces.',
      platforms: ['Amazon', 'Flipkart', 'Meesho', 'JioMart'],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
      color: 'blue',
      isFree: false
    },
    {
      title: 'Khulega.online Listing',
      shortDesc: 'List products on our own marketplace',
      detail:
        'Get your products listed on Khulega.online powered by ONDC network, reaching customers across India.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      color: 'indigo',
      isFree: false
    },
    {
      title: 'Product Listing',
      shortDesc: 'Upload & list products across platforms',
      detail:
        'Bulk product listing with optimized content across all connected marketplaces from one dashboard.',
      platforms: ['Amazon', 'Flipkart', 'Meesho', 'JioMart'],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
      color: 'emerald',
      isFree: false
    },
    {
      title: 'Pricing Strategy',
      shortDesc: 'Competitive pricing across marketplaces',
      detail:
        'Data-driven pricing recommendations considering marketplace fees, competition, and profit margins.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      color: 'amber',
      isFree: false
    },
    {
      title: 'Seller Training',
      shortDesc: 'Learn to manage your online business',
      detail:
        'Comprehensive training on dashboard usage, order management, inventory handling, and marketplace best practices.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
      color: 'violet',
      isFree: false
    }
  ],
  operations: [
    {
      title: 'Order Management',
      shortDesc: 'Unified order tracking across platforms',
      detail:
        'Track, process, and fulfill orders from all marketplaces in one dashboard. Never miss an order again.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      color: 'blue',
      isFree: true
    },
    {
      title: 'Inventory Management',
      shortDesc: 'Real-time stock sync across marketplaces',
      detail:
        'Automated inventory synchronization to prevent overselling and stockouts across all connected platforms.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      color: 'emerald',
      isFree: true
    },
    {
      title: 'Shipping & Logistics',
      shortDesc: 'End-to-end shipping management',
      detail:
        'Integrated shipping solutions with label generation, tracking, and delivery management for all orders.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      color: 'indigo',
      isFree: true
    },
    {
      title: 'Returns & Refunds',
      shortDesc: 'Hassle-free return processing',
      detail:
        'Streamlined return management with automated refund processing and return analytics across platforms.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>`,
      color: 'amber',
      isFree: true
    },
    {
      title: 'Settlement & Payments',
      shortDesc: 'Track marketplace payments & settlements',
      detail:
        'Monitor your earnings, settlement cycles, deductions, and payment reconciliation across all marketplaces.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      color: 'green',
      isFree: false
    },
    {
      title: 'Digital Marketing & Ads',
      shortDesc: 'Boost visibility with targeted advertising',
      detail:
        'Marketplace ads management, social media marketing, and digital campaigns to drive traffic and increase sales.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
      color: 'violet',
      isFree: true
    },
    {
      title: 'Reporting & Analytics',
      shortDesc: 'Cross-marketplace performance insights',
      detail:
        'Consolidated sales reports, performance analytics, and business intelligence across all connected platforms.',
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
      color: 'blue',
      isFree: false
    },
    {
      title: 'Marketplace Support',
      shortDesc: 'Dedicated support for all platforms',
      detail:
        'Expert assistance for marketplace issues including account health, policy violations, and performance optimization.',
      platforms: ['Amazon', 'Flipkart', 'Meesho', 'JioMart'],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
      color: 'emerald',
      isFree: true
    }
  ]
}

/* ── Computed ── */
const activeServices = computed(() => allServices[activeCategory.value] || [])
const currentCategory = computed(() =>
  categories.find((c) => c.id === activeCategory.value)
)

/* ── Methods ── */
function setCategory(id) {
  activeCategory.value = id
}

/* ── Intersection Observer ── */
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) isVisible.value = true
    },
    { threshold: 0.06 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style>
/* ==============================================
   SERVICES — Sidebar + Grid Layout
   ============================================== */

/* ── Keyframes ── */
@keyframes svcSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes svcCardIn {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes svcPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.65;
  }
}

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
  background: radial-gradient(
      ellipse at 10% 60%,
      rgba(37, 99, 235, 0.03) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 90% 20%,
      rgba(99, 102, 241, 0.03) 0%,
      transparent 55%
    );
  pointer-events: none;
}

/* ── Container ── */
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
  margin-bottom: 56px;
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

/* ── Body (sidebar + content) ── */
.svc__body {
  display: flex;
  gap: 36px;
  align-items: flex-start;
  margin-bottom: 56px;
  opacity: 0;
  transform: translateY(22px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.12s;
}

.svc__body--in {
  opacity: 1;
  transform: translateY(0);
}

/* ── Sidebar (desktop ≥ 1024) ── */
.svc__sidebar {
  width: 290px;
  flex-shrink: 0;
  position: sticky;
  top: 100px;
}

.svc__sidebar-inner {
  background: #fff;
  border-radius: 20px;
  border: 1px solid #e8ecf2;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03), 0 6px 20px rgba(0, 0, 0, 0.02);
}

/* Nav buttons */
.svc__nav {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: all 0.25s ease;
  margin-bottom: 4px;
  color: #334155;
}

.svc__nav:last-child {
  margin-bottom: 0;
}

.svc__nav:hover {
  background: #f1f5f9;
}

.svc__nav--active {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
}

.svc__nav--active:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

/* Nav icon */
.svc__nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: rgba(37, 99, 235, 0.08);
  flex-shrink: 0;
  transition: background 0.25s;
}

.svc__nav--active .svc__nav-icon {
  background: rgba(255, 255, 255, 0.2);
}

.svc__nav--active .svc__nav-icon svg {
  stroke: #fff;
}

/* Nav info */
.svc__nav-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.svc__nav-label {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
}

.svc__nav-count {
  font-size: 12px;
  font-weight: 500;
  opacity: 0.6;
}

/* Nav arrow */
.svc__nav-arrow {
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s;
  flex-shrink: 0;
}

.svc__nav--active .svc__nav-arrow {
  opacity: 0.8;
  transform: translateX(0);
}

/* ── Mobile tabs (< 1024) ── */
.svc__tabs {
  display: none;
}

/* ── Category title bar ── */
.svc__cat-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f1f5f9;
}

.svc__cat-title {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.svc__cat-count {
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
  background: #f1f5f9;
  padding: 4px 14px;
  border-radius: 100px;
}

/* ── Main content ── */
.svc__main {
  flex: 1;
  min-width: 0;
}

/* ── Grid ── */
.svc__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  align-items: start;
}

/* ── Card ── */
.svc__card {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 24px 24px 24px 28px;
  border: 1px solid #edf0f7;
  border-left: 4px solid var(--accent, #2563eb);
  cursor: default;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  animation: svcCardIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms)
    both;
}

.svc__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03);
  border-color: #e2e6ef;
  border-left-color: var(--accent, #2563eb);
}

/* Free card glow */
.svc__card--free {
  border-left-color: #16a34a;
  background: linear-gradient(135deg, #fff 70%, #f0fdf4 100%);
}

.svc__card--free:hover {
  box-shadow: 0 8px 28px rgba(22, 163, 74, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.03);
}

/* Ribbon */
.svc__card-ribbon {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 3px 12px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  color: #15803d;
  border: 1px solid #86efac;
  animation: svcPulse 2.5s ease-in-out infinite;
}

/* Card icon */
.svc__card-icon {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-bg, #eff6ff);
  border: 1px solid var(--accent-bd, #bfdbfe);
  margin-bottom: 14px;
  transition: transform 0.3s ease;
}

.svc__card-icon svg {
  stroke: var(--accent, #2563eb);
}

.svc__card:hover .svc__card-icon {
  transform: scale(1.06);
}

/* Title */
.svc__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px;
  line-height: 1.3;
}

/* Short desc */
.svc__card-short {
  font-size: 13px;
  line-height: 1.5;
  color: #475569;
  margin: 0 0 10px;
  font-weight: 500;
}

/* Detail */
.svc__card-detail {
  font-size: 12.5px;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0 0 12px;
  padding-top: 10px;
  border-top: 1px solid #f1f5f9;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Platforms */
.svc__card-platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.svc__card-tag {
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}

/* Learn more link */
.svc__card-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent, #2563eb);
  opacity: 0;
  transform: translateY(4px);
  transition: all 0.25s ease;
  cursor: pointer;
}

.svc__card:hover .svc__card-link {
  opacity: 1;
  transform: translateY(0);
}

.svc__card-link svg {
  transition: transform 0.2s ease;
}

.svc__card:hover .svc__card-link svg {
  transform: translateX(3px);
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
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.svc__cta-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.12),
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.5s;
}

.svc__cta-btn:hover::before {
  transform: translateX(100%);
}

.svc__cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.08);
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

/* ── Transition: category swap ── */
.svc-swap-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.svc-swap-leave-active {
  transition: opacity 0.15s ease;
}
.svc-swap-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.svc-swap-leave-to {
  opacity: 0;
}

/* ==============================================
   RESPONSIVE
   ============================================== */

/* ── Desktop large (≥ 1280) ── */
@media (min-width: 1280px) {
  .svc__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

/* ── Desktop (≥ 1024) ── */
@media (min-width: 1024px) {
  .svc__tabs {
    display: none;
  }
  .svc__sidebar {
    display: block;
  }
}

/* ── Tablet (768 – 1023) ── */
@media (max-width: 1023px) {
  .svc {
    padding: 80px 0 90px;
  }

  .svc__heading {
    font-size: 36px;
  }

  .svc__body {
    flex-direction: column;
    gap: 0;
  }

  .svc__sidebar {
    display: none;
  }

  /* Show mobile tabs */
  .svc__tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 4px;
  }
  .svc__tabs::-webkit-scrollbar {
    display: none;
  }

  .svc__tab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    color: #475569;
    background: #fff;
    border: 1.5px solid #e2e8f0;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
    transition: all 0.25s ease;
  }

  .svc__tab:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
  }

  .svc__tab--active {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #fff;
    border-color: transparent;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }

  .svc__tab--active svg {
    stroke: #fff;
  }

  .svc__tab-icon {
    display: flex;
    align-items: center;
  }

  .svc__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .svc__card-link {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Mobile (< 768) ── */
@media (max-width: 767px) {
  .svc {
    padding: 56px 0 64px;
  }

  .svc__container {
    padding: 0 16px;
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

  .svc__tab {
    padding: 8px 16px;
    font-size: 12px;
  }

  .svc__cat-bar {
    margin-bottom: 16px;
    padding-bottom: 12px;
  }

  .svc__cat-title {
    font-size: 17px;
  }

  .svc__cat-count {
    font-size: 11px;
    padding: 3px 10px;
  }

  .svc__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .svc__card {
    padding: 20px 20px 20px 24px;
    border-radius: 14px;
  }

  .svc__card-icon {
    width: 42px;
    height: 42px;
    border-radius: 11px;
    margin-bottom: 12px;
  }

  .svc__card-icon svg {
    width: 20px;
    height: 20px;
  }

  .svc__card-title {
    font-size: 15px;
  }

  .svc__card-short {
    font-size: 12.5px;
  }

  .svc__card-detail {
    font-size: 12px;
  }

  .svc__card-ribbon {
    top: 10px;
    right: 10px;
    font-size: 9px;
    padding: 2px 9px;
  }

  .svc__card-link {
    opacity: 1;
    transform: translateY(0);
    font-size: 11px;
  }

  .svc__card-tag {
    font-size: 10px;
    padding: 2px 8px;
  }

  .svc__body {
    margin-bottom: 40px;
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

/* ── Extra small (< 375) ── */
@media (max-width: 374px) {
  .svc__heading {
    font-size: 22px;
  }

  .svc__card {
    padding: 16px 16px 16px 20px;
  }

  .svc__tab {
    padding: 7px 12px;
    font-size: 11px;
    gap: 5px;
  }
}
</style>