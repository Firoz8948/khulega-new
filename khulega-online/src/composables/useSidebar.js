import { ref } from 'vue'

// Singleton state - shared across all components that use this composable
const isSidebarOpen = ref(false)
let savedScrollY = 0

const isMobile = () => window.innerWidth <= 768

export function useSidebar() {
  const openSidebar = () => {
    savedScrollY = window.scrollY
    if (isMobile()) {
      // Mobile: do not touch body/html — scroll is locked by overlay's @touchmove.prevent in AppSidebar
    } else {
      // Desktop: prevent scrollbar-disappear shift by fixing body and reserving scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.position = 'fixed'
      document.body.style.top = `-${savedScrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
    }
    isSidebarOpen.value = true
  }

  const closeSidebar = () => {
    isSidebarOpen.value = false
    if (isMobile()) {
      // Mobile: no body styles to clear — page never moved
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
      window.scrollTo(0, savedScrollY)
    }
  }

  const toggleSidebar = () => {
    if (isSidebarOpen.value) {
      closeSidebar()
    } else {
      openSidebar()
    }
  }

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar
  }
}
