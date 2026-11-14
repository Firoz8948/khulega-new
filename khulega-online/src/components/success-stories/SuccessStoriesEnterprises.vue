<template>
  <section class="ss-enterprise" aria-labelledby="ss-enterprise-heading">
    <div class="ss-enterprise__inner">
      <header class="ss-enterprise__header">
        <span class="ss-showcase__eyebrow">ENTERPRISE IMPACT</span>
        <h2 id="ss-enterprise-heading" class="ss-enterprise__title">
          How established brands scale with confidence
        </h2>
        <h3 class="ss-enterprise__subtitle">Enterprises</h3>
        <p class="ss-enterprise__intro">
          Established businesses and brands working with TechSandhya.
        </p>
      </header>

      <ul class="ss-enterprise__logo-strip" role="list" aria-label="Partner logos">
        <li
          v-for="n in 6"
          :key="n"
          class="ss-enterprise__logo-slot"
        >
          <span class="ss-enterprise__logo-slot-text">Logo {{ n }}</span>
        </li>
      </ul>

      <ul
        class="ss-enterprise__cases"
        role="list"
        aria-label="Enterprise case studies"
      >
        <li
          v-for="item in cases"
          :key="item.id"
          class="ss-enterprise__card"
        >
          <div class="ss-enterprise__card-logo" aria-hidden="true">
            <span>Logo</span>
          </div>

          <h4 class="ss-enterprise__name">{{ item.name }}</h4>
          <p class="ss-enterprise__meta">
            {{ item.sector }} · {{ item.scale }}
          </p>

          <div class="ss-enterprise__block">
            <p class="ss-enterprise__block-label">Challenge.</p>
            <p class="ss-enterprise__block-text">{{ item.challenge }}</p>
          </div>

          <div class="ss-enterprise__block">
            <p class="ss-enterprise__block-label">What TechSandhya did.</p>
            <p class="ss-enterprise__block-text">{{ item.action }}</p>
          </div>

          <div class="ss-enterprise__block ss-enterprise__block--result">
            <p class="ss-enterprise__block-label">Result.</p>
            <p class="ss-enterprise__result">{{ item.result }}</p>
          </div>

          <a :href="item.caseHref" class="ss-enterprise__link">
            Read case study
            <span class="ss-enterprise__link-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const cases = [
  {
    id: 1,
    name: 'Aurora Consumer Goods Ltd.',
    sector: 'FMCG',
    scale: 'National · 500+ SKUs',
    challenge:
      'Fragmented marketplace ops across regions slowed launches and skewed inventory toward a single channel.',
    action:
      'Unified catalog governance, automated listing workflows, and a single dashboard for orders and settlements.',
    result: '40% faster time-to-market for new SKUs across five marketplaces.',
    caseHref: '#',
  },
  {
    id: 2,
    name: 'Urban Weave Retail Group',
    sector: 'Fashion & apparel',
    scale: 'Enterprise · 12 fulfillment nodes',
    challenge:
      'Seasonal drops missed online windows because compliance and asset uploads were handled channel by channel.',
    action:
      'End-to-end onboarding playbooks, bulk creative checks, and Meesho / Flipkart / Amazon sync from one source.',
    result: '2.1× online revenue in two peak seasons with fewer listing rejections.',
    caseHref: '#',
  },
  {
    id: 3,
    name: 'VoltEdge Electronics Pvt. Ltd.',
    sector: 'Consumer electronics',
    scale: 'D2C + retail · Pan-India',
    challenge:
      'High return rates and warranty claims were hard to trace when marketplace data sat in separate spreadsheets.',
    action:
      'Integrated order-to-service views, return reason tagging, and ONDC + Amazon reporting aligned to ERP exports.',
    result: '28% reduction in unresolved service tickets within one quarter.',
    caseHref: '#',
  },
]
</script>