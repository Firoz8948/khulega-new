<template>
  <section class="cap" ref="sectionRef">
    <div class="cap__inner">
      <!-- ── Header ── -->
      <header class="cap__header" :class="{ 'cap__header--in': isVisible }">
        <span class="cap__badge">Capacity Building</span>
        <h2 class="cap__heading">
          Learn, Upskill &amp;
          <span class="cap__heading-em">Grow Your Business</span>
        </h2>
        <p class="cap__intro">
          Hands-on training programs and workshops that help sellers master multi-marketplace
          operations, cataloguing, compliance, and growth strategies.
        </p>
      </header>

      <!-- ── Content Grid ── -->
      <div class="cap__grid" :class="{ 'cap__grid--in': isVisible }">
        <!-- Left: Image Gallery -->
        <div class="cap__gallery">
          <div class="cap__gallery-main">
            <img :src="activeImage" alt="Capacity building training" class="cap__gallery-img" />
            <span class="cap__gallery-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Live & Recorded Sessions
            </span>
          </div>
          <div class="cap__gallery-thumbs">
            <button
              v-for="(img, i) in gallery"
              :key="i"
              class="cap__thumb"
              :class="{ 'cap__thumb--active': activeImage === img }"
              @click="activeImage = img"
              type="button"
              aria-label="View image"
            >
              <img :src="img" alt="Training preview" class="cap__thumb-img" />
            </button>
          </div>
        </div>

        <!-- Right: Details + CTA -->
        <div class="cap__content">
          <h3 class="cap__content-title">Structured Training for Every Seller</h3>
          <p class="cap__content-text">
            From your first listing to scaling across platforms, our capacity building program
            covers everything you need with expert-led sessions and practical resources.
          </p>

          <ul class="cap__features">
            <li v-for="(feat, i) in features" :key="i" class="cap__feature">
              <span class="cap__feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <p class="cap__feature-title">{{ feat.title }}</p>
                <p class="cap__feature-desc">{{ feat.desc }}</p>
              </div>
            </li>
          </ul>

          <a href="/capacity-building/" class="cap__cta">
            <span>Explore Capacity Building</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const gallery = [
  '/assets/images/cp-building/cp_building_1.webp',
  '/assets/images/cp-building/cp-building_2.webp',
  '/assets/images/cp-building/cp_building_3.webp',
]

const activeImage = ref(gallery[0])

const features = [
  { title: 'Marketplace Onboarding', desc: 'Step-by-step guidance to set up and verify your seller accounts.' },
  { title: 'Cataloguing & Listing', desc: 'Create high-converting, marketplace-compliant product listings.' },
  { title: 'Compliance & Documentation', desc: 'Understand GST, FSSAI, trademark, and other requirements.' },
  { title: 'Growth & Advertising', desc: 'Strategies to increase visibility, sales, and customer trust.' },
]

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) isVisible.value = true
    },
    { threshold: 0.12 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style>
/* ══════════════════════════════════════════════
   CAPACITY BUILDING
   ══════════════════════════════════════════════ */
.cap {
  padding: 100px 0 110px;
  background: #eff6ff;
  border-top: 1px solid rgba(37, 99, 235, 0.08);
  border-bottom: 1px solid rgba(37, 99, 235, 0.08);
  position: relative;
  overflow: hidden;
}
.cap::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 90% 20%, rgba(124, 58, 237, 0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 10% 80%, rgba(37, 99, 235, 0.04) 0%, transparent 50%);
  pointer-events: none;
}

.cap__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

/* ── Header ── */
.cap__header {
  text-align: center;
  margin-bottom: 56px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.cap__header--in {
  opacity: 1;
  transform: translateY(0);
}

.cap__badge {
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

.cap__heading {
  font-size: 44px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.18;
  margin: 0 0 16px;
  letter-spacing: -0.025em;
}
.cap__heading-em {
  display: block;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cap__intro {
  font-size: 17px;
  line-height: 1.65;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

/* ── Grid ── */
.cap__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
}
.cap__grid--in {
  opacity: 1;
  transform: translateY(0);
}

/* ── Gallery ── */
.cap__gallery-main {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
  background: #eef2ff;
}
.cap__gallery-img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
.cap__gallery-tag {
  position: absolute;
  bottom: 14px;
  left: 14px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 100px;
  font-size: 12.5px;
  font-weight: 600;
  color: #fff;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(6px);
}

.cap__gallery-thumbs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 14px;
}
.cap__thumb {
  padding: 0;
  border: 2px solid transparent;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #eef2ff;
  transition: border-color 0.25s ease, transform 0.25s ease;
}
.cap__thumb:hover {
  transform: translateY(-2px);
}
.cap__thumb--active {
  border-color: #2563eb;
}
.cap__thumb-img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

/* ── Content ── */
.cap__content-title {
  font-size: 26px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}
.cap__content-text {
  font-size: 15.5px;
  line-height: 1.7;
  color: #64748b;
  margin: 0 0 24px;
}

.cap__features {
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.cap__feature {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.cap__feature-icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.1);
  margin-top: 2px;
}
.cap__feature-title {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 2px;
}
.cap__feature-desc {
  font-size: 13.5px;
  line-height: 1.55;
  color: #64748b;
  margin: 0;
}

/* ── CTA ── */
.cap__cta {
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
.cap__cta::before {
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
.cap__cta:hover::before {
  transform: translateX(100%);
}
.cap__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.4), 0 2px 6px rgba(0, 0, 0, 0.08);
}
.cap__cta:active {
  transform: translateY(0) scale(0.98);
}
.cap__cta svg {
  transition: transform 0.3s;
}
.cap__cta:hover svg {
  transform: translateX(3px);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .cap__grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 767px) {
  .cap {
    padding: 56px 0 64px;
  }
  .cap__inner {
    padding: 0 14px;
  }
  .cap__header {
    margin-bottom: 32px;
  }
  .cap__heading {
    font-size: 26px;
  }
  .cap__heading-em {
    display: inline;
  }
  .cap__intro {
    font-size: 14px;
    max-width: 360px;
  }
  .cap__badge {
    font-size: 11px;
    padding: 5px 14px;
    margin-bottom: 14px;
  }
  .cap__content-title {
    font-size: 22px;
  }
  .cap__cta {
    display: flex;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    justify-content: center;
    padding: 14px 28px;
    font-size: 15px;
    border-radius: 12px;
  }
}
</style>
