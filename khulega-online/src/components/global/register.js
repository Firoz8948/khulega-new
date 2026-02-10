import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppSidebar from './AppSidebar.vue'
import HamburgerButton from './HamburgerButton.vue'
import LanguageToggle from './LanguageToggle.vue'
import BackToTop from './BackToTop.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import Loader from './Loader.vue'
import BreadCrumb from './BreadCrumb.vue'

// Shared UI components
import BaseButton from '@shared/BaseButton.vue'
import BaseCard from '@shared/BaseCard.vue'
import BaseInput from '@shared/BaseInput.vue'
import BaseModal from '@shared/BaseModal.vue'
import ResponsiveImage from '@shared/ResponsiveImage.vue'

export function registerGlobalComponents(app) {
  // Global layout components - available in ALL pages without importing
  app.component('AppHeader', AppHeader)
  app.component('AppFooter', AppFooter)
  app.component('AppSidebar', AppSidebar)
  app.component('HamburgerButton', HamburgerButton)
  app.component('LanguageToggle', LanguageToggle)
  app.component('BackToTop', BackToTop)
  app.component('WhatsAppButton', WhatsAppButton)
  app.component('Loader', Loader)
  app.component('BreadCrumb', BreadCrumb)

  // Shared UI components
  app.component('BaseButton', BaseButton)
  app.component('BaseCard', BaseCard)
  app.component('BaseInput', BaseInput)
  app.component('BaseModal', BaseModal)
  app.component('ResponsiveImage', ResponsiveImage)
}
