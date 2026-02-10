/**
 * Utility helpers for the Khulega.online application
 */

/**
 * Debounce function - delays execution until after wait period
 * @param {Function} fn - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
export function debounce(fn, wait = 300) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), wait)
  }
}

/**
 * Throttle function - limits execution to once per wait period
 * @param {Function} fn - Function to throttle
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
export function throttle(fn, wait = 300) {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), wait)
    }
  }
}

/**
 * Format currency in INR
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount)
}

/**
 * Get current page name from URL
 * @returns {string}
 */
export function getCurrentPage() {
  const path = window.location.pathname
  if (path === '/' || path === '/index.html') return 'home'
  return path.replace('/', '').replace('.html', '')
}

/**
 * Smooth scroll to element by ID
 * @param {string} elementId
 */
export function scrollToElement(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
