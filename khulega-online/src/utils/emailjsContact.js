import emailjs from '@emailjs/browser'

/** Same EmailJS service + template as the Contact page */
export const EMAILJS_PUBLIC_KEY = 'dLbCE5BH1XMiSd_03'
export const EMAILJS_SERVICE_ID = 'service_5bbk3zc'
export const EMAILJS_TEMPLATE_ID_CONTACT = 'template_fzlcbov'

let initialized = false

export function initEmailJs() {
  if (initialized) return
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
  initialized = true
}

/**
 * @param {Record<string, string>} templateParams – keys must match EmailJS template
 */
export function sendContactEmail(templateParams) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID_CONTACT,
    templateParams,
    { publicKey: EMAILJS_PUBLIC_KEY }
  )
}