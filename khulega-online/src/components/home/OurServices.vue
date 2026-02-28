<template>
  <section class="svc" ref="sectionRef">
    <div class="svc__inner">
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
    </div>

    <!-- ── Carousel — FULL WIDTH ── -->
    <div
      class="svc__carousel-wrap"
      :class="{ 'svc__carousel-wrap--in': isVisible }"
    >
      <div class="svc__progress">
        <div
          class="svc__progress-bar"
          :style="{ width: progressWidth + '%' }"
        ></div>
      </div>

      <div
        class="svc__carousel"
        @mouseenter="pauseAuto"
        @mouseleave="resumeAuto"
        @touchstart.passive="onTouchStart"
        @touchmove.passive="onTouchMove"
        @touchend="onTouchEnd"
      >
        <div class="svc__track">
          <div
            v-for="slide in renderedSlides"
            :key="slide.uniqueKey"
            class="svc__slide"
            :class="{ 'svc__slide--center': slide.relPos === 0 }"
            :style="calcSlideStyle(slide.relPos)"
            @click="onSlideClick(slide.relPos, slide.originalIndex)"
          >
            <!-- Small card -->
            <div class="svc__sm">
              <div
                class="svc__sm-icon"
                v-html="slide.icon"
                :style="{
                  '--ac': colorMap[slide.color]?.main,
                  '--ac-bg': colorMap[slide.color]?.bg,
                }"
              ></div>
              <span class="svc__sm-title">{{ slide.title }}</span>
              <span v-if="slide.isFree" class="svc__sm-free">Free</span>
            </div>

            <!-- Big card -->
            <div class="svc__lg">
              <div class="svc__lg-top">
                <div
                  class="svc__lg-icon"
                  v-html="slide.icon"
                  :style="{
                    '--ac': colorMap[slide.color]?.main,
                    '--ac-bg': colorMap[slide.color]?.bg,
                    '--ac-bd': colorMap[slide.color]?.border,
                  }"
                ></div>
                <div class="svc__lg-meta">
                  <h3 class="svc__lg-title">{{ slide.title }}</h3>
                  <p class="svc__lg-sub">{{ slide.shortDesc }}</p>
                </div>
              </div>
              <p class="svc__lg-detail">{{ slide.detail }}</p>
              <div v-if="slide.platforms" class="svc__lg-platforms">
                <span v-for="p in slide.platforms" :key="p" class="svc__lg-tag">
                  {{ p }}
                </span>
              </div>
              <div class="svc__lg-foot">
                <span v-if="slide.isFree" class="svc__lg-free">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Included Free
                </span>
                <span v-else class="svc__lg-paid">Premium Service</span>
                <a href="/services/" class="svc__lg-link" @click.stop>
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
                </a>
              </div>
            </div>
          </div>
        </div>
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

      <div class="svc__counter">
        <span class="svc__counter-now">{{
          String(currentIndex + 1).padStart(2, "0")
        }}</span>
        <span class="svc__counter-div">/</span>
        <span class="svc__counter-total">{{
          String(activeServices.length).padStart(2, "0")
        }}</span>
      </div>
    </div>

    <!-- ── CTA ── -->
    <div class="svc__inner">
      <div class="svc__cta" :class="{ 'svc__cta--in': isVisible }">
        <a href="/services/" class="svc__cta-btn">
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
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const sectionRef = ref(null);
const isVisible = ref(false);
const activeCategory = ref("registration");
const currentIndex = ref(0);
const isTransitioning = ref(false);
const winW = ref(1200);

let observer = null;
let autoTimer = null;
let isPaused = false;
const AUTO_INTERVAL = 3500;

const colorMap = {
  blue: { main: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
  indigo: { main: "#4f46e5", bg: "#eef2ff", border: "#c7d2fe" },
  emerald: { main: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
  amber: { main: "#d97706", bg: "#fffbeb", border: "#fde68a" },
  violet: { main: "#7c3aed", bg: "#f5f3ff", border: "#c4b5fd" },
  green: { main: "#16a34a", bg: "#f0fdf4", border: "#86efac" },
};

const categories = [
  {
    id: "registration",
    label: "Registration",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  },
  {
    id: "branding",
    label: "Branding",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`,
  },
  {
    id: "operations",
    label: "Operations",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  },
];

const allServices = {
  registration: [
    {
      title: "e-PAN Card",
      shortDesc: "Instant digital PAN card generation",
      detail:
        "Get your business PAN card digitally without visiting any office. Required for GST and marketplace registration.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
      color: "blue",
      isFree: false,
    },
    {
      title: "GST Registration",
      shortDesc: "Mandatory for online selling on marketplaces",
      detail:
        "Complete GST registration with ARN generation. Required to sell on Amazon, Flipkart, and other marketplaces.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
      color: "indigo",
      isFree: false,
    },
    {
      title: "Udyam Registration",
      shortDesc: "MSME certificate for your business",
      detail:
        "Register your business under MSME to avail government benefits, subsidies, and marketplace priority listing.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      color: "emerald",
      isFree: false,
    },
    {
      title: "FSSAI License",
      shortDesc: "Required for food & consumable products",
      detail:
        "Mandatory food safety license for sellers dealing in food items, beverages, supplements, and consumable goods.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
      color: "amber",
      isFree: false,
    },
    {
      title: "Taxation Support",
      shortDesc: "GST filing & tax compliance assistance",
      detail:
        "Regular GST return filing, tax computation, and compliance support to keep your business running smoothly.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      color: "green",
      isFree: true,
    },
  ],
  branding: [
    {
      title: "Brand Identity Design",
      shortDesc: "Name, Logo, Banner & Tagline creation",
      detail:
        "Professional brand identity package including business name suggestions, logo design, marketplace banners, and a compelling tagline.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      color: "violet",
      isFree: false,
    },
    {
      title: "Product Photography",
      shortDesc: "Professional product images for listings",
      detail:
        "High-quality product photography on white background, lifestyle shots, and infographic images optimized for marketplace listings.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
      color: "blue",
      isFree: false,
    },
    {
      title: "AI Product Images",
      shortDesc: "AI-generated professional product visuals",
      detail:
        "Leverage AI technology to create stunning product images, background removal, lifestyle mockups, and A+ content visuals.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
      color: "indigo",
      isFree: false,
    },
    {
      title: "Product Metadata",
      shortDesc: "Titles, descriptions & keyword optimization",
      detail:
        "SEO-optimized product titles, bullet points, descriptions, and backend keywords to maximize your product visibility and search ranking.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>`,
      color: "emerald",
      isFree: false,
    },
    {
      title: "AI Content Writing",
      shortDesc: "AI-powered product descriptions & content",
      detail:
        "Use AI to generate compelling product descriptions, bullet points, and A+ content that converts browsers into buyers.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      color: "amber",
      isFree: true,
    },
    {
      title: "Quality Check",
      shortDesc: "Product quality verification & compliance",
      detail:
        "Ensure your products meet marketplace quality standards and compliance requirements before listing.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      color: "green",
      isFree: false,
    },
  ],
  marketplace: [
    {
      title: "Marketplace Onboarding",
      shortDesc: "Account setup on all major platforms",
      detail:
        "Complete seller account creation and verification on Amazon, Flipkart, Meesho, JioMart, and ONDC marketplaces.",
      platforms: ["Amazon", "Flipkart", "Meesho", "JioMart"],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
      color: "blue",
      isFree: false,
    },
    {
      title: "Khulega.online Listing",
      shortDesc: "List products on our own marketplace",
      detail:
        "Get your products listed on Khulega.online powered by ONDC network, reaching customers across India.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      color: "indigo",
      isFree: false,
    },
    {
      title: "Product Listing",
      shortDesc: "Upload & list products across platforms",
      detail:
        "Bulk product listing with optimized content across all connected marketplaces from one dashboard.",
      platforms: ["Amazon", "Flipkart", "Meesho", "JioMart"],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
      color: "emerald",
      isFree: false,
    },
    {
      title: "Pricing Strategy",
      shortDesc: "Competitive pricing across marketplaces",
      detail:
        "Data-driven pricing recommendations considering marketplace fees, competition, and profit margins.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      color: "amber",
      isFree: false,
    },
    {
      title: "Seller Training",
      shortDesc: "Learn to manage your online business",
      detail:
        "Comprehensive training on dashboard usage, order management, inventory handling, and marketplace best practices.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
      color: "violet",
      isFree: false,
    },
  ],
  operations: [
    {
      title: "Order Management",
      shortDesc: "Unified order tracking across platforms",
      detail:
        "Track, process, and fulfill orders from all marketplaces in one dashboard. Never miss an order again.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      color: "blue",
      isFree: true,
    },
    {
      title: "Inventory Management",
      shortDesc: "Real-time stock sync across marketplaces",
      detail:
        "Automated inventory synchronization to prevent overselling and stockouts across all connected platforms.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      color: "emerald",
      isFree: true,
    },
    {
      title: "Shipping & Logistics",
      shortDesc: "End-to-end shipping management",
      detail:
        "Integrated shipping solutions with label generation, tracking, and delivery management for all orders.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      color: "indigo",
      isFree: true,
    },
    {
      title: "Returns & Refunds",
      shortDesc: "Hassle-free return processing",
      detail:
        "Streamlined return management with automated refund processing and return analytics across platforms.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>`,
      color: "amber",
      isFree: true,
    },
    {
      title: "Settlement & Payments",
      shortDesc: "Track marketplace payments & settlements",
      detail:
        "Monitor your earnings, settlement cycles, deductions, and payment reconciliation across all marketplaces.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      color: "green",
      isFree: false,
    },
    {
      title: "Digital Marketing & Ads",
      shortDesc: "Boost visibility with targeted advertising",
      detail:
        "Marketplace ads management, social media marketing, and digital campaigns to drive traffic and increase sales.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
      color: "violet",
      isFree: true,
    },
    {
      title: "Reporting & Analytics",
      shortDesc: "Cross-marketplace performance insights",
      detail:
        "Consolidated sales reports, performance analytics, and business intelligence across all connected platforms.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
      color: "blue",
      isFree: false,
    },
    {
      title: "Marketplace Support",
      shortDesc: "Dedicated support for all platforms",
      detail:
        "Expert assistance for marketplace issues including account health, policy violations, and performance optimization.",
      platforms: ["Amazon", "Flipkart", "Meesho", "JioMart"],
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
      color: "emerald",
      isFree: true,
    },
  ],
};

/* ── Computed ── */
const activeServices = computed(
  () => allServices[activeCategory.value] || []
);

const progressWidth = computed(() => {
  const t = activeServices.value.length;
  return t === 0 ? 0 : ((currentIndex.value + 1) / t) * 100;
});

// How many side cards per side
const sideCount = computed(() => (winW.value >= 768 ? 4 : 2));

const totalVisible = computed(() => 1 + sideCount.value * 2);

// Layout dimensions
const dims = computed(() => {
  const w = winW.value;
  if (w >= 1400)
    return { cw: 520, ch: 390, sw: 140, sh: 180, gap: 20 };
  if (w >= 1200)
    return { cw: 480, ch: 370, sw: 130, sh: 170, gap: 18 };
  if (w >= 1024)
    return { cw: 420, ch: 350, sw: 120, sh: 160, gap: 16 };
  if (w >= 768)
    return { cw: 360, ch: 330, sw: 110, sh: 150, gap: 14 };
  if (w >= 480)
    return {
      cw: Math.min(w * 0.52, 290),
      ch: 280,
      sw: 68,
      sh: 92,
      gap: 10,
    };
  return {
    cw: Math.min(w * 0.55, 250),
    ch: 260,
    sw: 56,
    sh: 78,
    gap: 8,
  };
});

// Build visible slides array
const renderedSlides = computed(() => {
  const list = activeServices.value;
  const len = list.length;
  if (!len) return [];
  const half = sideCount.value;
  const out = [];
  for (let off = -half; off <= half; off++) {
    const idx = ((currentIndex.value + off) % len + len) % len;
    out.push({
      ...list[idx],
      uniqueKey: `${activeCategory.value}-${idx}-${off}-${currentIndex.value}`,
      originalIndex: idx,
      relPos: off,
    });
  }
  return out;
});

/* ── Slide style calculator ── */
function calcSlideStyle(relPos) {
  const d = dims.value;
  const abs = Math.abs(relPos);
  const sc = sideCount.value;

  if (relPos === 0) {
    return {
      width: d.cw + "px",
      height: d.ch + "px",
      transform: "translate(-50%,-50%) scale(1)",
      opacity: "1",
      zIndex: 20,
      cursor: "default",
      filter: "none",
    };
  }

  // Offset: half center + gap + half small for pos1, then (small+gap) per step
  const base = d.cw / 2 + d.gap + d.sw / 2;
  const step = d.sw + d.gap;
  const px = (relPos > 0 ? 1 : -1) * (base + (abs - 1) * step);

  // Opacity fades from 0.85 → 0.2
  const opRange = 0.65;
  const op = Math.max(0.2, 0.85 - ((abs - 1) / Math.max(1, sc - 1)) * opRange);

  // Scale fades from 0.92 → 0.7
  const scRange = 0.22;
  const s = Math.max(0.7, 0.92 - ((abs - 1) / Math.max(1, sc - 1)) * scRange);

  const blur = abs >= sc ? 1.5 : abs >= sc - 1 ? 0.5 : 0;

  return {
    width: d.sw + "px",
    height: d.sh + "px",
    transform: `translate(calc(-50% + ${px}px),-50%) scale(${s})`,
    opacity: String(op),
    zIndex: String(20 - abs),
    cursor: "pointer",
    filter: blur ? `blur(${blur}px)` : "none",
  };
}

/* ── Interaction ── */
function onSlideClick(relPos, origIdx) {
  if (relPos === 0 || isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = origIdx;
  resetAuto();
  setTimeout(() => (isTransitioning.value = false), 500);
}

function next() {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  const len = activeServices.value.length;
  currentIndex.value = (currentIndex.value + 1) % len;
  resetAuto();
  setTimeout(() => (isTransitioning.value = false), 500);
}

function goTo(idx) {
  if (isTransitioning.value || idx === currentIndex.value) return;
  isTransitioning.value = true;
  currentIndex.value = idx;
  resetAuto();
  setTimeout(() => (isTransitioning.value = false), 500);
}

function setCategory(id) {
  activeCategory.value = id;
  currentIndex.value = 0;
  resetAuto();
}

function startAuto() {
  stopAuto();
  autoTimer = setInterval(() => {
    if (!isPaused) next();
  }, AUTO_INTERVAL);
}
function stopAuto() {
  if (autoTimer) clearInterval(autoTimer);
}
function resetAuto() {
  stopAuto();
  startAuto();
}
function pauseAuto() {
  isPaused = true;
}
function resumeAuto() {
  isPaused = false;
}

/* ── Touch / Swipe ── */
let tx0 = 0;
let tx1 = 0;
let touching = false;

function onTouchStart(e) {
  tx0 = e.changedTouches[0].clientX;
  tx1 = tx0;
  touching = true;
  pauseAuto();
}

function onTouchMove(e) {
  if (!touching) return;
  tx1 = e.changedTouches[0].clientX;
}

function onTouchEnd() {
  if (!touching) return;
  touching = false;
  const diff = tx1 - tx0;
  if (Math.abs(diff) > 40) {
    if (isTransitioning.value) return;
    isTransitioning.value = true;
    const len = activeServices.value.length;
    if (diff < 0) {
      // swipe left → next
      currentIndex.value = (currentIndex.value + 1) % len;
    } else {
      // swipe right → prev
      currentIndex.value = (currentIndex.value - 1 + len) % len;
    }
    resetAuto();
    setTimeout(() => (isTransitioning.value = false), 500);
  }
  resumeAuto();
}

/* ── Resize ── */
function onResize() {
  winW.value = window.innerWidth;
}

/* ── Lifecycle ── */
onMounted(() => {
  winW.value = window.innerWidth;
  window.addEventListener("resize", onResize);

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        startAuto();
      }
    },
    { threshold: 0.06 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
  stopAuto();
  window.removeEventListener("resize", onResize);
});

watch(activeCategory, () => {
  currentIndex.value = 0;
});
</script>

<style>
/* ══════════════════════════════════════════════
   SERVICES — Full-Width Conveyor Belt
   ══════════════════════════════════════════════ */
.svc {
  padding: 100px 0 110px;
  background: linear-gradient(180deg, #fff 0%, #f7f8fc 100%);
  position: relative;
  overflow: hidden;
}
.svc::before {
  content: "";
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

.svc__inner {
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
  background: linear-gradient(135deg, #2563eb, #7c3aed);
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

/* ── Pills ── */
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
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
  transform: translateY(-1px);
}
.svc__pill--active:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}
.svc__pill--active svg {
  stroke: #fff;
}
.svc__pill-icon {
  display: flex;
  align-items: center;
}

/* ── Carousel wrap ── */
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

/* ── Carousel — full viewport ── */
.svc__carousel {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 430px;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}

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
  transition: all 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity, filter;
}

/* ── Small card ── */
.svc__sm {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #fff;
  border-radius: 16px;
  border: 1.5px solid #e8ecf2;
  padding: 18px 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.35s ease;
}

.svc__slide:not(.svc__slide--center):hover .svc__sm {
  border-color: #c7d0dd;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.09);
  transform: translateY(-3px);
}

.svc__sm-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ac-bg, #eff6ff);
  flex-shrink: 0;
}
.svc__sm-icon svg {
  stroke: var(--ac, #2563eb);
  width: 22px;
  height: 22px;
}

.svc__sm-title {
  font-size: 13px;
  font-weight: 700;
  color: #334155;
  text-align: center;
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.svc__sm-free {
  padding: 2px 10px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 700;
  background: #dcfce7;
  color: #15803d;
  border: 1px solid #86efac;
}

/* ── Center: swap cards ── */
.svc__slide--center .svc__sm {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.8);
}
.svc__slide:not(.svc__slide--center) .svc__lg {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.85);
}

/* ── Big card ── */
.svc__lg {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 24px;
  border: 1.5px solid #e2e6ef;
  padding: 36px 40px;
  opacity: 0;
  transform: scale(0.92);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}
.svc__slide--center .svc__lg {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.svc__lg-top {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 20px;
}
.svc__lg-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ac-bg, #eff6ff);
  border: 1px solid var(--ac-bd, #bfdbfe);
  flex-shrink: 0;
}
.svc__lg-icon svg {
  stroke: var(--ac, #2563eb);
  width: 28px;
  height: 28px;
}

.svc__lg-meta {
  flex: 1;
  min-width: 0;
}
.svc__lg-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 6px;
  line-height: 1.2;
}
.svc__lg-sub {
  font-size: 15px;
  color: #64748b;
  margin: 0;
  font-weight: 500;
  line-height: 1.4;
}

.svc__lg-detail {
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  margin: 0 0 20px;
  padding-top: 18px;
  border-top: 1px solid #f1f5f9;
  flex: 1;
}

.svc__lg-platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}
.svc__lg-tag {
  padding: 4px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}

.svc__lg-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
}
.svc__lg-free {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: #16a34a;
}
.svc__lg-paid {
  font-size: 14px;
  font-weight: 600;
  color: #94a3b8;
}
.svc__lg-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #2563eb;
  cursor: pointer;
  transition: gap 0.2s;
  text-decoration: none;
}
.svc__lg-link:hover {
  gap: 8px;
}

/* ── Dots ── */
.svc__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 36px;
}
.svc__dot {
  width: 8px;
  height: 8px;
  border-radius: 100px;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}
.svc__dot--active {
  width: 36px;
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
.svc__counter-now {
  color: #2563eb;
  font-size: 16px;
  font-weight: 800;
}
.svc__counter-div {
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
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
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
  content: "";
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
  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.4), 0 2px 6px rgba(0, 0, 0, 0.08);
}
.svc__cta-btn:active {
  transform: translateY(0) scale(0.98);
}
.svc__cta-btn svg {
  transition: transform 0.3s;
}
.svc__cta-btn:hover svg {
  transform: translateX(3px);
}

/* ══════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════ */
@media (max-width: 1023px) {
  .svc__heading {
    font-size: 36px;
  }
  .svc__carousel {
    height: 390px;
  }
}

@media (max-width: 767px) {
  .svc {
    padding: 56px 0 64px;
  }
  .svc__inner {
    padding: 0 14px;
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
    height: 320px;
  }

  /* Small card mobile */
  .svc__sm {
    padding: 10px 8px;
    gap: 6px;
    border-radius: 12px;
  }
  .svc__sm-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }
  .svc__sm-icon svg {
    width: 15px;
    height: 15px;
  }
  .svc__sm-title {
    font-size: 9px;
  }
  .svc__sm-free {
    font-size: 7px;
    padding: 1px 6px;
  }

  /* Big card mobile */
  .svc__lg {
    padding: 18px 16px;
    border-radius: 16px;
  }
  .svc__lg-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .svc__lg-icon svg {
    width: 18px;
    height: 18px;
  }
  .svc__lg-top {
    gap: 10px;
    margin-bottom: 10px;
  }
  .svc__lg-title {
    font-size: 15px;
  }
  .svc__lg-sub {
    font-size: 11px;
  }
  .svc__lg-detail {
    font-size: 11px;
    line-height: 1.5;
    margin-bottom: 10px;
    padding-top: 10px;
  }
  .svc__lg-foot {
    padding-top: 10px;
  }
  .svc__lg-free,
  .svc__lg-paid {
    font-size: 10px;
  }
  .svc__lg-link {
    font-size: 10px;
  }
  .svc__lg-tag {
    font-size: 9px;
    padding: 2px 8px;
  }
  .svc__lg-platforms {
    margin-bottom: 8px;
    gap: 4px;
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
  .svc__counter-now {
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

@media (max-width: 374px) {
  .svc__heading {
    font-size: 22px;
  }
  .svc__carousel {
    height: 300px;
  }
  .svc__pill {
    padding: 7px 12px;
    font-size: 11px;
  }
  .svc__lg {
    padding: 14px 12px;
  }
  .svc__lg-title {
    font-size: 13px;
  }
  .svc__lg-sub {
    font-size: 10px;
  }
  .svc__lg-detail {
    font-size: 10px;
  }
}
</style>