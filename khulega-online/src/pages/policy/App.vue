<template>
  <div class="page page--policy">
    <AppHeader />

    <main class="main">
      <HeroSection
        badge="Privacy Policy"
        title="Khulega Online"
        highlightText="Privacy Policy"
        subtitle="Your privacy matters. Learn how we collect, use, and protect your information."
        breadcrumb="Privacy Policy"
      />

      <section class="policy-content">
        <div class="policy-content__container">

          <!-- Intro -->
          <div class="policy-intro">
            <div class="policy-intro__icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 class="policy-intro__heading">1. Introduction</h2>
            <p class="policy-intro__text">
              Welcome to <strong>Khulega Online</strong>.
            </p>
            <p class="policy-intro__text">
              This Privacy Policy explains how we collect, use, store, process, and protect your information when you access:
            </p>
            <div class="policy-links-grid">
              <a href="https://khulega.online" target="_blank" rel="noopener" class="policy-link-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div>
                  <span class="policy-link-card__label">Website</span>
                  <span class="policy-link-card__url">khulega.online</span>
                </div>
              </a>
              <a href="https://usc.khulega.online" target="_blank" rel="noopener" class="policy-link-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <div>
                  <span class="policy-link-card__label">Unified Seller Console</span>
                  <span class="policy-link-card__url">usc.khulega.online</span>
                </div>
              </a>
            </div>
            <div class="policy-intro__notice">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>By using Khulega Online, you agree to the practices described in this Privacy Policy.</span>
            </div>

            <div class="policy-intro__updated">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Last Updated: {{ currentDate }}</span>
            </div>
          </div>

          <!-- Section Cards -->
          <div class="policy-sections">

            <!-- 2. Who We Are -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">2</span>
                <h2 class="policy-card__title">Who We Are</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">
                  Khulega Online is a SaaS-enabled platform that helps sellers integrate and manage multiple marketplaces from a centralized dashboard (USC).
                </p>
                <p class="policy-card__text policy-card__text--mt">We act as:</p>
                <div class="policy-role-grid">
                  <div class="policy-role-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    <span>A technology service provider</span>
                  </div>
                  <div class="policy-role-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span>A data processor for marketplace integrations</span>
                  </div>
                  <div class="policy-role-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>A service provider for optional seller support services</span>
                  </div>
                </div>
                <div class="policy-card__highlight">
                  We are not a marketplace and do not directly sell products to customers.
                </div>
              </div>
            </div>

            <!-- 3. Information We Collect -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">3</span>
                <h2 class="policy-card__title">Information We Collect</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">
                  We collect information in the following categories:
                </p>

                <!-- 3.1 -->
                <div class="policy-subsection">
                  <h3 class="policy-subsection__title">
                    <span class="policy-subsection__badge">3.1</span>
                    Personal & Business Information
                  </h3>
                  <p class="policy-card__text">When you register or contact us, we may collect:</p>
                  <div class="policy-data-grid">
                    <div class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>Full name</span>
                    </div>
                    <div class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                      <span>Business name</span>
                    </div>
                    <div class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>Email address</span>
                    </div>
                    <div class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>Phone number</span>
                    </div>
                    <div class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span>GST details (if applicable)</span>
                    </div>
                    <div class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                      <span>Bank account details (if required)</span>
                    </div>
                    <div class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                        <polyline points="13 2 13 9 20 9" />
                      </svg>
                      <span>Business registration documents</span>
                    </div>
                    <div class="policy-data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>KYC documents</span>
                    </div>
                  </div>
                </div>

                <!-- 3.2 -->
                <div class="policy-subsection">
                  <h3 class="policy-subsection__title">
                    <span class="policy-subsection__badge">3.2</span>
                    Account & Usage Information
                  </h3>
                  <p class="policy-card__text">
                    When using the Unified Seller Console
                    (<a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>),
                    we may collect:
                  </p>
                  <ul class="policy-list policy-list--check">
                    <li>Login credentials (encrypted)</li>
                    <li>IP address</li>
                    <li>Device information</li>
                    <li>Browser type</li>
                    <li>Login timestamps</li>
                    <li>Platform activity logs</li>
                    <li>API integration details</li>
                  </ul>
                </div>

                <!-- 3.3 -->
                <div class="policy-subsection">
                  <h3 class="policy-subsection__title">
                    <span class="policy-subsection__badge">3.3</span>
                    Marketplace Integration Data
                  </h3>
                  <p class="policy-card__text">When you connect marketplaces such as:</p>
                  <div class="policy-marketplace-tags">
                    <span class="policy-marketplace-tag">Amazon</span>
                    <span class="policy-marketplace-tag">Flipkart</span>
                    <span class="policy-marketplace-tag">Meesho</span>
                    <span class="policy-marketplace-tag">JioMart</span>
                    <span class="policy-marketplace-tag">ONDC</span>
                  </div>
                  <p class="policy-card__text policy-card__text--mt">We may process:</p>
                  <ul class="policy-list policy-list--arrow">
                    <li>Product listings</li>
                    <li>Inventory data</li>
                    <li>Order data</li>
                    <li>Pricing information</li>
                    <li>Sales analytics</li>
                  </ul>
                  <div class="policy-card__highlight">
                    This data is processed strictly for platform functionality.
                  </div>
                </div>

                <!-- 3.4 -->
                <div class="policy-subsection">
                  <h3 class="policy-subsection__title">
                    <span class="policy-subsection__badge">3.4</span>
                    Website Data
                  </h3>
                  <p class="policy-card__text">When visiting khulega.online:</p>
                  <ul class="policy-list policy-list--check">
                    <li>Cookies</li>
                    <li>Analytics data</li>
                    <li>Page visits</li>
                    <li>Traffic source</li>
                    <li>Device/browser details</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 4. How We Use Your Information -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">4</span>
                <h2 class="policy-card__title">How We Use Your Information</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">We use collected information to:</p>
                <ul class="policy-list policy-list--check">
                  <li>Provide and maintain platform services</li>
                  <li>Enable marketplace integrations</li>
                  <li>Manage seller accounts</li>
                  <li>Provide customer support</li>
                  <li>Improve platform performance</li>
                  <li>Send service-related communication</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud or misuse</li>
                </ul>
                <div class="policy-card__alert policy-card__alert--danger">
                  We do not sell your personal or business data.
                </div>
              </div>
            </div>

            <!-- 5. Legal Basis for Processing -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">5</span>
                <h2 class="policy-card__title">Legal Basis for Processing</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">We process your data based on:</p>
                <div class="policy-basis-grid">
                  <div class="policy-basis-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Your consent</span>
                  </div>
                  <div class="policy-basis-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span>Performance of a contract</span>
                  </div>
                  <div class="policy-basis-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>Legal compliance requirements</span>
                  </div>
                  <div class="policy-basis-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Legitimate business interests</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 6. Data Sharing & Disclosure -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">6</span>
                <h2 class="policy-card__title">Data Sharing & Disclosure</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">We may share information with:</p>

                <div class="policy-subsection">
                  <h3 class="policy-subsection__title">
                    <span class="policy-subsection__badge">6.1</span>
                    Third-Party Marketplaces
                  </h3>
                  <div class="policy-card__highlight">
                    For integration functionality only.
                  </div>
                </div>

                <div class="policy-subsection">
                  <h3 class="policy-subsection__title">
                    <span class="policy-subsection__badge">6.2</span>
                    Service Providers
                  </h3>
                  <p class="policy-card__text">Including:</p>
                  <ul class="policy-list policy-list--arrow">
                    <li>Cloud hosting providers</li>
                    <li>Payment processors</li>
                    <li>Technical service vendors</li>
                    <li>Analytics providers</li>
                  </ul>
                </div>

                <div class="policy-subsection">
                  <h3 class="policy-subsection__title">
                    <span class="policy-subsection__badge">6.3</span>
                    Legal Authorities
                  </h3>
                  <p class="policy-card__text">
                    If required by law, court order, or government request.
                  </p>
                </div>

                <div class="policy-card__alert policy-card__alert--danger">
                  We do not sell or rent your data to advertisers.
                </div>
              </div>
            </div>

            <!-- 7. Data Storage & Security -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">7</span>
                <h2 class="policy-card__title">Data Storage & Security</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">
                  We implement reasonable technical and organizational safeguards, including:
                </p>
                <div class="policy-security-grid">
                  <div class="policy-security-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Encrypted data transmission (SSL)</span>
                  </div>
                  <div class="policy-security-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>Role-based access controls</span>
                  </div>
                  <div class="policy-security-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                    <span>Secure hosting infrastructure</span>
                  </div>
                  <div class="policy-security-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>Access monitoring</span>
                  </div>
                  <div class="policy-security-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Firewall and security protocols</span>
                  </div>
                </div>
                <div class="policy-card__alert">
                  However, no system can guarantee absolute security.
                </div>
              </div>
            </div>

            <!-- 8. Data Retention -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">8</span>
                <h2 class="policy-card__title">Data Retention</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">We retain your data:</p>
                <ul class="policy-list policy-list--arrow">
                  <li>For as long as your account remains active</li>
                  <li>As required for legal or regulatory compliance</li>
                  <li>As necessary to resolve disputes</li>
                </ul>
                <div class="policy-card__highlight">
                  Upon account termination, we may delete or anonymize data, except where legally required to retain it.
                </div>
              </div>
            </div>

            <!-- 9. Cookies & Tracking -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">9</span>
                <h2 class="policy-card__title">Cookies & Tracking Technologies</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">Khulega Online uses cookies to:</p>
                <ul class="policy-list policy-list--check">
                  <li>Improve website functionality</li>
                  <li>Analyze traffic patterns</li>
                  <li>Enhance user experience</li>
                  <li>Remember login sessions</li>
                </ul>
                <div class="policy-card__alert">
                  You may disable cookies in your browser settings, but certain features may not function properly.
                </div>
              </div>
            </div>

            <!-- 10. Your Rights -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">10</span>
                <h2 class="policy-card__title">Your Rights</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">
                  Depending on applicable laws, you may have the right to:
                </p>
                <div class="policy-rights-grid">
                  <div class="policy-rights-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>Access your data</span>
                  </div>
                  <div class="policy-rights-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    <span>Request correction</span>
                  </div>
                  <div class="policy-rights-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                    <span>Request deletion (subject to legal limitations)</span>
                  </div>
                  <div class="policy-rights-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span>Withdraw consent</span>
                  </div>
                  <div class="policy-rights-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    </svg>
                    <span>Object to processing</span>
                  </div>
                </div>
                <div class="policy-card__info-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Requests can be sent to:
                    <a href="mailto:admin@techsandhya.com">admin@techsandhya.com</a>
                  </span>
                </div>
              </div>
            </div>

            <!-- 11. Third-Party Links -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">11</span>
                <h2 class="policy-card__title">Third-Party Links</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">
                  Our website or USC dashboard may contain links to third-party websites.
                </p>
                <ul class="policy-list policy-list--warning">
                  <li>We are not responsible for the privacy practices of external platforms.</li>
                  <li>You are advised to review their privacy policies separately.</li>
                </ul>
              </div>
            </div>

            <!-- 12. Children's Privacy -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">12</span>
                <h2 class="policy-card__title">Children's Privacy</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">
                  Khulega Online is intended for business users.
                </p>
                <div class="policy-card__alert policy-card__alert--danger">
                  We do not knowingly collect data from individuals under 18 years of age.
                </div>
              </div>
            </div>

            <!-- 13. International Data Transfers -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">13</span>
                <h2 class="policy-card__title">International Data Transfers</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">
                  If data is stored or processed outside India:
                </p>
                <ul class="policy-list policy-list--check">
                  <li>We ensure appropriate safeguards are in place</li>
                  <li>Data protection standards are maintained</li>
                </ul>
              </div>
            </div>

            <!-- 14. Updates to This Privacy Policy -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">14</span>
                <h2 class="policy-card__title">Updates to This Privacy Policy</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">
                  We may update this Privacy Policy periodically. Updated versions will be posted on
                  <a href="https://khulega.online" target="_blank" rel="noopener">khulega.online</a>.
                </p>
                <div class="policy-card__highlight">
                  Continued use of the platform indicates acceptance of revised policies.
                </div>
              </div>
            </div>

            <!-- 15. Contact Information -->
            <div class="policy-card">
              <div class="policy-card__header">
                <span class="policy-card__number">15</span>
                <h2 class="policy-card__title">Contact Information</h2>
              </div>
              <div class="policy-card__body">
                <p class="policy-card__text">For any privacy-related concerns:</p>
                <div class="policy-contact-grid">
                  <a href="mailto:admin@techsandhya.com" class="policy-contact-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <span class="policy-contact-card__label">Email</span>
                      <span class="policy-contact-card__value">admin@techsandhya.com</span>
                    </div>
                  </a>
                  <a href="https://khulega.online" target="_blank" rel="noopener" class="policy-contact-card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <div>
                      <span class="policy-contact-card__label">Website</span>
                      <span class="policy-contact-card__value">khulega.online</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <!-- Consent / Acceptance -->
          <div class="policy-acceptance">
            <div class="policy-acceptance__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 class="policy-acceptance__title">Consent</h2>
            <p class="policy-acceptance__text">
              By using
              <a href="https://khulega.online" target="_blank" rel="noopener">khulega.online</a>
              and the Unified Seller Console
              (<a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>),
              you consent to:
            </p>
            <ul class="policy-acceptance__list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                The collection of information as described in this Privacy Policy
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                The use of information as described in this Privacy Policy
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                The processing and storage practices outlined herein
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