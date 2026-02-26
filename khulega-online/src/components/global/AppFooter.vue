<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Column 1: Brand -->
      <div class="footer__col footer__col--brand">
        <a href="/" class="footer__logo" aria-label="Khulega.online">
          <img :src="'/assets/images/Khulega_logo.png'" alt="Khulega" class="footer__logo-img" />
        </a>
        <p class="footer__description">{{ t('footer.description') }}</p>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="footer__col footer__col--quick">
        <h4 class="footer__title">{{ t('footer.quickLinks') }}</h4>
        <a href="/" class="footer__link">{{ t('nav.home') }}</a>
        <a href="https://milega.online" target="_blank" rel="noopener noreferrer" class="footer__link">{{ t('nav.shop') }}</a>
        <a href="/services/" class="footer__link">{{ t('nav.services') }}</a>
        <a href="/apply-job/" class="footer__link">{{ t('nav.applyJob') }}</a>
        <a href="/user-journey/" class="footer__link">{{ t('nav.userJourney') }}</a>
      </div>

      <!-- Column 3: Legal -->
      <div class="footer__col footer__col--legal">
        <h4 class="footer__title">{{ t('footer.legal') }}</h4>
        <a href="/policy/" class="footer__link">{{ t('footer.privacyPolicy') }}</a>
        <a href="/terms/" class="footer__link">{{ t('footer.termsConditions') }}</a>
      </div>

      <!-- Column 4: Contact -->
      <div class="footer__col footer__col--contact">
        <h4 class="footer__title">{{ t('footer.contactTitle') }}</h4>
        <a class="footer__text" href="mailto:admin@techsandhya.com">admin@techsandhya.com</a>
        <a class="footer__text" href="tel:+919226697740">+91-9226697740</a>
        <div class="footer__social">
          <a
            href="https://www.facebook.com/techsandhya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
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
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 23.5h4V7.5h-4v16zM8 7.5h3.8v2.2h.1c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1v9.9h-4v-8.8c0-2.1-.04-4.8-2.93-4.8-2.93 0-3.38 2.3-3.38 4.65v8.95h-4v-16z"/>
            </svg>
          </a>
          <a href="mailto:admin@techsandhya.com" aria-label="Email">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M22 6l-10 7L2 6"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__bottom-inner">
        <p class="footer__bottom-left">© {{ currentYear }} Khulega.online - All rights reserved.</p>
        <p class="footer__bottom-right">Sandhya Technology Solutions and Operations LLP. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>
