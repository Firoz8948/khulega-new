<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div
      v-if="isSidebarOpen"
      class="sidebar-overlay"
      @click="closeSidebar"
      @touchmove.prevent
      @wheel.prevent
    ></div>
  </Transition>

  <!-- Sidebar -->
  <Transition name="slide">
    <aside v-if="isSidebarOpen" class="sidebar">
      <!-- Sidebar Header -->
      <div class="sidebar__header">
        <!-- Close button -->
        <button
          class="sidebar__close"
          @click="closeSidebar"
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <!-- Sell On heading -->
        <p class="sidebar__sell-label">Sell On</p>

        <!-- Floating brand cards -->
        <div class="sidebar__brands">
          <div
            v-for="(brand, i) in brands"
            :key="brand.key"
            class="sidebar__brand-card"
            :style="{ '--i': i }"
          >
            <template v-if="brand.logo">
              <img
                :src="brand.logo"
                :alt="brand.name"
                class="sidebar__brand-img"
              />
              <span class="sidebar__brand-name">{{ brand.name }}</span>
            </template>
            <span v-else class="sidebar__brand-more">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              More
            </span>
          </div>
        </div>
      </div>

      <!-- Scrollable Menu Area -->
      <div class="sidebar__body">
        <!-- SELLER Section -->
        <div class="sidebar__section">
          <h3 class="sidebar__section-title">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            {{ t('sidebar.becomeASeller') }}
          </h3>
          <nav class="sidebar__nav">
            <a
              href="https://usc.khulega.online/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              {{ t('sidebar.sellerRegistration') }}
            </a>
            <a
              href="https://usc.khulega.online/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              {{ t('sidebar.sellerLogin') }}
            </a>
            <a href="/services/" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                <line x1="12" y1="9" x2="18" y2="9"/>
                <line x1="12" y1="13" x2="18" y2="13"/>
              </svg>
              {{ t('sidebar.sellerServices') }}
            </a>
            <a href="/user-journey/" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {{ t('sidebar.userJourney') }}
            </a>
            <a href="/contact/" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197"/>
              </svg>
              {{ t('sidebar.sellerSupport') }}
            </a>
            <a href="/seller-guidelines/" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              {{ t('sidebar.sellerGuidelines') }}
            </a>
          </nav>
        </div>

        <!-- Divider -->
        <div class="sidebar__divider"></div>

        <!-- CAREER Section -->
        <div class="sidebar__section">
          <h3 class="sidebar__section-title">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            {{ t('sidebar.career') }}
          </h3>
          <nav class="sidebar__nav">
            <a href="/apply-job/" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              {{ t('nav.applyJob') }}
            </a>
          </nav>
        </div>

        <!-- Divider -->
        <div class="sidebar__divider"></div>

        <!-- CUSTOMER Section -->
        <div class="sidebar__section">
          <h3 class="sidebar__section-title">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            {{ t('sidebar.customer') }}
          </h3>
          <nav class="sidebar__nav">
            <a
              href="https://milega.online"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              {{ t('sidebar.signIn') }}
            </a>
            <a
              href="https://milega.online"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              {{ t('sidebar.register') }}
            </a>
            <a
              href="https://milega.online"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              {{ t('sidebar.myOrders') }}
            </a>
            <a
              href="https://milega.online"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              {{ t('sidebar.wishlist') }}
            </a>
            <a href="https://milega.online" target="_blank" rel="noopener noreferrer" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
              </svg>
              {{ t('sidebar.shopNow') }}
            </a>
            <a
              href="https://milega.online"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
              {{ t('sidebar.categories') }}
            </a>
            <a
              href="https://milega.online"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"/>
                <rect x="2" y="7" width="20" height="5"/>
                <line x1="12" y1="22" x2="12" y2="7"/>
                <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
                <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
              </svg>
              {{ t('sidebar.dealsAndOffers') }}
            </a>
            <a
              href="https://milega.online"
              target="_blank"
              rel="noopener noreferrer"
              class="sidebar__link"
              @click="closeSidebar"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              {{ t('sidebar.customerSupport') }}
            </a>
          </nav>
        </div>

        <!-- Divider -->
        <div class="sidebar__divider"></div>

        <!-- QUICK LINKS Section -->
        <div class="sidebar__section">
          <h3 class="sidebar__section-title">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
            {{ t('sidebar.quickLinks') }}
          </h3>
          <nav class="sidebar__nav">
            <a href="https://techsandhya.com" target="_blank" rel="noopener noreferrer" class="sidebar__link sidebar__link--about" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <span class="sidebar__about-label sidebar__about-label--mobile">{{ t('sidebar.aboutUsTechsandhya') }}</span>
              <span class="sidebar__about-label sidebar__about-label--desktop">{{ t('sidebar.aboutUs') }}</span>
              <span class="sidebar__about-label sidebar__about-label--desktop-hover">{{ t('sidebar.techsandhya') }}</span>
            </a>
            <a href="/policy/" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              {{ t('sidebar.privacyPolicy') }}
            </a>
            <a href="/terms/" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              {{ t('sidebar.termsAndConditions') }}
            </a>
            <a href="/contact/" class="sidebar__link" @click="closeSidebar">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {{ t('sidebar.contactUs') }}
            </a>
          </nav>
        </div>
      </div>

      <!-- Sidebar Footer -->
      <div class="sidebar__footer">
        <div class="sidebar__social">
          <a
            href="https://www.facebook.com/techsandhya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="sidebar__social-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="sidebar__social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/techsandhya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="sidebar__social-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 23.5h4V7.5h-4v16zM8 7.5h3.8v2.2h.1c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1v9.9h-4v-8.8c0-2.1-.04-4.8-2.93-4.8-2.93 0-3.38 2.3-3.38 4.65v8.95h-4v-16z"/>
            </svg>
          </a>
          <a
            href="mailto:admin@techsandhya.com"
            aria-label="Email"
            class="sidebar__social-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M22 6l-10 7L2 6"/>
            </svg>
          </a>
          <a
            href="https://wa.me/919226697740"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            class="sidebar__social-link sidebar__social-link--whatsapp"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a
            href="tel:+919226697740"
            aria-label="Phone"
            class="sidebar__social-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
        </div>
        <p class="sidebar__copyright">© {{ currentYear }} Khulega.online</p>
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import { useSidebar } from '@composables/useSidebar.js'
import { useI18n } from '@/i18n/index.js'

const { isSidebarOpen, closeSidebar } = useSidebar()
const { t } = useI18n()
const currentYear = new Date().getFullYear()

/* ---- Brand cards shown in sidebar header ---- */
const brands = [
  { key: 'amazon',   name: 'Amazon',   logo: '/assets/images/brands/amazon.png'   },
  { key: 'flipkart', name: 'Flipkart', logo: '/assets/images/brands/flipkart.png' },
  { key: 'meesho',   name: 'Meesho',   logo: '/assets/images/brands/meesho.png'   },
  { key: 'ondc',     name: 'ONDC',     logo: '/assets/images/brands/ondc.png'     },
  { key: 'more',     name: 'More',     logo: null                                 },
]
</script>
