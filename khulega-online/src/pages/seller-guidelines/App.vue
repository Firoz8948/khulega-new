<!-- pages/SellerGuidelines.vue -->
<template>
  <div class="page page--seller-guidelines">
    <AppHeader />

    <main class="main">
      <HeroSection
        badge="Seller Guidelines"
        title="Manage and Grow Across"
        highlightText="Multiple Marketplaces"
        subtitle="Follow these guidelines to ensure compliance, accuracy, and smooth marketplace operations."
        breadcrumb="Seller Guidelines"
      />

      <!-- ====== CONTENT ====== -->
      <section class="sgl-content">
        <div class="sgl-content__container">

          <!-- Intro -->
          <div class="sgl-intro">
            <div class="sgl-intro__icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <p class="sgl-intro__text">
              <strong>Khulega Online</strong> is a SaaS-enabled platform that helps sellers connect,
              manage, and grow across multiple marketplaces from a unified system called the
              <strong>Unified Seller Commerce (USC)</strong> available at:
            </p>
            <a href="https://usc.khulega.online" target="_blank" rel="noopener" class="sgl-intro__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              usc.khulega.online
            </a>
            <p class="sgl-intro__text sgl-intro__text--mt">
              Through Khulega Online, sellers can integrate and manage their business across leading marketplaces:
            </p>
            <div class="sgl-marketplace-tags">
              <span class="sgl-marketplace-tag">Amazon</span>
              <span class="sgl-marketplace-tag">Flipkart</span>
              <span class="sgl-marketplace-tag">Meesho</span>
              <span class="sgl-marketplace-tag">JioMart</span>
              <span class="sgl-marketplace-tag">ONDC</span>
            </div>
            <p class="sgl-intro__text sgl-intro__text--mt">
              These Seller Guidelines define the operational standards, compliance requirements, and
              performance expectations for all sellers using Khulega Online and the USC dashboard.
            </p>
            <div class="sgl-intro__notice">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>By registering or using our services, you agree to comply with these guidelines.</span>
            </div>
          </div>

          <!-- Section Cards -->
          <div class="sgl-sections">

            <!-- 2. Seller Eligibility -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">2</span>
                <h2 class="sgl-card__title">Seller Eligibility & Account Requirements</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">
                  To sell using Khulega Online and access USC, sellers must:
                </p>
                <ul class="sgl-list sgl-list--check">
                  <li>Provide valid business registration details</li>
                  <li>Submit accurate KYC documentation</li>
                  <li>Share GST details (if applicable)</li>
                  <li>Maintain updated bank account information</li>
                  <li>Comply with applicable Indian laws and taxation norms</li>
                </ul>
                <p class="sgl-card__text sgl-card__text--mt">
                  Khulega Online reserves the right to:
                </p>
                <ul class="sgl-list sgl-list--arrow">
                  <li>Approve or reject onboarding applications</li>
                  <li>Request additional documentation</li>
                  <li>Suspend accounts for incomplete or misleading information</li>
                </ul>
              </div>
            </div>

            <!-- 3. USC Usage Policy -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">3</span>
                <h2 class="sgl-card__title">Unified Seller Commerce (USC) Usage Policy</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">
                  The Unified Seller Commerce
                  (<a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>)
                  allows sellers to manage:
                </p>
                <div class="sgl-feature-grid">
                  <div class="sgl-feature-chip">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Product Listings
                  </div>
                  <div class="sgl-feature-chip">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                    Inventory
                  </div>
                  <div class="sgl-feature-chip">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    Pricing
                  </div>
                  <div class="sgl-feature-chip">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    Orders
                  </div>
                  <div class="sgl-feature-chip">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    Marketplace Integrations
                  </div>
                  <div class="sgl-feature-chip">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                    Reports & Analytics
                  </div>
                </div>
                <p class="sgl-card__text sgl-card__text--mt">Sellers are responsible for:</p>
                <ul class="sgl-list sgl-list--check">
                  <li>Maintaining valid marketplace credentials</li>
                  <li>Ensuring API access remains active</li>
                  <li>Protecting login credentials</li>
                  <li>Not sharing access with unauthorized parties</li>
                </ul>
                <div class="sgl-card__alert">
                  Any misuse of the USC platform may result in immediate account review.
                </div>
              </div>
            </div>

            <!-- 4. Marketplace Integration -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">4</span>
                <h2 class="sgl-card__title">Marketplace Integration Responsibilities</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">
                  Khulega Online enables integration with multiple marketplaces. However:
                </p>
                <ul class="sgl-list sgl-list--warning">
                  <li>Each marketplace has its own policies.</li>
                  <li>Sellers must comply individually with marketplace rules.</li>
                  <li>Violations on one marketplace may impact seller performance across integrations.</li>
                  <li>Khulega Online does not override marketplace compliance policies.</li>
                </ul>
              </div>
            </div>

            <!-- 5. Product Listing -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">5</span>
                <h2 class="sgl-card__title">Product Listing Guidelines</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">
                  Accurate listings are critical to long-term growth.
                </p>

                <div class="sgl-sub-sections">
                  <div class="sgl-sub">
                    <h3 class="sgl-sub__title">5.1 Product Titles</h3>
                    <ul class="sgl-list sgl-list--check">
                      <li>Must be clear and accurate</li>
                      <li>No misleading claims</li>
                      <li>No prohibited keywords</li>
                      <li>No false brand usage</li>
                    </ul>
                  </div>

                  <div class="sgl-sub">
                    <h3 class="sgl-sub__title">5.2 Product Images</h3>
                    <ul class="sgl-list sgl-list--check">
                      <li>Clear and high resolution</li>
                      <li>Actual product images</li>
                      <li>No unauthorized watermarks</li>
                      <li>No misleading visual representation</li>
                    </ul>
                  </div>

                  <div class="sgl-sub">
                    <h3 class="sgl-sub__title">5.3 Product Descriptions</h3>
                    <ul class="sgl-list sgl-list--check">
                      <li>Honest and transparent</li>
                      <li>Mention specifications, materials, dimensions</li>
                      <li>Avoid exaggerated marketing claims</li>
                      <li>Clearly define usage and limitations</li>
                    </ul>
                  </div>
                </div>

                <div class="sgl-card__alert">
                  Incorrect listings may lead to suppression or marketplace penalties.
                </div>
              </div>
            </div>

            <!-- 6. Inventory Management -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">6</span>
                <h2 class="sgl-card__title">Inventory Management Standards</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">Sellers must:</p>
                <ul class="sgl-list sgl-list--check">
                  <li>Maintain real-time stock accuracy</li>
                  <li>Avoid overselling</li>
                  <li>Immediately update unavailable inventory</li>
                  <li>Monitor stock sync across marketplaces</li>
                </ul>
                <div class="sgl-card__alert">
                  High cancellation rates due to stock issues may lead to account warnings.
                </div>
              </div>
            </div>

            <!-- 7. Pricing -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">7</span>
                <h2 class="sgl-card__title">Pricing & Transparency Policy</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">All pricing must be:</p>
                <ul class="sgl-list sgl-list--check">
                  <li>Transparent</li>
                  <li>Competitive</li>
                  <li>Legally compliant</li>
                </ul>
                <p class="sgl-card__text sgl-card__text--mt">Sellers must avoid:</p>
                <ul class="sgl-list sgl-list--cross">
                  <li>Fake MRP inflation</li>
                  <li>Artificial discount manipulation</li>
                  <li>Pricing mismatch across connected marketplaces</li>
                  <li>Misleading promotional tactics</li>
                </ul>
                <div class="sgl-card__highlight">
                  Khulega Online promotes ethical and fair selling practices.
                </div>
              </div>
            </div>

            <!-- 8. Order Fulfillment -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">8</span>
                <h2 class="sgl-card__title">Order Fulfillment & Logistics</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">Timely order processing is mandatory. Sellers must:</p>
                <ul class="sgl-list sgl-list--check">
                  <li>Dispatch within defined SLA timelines</li>
                  <li>Use reliable logistics partners</li>
                  <li>Share accurate tracking details</li>
                  <li>Ensure secure packaging</li>
                </ul>
                <div class="sgl-card__alert">
                  Consistent delays or high return-to-origin (RTO) rates may trigger account evaluation.
                </div>
              </div>
            </div>

            <!-- 9. Returns & Refund -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">9</span>
                <h2 class="sgl-card__title">Returns & Refund Policy Compliance</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">
                  Sellers must adhere to marketplace return policies. This includes:
                </p>
                <ul class="sgl-list sgl-list--check">
                  <li>Accepting valid returns</li>
                  <li>Processing refunds within defined timelines</li>
                  <li>Avoiding unjustified return rejections</li>
                  <li>Responding to disputes professionally</li>
                </ul>
                <div class="sgl-card__alert">
                  Return abuse or non-cooperation may lead to suspension.
                </div>
              </div>
            </div>

            <!-- 10. Prohibited Products -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">10</span>
                <h2 class="sgl-card__title">Prohibited & Restricted Products</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">Sellers must not list:</p>
                <ul class="sgl-list sgl-list--cross">
                  <li>Counterfeit products</li>
                  <li>Trademark-infringing items</li>
                  <li>Illegal or restricted goods</li>
                  <li>Hazardous products without required certification</li>
                </ul>
                <div class="sgl-card__alert">
                  Sellers are fully responsible for regulatory compliance including FSSAI, BIS, and
                  other applicable authorities.
                </div>
              </div>
            </div>

            <!-- 11. Performance Expectations -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">11</span>
                <h2 class="sgl-card__title">Performance Expectations</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">Khulega Online expects sellers to maintain:</p>
                <div class="sgl-metric-grid">
                  <div class="sgl-metric">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                    <span>Low cancellation rate</span>
                  </div>
                  <div class="sgl-metric">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="1 12 5 12 9 4 15 20 19 12 23 12" />
                    </svg>
                    <span>Low return rate</span>
                  </div>
                  <div class="sgl-metric">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>High fulfillment rate</span>
                  </div>
                  <div class="sgl-metric">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span>Positive customer feedback</span>
                  </div>
                  <div class="sgl-metric">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Policy compliance across marketplaces</span>
                  </div>
                </div>
                <div class="sgl-card__alert">
                  Repeated underperformance may lead to review or suspension.
                </div>
              </div>
            </div>

            <!-- 12. Managed Seller Services -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">12</span>
                <h2 class="sgl-card__title">Managed Seller Services</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">
                  If sellers opt for additional services offered by Khulega Online (such as listing
                  management, catalog optimization, account management, or advertising support):
                </p>
                <ul class="sgl-list sgl-list--arrow">
                  <li>Service scope will be defined separately</li>
                  <li>Sellers must provide accurate product information</li>
                  <li>Khulega Online is not liable for incorrect data provided by sellers</li>
                </ul>
              </div>
            </div>

            <!-- 13. Data Security -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">13</span>
                <h2 class="sgl-card__title">Data Security & System Integrity</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">Sellers must:</p>
                <ul class="sgl-list sgl-list--check">
                  <li>Protect USC login credentials</li>
                  <li>Not attempt system manipulation</li>
                  <li>Avoid unauthorized data extraction</li>
                  <li>Not misuse reporting or analytics tools</li>
                </ul>
                <p class="sgl-card__text sgl-card__text--mt">
                  Any attempt to:
                </p>
                <ul class="sgl-list sgl-list--cross">
                  <li>Hack</li>
                  <li>Reverse engineer</li>
                  <li>Interfere with system performance</li>
                </ul>
                <div class="sgl-card__alert sgl-card__alert--danger">
                  Will result in immediate termination.
                </div>
              </div>
            </div>

            <!-- 14. Account Suspension -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">14</span>
                <h2 class="sgl-card__title">Account Suspension & Termination</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">
                  Khulega Online may suspend or terminate seller access in cases of:
                </p>
                <ul class="sgl-list sgl-list--cross">
                  <li>Fraudulent activity</li>
                  <li>Policy violations</li>
                  <li>Repeated compliance failures</li>
                  <li>Legal complaints</li>
                  <li>Payment defaults (if applicable)</li>
                </ul>
                <div class="sgl-card__alert sgl-card__alert--danger">
                  Serious violations may lead to permanent restriction.
                </div>
              </div>
            </div>

            <!-- 15. Updates -->
            <div class="sgl-card">
              <div class="sgl-card__header">
                <span class="sgl-card__number">15</span>
                <h2 class="sgl-card__title">Updates to Guidelines</h2>
              </div>
              <div class="sgl-card__body">
                <p class="sgl-card__text">
                  Khulega Online may update these Seller Guidelines periodically.
                  Continued use of the platform and USC dashboard constitutes acceptance of updated policies.
                </p>
              </div>
            </div>

          </div>

          <!-- Acknowledgment -->
          <div class="sgl-acknowledgment">
            <div class="sgl-acknowledgment__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 class="sgl-acknowledgment__title">Seller Acknowledgment</h2>
            <p class="sgl-acknowledgment__text">
              By registering on Khulega Online and accessing the Unified Seller Commerce
              (<a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>),
              you confirm that:
            </p>
            <ul class="sgl-acknowledgment__list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                You have read and understood these guidelines
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                You agree to comply with all platform standards
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                You accept responsibility for marketplace compliance
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
// Uses globally registered components:
// AppHeader, AppFooter, BackToTop, WhatsAppButton, HeroSection
</script>