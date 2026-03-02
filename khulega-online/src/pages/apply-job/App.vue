<template>
  <div class="page page--apply-job">
    <AppHeader />

    <main class="main">
      <HeroSection
        :badge="t('hero.badge')"
        :title="t('hero.title')"
        :highlightText="t('hero.highlightText')"
        :subtitle="t('hero.subtitle')"
        :breadcrumb="t('hero.breadcrumb')"
      />

      <!-- Intro Section -->
      <section class="careers-intro">
        <div class="careers-intro__container">
          <div class="careers-intro__content">
            <p class="careers-intro__text">
              {{ t('intro.text') }}
              <strong>Unified Seller Console (USC)</strong>
              {{ t('intro.textEnd') }}
              <a href="https://usc.khulega.online" target="_blank" rel="noopener">usc.khulega.online</a>.
            </p>
            <div class="careers-intro__tags">
              <span v-for="(tag, i) in (t('intro.tags') || [])" :key="i" class="careers-intro__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {{ tag }}
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

              <div class="job-listings">
                <h2 class="job-listings__title">{{ t('listings.title') }}</h2>
                <p class="job-listings__subtitle">{{ t('listings.subtitle') }}</p>

                <div v-for="(job, jobIdx) in jobs" :key="jobIdx" class="job-listing" :class="{ 'job-listing--active': activeJob === jobIdx + 1 }">
                  <div class="job-listing__header" @click="toggleJob(jobIdx + 1)">
                    <div class="job-listing__header-left">
                      <div class="job-listing__badge" :class="['job-listing__badge--blue','job-listing__badge--purple','job-listing__badge--emerald','job-listing__badge--amber'][jobIdx]">
                        <span class="job-listing__badge-number">0{{ jobIdx + 1 }}</span>
                      </div>
                      <div class="job-listing__meta">
                        <h3 class="job-listing__title-text">{{ job.title }}</h3>
                        <p class="job-listing__role">{{ job.role }}</p>
                      </div>
                    </div>
                    <div class="job-listing__header-right">
                      <div class="job-listing__tags-mini">
                        <span v-for="(tag, ti) in (job.tags || [])" :key="ti" class="job-listing__tag-mini">{{ tag }}</span>
                      </div>
                      <button class="job-listing__toggle" :aria-expanded="activeJob === jobIdx + 1"
                        aria-label="Toggle job details">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline :points="activeJob === jobIdx + 1 ? '18 15 12 9 6 15' : '6 9 12 15 18 9'" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <transition name="job-expand">
                    <div v-if="activeJob === jobIdx + 1" class="job-listing__details">
                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                          {{ t('labels.objective') }}
                        </h4>
                        <p class="job-detail__text">{{ job.objective }}</p>
                      </div>
                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                          {{ t('labels.roleOverview') }}
                        </h4>
                        <p v-for="(p, pi) in (job.roleOverview || [])" :key="pi" class="job-detail__text">{{ p }}</p>
                      </div>
                      <div class="job-detail">
                        <h4 class="job-detail__heading">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                          {{ t('labels.keyResponsibilities') }}
                        </h4>
                        <ul class="job-detail__list">
                          <li v-for="(r, ri) in (job.keyResponsibilities || [])" :key="ri">{{ r }}</li>
                        </ul>
                      </div>
                      <div class="job-detail__two-col">
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 8 3 12 0v-5"/></svg>
                            {{ t('labels.minimalQualification') }}
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li v-for="(q, qi) in (job.minimalQual || [])" :key="qi">{{ q }}</li>
                          </ul>
                        </div>
                        <div class="job-detail">
                          <h4 class="job-detail__heading job-detail__heading--sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            {{ t('labels.idealCandidate') }}
                          </h4>
                          <ul class="job-detail__list job-detail__list--compact">
                            <li v-for="(c, ci) in (job.idealCandidate || [])" :key="ci">{{ c }}</li>
                          </ul>
                        </div>
                      </div>
                      <button class="job-detail__apply-btn" @click="selectJobAndScroll(job.value)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        {{ t('labels.applyForRole') }}
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
                  {{ t('why.title') }}
                </h3>
                <div class="careers-why__grid">
                  <div v-for="(item, i) in (t('why.items') || [])" :key="i" class="careers-why__item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{{ item }}</span>
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
                  <h3 class="careers-form__title">{{ t('form.title') }}</h3>
                  <p class="careers-form__subtitle">{{ t('form.subtitle') }}</p>
                </div>

                <form class="careers-form__body" @submit.prevent="submitApplication">

                  <!-- Full Name -->
                  <div class="form-group">
                    <label class="form-label" for="fullName">
                      {{ t('form.fullName') }} <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input type="text" id="fullName" v-model="form.fullName" class="form-input"
                        :placeholder="t('form.fullNamePlaceholder')" required />
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="form-group">
                    <label class="form-label" for="email">
                      {{ t('form.email') }} <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input type="email" id="email" v-model="form.email" class="form-input"
                        :placeholder="t('form.emailPlaceholder')" required />
                    </div>
                  </div>

                  <!-- Phone -->
                  <div class="form-group">
                    <label class="form-label" for="phone">
                      {{ t('form.phone') }} <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span class="form-phone-prefix">+91</span>
                      <input
                        type="tel"
                        id="phone"
                        v-model="form.phone"
                        class="form-input"
                        placeholder="XXXXXXXXXX"
                        inputmode="numeric"
                        pattern="[0-9]{10}"
                        @input="handlePhoneInput"
                        required
                      />
                    </div>
                  </div>

                  <!-- City -->
                  <div class="form-group">
                    <label class="form-label" for="city">
                      {{ t('form.city') }} <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <input type="text" id="city" v-model="form.city" class="form-input"
                        :placeholder="t('form.cityPlaceholder')" required />
                    </div>
                  </div>

                  <!-- Preferred Role -->
                  <div class="form-group">
                    <label class="form-label" for="preferredRole">
                      {{ t('form.preferredRole') }} <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap form-input-wrap--select">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <select id="preferredRole" v-model="form.preferredRole" class="form-input form-select"
                        required>
                        <option value="" disabled>{{ t('form.rolePlaceholder') }}</option>
                        <option v-for="(job, j) in jobs" :key="j" :value="job.value">{{ job.title }}</option>
                      </select>
                    </div>
                  </div>

                  <!-- Qualification -->
                  <div class="form-group">
                    <label class="form-label" for="qualification">
                      {{ t('form.qualification') }} <span class="form-required">*</span>
                    </label>
                    <div class="form-input-wrap form-input-wrap--select">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 8 3 12 0v-5" />
                      </svg>
                      <select id="qualification" v-model="form.qualification" class="form-input form-select"
                        required>
                        <option value="" disabled>{{ t('form.qualificationPlaceholder') }}</option>
                        <option v-for="(opt, oi) in (t('form.qualOptions') || [])" :key="oi" :value="['10th Pass','12th Pass','Graduate','Post Graduate','Other'][oi]">{{ opt }}</option>
                      </select>
                    </div>
                  </div>

                  <!-- Experience -->
                  <div class="form-group">
                    <label class="form-label" for="experience">
                      {{ t('form.experience') }}
                    </label>
                    <div class="form-input-wrap form-input-wrap--select">
                      <svg class="form-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <select id="experience" v-model="form.experience" class="form-input form-select">
                        <option value="" disabled>{{ t('form.experiencePlaceholder') }}</option>
                        <option v-for="(opt, oi) in (t('form.experienceOptions') || [])" :key="oi" :value="['Fresher','Less than 1 year','1-2 years','2-5 years','5+ years'][oi]">{{ opt }}</option>
                      </select>
                    </div>
                  </div>

                  <!-- Why should we hire you -->
                  <div class="form-group">
                    <label class="form-label" for="message">
                      {{ t('form.message') }}
                    </label>
                    <div class="form-input-wrap form-input-wrap--textarea">
                      <svg class="form-input-icon form-input-icon--textarea" width="18" height="18"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <textarea id="message" v-model="form.message" class="form-input form-textarea" rows="4"
                        :placeholder="t('form.messagePlaceholder')"></textarea>
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
                      {{ t('form.submit') }}
                    </template>
                    <template v-else>
                      <span class="form-submit__spinner"></span>
                      {{ t('form.submitting') }}
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
                      <span>{{ t('form.success') }}</span>
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
                      <span>{{ t('form.error') }}</span>
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
import { ref, nextTick, computed } from 'vue'
import emailjs from '@emailjs/browser'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('applyJob')
const jobs = computed(() => t('jobs') || [])

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

function handlePhoneInput() {
  const raw = (form.value.phone || '').replace(/\D/g, '').slice(0, 10)
  form.value.phone = raw
}

// ---- Toggle Job Details ----
function toggleJob(id) {
  activeJob.value = activeJob.value === id ? null : id
}

function selectJobAndScroll(roleValue) {
  form.value.preferredRole = roleValue
  nextTick(() => {
    const el = document.getElementById('apply-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

// ---- Submit via EmailJS ----
// EmailJS: same service as Contact; template = New Job Application (Briefcase)
const EMAILJS_PUBLIC_KEY = 'dLbCE5BH1XMiSd_03'
const EMAILJS_SERVICE_ID = 'service_5bbk3zc'
const EMAILJS_TEMPLATE_ID_APPLY_JOB = 'template_uynki98'

async function submitApplication() {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false

  const now = new Date()
  const dateStr = now.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const templateParams = {
    date: dateStr,
    job_role: form.value.preferredRole,
    qualification: form.value.qualification,
    experience: form.value.experience || 'Not specified',
    full_name: form.value.fullName,
    email: form.value.email,
    phone: form.value.phone ? `+91 ${form.value.phone}` : form.value.phone,
    city: form.value.city,
    message: form.value.message || 'No message provided'
  }

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_APPLY_JOB,
      templateParams,
      EMAILJS_PUBLIC_KEY
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