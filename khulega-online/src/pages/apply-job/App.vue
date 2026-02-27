<template>
  <div class="page page--apply-job">
    <AppHeader />

    <main class="main">
      <HeroSection
        badge="Careers"
        title="Build the Future of"
        highlightText="Multi-Marketplace Selling"
        subtitle="We are looking for passionate, self-driven individuals who want to grow with a fast-scaling SaaS platform. If you believe in enabling small businesses and sellers across India — we would love to hear from you."
        breadcrumb="Careers"
      />

      <!-- Intro Section -->
      <section class="careers-intro">
        <div class="careers-intro__container">
          <div class="careers-intro__content">
            <p class="careers-intro__text">
              At Khulega Online, we are building a unified ecosystem that empowers sellers to
              manage and grow across multiple marketplaces through our
              <strong>Unified Seller Console (USC)</strong> at
              <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>.
            </p>
            <div class="careers-intro__tags">
              <span class="careers-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Fast-growing SaaS startup
              </span>
              <span class="careers-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Performance-driven culture
              </span>
              <span class="careers-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Skill development & exposure
              </span>
              <span class="careers-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Real impact on small businesses
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Careers Section -->
      <section class="careers">
        <div class="careers__container">
          <div class="careers__layout">

            <!-- LEFT — Job Listings -->
            <div class="careers__jobs">

              <!-- Job Listing Cards -->
              <div class="job-listings">
                <h2 class="job-listings__title">Open Positions</h2>
                <p class="job-listings__subtitle">Click on a role to view complete details</p>

                <!-- Job 1: Lead Generator -->
                <div class="job-listing" :class="{ 'job-listing--active': activeJob === 1 }">
                  <div class="job-listing__header" @click="toggleJob(1)">
                    <div class="job-listing__header-left">
                      <div class="job-listing__badge job-listing__badge--blue">
                        <span class="job-listing__badge-number">01</span>
                      </div>
                      <div class="job-listing__meta">
                        <h3 class="job-listing__title-text">Lead Generator</h3>
                        <p class="job-listing__role">Field Sales & Seller Acquisition Executive</p>
                      </div>
                    </div>
                    <div class="job-listing__header-right">
                      <div class="job-listing__tags-mini">
                        <span class="job-listing__tag-mini">Field Work</span>
                        <span class="job-listing__tag-mini">Incentive Based</span>
                      </div>
                      <button class="job-listing__toggle" :aria-expanded="activeJob === 1"
                        aria-label="Toggle job details">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline :points="activeJob === 1 ? '18 15 12 9 6 15' : '6 9 12 15 18 9'" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <transition name="job-expand">
                    <div v-if="activeJob === 1" class="job-listing__details">
                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          Objective
                        </h4>
                        <p class="job-detail__text">
                          To identify, approach, and onboard local sellers in assigned areas and
                          help them register on the Khulega Online dashboard.
                        </p>
                      </div>

                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          Role Overview
                        </h4>
                        <p class="job-detail__text">
                          As a Lead Generator, you will work at the grassroots level — meeting small
                          business owners, shopkeepers, and manufacturers in your local area. Your
                          goal is to introduce them to Khulega Online and help them start their online
                          selling journey.
                        </p>
                        <p class="job-detail__text">
                          You will use the Lead Generator dashboard to register sellers and guide them
                          through the onboarding process. You earn incentives once the registered seller
                          successfully completes onboarding and starts selling across marketplaces.
                        </p>
                      </div>

                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 11 12 14 22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                          </svg>
                          Key Responsibilities
                        </h4>
                        <ul class="job-detail__list">
                          <li>Identify potential sellers in your assigned area</li>
                          <li>Educate them about Khulega Online and USC</li>
                          <li>Assist them in account registration</li>
                          <li>Collect required business details</li>
                          <li>Coordinate with internal teams for onboarding</li>
                          <li>Follow up until activation is completed</li>
                          <li>Maintain accurate lead records</li>
                        </ul>
                      </div>

                      <div class="job-detail__two-col">
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path
                                d="M22 10v6M2 10l10-5 10 5-10 5z" />
                              <path d="M6 12v5c3 3 8 3 12 0v-5" />
                            </svg>
                            Minimal Qualification
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li>12th Pass (Graduate preferred)</li>
                            <li>Basic smartphone & internet knowledge</li>
                            <li>Strong communication skills</li>
                            <li>Self-motivated and field-ready</li>
                          </ul>
                        </div>
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706"
                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            Ideal Candidate
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li>Local market understanding</li>
                            <li>Good convincing ability</li>
                            <li>Comfortable with field visits</li>
                            <li>Performance-driven mindset</li>
                          </ul>
                        </div>
                      </div>

                      <button class="job-detail__apply-btn" @click="selectJobAndScroll('Lead Generator')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Apply for this Role
                      </button>
                    </div>
                  </transition>
                </div>

                <!-- Job 2: Compliance Manager -->
                <div class="job-listing" :class="{ 'job-listing--active': activeJob === 2 }">
                  <div class="job-listing__header" @click="toggleJob(2)">
                    <div class="job-listing__header-left">
                      <div class="job-listing__badge job-listing__badge--purple">
                        <span class="job-listing__badge-number">02</span>
                      </div>
                      <div class="job-listing__meta">
                        <h3 class="job-listing__title-text">Compliance Manager</h3>
                        <p class="job-listing__role">Seller Documentation & Regulatory Support Executive</p>
                      </div>
                    </div>
                    <div class="job-listing__header-right">
                      <div class="job-listing__tags-mini">
                        <span class="job-listing__tag-mini">Remote</span>
                        <span class="job-listing__tag-mini">Documentation</span>
                      </div>
                      <button class="job-listing__toggle" :aria-expanded="activeJob === 2"
                        aria-label="Toggle job details">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline :points="activeJob === 2 ? '18 15 12 9 6 15' : '6 9 12 15 18 9'" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <transition name="job-expand">
                    <div v-if="activeJob === 2" class="job-listing__details">
                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          Objective
                        </h4>
                        <p class="job-detail__text">
                          To manage seller compliance tickets and coordinate documentation processes
                          including GST, PAN, and FSSAI registrations.
                        </p>
                      </div>

                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          Role Overview
                        </h4>
                        <p class="job-detail__text">
                          As a Compliance Manager, you will handle seller support tickets related to
                          documentation and registrations. You will coordinate with service providers,
                          verify documents, communicate with sellers for missing information, and ensure
                          smooth delivery of final documents.
                        </p>
                        <p class="job-detail__text">
                          All communication will be managed through the ticket system inside USC.
                        </p>
                      </div>

                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 11 12 14 22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                          </svg>
                          Key Responsibilities
                        </h4>
                        <ul class="job-detail__list">
                          <li>Handle compliance-related seller tickets</li>
                          <li>Review documents submitted by sellers</li>
                          <li>Identify missing or incorrect documentation</li>
                          <li>Communicate with sellers via ticket system</li>
                          <li>Coordinate with external service providers</li>
                          <li>Ensure timely completion of registrations</li>
                          <li>Deliver final documents to sellers via dashboard</li>
                        </ul>
                      </div>

                      <div class="job-detail__two-col">
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path
                                d="M22 10v6M2 10l10-5 10 5-10 5z" />
                              <path d="M6 12v5c3 3 8 3 12 0v-5" />
                            </svg>
                            Minimal Qualification
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li>12th Pass (Graduate preferred)</li>
                            <li>Basic understanding of GST, PAN, or FSSAI</li>
                            <li>Strong attention to detail</li>
                            <li>Professional communication skills</li>
                          </ul>
                        </div>
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706"
                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            Ideal Candidate
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li>Organized and process-oriented</li>
                            <li>Patient and detail-focused</li>
                            <li>Comfortable handling documentation</li>
                            <li>Good written communication skills</li>
                          </ul>
                        </div>
                      </div>

                      <button class="job-detail__apply-btn" @click="selectJobAndScroll('Compliance Manager')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Apply for this Role
                      </button>
                    </div>
                  </transition>
                </div>

                <!-- Job 3: Catalogue Manager -->
                <div class="job-listing" :class="{ 'job-listing--active': activeJob === 3 }">
                  <div class="job-listing__header" @click="toggleJob(3)">
                    <div class="job-listing__header-left">
                      <div class="job-listing__badge job-listing__badge--emerald">
                        <span class="job-listing__badge-number">03</span>
                      </div>
                      <div class="job-listing__meta">
                        <h3 class="job-listing__title-text">Catalogue Manager</h3>
                        <p class="job-listing__role">Marketplace Listing & Product Upload Specialist</p>
                      </div>
                    </div>
                    <div class="job-listing__header-right">
                      <div class="job-listing__tags-mini">
                        <span class="job-listing__tag-mini">Remote</span>
                        <span class="job-listing__tag-mini">E-commerce</span>
                      </div>
                      <button class="job-listing__toggle" :aria-expanded="activeJob === 3"
                        aria-label="Toggle job details">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline :points="activeJob === 3 ? '18 15 12 9 6 15' : '6 9 12 15 18 9'" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <transition name="job-expand">
                    <div v-if="activeJob === 3" class="job-listing__details">
                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          Objective
                        </h4>
                        <p class="job-detail__text">
                          To assist assigned sellers in uploading and optimizing product catalogues across
                          multiple marketplaces using the Unified Seller Console.
                        </p>
                      </div>

                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          Role Overview
                        </h4>
                        <p class="job-detail__text">
                          The Catalogue Manager ensures products are listed accurately and professionally
                          across integrated marketplaces. You will manage product uploads, optimize titles
                          and descriptions, verify image quality, and ensure compliance with platform
                          requirements.
                        </p>
                      </div>

                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 11 12 14 22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                          </svg>
                          Key Responsibilities
                        </h4>
                        <ul class="job-detail__list">
                          <li>Upload product catalogues through USC</li>
                          <li>Ensure correct category mapping</li>
                          <li>Optimize product titles and descriptions</li>
                          <li>Coordinate with sellers for missing data</li>
                          <li>Ensure listing compliance with marketplace standards</li>
                          <li>Monitor listing approval status</li>
                        </ul>
                      </div>

                      <div class="job-detail__two-col">
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path
                                d="M22 10v6M2 10l10-5 10 5-10 5z" />
                              <path d="M6 12v5c3 3 8 3 12 0v-5" />
                            </svg>
                            Minimal Qualification
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li>12th Pass (Graduate preferred)</li>
                            <li>Basic knowledge of Excel</li>
                            <li>Basic understanding of e-commerce</li>
                            <li>Attention to detail</li>
                          </ul>
                        </div>
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706"
                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            Ideal Candidate
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li>Familiar with online marketplaces</li>
                            <li>Good written English skills</li>
                            <li>Detail-oriented and structured</li>
                            <li>Comfortable with repetitive tasks</li>
                          </ul>
                        </div>
                      </div>

                      <button class="job-detail__apply-btn" @click="selectJobAndScroll('Catalogue Manager')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Apply for this Role
                      </button>
                    </div>
                  </transition>
                </div>

                <!-- Job 4: Call Executive -->
                <div class="job-listing" :class="{ 'job-listing--active': activeJob === 4 }">
                  <div class="job-listing__header" @click="toggleJob(4)">
                    <div class="job-listing__header-left">
                      <div class="job-listing__badge job-listing__badge--amber">
                        <span class="job-listing__badge-number">04</span>
                      </div>
                      <div class="job-listing__meta">
                        <h3 class="job-listing__title-text">Call Executive</h3>
                        <p class="job-listing__role">Seller Outreach & Lead Qualification Executive</p>
                      </div>
                    </div>
                    <div class="job-listing__header-right">
                      <div class="job-listing__tags-mini">
                        <span class="job-listing__tag-mini">Remote / Office</span>
                        <span class="job-listing__tag-mini">Sales</span>
                      </div>
                      <button class="job-listing__toggle" :aria-expanded="activeJob === 4"
                        aria-label="Toggle job details">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline :points="activeJob === 4 ? '18 15 12 9 6 15' : '6 9 12 15 18 9'" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <transition name="job-expand">
                    <div v-if="activeJob === 4" class="job-listing__details">
                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          Objective
                        </h4>
                        <p class="job-detail__text">
                          To generate and qualify leads by introducing potential sellers to Khulega Online
                          and guiding them toward registration.
                        </p>
                      </div>

                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          Role Overview
                        </h4>
                        <p class="job-detail__text">
                          As a Call Executive, you will contact potential sellers, explain the benefits
                          of Khulega Online and the Unified Seller Console, and encourage them to register.
                          You will support the Lead Generation team by pre-qualifying interested businesses.
                        </p>
                      </div>

                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 11 12 14 22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                          </svg>
                          Key Responsibilities
                        </h4>
                        <ul class="job-detail__list">
                          <li>Make outbound calls to potential sellers</li>
                          <li>Explain Khulega Online services clearly</li>
                          <li>Answer basic queries</li>
                          <li>Qualify interested sellers</li>
                          <li>Transfer verified leads to onboarding team</li>
                          <li>Maintain call records and follow-ups</li>
                        </ul>
                      </div>

                      <div class="job-detail__two-col">
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1"
                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path
                                d="M22 10v6M2 10l10-5 10 5-10 5z" />
                              <path d="M6 12v5c3 3 8 3 12 0v-5" />
                            </svg>
                            Minimal Qualification
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li>12th Pass (Graduate preferred)</li>
                            <li>Clear spoken communication</li>
                            <li>Basic computer knowledge</li>
                            <li>Confidence in handling calls</li>
                          </ul>
                        </div>
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706"
                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            Ideal Candidate
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li>Confident communicator</li>
                            <li>Goal-oriented</li>
                            <li>Comfortable speaking to business owners</li>
                            <li>Energetic and persuasive</li>
                          </ul>
                        </div>
                      </div>

                      <button class="job-detail__apply-btn" @click="selectJobAndScroll('Call Executive')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Apply for this Role
                      </button>
                    </div>
                  </transition>
                </div>

              </div>

              <!-- Why Work With Us -->
              <div class="careers-why">
                <h3 class="careers-why__title">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Why Work with Khulega Online?
                </h3>
                <div class="careers-why__grid">
                  <div class="careers-why__item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                    <span>Fast-growing SaaS startup environment</span>
                  </div>
                  <div class="careers-why__item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Opportunity to grow with the company</span>
                  </div>
                  <div class="careers-why__item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Performance-driven culture</span>
                  </div>
                  <div class="careers-why__item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Skill development & exposure to e-commerce</span>
                  </div>
                  <div class="careers-why__item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Real impact on small business growth</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- RIGHT — Application Form (Sticky) -->
            <div class="careers__form-wrapper" ref="formRef" id="apply-form">
              <div class="careers-form">
                <div class="careers-form__header">
                  <div class="careers-form__header-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                  <h3 class="careers-form__title">Apply Now</h3>
                  <p class="careers-form__subtitle">Fill in your details and we'll get back to you</p>
                </div>

                <form class="careers-form__body" @submit.prevent="submitApplication">

                  <!-- Full Name -->
                  <div class="form-group">
                    <label class="form-label" for="fullName">
                      Full Name <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input type="text" id="fullName" v-model="form.fullName" class="form-input"
                        placeholder="Enter your full name" required />
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="form-group">
                    <label class="form-label" for="email">
                      Email Address <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input type="email" id="email" v-model="form.email" class="form-input"
                        placeholder="Enter your email address" required />
                    </div>
                  </div>

                  <!-- Phone -->
                  <div class="form-group">
                    <label class="form-label" for="phone">
                      Phone Number <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <input type="tel" id="phone" v-model="form.phone" class="form-input"
                        placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <!-- City -->
                  <div class="form-group">
                    <label class="form-label" for="city">
                      City / Location <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <input type="text" id="city" v-model="form.city" class="form-input"
                        placeholder="Enter your city or location" required />
                    </div>
                  </div>

                  <!-- Preferred Role -->
                  <div class="form-group">
                    <label class="form-label" for="preferredRole">
                      Preferred Job Role <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap form-input-wrap--select">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <select id="preferredRole" v-model="form.preferredRole" class="form-input form-select"
                        required>
                        <option value="" disabled>Select a role</option>
                        <option value="Lead Generator">Lead Generator</option>
                        <option value="Compliance Manager">Compliance Manager</option>
                        <option value="Catalogue Manager">Catalogue Manager</option>
                        <option value="Call Executive">Call Executive</option>
                      </select>
                    </div>
                  </div>

                  <!-- Qualification -->
                  <div class="form-group">
                    <label class="form-label" for="qualification">
                      Highest Qualification <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap form-input-wrap--select">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 8 3 12 0v-5" />
                      </svg>
                      <select id="qualification" v-model="form.qualification" class="form-input form-select"
                        required>
                        <option value="" disabled>Select qualification</option>
                        <option value="10th Pass">10th Pass</option>
                        <option value="12th Pass">12th Pass</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <!-- Experience -->
                  <div class="form-group">
                    <label class="form-label" for="experience">
                      Relevant Experience
                    </label>
                    <div class="form-input-wrap form-input-wrap--select">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <select id="experience" v-model="form.experience" class="form-input form-select">
                        <option value="" disabled>Select experience</option>
                        <option value="Fresher">Fresher (No experience)</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-2 years">1–2 years</option>
                        <option value="2-5 years">2–5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                  </div>

                  <!-- Why should we hire you -->
                  <div class="form-group">
                    <label class="form-label" for="message">
                      Why should we consider you?
                    </label>
                    <div class="form-input-wrap form-input-wrap--textarea">
                      <svg class="form-input-icon form-input-icon--textarea" width="18" height="18"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <textarea id="message" v-model="form.message" class="form-input form-textarea" rows="4"
                        placeholder="Tell us briefly about yourself and why you're interested..."></textarea>
                    </div>
                  </div>

                  <!-- Submit -->
                  <button type="submit" class="form-submit" :disabled="isSubmitting">
                    <template v-if="!isSubmitting">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Submit Application
                    </template>
                    <template v-else>
                      <span class="form-submit__spinner"></span>
                      Submitting...
                    </template>
                  </button>

                  <!-- Success Message -->
                  <transition name="fade">
                    <div v-if="submitSuccess" class="form-success">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669"
                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>Application submitted successfully! We'll review and get back to you soon.</span>
                    </div>
                  </transition>

                  <!-- Error Message -->
                  <transition name="fade">
                    <div v-if="submitError" class="form-error">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626"
                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      <span>Something went wrong. Please try again or contact us directly.</span>
                    </div>
                  </transition>

                </form>
              </div>
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
import { ref, nextTick } from 'vue'
import emailjs from '@emailjs/browser'

// ---- State ----
const activeJob = ref(null)
const formRef = ref(null)
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  city: '',
  preferredRole: '',
  qualification: '',
  experience: '',
  message: ''
})

// ---- Toggle Job Details ----
function toggleJob(id) {
  activeJob.value = activeJob.value === id ? null : id
}

// ---- Select Role & Scroll to Form ----
function selectJobAndScroll(roleName) {
  form.value.preferredRole = roleName
  nextTick(() => {
    const el = document.getElementById('apply-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

// ---- Submit via EmailJS ----
async function submitApplication() {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false

  const templateParams = {
    full_name: form.value.fullName,
    email: form.value.email,
    phone: form.value.phone,
    city: form.value.city,
    preferred_role: form.value.preferredRole,
    qualification: form.value.qualification,
    experience: form.value.experience || 'Not specified',
    message: form.value.message || 'No message provided'
  }

  try {
    // Replace with your EmailJS credentials
    await emailjs.send(
      'YOUR_SERVICE_ID',     // e.g., 'service_xxxxx'
      'YOUR_TEMPLATE_ID',    // e.g., 'template_xxxxx'
      templateParams,
      'YOUR_PUBLIC_KEY'      // e.g., 'xxxxxxxxxxxxxxx'
    )

    submitSuccess.value = true
    // Reset form
    form.value = {
      fullName: '',
      email: '',
      phone: '',
      city: '',
      preferredRole: '',
      qualification: '',
      experience: '',
      message: ''
    }

    // Auto-hide success after 8 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 8000)

  } catch (error) {
    console.error('EmailJS Error:', error)
    submitError.value = true

    setTimeout(() => {
      submitError.value = false
    }, 8000)
  } finally {
    isSubmitting.value = false
  }
}
</script>