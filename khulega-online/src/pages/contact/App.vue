<template>
  <div class="page page--contact">
    <AppHeader />

    <main class="main">
      <HeroSection
        badge="Contact Us"
        title="Get in Touch"
        highlightText="With Our Team"
        subtitle="Have questions about Khulega Online? We'd love to hear from you. Reach out and our team will get back to you promptly."
        breadcrumb="Contact Us"
      />

      <!-- Contact Section -->
      <section class="contact">
        <div class="contact__container">
          <div class="contact__grid">

            <!-- LEFT: Contact Form -->
            <div class="contact__form-wrapper">
              <div class="contact__form-card">
                <div class="contact__form-header">
                  <div class="contact__form-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 class="contact__form-title">Send Us a Message</h2>
                    <p class="contact__form-subtitle">Fill the form below and we'll respond within 24 hours.</p>
                  </div>
                </div>

                <form class="contact__form" @submit.prevent="handleSubmit">
                  <div class="contact__form-row">
                    <div class="contact__form-group">
                      <label class="contact__label" for="firstName">First Name <span>*</span></label>
                      <div class="contact__input-wrap">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <input
                          id="firstName"
                          v-model="form.firstName"
                          type="text"
                          class="contact__input"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                    </div>
                    <div class="contact__form-group">
                      <label class="contact__label" for="lastName">Last Name <span>*</span></label>
                      <div class="contact__input-wrap">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <input
                          id="lastName"
                          v-model="form.lastName"
                          type="text"
                          class="contact__input"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="contact__form-group">
                    <label class="contact__label" for="email">Email Address <span>*</span></label>
                    <div class="contact__input-wrap">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="contact__input"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div class="contact__form-group">
                    <label class="contact__label" for="phone">Phone Number <span>*</span></label>
                    <div class="contact__input-wrap">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span class="contact__phone-prefix">+91</span>
                      <input
                        id="phone"
                        v-model="form.phone"
                        type="tel"
                        class="contact__input"
                        placeholder="XXXXXXXXXX"
                        inputmode="numeric"
                        pattern="[0-9]{10}"
                        @input="handlePhoneInput"
                        required
                      />
                    </div>
                  </div>

                  <div class="contact__form-group">
                    <label class="contact__label" for="businessName">Business Name</label>
                    <div class="contact__input-wrap">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                      <input
                        id="businessName"
                        v-model="form.businessName"
                        type="text"
                        class="contact__input"
                        placeholder="Your business name (optional)"
                      />
                    </div>
                  </div>

                  <div class="contact__form-group">
                    <label class="contact__label" for="subject">Subject <span>*</span></label>
                    <div class="contact__select-wrap">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <select
                        id="subject"
                        v-model="form.subject"
                        class="contact__select"
                        required
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="seller-onboarding">Seller Onboarding</option>
                        <option value="marketplace-integration">Marketplace Integration</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                      <svg class="contact__select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  <div class="contact__form-group">
                    <label class="contact__label" for="message">Message <span>*</span></label>
                    <div class="contact__textarea-wrap">
                      <textarea
                        id="message"
                        v-model="form.message"
                        class="contact__textarea"
                        placeholder="Tell us how we can help you..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" class="contact__submit" :disabled="isSubmitting">
                    <template v-if="!isSubmitting">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </template>
                    <template v-else>
                      <span class="contact__spinner"></span>
                      Sending...
                    </template>
                  </button>
                </form>

                <!-- Success Message -->
                <div v-if="showSuccess" class="contact__success">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                </div>

                <!-- Error Message -->
                <div v-if="showError" class="contact__success" style="border-color: #ef4444; background: #fef2f2;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <div>
                    <strong>Something went wrong</strong>
                    <p>Please try again or email us at admin@techsandhya.com</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- RIGHT: Contact Information -->
            <div class="contact__info-wrapper">

              <!-- Company Card -->
              <div class="contact__company-card">
                <div class="contact__company-logo-img-wrap">
                  <img
                    src="/assets/images/techsandhyalogo.png"
                    alt="Techsandhya"
                    class="contact__company-logo-img"
                  />
                </div>
                <h3 class="contact__company-name">Sandhya Technology Solutions and Operations LLP</h3>
                <p class="contact__company-desc">
                  The parent company behind Khulega Online — building technology solutions that empower sellers across India.
                </p>
                <div class="contact__company-links">
                  <a href="https://www.techsandhya.com" target="_blank" rel="noopener" class="contact__company-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    techsandhya.com
                  </a>
                  <a href="https://khulega.online" target="_blank" rel="noopener" class="contact__company-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    khulega.online
                  </a>
                </div>
              </div>

              <!-- Contact Details Cards -->
              <div class="contact__details">

                <!-- Email -->
                <a href="mailto:admin@techsandhya.com" class="contact__detail-card">
                  <div class="contact__detail-icon contact__detail-icon--blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div class="contact__detail-info">
                    <span class="contact__detail-label">Email</span>
                    <span class="contact__detail-value">admin@techsandhya.com</span>
                  </div>
                  <svg class="contact__detail-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <!-- Phone -->
                <a href="tel:+919226697740" class="contact__detail-card">
                  <div class="contact__detail-icon contact__detail-icon--green">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div class="contact__detail-info">
                    <span class="contact__detail-label">Phone</span>
                    <span class="contact__detail-value">+91-9226697740</span>
                  </div>
                  <svg class="contact__detail-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <!-- Website -->
                <a href="https://www.techsandhya.com" target="_blank" rel="noopener" class="contact__detail-card">
                  <div class="contact__detail-icon contact__detail-icon--purple">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div class="contact__detail-info">
                    <span class="contact__detail-label">Website</span>
                    <span class="contact__detail-value">www.techsandhya.com</span>
                  </div>
                  <svg class="contact__detail-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <!-- USC Platform -->
                <a href="https://usc.khulega.online" target="_blank" rel="noopener" class="contact__detail-card">
                  <div class="contact__detail-icon contact__detail-icon--amber">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div class="contact__detail-info">
                    <span class="contact__detail-label">Seller Console</span>
                    <span class="contact__detail-value">usc.khulega.online</span>
                  </div>
                  <svg class="contact__detail-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>

              <!-- Social Links -->
              <div class="contact__social-card">
                <h3 class="contact__social-title">Follow Us</h3>
                <p class="contact__social-text">Stay connected with us on social media for updates and announcements.</p>
                <div class="contact__social-grid">

                  <!-- LinkedIn -->
                  <a href="https://www.linkedin.com/company/techsandhya/" target="_blank" rel="noopener"
                    class="contact__social-link contact__social-link--linkedin">
                    <div class="contact__social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div class="contact__social-info">
                      <span class="contact__social-name">LinkedIn</span>
                      <span class="contact__social-handle">@techsandhya</span>
                    </div>
                  </a>

                  <!-- Facebook -->
                  <a href="https://www.facebook.com/techsandhya" target="_blank" rel="noopener"
                    class="contact__social-link contact__social-link--facebook">
                    <div class="contact__social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div class="contact__social-info">
                      <span class="contact__social-name">Facebook</span>
                      <span class="contact__social-handle">@techsandhya</span>
                    </div>
                  </a>

                  <!-- Instagram -->
                  <a href="#" target="_blank" rel="noopener"
                    class="contact__social-link contact__social-link--instagram">
                    <div class="contact__social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                    </div>
                    <div class="contact__social-info">
                      <span class="contact__social-name">Instagram</span>
                      <span class="contact__social-handle">Coming Soon</span>
                    </div>
                  </a>

                </div>
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
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

// EmailJS: Public Key from https://dashboard.emailjs.com/admin
const EMAILJS_PUBLIC_KEY = 'dLbCE5BH1XMiSd_03'
const EMAILJS_SERVICE_ID = 'service_5bbk3zc'
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_fzlcbov'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  businessName: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const handlePhoneInput = () => {
  form.phone = (form.phone || '').replace(/\D/g, '').slice(0, 10)
}

const handleSubmit = async () => {
  isSubmitting.value = true
  showError.value = false

  const templateParams = {
    from_name: `${form.firstName} ${form.lastName}`.trim(),
    first_name: form.firstName,
    last_name: form.lastName,
    name: `${form.firstName} ${form.lastName}`.trim(),
    user_name: `${form.firstName} ${form.lastName}`.trim(),
    from_email: form.email,
    email: form.email,
    user_email: form.email,
    reply_to: form.email,
    phone: form.phone ? `+91 ${form.phone}` : '',
    business_name: form.businessName || '—',
    subject: form.subject,
    message: form.message
  }

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    showSuccess.value = true
    Object.keys(form).forEach(key => { form[key] = '' })
    setTimeout(() => { showSuccess.value = false }, 5000)
  } catch (err) {
    console.error('Contact form error:', err)
    showError.value = true
    setTimeout(() => { showError.value = false }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>