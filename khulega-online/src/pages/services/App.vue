<template>
  <div class="page page--services">
    <AppHeader />

    <main class="main">
      <HeroSection
        :badge="t('hero.badge')"
        :title="t('hero.title')"
        :highlightText="t('hero.highlightText')"
        :subtitle="t('hero.subtitle')"
        :breadcrumb="t('hero.breadcrumb')"
      />

      <!-- Services Intro -->
      <section class="services-intro">
        <div class="services-intro__container">
          <div class="services-intro__content">
            <p class="services-intro__text">
              {{ t('intro.text') }}
              <strong>{{ t('intro.textBold') }}</strong>.
              {{ t('intro.textEnd') }}
              <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>.
            </p>
            <div class="services-intro__tags">
              <span v-for="(tag, i) in t('intro.tags')" :key="i" class="services-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 1 — Compliance Services -->
      <!-- ============================================ -->
      <section class="svc-section svc-section--compliance" id="compliance">
        <div class="svc-section__container">

          <!-- Section Header -->
          <div class="svc-section__header">
            <div class="svc-section__badge svc-section__badge--blue">
              <span class="svc-section__badge-number">01</span>
              <span class="svc-section__badge-label">{{ t('compliance.badgeLabel') }}</span>
            </div>
            <h2 class="svc-section__title">{{ t('compliance.title') }}</h2>
            <p class="svc-section__subtitle">
              {{ t('compliance.subtitle') }}
            </p>
          </div>

          <!-- Service Cards + Pricing Table Layout -->
          <div class="svc-section__body">

            <!-- Left: Service Detail Cards -->
            <div class="svc-cards">
              <div v-for="(card, i) in t('compliance.cards')" :key="i" class="svc-card">
                <div class="svc-card__icon svc-card__icon--blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 9v4"/><path d="M12 17h.01"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">{{ card.title }}</h3>
                  <p class="svc-card__text">{{ card.text }}</p>
                </div>
              </div>
            </div>

            <!-- Right: Pricing Table -->
            <div class="svc-pricing">
              <div class="svc-pricing__header">
                <h3 class="svc-pricing__title">{{ t('compliance.pricingTitle') }}</h3>
                <span class="svc-pricing__type">{{ t('compliance.pricingType') }}</span>
              </div>
              <div class="svc-pricing__table-wrap">
                <table class="svc-pricing__table">
                  <thead>
                    <tr>
                      <th>{{ t('compliance.tableService') }}</th>
                      <th>{{ t('compliance.tableFee') }}</th>
                      <th>{{ t('compliance.tableDiscounted') }}</th>
                      <th>{{ t('compliance.tableValidUntil') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in t('compliance.rows')" :key="i">
                      <td>{{ row.service }}<span v-if="row.note" class="svc-pricing__note"> ({{ row.note }})</span></td>
                      <td><span class="svc-pricing__original">{{ compliancePrices[i].fee }}</span></td>
                      <td><span class="svc-pricing__discounted">{{ compliancePrices[i].discounted }}</span></td>
                      <td><span class="svc-pricing__validity">{{ compliancePrices[i].validity }}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="svc-pricing__footer">
                <div class="svc-pricing__highlights">
                  <span v-for="(h, i) in t('compliance.highlights')" :key="i" class="svc-pricing__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ h }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 2 — Subscription Services -->
      <!-- ============================================ -->
      <section class="svc-section svc-section--subscription" id="subscription">
        <div class="svc-section__container">

          <div class="svc-section__header">
            <div class="svc-section__badge svc-section__badge--purple">
              <span class="svc-section__badge-number">02</span>
              <span class="svc-section__badge-label">{{ t('subscription.badgeLabel') }}</span>
            </div>
            <h2 class="svc-section__title">{{ t('subscription.title') }}</h2>
            <p class="svc-section__subtitle">
              {{ t('subscription.subtitle') }}
            </p>
          </div>

          <!-- Subscription Packs -->
          <div class="svc-packs">

            <div v-for="(pack, i) in t('subscription.packs')" :key="i" class="svc-pack" :class="{ 'svc-pack--featured': i === 1 }">
              <div v-if="i === 1" class="svc-pack__ribbon">{{ t('subscription.mostPopular') }}</div>
              <div class="svc-pack__header" :class="['svc-pack__header--indigo', 'svc-pack__header--blue', 'svc-pack__header--emerald'][i]">
                <div class="svc-pack__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <h3 class="svc-pack__title">{{ pack.title }}</h3>
                <p class="svc-pack__desc">{{ pack.desc }}</p>
              </div>
              <div class="svc-pack__body">
                <div class="svc-pack__price">
                  <span class="svc-pack__price-original">{{ ['₹299', '₹599', '₹999'][i] }}</span>
                  <span class="svc-pack__price-current">{{ ['₹149', '₹299', '₹499'][i] }}</span>
                  <span class="svc-pack__price-period">{{ t('subscription.perMonth') }}</span>
                </div>
                <ul class="svc-pack__features">
                  <li v-for="(feat, j) in pack.features" :key="j">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ feat }}
                  </li>
                </ul>
                <div class="svc-pack__ideal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  {{ pack.ideal }}
                </div>
                <div class="svc-pack__validity">{{ t('subscription.validity') }}</div>
              </div>
            </div>

          </div>

          <!-- Subscription Highlights -->
          <div class="svc-section__bottom-highlights">
            <span v-for="(tag, i) in t('subscription.bottomTags')" :key="i" class="svc-section__bottom-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              {{ tag }}
            </span>
          </div>

        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 3 — Product Services -->
      <!-- ============================================ -->
      <section class="svc-section svc-section--product" id="product">
        <div class="svc-section__container">

          <div class="svc-section__header">
            <div class="svc-section__badge svc-section__badge--emerald">
              <span class="svc-section__badge-number">03</span>
              <span class="svc-section__badge-label">{{ t('product.badgeLabel') }}</span>
            </div>
            <h2 class="svc-section__title">{{ t('product.title') }}</h2>
            <p class="svc-section__subtitle">
              {{ t('product.subtitle') }}
            </p>
          </div>

          <div class="svc-section__body">

            <div class="svc-cards">
              <div v-for="(card, i) in t('product.cards')" :key="i" class="svc-card">
                <div class="svc-card__icon svc-card__icon--emerald">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">{{ card.title }}</h3>
                  <p class="svc-card__text">{{ card.text }}</p>
                </div>
              </div>
            </div>

            <div class="svc-pricing">
              <div class="svc-pricing__header svc-pricing__header--emerald">
                <h3 class="svc-pricing__title">{{ t('product.pricingTitle') }}</h3>
                <span class="svc-pricing__type">{{ t('product.pricingType') }}</span>
              </div>
              <div class="svc-pricing__table-wrap">
                <table class="svc-pricing__table">
                  <thead>
                    <tr>
                      <th>{{ t('compliance.tableService') }}</th>
                      <th>{{ t('compliance.tableFee') }}</th>
                      <th>{{ t('compliance.tableDiscounted') }}</th>
                      <th>{{ t('compliance.tableValidUntil') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in t('product.rows')" :key="i">
                      <td>{{ row.service }}<span v-if="row.note" class="svc-pricing__note"> ({{ row.note }})</span></td>
                      <td><span class="svc-pricing__original">{{ productPrices[i].fee }}</span></td>
                      <td><span class="svc-pricing__discounted">{{ productPrices[i].discounted }}</span></td>
                      <td><span class="svc-pricing__validity">{{ productPrices[i].validity }}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="svc-pricing__footer">
                <div class="svc-pricing__highlights">
                  <span v-for="(h, i) in t('product.highlights')" :key="i" class="svc-pricing__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ h }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 4 — Advisory Services -->
      <!-- ============================================ -->
      <section class="svc-section svc-section--advisory" id="advisory">
        <div class="svc-section__container">

          <div class="svc-section__header">
            <div class="svc-section__badge svc-section__badge--amber">
              <span class="svc-section__badge-number">04</span>
              <span class="svc-section__badge-label">{{ t('advisory.badgeLabel') }}</span>
            </div>
            <h2 class="svc-section__title">{{ t('advisory.title') }}</h2>
            <p class="svc-section__subtitle">
              {{ t('advisory.subtitle') }}
            </p>
          </div>

          <div class="svc-advisory-grid">

            <div v-for="(card, i) in t('advisory.cards')" :key="i" class="svc-advisory-card">
              <div class="svc-advisory-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 class="svc-advisory-card__title">{{ card.title }}</h3>
              <p class="svc-advisory-card__text">
                {{ card.text }}
              </p>
              <div class="svc-advisory-card__price">
                <span class="svc-advisory-card__original">₹59</span>
                <span class="svc-advisory-card__discounted">₹29</span>
                <span class="svc-advisory-card__label">{{ card.label }}</span>
              </div>
              <div class="svc-advisory-card__validity">{{ t('advisory.validity') }}</div>
            </div>

          </div>

          <div class="svc-section__bottom-highlights">
            <span v-for="(tag, i) in t('advisory.bottomTags')" :key="i" class="svc-section__bottom-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              {{ tag }}
            </span>
          </div>

        </div>
      </section>

      <!-- ============================================ -->
      <!-- WHY CHOOSE US -->
      <!-- ============================================ -->
      <section class="svc-why" id="why-choose">
        <div class="svc-why__container">
          <div class="svc-why__header">
            <h2 class="svc-why__title">{{ t('why.title') }}</h2>
            <p class="svc-why__subtitle">{{ t('why.subtitle') }}</p>
          </div>
          <div class="svc-why__grid">
            <div v-for="(item, i) in t('why.items')" :key="i" class="svc-why__item">
              <div class="svc-why__item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h4 class="svc-why__item-title">{{ item.title }}</h4>
              <p class="svc-why__item-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- TRANSPARENT PRICING NOTE -->
      <!-- ============================================ -->
      <section class="svc-note">
        <div class="svc-note__container">
          <div class="svc-note__content">
            <div class="svc-note__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </div>
            <div class="svc-note__text">
              <h4 class="svc-note__title">{{ t('note.title') }}</h4>
              <p class="svc-note__desc">
                {{ t('note.desc') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- CTA SECTION -->
      <!-- ============================================ -->
      <section class="svc-cta">
        <div class="svc-cta__container">
          <div class="svc-cta__content">
            <div class="svc-cta__icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h2 class="svc-cta__title">{{ t('cta.title') }}</h2>
            <p class="svc-cta__text">
              {{ t('cta.text') }}
              <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>
              {{ t('cta.textEnd') }}
            </p>
            <div class="svc-cta__actions">
              <a href="https://usc.khulega.online/auth/register" target="_blank" rel="noopener" class="svc-cta__btn svc-cta__btn--primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                {{ t('cta.registerNow') }}
              </a>
              <a href="/contact/" class="svc-cta__btn svc-cta__btn--secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {{ t('cta.contactUs') }}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('services')

const compliancePrices = [
  { fee: '₹89', discounted: '₹49', validity: '31 Dec 2026' },
  { fee: '₹89', discounted: '₹49', validity: '31 Dec 2026' },
  { fee: '₹99', discounted: '₹49', validity: '31 Dec 2026' },
  { fee: '₹499', discounted: '₹249', validity: '31 Dec 2026' },
  { fee: '₹999', discounted: '₹899', validity: '31 Dec 2026' }
]
const productPrices = [
  { fee: '₹39', discounted: '₹20', validity: '31 Dec 2026' },
  { fee: '₹49', discounted: '₹25', validity: '31 Dec 2026' },
  { fee: '₹399', discounted: '₹199', validity: '31 Dec 2026' }
]
</script>