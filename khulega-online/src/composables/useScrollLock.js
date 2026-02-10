import { watch, onUnmounted } from 'vue'

export function useScrollLock(isLocked) {
  const lock = () => {
    document.body.style.overflow = 'hidden'
  }

  const unlock = () => {
    document.body.style.overflow = ''
  }

  if (isLocked) {
    watch(isLocked, (val) => {
      if (val) {
        lock()
      } else {
        unlock()
      }
    })
  }

  onUnmounted(() => {
    unlock()
  })

  return { lock, unlock }
}
