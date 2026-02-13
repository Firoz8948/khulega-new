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
        <a href="/services.html" class="footer__link">{{ t('nav.services') }}</a>
        <a href="/apply-job.html" class="footer__link">{{ t('nav.applyJob') }}</a>
        <a href="/user-journey.html" class="footer__link">{{ t('nav.userJourney') }}</a>
      </div>

      <!-- Column 3: Legal -->
      <div class="footer__col footer__col--legal">
        <h4 class="footer__title">{{ t('footer.legal') }}</h4>
        <a href="/policy.html" class="footer__link">{{ t('footer.privacyPolicy') }}</a>
        <a href="/terms.html" class="footer__link">{{ t('footer.termsConditions') }}</a>
      </div>

      <!-- Column 4: Contact -->
      <div class="footer__col footer__col--contact">
        <h4 class="footer__title">{{ t('footer.contactTitle') }}</h4>
        <p class="footer__text">{{ t('footer.email') }}</p>
        <p class="footer__text">{{ t('footer.phone') }}</p>
        <div class="footer__social">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">LI</a>
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
