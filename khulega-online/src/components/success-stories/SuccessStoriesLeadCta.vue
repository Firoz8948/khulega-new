<template>
  <section class="ss-lead" aria-labelledby="ss-lead-heading">
    <div class="ss-lead__bg" aria-hidden="true" />
    <div class="ss-lead__inner">
      <div class="ss-lead__copy">
        <span class="ss-lead__eyebrow">PROSPECT CALL TO ACTION · LEAD FORM</span>
        <h2 id="ss-lead-heading" class="ss-lead__title">
          Want your business to be next?
        </h2>
        <p class="ss-lead__intro">
          Tell us what you sell and where you want to sell. Our team usually
          calls you back within one business day with next steps—no obligation.
        </p>
        <ul class="ss-lead__benefits" role="list">
          <li
            v-for="(benefit, i) in benefits"
            :key="i"
            class="ss-lead__benefit"
          >
            <span class="ss-lead__benefit-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            {{ benefit }}
          </li>
        </ul>
      </div>

      <div class="ss-lead__form-card">
        <form class="ss-lead__form" @submit.prevent="handleSubmit">
          <div class="ss-lead__field">
            <label class="ss-lead__label" for="ss-lead-name">Your name</label>
            <input
              id="ss-lead-name"
              v-model="form.name"
              type="text"
              class="ss-lead__input"
              name="name"
              autocomplete="name"
              required
            >
          </div>

          <div class="ss-lead__field">
            <label class="ss-lead__label" for="ss-lead-business">Business name</label>
            <input
              id="ss-lead-business"
              v-model="form.businessName"
              type="text"
              class="ss-lead__input"
              name="organization"
              autocomplete="organization"
            >
          </div>

          <div class="ss-lead__field">
            <label class="ss-lead__label" for="ss-lead-phone">Phone or WhatsApp</label>
            <div class="ss-lead__phone-row">
              <span class="ss-lead__phone-prefix">+91</span>
              <input
                id="ss-lead-phone"
                v-model="form.phone"
                type="tel"
                class="ss-lead__input ss-lead__input--phone"
                inputmode="numeric"
                pattern="[0-9]{10}"
                placeholder="10-digit number"
                required
                @input="handlePhoneInput"
              >
            </div>
          </div>

          <div class="ss-lead__field">
            <label class="ss-lead__label" for="ss-lead-sell">What do you sell?</label>
            <textarea
              id="ss-lead-sell"
              v-model="form.whatYouSell"
              class="ss-lead__textarea"
              rows="3"
              required
            />
          </div>

          <button
            type="submit"
            class="ss-lead__submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Sending…' : 'Request a call back' }}
          </button>

          <p v-if="showSuccess" class="ss-lead__feedback ss-lead__feedback--ok" role="status">
            Thanks—we'll call you back shortly.
          </p>
          <p v-if="showError" class="ss-lead__feedback ss-lead__feedback--err" role="alert">
            Something went wrong. Please try again or call us directly.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import {
  initEmailJs,
  sendContactEmail,
} from '@/utils/emailjsContact.js'

onMounted(() => {
  initEmailJs()
})

const benefits = [
  'Guidance on the right marketplaces for your category',
  'Help with compliance, catalog, and go-live timelines',
  'Ongoing seller support as you scale orders and channels',
]

const form = reactive({
  name: '',
  businessName: '',
  phone: '',
  whatYouSell: '',
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

function handlePhoneInput() {
  form.phone = (form.phone || '').replace(/\D/g, '').slice(0, 10)
}

async function handleSubmit() {
  isSubmitting.value = true
  showError.value = false
  showSuccess.value = false

  const templateParams = {
    from_name: form.name.trim(),
    first_name: form.name.trim(),
    last_name: '—',
    name: form.name.trim(),
    user_name: form.name.trim(),
    from_email: 'admin@techsandhya.com',
    email: 'admin@techsandhya.com',
    user_email: 'admin@techsandhya.com',
    reply_to: 'admin@techsandhya.com',
    phone: form.phone ? `+91 ${form.phone}` : '',
    business_name: form.businessName.trim() || '—',
    subject: 'Callback request — Success Stories',
    message: [
      'Lead from: Success Stories page',
      '',
      `What they sell: ${form.whatYouSell.trim()}`,
      form.businessName.trim()
        ? `Business: ${form.businessName.trim()}`
        : '',
    ]
      .filter(Boolean)
      .join('\n'),
  }

  try {
    await sendContactEmail(templateParams)
    showSuccess.value = true
    form.name = ''
    form.businessName = ''
    form.phone = ''
    form.whatYouSell = ''
    setTimeout(() => {
      showSuccess.value = false
    }, 6000)
  } catch (err) {
    console.error('Success stories lead form error:', err)
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 6000)
  } finally {
    isSubmitting.value = false
  }
}
</script>