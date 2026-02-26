<template>
  <div class="page page--terms">
    <AppHeader />

    <main class="main">
      <HeroSection
        badge="Terms & Conditions"
        title="Khulega Online"
        highlightText="Platform Agreement"
        subtitle="Please read these terms carefully before using our platform and services."
        breadcrumb="Terms & Conditions"
      />

      <section class="terms-content">
        <div class="terms-content__container">

          <!-- Intro -->
          <div class="terms-intro">
            <div class="terms-intro__icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h2 class="terms-intro__heading">1. Introduction</h2>
            <p class="terms-intro__text">
              Welcome to <strong>Khulega Online</strong>.
            </p>
            <p class="terms-intro__text">
              These Terms &amp; Conditions ("Terms") govern your access to and use of:
            </p>
            <div class="terms-links-grid">
              <a href="https://khulega.online" target="_blank" rel="noopener" class="terms-link-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div>
                  <span class="terms-link-card__label">Website</span>
                  <span class="terms-link-card__url">khulega.online</span>
                </div>
              </a>
              <a href="https://usc.khulega.online" target="_blank" rel="noopener" class="terms-link-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <div>
                  <span class="terms-link-card__label">Unified Seller Console</span>
                  <span class="terms-link-card__url">usc.khulega.online</span>
                </div>
              </a>
            </div>
            <p class="terms-intro__text terms-intro__text--mt">
              All services, tools, integrations, and seller support provided by Khulega Online are covered under these Terms.
            </p>
            <div class="terms-intro__notice">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>By accessing or using our platform, you agree to be legally bound by these Terms. If you do not agree, you must discontinue use of the platform.</span>
            </div>

            <div class="terms-intro__updated">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Last Updated: {{ currentDate }}</span>
            </div>
          </div>

          <!-- Section Cards -->
          <div class="terms-sections">

            <!-- 2. About Khulega Online -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">2</span>
                <h2 class="terms-card__title">About Khulega Online</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">
                  Khulega Online is a SaaS-enabled platform that allows sellers to:
                </p>
                <ul class="terms-list terms-list--check">
                  <li>Integrate and manage multiple online marketplaces</li>
                  <li>Manage listings, inventory, pricing, and orders</li>
                  <li>Access analytics and reporting</li>
                  <li>Avail optional managed seller services</li>
                </ul>
                <div class="terms-card__info-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>The Unified Seller Console (USC) is accessible via
                    <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>
                  </span>
                </div>
                <div class="terms-card__highlight">
                  Khulega Online does not operate as a marketplace. It provides technology and service infrastructure to sellers.
                </div>
              </div>
            </div>

            <!-- 3. Eligibility -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">3</span>
                <h2 class="terms-card__title">Eligibility</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">To use Khulega Online services, you must:</p>
                <ul class="terms-list terms-list--check">
                  <li>Be at least 18 years of age</li>
                  <li>Operate a legally registered business (if applicable)</li>
                  <li>Provide accurate KYC and business information</li>
                  <li>Comply with applicable Indian laws and regulations</li>
                </ul>
                <div class="terms-card__alert">
                  We reserve the right to approve or reject any registration.
                </div>
              </div>
            </div>

            <!-- 4. Account Registration -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">4</span>
                <h2 class="terms-card__title">Account Registration & Responsibilities</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">When registering:</p>
                <ul class="terms-list terms-list--check">
                  <li>You must provide true and accurate information</li>
                  <li>You are responsible for maintaining account confidentiality</li>
                  <li>You are responsible for all activities under your account</li>
                  <li>You must notify us immediately of unauthorized access</li>
                </ul>
                <div class="terms-card__alert">
                  Khulega Online is not liable for losses arising from compromised credentials due to user negligence.
                </div>
              </div>
            </div>

            <!-- 5. Marketplace Integrations -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">5</span>
                <h2 class="terms-card__title">Marketplace Integrations</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">
                  Khulega Online enables integration with third-party marketplaces such as:
                </p>
                <div class="terms-marketplace-tags">
                  <span class="terms-marketplace-tag">Amazon</span>
                  <span class="terms-marketplace-tag">Flipkart</span>
                  <span class="terms-marketplace-tag">Meesho</span>
                  <span class="terms-marketplace-tag">JioMart</span>
                  <span class="terms-marketplace-tag">ONDC</span>
                </div>
                <p class="terms-card__text terms-card__text--mt">Important:</p>
                <ul class="terms-list terms-list--warning">
                  <li>Each marketplace operates independently.</li>
                  <li>Sellers must comply with each marketplace's policies.</li>
                  <li>Khulega Online is not responsible for marketplace suspensions, penalties, or disputes.</li>
                  <li>Integration availability may change without prior notice.</li>
                </ul>
              </div>
            </div>

            <!-- 6. Use of USC -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">6</span>
                <h2 class="terms-card__title">Use of the Unified Seller Console (USC)</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">
                  By accessing
                  <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>,
                  you agree:
                </p>
                <ul class="terms-list terms-list--cross">
                  <li>Not to misuse system resources</li>
                  <li>Not to attempt hacking, scraping, or reverse engineering</li>
                  <li>Not to interfere with platform performance</li>
                  <li>Not to upload malicious code or harmful content</li>
                </ul>
                <div class="terms-card__alert terms-card__alert--danger">
                  Any violation may result in immediate suspension.
                </div>
              </div>
            </div>

            <!-- 7. Seller Responsibilities -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">7</span>
                <h2 class="terms-card__title">Seller Responsibilities</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">Sellers are solely responsible for:</p>
                <div class="terms-responsibility-grid">
                  <div class="terms-responsibility-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Product authenticity</span>
                  </div>
                  <div class="terms-responsibility-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span>Pricing accuracy</span>
                  </div>
                  <div class="terms-responsibility-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                    <span>Inventory accuracy</span>
                  </div>
                  <div class="terms-responsibility-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span>Tax compliance (GST)</span>
                  </div>
                  <div class="terms-responsibility-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Product certifications</span>
                  </div>
                  <div class="terms-responsibility-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>Customer dispute handling</span>
                  </div>
                </div>
                <div class="terms-card__alert">
                  Khulega Online does not assume liability for product-related claims.
                </div>
              </div>
            </div>

            <!-- 8. Fees & Payments -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">8</span>
                <h2 class="terms-card__title">Fees & Payments</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">If you subscribe to paid plans or managed services:</p>
                <ul class="terms-list terms-list--arrow">
                  <li>Fees will be defined in a separate agreement or invoice</li>
                  <li>Payments must be made within agreed timelines</li>
                  <li>Non-payment may result in service suspension</li>
                  <li>Fees are non-refundable unless explicitly stated</li>
                </ul>
                <div class="terms-card__highlight">
                  All taxes are the responsibility of the seller unless specified.
                </div>
              </div>
            </div>

            <!-- 9. Intellectual Property -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">9</span>
                <h2 class="terms-card__title">Intellectual Property</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">All platform content including:</p>
                <div class="terms-ip-tags">
                  <span class="terms-ip-tag">Software</span>
                  <span class="terms-ip-tag">Design</span>
                  <span class="terms-ip-tag">Logos</span>
                  <span class="terms-ip-tag">Branding</span>
                  <span class="terms-ip-tag">Documentation</span>
                </div>
                <p class="terms-card__text terms-card__text--mt">
                  Are the intellectual property of Khulega Online. You may not:
                </p>
                <ul class="terms-list terms-list--cross">
                  <li>Copy</li>
                  <li>Reproduce</li>
                  <li>Distribute</li>
                  <li>Modify</li>
                  <li>Create derivative works</li>
                </ul>
                <div class="terms-card__alert">
                  Without written permission from Khulega Online.
                </div>
              </div>
            </div>

            <!-- 10. Limitation of Liability -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">10</span>
                <h2 class="terms-card__title">Limitation of Liability</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">Khulega Online shall not be liable for:</p>
                <ul class="terms-list terms-list--cross">
                  <li>Marketplace account suspension</li>
                  <li>Revenue loss</li>
                  <li>Data inaccuracies from third-party APIs</li>
                  <li>Indirect or consequential damages</li>
                  <li>Downtime due to external services</li>
                </ul>
                <div class="terms-card__alert">
                  Use of the platform is at your own risk. Maximum liability, if applicable, shall not exceed the fees paid by you in the last 3 months.
                </div>
              </div>
            </div>

            <!-- 11. Service Availability -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">11</span>
                <h2 class="terms-card__title">Service Availability</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">
                  We aim to provide uninterrupted service; however:
                </p>
                <ul class="terms-list terms-list--warning">
                  <li>Maintenance may occur periodically</li>
                  <li>Third-party API failures may impact functionality</li>
                  <li>Technical downtime may occur</li>
                </ul>
                <div class="terms-card__highlight">
                  Khulega Online does not guarantee 100% uptime.
                </div>
              </div>
            </div>

            <!-- 12. Termination & Suspension -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">12</span>
                <h2 class="terms-card__title">Termination & Suspension</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">We may suspend or terminate access if:</p>
                <ul class="terms-list terms-list--cross">
                  <li>You violate these Terms</li>
                  <li>You engage in fraudulent activity</li>
                  <li>You provide false information</li>
                  <li>You fail to make payments</li>
                  <li>Legal authorities require action</li>
                </ul>
                <p class="terms-card__text terms-card__text--mt">Upon termination:</p>
                <ul class="terms-list terms-list--arrow">
                  <li>Access to USC may be revoked</li>
                  <li>Data access may be restricted</li>
                </ul>
              </div>
            </div>

            <!-- 13. Data & Privacy -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">13</span>
                <h2 class="terms-card__title">Data & Privacy</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">
                  Your data will be handled as per our
                  <a href="/privacy-policy">Privacy Policy</a>.
                  Sellers consent to:
                </p>
                <ul class="terms-list terms-list--check">
                  <li>Storage of business data</li>
                  <li>Processing for platform functionality</li>
                  <li>Integration with third-party marketplaces</li>
                </ul>
                <div class="terms-card__highlight">
                  We implement reasonable security safeguards but do not guarantee absolute security.
                </div>
              </div>
            </div>

            <!-- 14. Indemnification -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">14</span>
                <h2 class="terms-card__title">Indemnification</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">
                  You agree to indemnify and hold Khulega Online harmless from:
                </p>
                <ul class="terms-list terms-list--warning">
                  <li>Legal claims arising from your products</li>
                  <li>Tax disputes</li>
                  <li>Intellectual property violations</li>
                  <li>Regulatory non-compliance</li>
                  <li>Customer disputes</li>
                </ul>
              </div>
            </div>

            <!-- 15. Amendments -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">15</span>
                <h2 class="terms-card__title">Amendments to Terms</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">
                  Khulega Online reserves the right to update these Terms at any time.
                  Updates will be posted on
                  <a href="https://khulega.online" target="_blank" rel="noopener">khulega.online</a>.
                </p>
                <div class="terms-card__highlight">
                  Continued use of the platform constitutes acceptance of revised Terms.
                </div>
              </div>
            </div>

            <!-- 16. Governing Law -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">16</span>
                <h2 class="terms-card__title">Governing Law & Jurisdiction</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">
                  These Terms shall be governed by the laws of India.
                  Any disputes shall be subject to the jurisdiction of courts located in India.
                </p>
              </div>
            </div>

            <!-- 17. Contact -->
            <div class="terms-card">
              <div class="terms-card__header">
                <span class="terms-card__number">17</span>
                <h2 class="terms-card__title">Contact Information</h2>
              </div>
              <div class="terms-card__body">
                <p class="terms-card__text">For any queries regarding these Terms:</p>
                <div class="terms-contact-grid">
                  <a href="mailto:admin@techsandhya.com" class="terms-contact-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <span class="terms-contact-card__label">Email</span>
                      <span class="terms-contact-card__value">admin@techsandhya.com</span>
                    </div>
                  </a>
                  <a href="https://khulega.online" target="_blank" rel="noopener" class="terms-contact-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <div>
                      <span class="terms-contact-card__label">Website</span>
                      <span class="terms-contact-card__value">khulega.online</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <!-- Acceptance -->
          <div class="terms-acceptance">
            <div class="terms-acceptance__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 class="terms-acceptance__title">Acceptance of Terms</h2>
            <p class="terms-acceptance__text">
              By registering or accessing Khulega Online and the Unified Seller Console
              (<a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>),
              you confirm that:
            </p>
            <ul class="terms-acceptance__list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                You have read these Terms
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                You understand them
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                You agree to be legally bound by them
              </li>
            </ul>
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
import { computed } from 'vue'

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>