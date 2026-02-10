<template>
  <div class="page page--contact">
    <AppHeader />

    <main class="main">
      <div class="container">
        <BreadCrumb :crumbs="[{ label: t('page.breadcrumb') }]" />

        <section class="section">
          <h1>{{ t('page.title') }}</h1>
          <p style="color: var(--color-text-secondary); margin-top: var(--space-sm); margin-bottom: var(--space-2xl);">
            {{ t('page.subtitle') }}
          </p>

          <div class="contact__wrapper">
            <!-- Contact Form -->
            <div>
              <h3 style="margin-bottom: var(--space-lg);">{{ t('form.title') }}</h3>
              <form class="contact__form" @submit.prevent="handleSubmit">
                <BaseInput
                  v-model="form.name"
                  :label="t('form.name')"
                  :placeholder="t('form.namePlaceholder')"
                  required
                />
                <BaseInput
                  v-model="form.email"
                  :label="t('form.email')"
                  type="email"
                  :placeholder="t('form.emailPlaceholder')"
                  required
                />
                <BaseInput
                  v-model="form.phone"
                  :label="t('form.phone')"
                  type="tel"
                  :placeholder="t('form.phonePlaceholder')"
                />
                <div style="margin-bottom: var(--space-md);">
                  <label style="display: block; font-size: var(--fs-sm); font-weight: var(--fw-medium); margin-bottom: var(--space-xs);">
                    {{ t('form.message') }} <span style="color: var(--color-error);">*</span>
                  </label>
                  <textarea
                    v-model="form.message"
                    :placeholder="t('form.messagePlaceholder')"
                    rows="5"
                    required
                    style="width: 100%; padding: var(--space-sm) var(--space-md); border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: var(--fs-base); resize: vertical;"
                  ></textarea>
                </div>
                <BaseButton type="submit" size="lg" fullWidth>
                  {{ t('form.submit') }}
                </BaseButton>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="contact__info">
              <h3 style="margin-bottom: var(--space-lg);">{{ t('info.title') }}</h3>

              <div class="contact__info-item">
                <span class="contact__info-icon">&#128205;</span>
                <div>
                  <h5>{{ t('info.address') }}</h5>
                  <p style="color: var(--color-text-secondary);">
                    {{ t('info.addressValue') }}
                  </p>
                </div>
              </div>

              <div class="contact__info-item">
                <span class="contact__info-icon">&#128231;</span>
                <div>
                  <h5>{{ t('info.emailLabel') }}</h5>
                  <p style="color: var(--color-text-secondary);">{{ t('info.emailValue') }}</p>
                </div>
              </div>

              <div class="contact__info-item">
                <span class="contact__info-icon">&#128222;</span>
                <div>
                  <h5>{{ t('info.phoneLabel') }}</h5>
                  <p style="color: var(--color-text-secondary);">{{ t('info.phoneValue') }}</p>
                </div>
              </div>

              <div class="contact__info-item">
                <span class="contact__info-icon">&#128337;</span>
                <div>
                  <h5>{{ t('info.hours') }}</h5>
                  <p style="color: var(--color-text-secondary); white-space: pre-line;">{{ t('info.hoursValue') }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n('contact')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', { ...form })
  alert(t('form.success'))
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>
