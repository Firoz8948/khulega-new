import { ref } from 'vue'

// Singleton state - shared across all components that use this composable
const isSidebarOpen = ref(false)

export function useSidebar() {
  const openSidebar = () => {
    isSidebarOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  const closeSidebar = () => {
    isSidebarOpen.value = false
    document.body.style.overflow = ''
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
