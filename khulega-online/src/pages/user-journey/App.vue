<template>
  <div class="page page--user-journey">
    <AppHeader />

    <main class="main">
      <HeroSection
        badge="User Journey"
        title="Your Path to"
        highlightText="Multi-Channel Success"
        subtitle="From registration to scaling — discover how Khulega Online transforms your selling experience in six simple steps."
        breadcrumb="User Journey"
      />

      <!-- Journey Section -->
      <section class="journey">
        <div class="journey__container">

          <!-- Connecting Line (Desktop) -->
          <div class="journey__line" aria-hidden="true"></div>

          <!-- Step 01 — Register -->
          <div class="journey__step journey__step--right">
            <div class="journey__step-content">
              <div class="journey__step-badge">
                <span class="journey__step-number">01</span>
                <span class="journey__step-label">Register</span>
              </div>
              <h2 class="journey__step-title">Create Your Account in Minutes</h2>
              <p class="journey__step-text">
                Click the Register button and access the Unified Seller Console at
                <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>.
                Sign up with basic details — no lengthy paperwork, no complicated onboarding.
                Just a smooth start to your seller journey.
              </p>
              <div class="journey__step-highlights">
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>No lengthy paperwork</span>
                </div>
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Quick & simple onboarding</span>
                </div>
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Instant console access</span>
                </div>
              </div>
            </div>
            <div class="journey__step-visual">
              <div class="journey__step-marker" aria-hidden="true">
                <span>01</span>
              </div>
              <div class="journey__step-image">
                <img src="/assets/images/step1.webp" alt="Register" class="journey__step-img" />
              </div>
            </div>
          </div>

          <!-- Step 02 — Apply -->
          <div class="journey__step journey__step--left">
            <div class="journey__step-visual">
              <div class="journey__step-marker" aria-hidden="true">
                <span>02</span>
              </div>
              <div class="journey__step-image">
                <img src="/assets/images/step2.webp" alt="Apply" class="journey__step-img" />
              </div>
            </div>
            <div class="journey__step-content">
              <div class="journey__step-badge journey__step-badge--purple">
                <span class="journey__step-number">02</span>
                <span class="journey__step-label">Apply</span>
              </div>
              <h2 class="journey__step-title">Submit Your Business Profile for Approval</h2>
              <p class="journey__step-text">
                Complete your seller profile by adding essential business information. Our team
                reviews every application carefully to ensure compliance and platform quality.
                Once verified, you're ready to unlock the full power of Khulega Online.
              </p>
              <div class="journey__step-highlights">
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Easy profile setup</span>
                </div>
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Manual quality review</span>
                </div>
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Compliance assured</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 03 — Unlock -->
          <div class="journey__step journey__step--right">
            <div class="journey__step-content">
              <div class="journey__step-badge journey__step-badge--emerald">
                <span class="journey__step-number">03</span>
                <span class="journey__step-label">Unlock</span>
              </div>
              <h2 class="journey__step-title">Access Your Unified Seller Dashboard</h2>
              <p class="journey__step-text">
                After approval, your dashboard becomes fully active. From one centralized
                console, you can manage listings, track inventory, monitor orders, and view
                performance analytics — all in a single interface designed for growth.
              </p>
              <div class="journey__step-features">
                <div class="journey__step-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                  </svg>
                  <span>Manage Listings</span>
                </div>
                <div class="journey__step-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                  <span>Track Inventory</span>
                </div>
                <div class="journey__step-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  <span>Monitor Orders</span>
                </div>
                <div class="journey__step-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  <span>View Analytics</span>
                </div>
              </div>
            </div>
            <div class="journey__step-visual">
              <div class="journey__step-marker" aria-hidden="true">
                <span>03</span>
              </div>
              <div class="journey__step-image">
                <img src="/assets/images/step3.webp" alt="Unlock - Dashboard" class="journey__step-img" />
              </div>
            </div>
          </div>

          <!-- Step 04 — Assist -->
          <div class="journey__step journey__step--left">
            <div class="journey__step-visual">
              <div class="journey__step-marker" aria-hidden="true">
                <span>04</span>
              </div>
              <div class="journey__step-image">
                <img src="/assets/images/step4.webp" alt="Assist - Support" class="journey__step-img" />
              </div>
            </div>
            <div class="journey__step-content">
              <div class="journey__step-badge journey__step-badge--amber">
                <span class="journey__step-number">04</span>
                <span class="journey__step-label">Assist</span>
              </div>
              <h2 class="journey__step-title">Get Professional Support When You Need It</h2>
              <p class="journey__step-text">
                Need help with documentation, GST compliance, branding, or catalog optimization?
                Request expert assistance directly from your dashboard. Our team guides you
                step-by-step to ensure your business goes live smoothly and confidently.
              </p>
              <div class="journey__step-highlights">
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Documentation assistance</span>
                </div>
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>GST compliance support</span>
                </div>
                <div class="journey__step-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Branding & catalog optimization</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 05 — Connect -->
          <div class="journey__step journey__step--right">
            <div class="journey__step-content">
              <div class="journey__step-badge journey__step-badge--rose">
                <span class="journey__step-number">05</span>
                <span class="journey__step-label">Connect</span>
              </div>
              <h2 class="journey__step-title">Integrate Multiple Marketplaces from One Console</h2>
              <p class="journey__step-text">
                Link leading marketplaces and upload your product catalogue once. Publish across
                all connected platforms simultaneously — eliminating repetitive work and reducing errors.
              </p>
              <div class="journey__step-marketplaces">
                <span class="journey__marketplace-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Amazon
                </span>
                <span class="journey__marketplace-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Flipkart
                </span>
                <span class="journey__marketplace-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Meesho
                </span>
                <span class="journey__marketplace-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  JioMart
                </span>
                <span class="journey__marketplace-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  ONDC
                </span>
              </div>
              <div class="journey__step-info">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>Upload once, publish everywhere — no repetitive work.</span>
              </div>
            </div>
            <div class="journey__step-visual">
              <div class="journey__step-marker" aria-hidden="true">
                <span>05</span>
              </div>
              <div class="journey__step-image">
                <img src="/assets/images/step5.webp" alt="Connect - Marketplaces" class="journey__step-img" />
              </div>
            </div>
          </div>

          <!-- Step 06 — Scale -->
          <div class="journey__step journey__step--left">
            <div class="journey__step-visual">
              <div class="journey__step-marker" aria-hidden="true">
                <span>06</span>
              </div>
              <div class="journey__step-image">
                <img src="/assets/images/step6.webp" alt="Scale - Grow" class="journey__step-img" />
              </div>
            </div>
            <div class="journey__step-content">
              <div class="journey__step-badge journey__step-badge--green">
                <span class="journey__step-number">06</span>
                <span class="journey__step-label">Scale</span>
              </div>
              <h2 class="journey__step-title">Start Selling, Track Performance & Grow</h2>
              <p class="journey__step-text">
                Your products go live across every connected marketplace. Manage orders, analyze
                performance, optimize pricing, and scale your operations — all from one unified
                system. Khulega Online gives you complete control over your multi-channel growth.
              </p>
              <div class="journey__step-features">
                <div class="journey__step-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  <span>Manage Orders</span>
                </div>
                <div class="journey__step-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  <span>Analyze Performance</span>
                </div>
                <div class="journey__step-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span>Optimize Pricing</span>
                </div>
                <div class="journey__step-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <span>Scale Operations</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- CTA Section -->
      <section class="journey-cta">
        <div class="journey-cta__container">
          <div class="journey-cta__content">
            <div class="journey-cta__icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h2 class="journey-cta__title">Ready to Start Your Journey?</h2>
            <p class="journey-cta__text">
              Join Khulega Online today and take control of your multi-channel selling.
              Register now and unlock the Unified Seller Console.
            </p>
            <div class="journey-cta__actions">
              <a href="https://usc.khulega.online/auth/register" target="_blank" rel="noopener" class="journey-cta__btn journey-cta__btn--primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Register Now
              </a>
              <a href="/contact/" class="journey-cta__btn journey-cta__btn--secondary">
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