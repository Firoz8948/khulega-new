import { ref, computed, watch } from 'vue'

// ============================================
// Import ALL translation files
// ============================================

// English
import enCommon from './locales/en/common.json'
import enHome from './locales/en/home.json'
import enUserJourney from './locales/en/user-journey.json'
import enApplyJob from './locales/en/apply-job.json'
import enPolicy from './locales/en/policy.json'
import enServices from './locales/en/services.json'
import enContact from './locales/en/contact.json'
import enTerms from './locales/en/terms.json'

// Hindi
import hiCommon from './locales/hi/common.json'
import hiHome from './locales/hi/home.json'
import hiUserJourney from './locales/hi/user-journey.json'
import hiApplyJob from './locales/hi/apply-job.json'
import hiPolicy from './locales/hi/policy.json'
import hiServices from './locales/hi/services.json'
import hiContact from './locales/hi/contact.json'
import hiTerms from './locales/hi/terms.json'

// ============================================
// Merge translations by locale
// ============================================
const messages = {
  en: {
    common: enCommon,
    home: enHome,
    userJourney: enUserJourney,
    applyJob: enApplyJob,
    policy: enPolicy,
    services: enServices,
    contact: enContact,
    terms: enTerms
  },
  hi: {
    common: hiCommon,
    home: hiHome,
    userJourney: hiUserJourney,
    applyJob: hiApplyJob,
    policy: hiPolicy,
    services: hiServices,
    contact: hiContact,
    terms: hiTerms
  }
}

// ============================================
// Singleton reactive state
// ============================================
const STORAGE_KEY = 'khulega-lang'

function getInitialLocale() {
  // 1. Check localStorage
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && messages[saved]) return saved
  } catch (e) {
    // localStorage may not be available
  }

  // 2. Check browser language
  const browserLang = navigator.language.slice(0, 2)
  if (browserLang === 'hi') return 'hi'

  // 3. Default to English
  return 'en'
}

const currentLocale = ref(getInitialLocale())

// ============================================
// Core translation function
// ============================================

/**
 * Resolves a dot-notation key from a nested object
 * Example: resolve('hero.title', { hero: { title: 'Hello' } }) => 'Hello'
 */
function resolve(path, obj) {
  return path.split('.').reduce((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return acc[part]
    }
    return undefined
  }, obj)
}

/**
 * Replace template variables: "Hello {name}" + { name: "John" } => "Hello John"
 */
function interpolate(str, params) {
  if (!params || typeof str !== 'string') return str
  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`\\{${key}\\}`, 'g'), value)
  }, str)
}

// ============================================
// Main composable
// ============================================
export function useI18n(namespace = null) {
  // Watch and persist locale changes
  watch(currentLocale, (newLocale) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLocale)
    } catch (e) {
      // localStorage may not be available
    }
    // Update HTML lang attribute
    document.documentElement.lang = newLocale
    // Update dir attribute for potential RTL support
    document.documentElement.dir = 'ltr'
    // Add Hindi font class
    if (newLocale === 'hi') {
      document.body.classList.add('lang-hi')
      document.body.classList.remove('lang-en')
    } else {
      document.body.classList.add('lang-en')
      document.body.classList.remove('lang-hi')
    }
  }, { immediate: true })

  /**
   * Translate function
   * @param {string} key - dot notation key like "hero.title" or "common.nav.home"
   * @param {object} params - interpolation params like { year: 2024 }
   * @returns {string|Array|Object} translated value
   */
  const t = (key, params = null) => {
    const locale = currentLocale.value
    const localeMessages = messages[locale]

    if (!localeMessages) {
      console.warn(`[i18n] Locale "${locale}" not found`)
      return key
    }

    let result

    // 1. Try with namespace first (e.g., namespace="home", key="hero.title")
    if (namespace) {
      const nsMessages = localeMessages[namespace]
      if (nsMessages) {
        result = resolve(key, nsMessages)
        if (result !== undefined) return interpolate(result, params)
      }
    }

    // 2. Try in common translations
    result = resolve(key, localeMessages.common)
    if (result !== undefined) return interpolate(result, params)

    // 3. Try as full path (e.g., key="home.hero.title")
    const parts = key.split('.')
    const topLevel = parts[0]
    const restPath = parts.slice(1).join('.')

    if (localeMessages[topLevel]) {
      result = resolve(restPath, localeMessages[topLevel])
      if (result !== undefined) return interpolate(result, params)
    }

    // 4. Fallback to English
    if (locale !== 'en') {
      const enMessages = messages.en
      if (namespace && enMessages[namespace]) {
        result = resolve(key, enMessages[namespace])
        if (result !== undefined) return interpolate(result, params)
      }
      result = resolve(key, enMessages.common)
      if (result !== undefined) return interpolate(result, params)
    }

    // 5. Return key itself as last resort
    console.warn(`[i18n] Missing translation: "${key}" for locale "${locale}"`)
    return key
  }

  /**
   * Toggle between English and Hindi
   */
  const toggleLocale = () => {
    currentLocale.value = currentLocale.value === 'en' ? 'hi' : 'en'
  }

  /**
   * Set specific locale
   */
  const setLocale = (locale) => {
    if (messages[locale]) {
      currentLocale.value = locale
    } else {
      console.warn(`[i18n] Locale "${locale}" is not supported`)
    }
  }

  const isHindi = computed(() => currentLocale.value === 'hi')
  const isEnglish = computed(() => currentLocale.value === 'en')

  return {
    t,
    currentLocale,
    toggleLocale,
    setLocale,
    isHindi,
    isEnglish
  }
}
