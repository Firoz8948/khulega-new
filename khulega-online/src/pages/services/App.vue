<template>
  <div class="page page--services">
    <AppHeader />

    <main class="main">
      <HeroSection
        badge="Our Services"
        title="Everything You Need to"
        highlightText="Start, Manage & Scale"
        subtitle="From compliance setup to marketplace operations, branding, and advisory support — we help you launch and grow with confidence. All services available through your Unified Seller Console."
        breadcrumb="Services"
      />

      <!-- Services Intro -->
      <section class="services-intro">
        <div class="services-intro__container">
          <div class="services-intro__content">
            <p class="services-intro__text">
              At Khulega Online, we don't just provide software — we provide
              <strong>complete seller enablement</strong>. All services are available through your
              Unified Seller Console at
              <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>.
            </p>
            <div class="services-intro__tags">
              <span class="services-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Unified Dashboard
              </span>
              <span class="services-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Multi-Marketplace Support
              </span>
              <span class="services-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Affordable Pricing
              </span>
              <span class="services-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Built for Indian Sellers
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
              <span class="svc-section__badge-label">Compliance Services</span>
            </div>
            <h2 class="svc-section__title">Start Your Business the Right Way</h2>
            <p class="svc-section__subtitle">
              Before selling online, proper documentation and compliance are essential.
              Our compliance services ensure your business is legally ready and marketplace-approved.
            </p>
          </div>

          <!-- Service Cards + Pricing Table Layout -->
          <div class="svc-section__body">

            <!-- Left: Service Detail Cards -->
            <div class="svc-cards">
              <div class="svc-card">
                <div class="svc-card__icon svc-card__icon--blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 9v4"/><path d="M12 17h.01"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">e-PAN Card</h3>
                  <p class="svc-card__text">Get assistance in applying for or updating your PAN quickly and smoothly.</p>
                </div>
              </div>

              <div class="svc-card">
                <div class="svc-card__icon svc-card__icon--blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">Udyam Registration</h3>
                  <p class="svc-card__text">Register your business under MSME and unlock government-recognized benefits.</p>
                </div>
              </div>

              <div class="svc-card">
                <div class="svc-card__icon svc-card__icon--blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">Marketplace Account Setup</h3>
                  <p class="svc-card__text">Complete account creation and onboarding assistance for each marketplace you choose.</p>
                </div>
              </div>

              <div class="svc-card">
                <div class="svc-card__icon svc-card__icon--blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">GST Registration</h3>
                  <p class="svc-card__text">End-to-end support for GST registration including documentation guidance.</p>
                </div>
              </div>

              <div class="svc-card">
                <div class="svc-card__icon svc-card__icon--blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">FSSAI Food License</h3>
                  <p class="svc-card__text">For food sellers, we help you obtain the required license to legally operate.</p>
                </div>
              </div>
            </div>

            <!-- Right: Pricing Table -->
            <div class="svc-pricing">
              <div class="svc-pricing__header">
                <h3 class="svc-pricing__title">Compliance Pricing</h3>
                <span class="svc-pricing__type">One-time Fee</span>
              </div>
              <div class="svc-pricing__table-wrap">
                <table class="svc-pricing__table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Fee</th>
                      <th>Discounted</th>
                      <th>Valid Until</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>e-PAN Card</td>
                      <td><span class="svc-pricing__original">₹89</span></td>
                      <td><span class="svc-pricing__discounted">₹49</span></td>
                      <td><span class="svc-pricing__validity">31 Dec 2026</span></td>
                    </tr>
                    <tr>
                      <td>Udyam Registration</td>
                      <td><span class="svc-pricing__original">₹89</span></td>
                      <td><span class="svc-pricing__discounted">₹49</span></td>
                      <td><span class="svc-pricing__validity">31 Dec 2026</span></td>
                    </tr>
                    <tr>
                      <td>Marketplace Account Setup <span class="svc-pricing__note">(Per Platform)</span></td>
                      <td><span class="svc-pricing__original">₹99</span></td>
                      <td><span class="svc-pricing__discounted">₹49</span></td>
                      <td><span class="svc-pricing__validity">31 Dec 2026</span></td>
                    </tr>
                    <tr>
                      <td>GST Registration</td>
                      <td><span class="svc-pricing__original">₹499</span></td>
                      <td><span class="svc-pricing__discounted">₹249</span></td>
                      <td><span class="svc-pricing__validity">31 Dec 2026</span></td>
                    </tr>
                    <tr>
                      <td>FSSAI Food License <span class="svc-pricing__note">(If applicable)</span></td>
                      <td><span class="svc-pricing__original">₹999</span></td>
                      <td><span class="svc-pricing__discounted">₹899</span></td>
                      <td><span class="svc-pricing__validity">31 Dec 2026</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="svc-pricing__footer">
                <div class="svc-pricing__highlights">
                  <span class="svc-pricing__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Simple process
                  </span>
                  <span class="svc-pricing__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Affordable one-time pricing
                  </span>
                  <span class="svc-pricing__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Expert assistance
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
              <span class="svc-section__badge-label">Subscription Services</span>
            </div>
            <h2 class="svc-section__title">Ongoing Operational Support</h2>
            <p class="svc-section__subtitle">
              Running an online business requires daily management. Our subscription packs
              simplify operations so you can focus on growth.
            </p>
          </div>

          <!-- Subscription Packs -->
          <div class="svc-packs">

            <!-- Payment & Account Pack -->
            <div class="svc-pack">
              <div class="svc-pack__header svc-pack__header--indigo">
                <div class="svc-pack__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <h3 class="svc-pack__title">Payment & Account Pack</h3>
                <p class="svc-pack__desc">Settlement, Refund & Account Coordination</p>
              </div>
              <div class="svc-pack__body">
                <div class="svc-pack__price">
                  <span class="svc-pack__price-original">₹299</span>
                  <span class="svc-pack__price-current">₹149</span>
                  <span class="svc-pack__price-period">/month</span>
                </div>
                <ul class="svc-pack__features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Settlement tracking
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Refund handling
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Basic account coordination
                  </li>
                </ul>
                <div class="svc-pack__ideal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  Ideal for sellers who want structured financial monitoring.
                </div>
                <div class="svc-pack__validity">Valid until 31st December 2026</div>
              </div>
            </div>

            <!-- Operations Pack -->
            <div class="svc-pack svc-pack--featured">
              <div class="svc-pack__ribbon">Most Popular</div>
              <div class="svc-pack__header svc-pack__header--blue">
                <div class="svc-pack__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <h3 class="svc-pack__title">Operations Pack</h3>
                <p class="svc-pack__desc">Order, Shipping, Return & Inventory</p>
              </div>
              <div class="svc-pack__body">
                <div class="svc-pack__price">
                  <span class="svc-pack__price-original">₹599</span>
                  <span class="svc-pack__price-current">₹299</span>
                  <span class="svc-pack__price-period">/month</span>
                </div>
                <ul class="svc-pack__features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Order management
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Shipping coordination
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Return handling
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Inventory management
                  </li>
                </ul>
                <div class="svc-pack__ideal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  Best suited for growing sellers who want end-to-end operational support.
                </div>
                <div class="svc-pack__validity">Valid until 31st December 2026</div>
              </div>
            </div>

            <!-- Growth Pack -->
            <div class="svc-pack">
              <div class="svc-pack__header svc-pack__header--emerald">
                <div class="svc-pack__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                <h3 class="svc-pack__title">Growth Pack</h3>
                <p class="svc-pack__desc">Ads, Reports & Performance Optimization</p>
              </div>
              <div class="svc-pack__body">
                <div class="svc-pack__price">
                  <span class="svc-pack__price-original">₹999</span>
                  <span class="svc-pack__price-current">₹499</span>
                  <span class="svc-pack__price-period">/month</span>
                </div>
                <ul class="svc-pack__features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Advertising support
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Reports & analytics review
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Performance optimization guidance
                  </li>
                </ul>
                <div class="svc-pack__ideal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  Perfect for sellers who want to scale faster and increase visibility.
                </div>
                <div class="svc-pack__validity">Valid until 31st December 2026</div>
              </div>
            </div>

          </div>

          <!-- Subscription Highlights -->
          <div class="svc-section__bottom-highlights">
            <span class="svc-section__bottom-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              Monthly plans
            </span>
            <span class="svc-section__bottom-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Structured process
            </span>
            <span class="svc-section__bottom-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              Data-backed decisions
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
              <span class="svc-section__badge-label">Product Services</span>
            </div>
            <h2 class="svc-section__title">Make Your Products Stand Out</h2>
            <p class="svc-section__subtitle">
              High-quality listings improve conversions and reduce returns. Our product services
              focus on presentation and branding.
            </p>
          </div>

          <div class="svc-section__body">

            <div class="svc-cards">
              <div class="svc-card">
                <div class="svc-card__icon svc-card__icon--emerald">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">Product Photo Editing</h3>
                  <p class="svc-card__text">Enhance product images professionally to meet marketplace standards. Per product pricing.</p>
                </div>
              </div>

              <div class="svc-card">
                <div class="svc-card__icon svc-card__icon--emerald">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">Product Description & Title Writing</h3>
                  <p class="svc-card__text">SEO-optimized, marketplace-compliant titles and descriptions that improve visibility and conversions.</p>
                </div>
              </div>

              <div class="svc-card">
                <div class="svc-card__icon svc-card__icon--emerald">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <div class="svc-card__content">
                  <h3 class="svc-card__title">Brand Name, Logo & Banner</h3>
                  <p class="svc-card__text">Complete brand identity setup for sellers who want to build long-term recognition.</p>
                </div>
              </div>
            </div>

            <div class="svc-pricing">
              <div class="svc-pricing__header svc-pricing__header--emerald">
                <h3 class="svc-pricing__title">Product Pricing</h3>
                <span class="svc-pricing__type">One-time Fee</span>
              </div>
              <div class="svc-pricing__table-wrap">
                <table class="svc-pricing__table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Fee</th>
                      <th>Discounted</th>
                      <th>Valid Until</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Product Photo Editing <span class="svc-pricing__note">(Per Product)</span></td>
                      <td><span class="svc-pricing__original">₹39</span></td>
                      <td><span class="svc-pricing__discounted">₹20</span></td>
                      <td><span class="svc-pricing__validity">31 Dec 2026</span></td>
                    </tr>
                    <tr>
                      <td>Description & Title Writing <span class="svc-pricing__note">(Per Product)</span></td>
                      <td><span class="svc-pricing__original">₹49</span></td>
                      <td><span class="svc-pricing__discounted">₹25</span></td>
                      <td><span class="svc-pricing__validity">31 Dec 2026</span></td>
                    </tr>
                    <tr>
                      <td>Brand Name, Logo & Banner</td>
                      <td><span class="svc-pricing__original">₹399</span></td>
                      <td><span class="svc-pricing__discounted">₹199</span></td>
                      <td><span class="svc-pricing__validity">31 Dec 2026</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="svc-pricing__footer">
                <div class="svc-pricing__highlights">
                  <span class="svc-pricing__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Conversion-focused
                  </span>
                  <span class="svc-pricing__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Marketplace compliant
                  </span>
                  <span class="svc-pricing__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Professionally crafted
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
              <span class="svc-section__badge-label">Advisory Services</span>
            </div>
            <h2 class="svc-section__title">Expert Guidance for Smarter Decisions</h2>
            <p class="svc-section__subtitle">
              Sometimes growth requires strategic input. Our advisory services provide focused guidance
              to help you make better business decisions.
            </p>
          </div>

          <div class="svc-advisory-grid">

            <!-- Pricing Advisory -->
            <div class="svc-advisory-card">
              <div class="svc-advisory-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 class="svc-advisory-card__title">Pricing Advisory</h3>
              <p class="svc-advisory-card__text">
                Understand competitive pricing, margin strategy, and marketplace positioning.
              </p>
              <div class="svc-advisory-card__price">
                <span class="svc-advisory-card__original">₹59</span>
                <span class="svc-advisory-card__discounted">₹29</span>
                <span class="svc-advisory-card__label">one-time</span>
              </div>
              <div class="svc-advisory-card__validity">Valid until 31st December 2026</div>
            </div>

            <!-- Packaging Advisory -->
            <div class="svc-advisory-card">
              <div class="svc-advisory-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 class="svc-advisory-card__title">Packaging Advisory</h3>
              <p class="svc-advisory-card__text">
                Improve packaging standards to reduce returns and improve customer experience.
              </p>
              <div class="svc-advisory-card__price">
                <span class="svc-advisory-card__original">₹59</span>
                <span class="svc-advisory-card__discounted">₹29</span>
                <span class="svc-advisory-card__label">one-time</span>
              </div>
              <div class="svc-advisory-card__validity">Valid until 31st December 2026</div>
            </div>

          </div>

          <div class="svc-section__bottom-highlights">
            <span class="svc-section__bottom-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              Practical insights
            </span>
            <span class="svc-section__bottom-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Data-backed recommendations
            </span>
            <span class="svc-section__bottom-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              Growth-oriented approach
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
            <h2 class="svc-why__title">Why Choose Khulega Online?</h2>
            <p class="svc-why__subtitle">Built specifically for Indian sellers with transparent, affordable pricing.</p>
          </div>
          <div class="svc-why__grid">
            <div class="svc-why__item">
              <div class="svc-why__item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h4 class="svc-why__item-title">Unified Seller Console</h4>
              <p class="svc-why__item-text">Manage everything from one dashboard at usc.khulega.online</p>
            </div>
            <div class="svc-why__item">
              <div class="svc-why__item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h4 class="svc-why__item-title">Multi-Marketplace Support</h4>
              <p class="svc-why__item-text">Connect to Amazon, Flipkart, Meesho, JioMart, ONDC & more</p>
            </div>
            <div class="svc-why__item">
              <div class="svc-why__item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4 class="svc-why__item-title">Affordable Pricing</h4>
              <p class="svc-why__item-text">Transparent pricing with no hidden charges</p>
            </div>
            <div class="svc-why__item">
              <div class="svc-why__item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4 class="svc-why__item-title">Dedicated Support Team</h4>
              <p class="svc-why__item-text">Expert assistance at every step of your journey</p>
            </div>
            <div class="svc-why__item">
              <div class="svc-why__item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4 class="svc-why__item-title">Structured & Transparent</h4>
              <p class="svc-why__item-text">Clear service scope with well-defined processes</p>
            </div>
            <div class="svc-why__item">
              <div class="svc-why__item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h4 class="svc-why__item-title">Built for Indian Sellers</h4>
              <p class="svc-why__item-text">Designed specifically for the Indian e-commerce ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================ -->
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
              <h4 class="svc-note__title">Transparent Pricing</h4>
              <p class="svc-note__desc">
                All discounted prices are valid until the mentioned validity date.
                Service scope is clearly defined, and no hidden charges apply unless discussed separately.
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
            <h2 class="svc-cta__title">Ready to Get Started?</h2>
            <p class="svc-cta__text">
              Register on Khulega Online, access your dashboard at
              <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>,
              and choose the services you need to build and scale your online business.
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
                Register Now
              </a>
              <a href="/contact/" class="svc-cta__btn svc-cta__btn--secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Contact Us
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
</script>