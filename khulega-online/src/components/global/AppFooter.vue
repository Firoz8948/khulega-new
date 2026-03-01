<template>
  <footer class="footer">
    <!-- Main Footer Content -->
    <div class="footer__main">
      <div class="footer__container">
        <!-- Column 1: Brand -->
        <div class="footer__col footer__col--brand">
          <a href="/" class="footer__logo" aria-label="Khulega.online">
            <img
              :src="'/assets/images/khulega_logo.png'"
              alt="Khulega"
              class="footer__logo-img"
            />
          </a>
          <p class="footer__description">{{ t('footer.description') }}</p>
          <div class="footer__social">
            <a
              href="https://www.facebook.com/techsandhya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/techsandhya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="footer__social-link"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/techsandhya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/919226697740"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              class="footer__social-link footer__social-link--whatsapp"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </a>
            <a
              href="mailto:admin@techsandhya.com"
              aria-label="Email"
              class="footer__social-link"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </a>
            <a
              href="tel:+919226697740"
              aria-label="Phone"
              class="footer__social-link"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Become a Seller -->
        <div class="footer__col">
          <h4 class="footer__title">
            <span class="footer__title-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            {{ t('sidebar.becomeASeller') }}
          </h4>
          <ul class="footer__list">
            <li>
              <a
                href="https://usc.khulega.online/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.sellerRegistration') }}</a
              >
            </li>
            <li>
              <a
                href="https://usc.khulega.online/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.sellerLogin') }}</a
              >
            </li>
            <li>
              <a href="/services/" class="footer__link">{{ t('sidebar.sellerServices') }}</a>
            </li>
            <li>
              <a href="/user-journey/" class="footer__link">{{ t('sidebar.userJourney') }}</a>
            </li>
            <li>
              <a href="/contact/" class="footer__link">{{ t('sidebar.sellerSupport') }}</a>
            </li>
            <li>
              <a href="/seller-guidelines/" class="footer__link">{{ t('sidebar.sellerGuidelines') }}</a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Career -->
        <div class="footer__col">
          <h4 class="footer__title">
            <span class="footer__title-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
            </span>
            {{ t('sidebar.career') }}
          </h4>
          <ul class="footer__list">
            <li>
              <a href="/apply-job/" class="footer__link">{{ t('nav.applyJob') }}</a>
            </li>
          </ul>

          <h4 class="footer__title footer__title--sub">
            <span class="footer__title-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            {{ t('sidebar.customer') }}
          </h4>
          <ul class="footer__list">
            <li>
              <a
                href="https://milega.online"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.signIn') }}</a
              >
            </li>
            <li>
              <a
                href="https://milega.online"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.register') }}</a
              >
            </li>
            <li>
              <a
                href="https://milega.online"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.myOrders') }}</a
              >
            </li>
            <li>
              <a
                href="https://milega.online"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.wishlist') }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Column 4: Shop Now -->
        <div class="footer__col">
          <h4 class="footer__title">
            <span class="footer__title-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
            </span>
            {{ t('sidebar.shopNow') }}
          </h4>
          <ul class="footer__list">
            <li>
              <a
                href="https://milega.online"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.categories') }}</a
              >
            </li>
            <li>
              <a
                href="https://milega.online"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.dealsAndOffers') }}</a
              >
            </li>
            <li>
              <a
                href="https://milega.online"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >{{ t('sidebar.customerSupport') }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Column 5: Quick Links -->
        <div class="footer__col">
          <h4 class="footer__title">
            <span class="footer__title-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </span>
            {{ t('footer.quickLinks') }}
          </h4>
          <ul class="footer__list">
            <li>
              <a
                href="https://techsandhya.com"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link footer__link--about"
                ><span class="footer__link-default">{{ t('sidebar.aboutUs') }}</span><span class="footer__link-hover">{{ t('sidebar.techsandhya') }}</span></a
              >
            </li>
            <li>
              <a href="/policy/" class="footer__link">{{ t('sidebar.privacyPolicy') }}</a>
            </li>
            <li>
              <a href="/terms/" class="footer__link">{{ t('sidebar.termsAndConditions') }}</a>
            </li>
            <li>
              <a href="/contact/" class="footer__link">{{ t('sidebar.contactUs') }}</a>
            </li>
          </ul>

          <!-- Contact Info -->
          <div class="footer__contact-info">
            <a class="footer__contact-item" href="mailto:admin@techsandhya.com">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              admin@techsandhya.com
            </a>
            <a class="footer__contact-item" href="tel:+919226697740">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                />
              </svg>
              +91-9226697740
            </a>
            <a
              class="footer__contact-item"
              href="https://wa.me/919226697740"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              {{ t('footer.whatsappUs') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer__bottom">
      <div class="footer__bottom-inner">
        <p class="footer__bottom-left">
          {{ t('footer.copyright', { year: currentYear }) }}
        </p>
        <p class="footer__bottom-right">
          {{ t('footer.productOf') }}
          <strong>Sandhya Technology Solutions and Operations LLP.</strong>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>