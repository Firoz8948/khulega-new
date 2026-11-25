<template>
  <div class="page page--kharcha-calculator">
    <AppHeader />

    <main class="main kharcha-calculator-main">
      <iframe
        ref="frameRef"
        class="kharcha-calculator__frame"
        title="Kharcha Calculator"
        src="/kharcha-calculator/page/calculator.html"
        loading="eager"
        @load="onFrameLoad"
      />
    </main>

    <AppFooter />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const frameRef = ref(null)

function mobileFrameHeight() {
  const topOffset = window.matchMedia('(max-width: 768px)').matches ? 70 : 0
  return Math.max(420, window.innerHeight - topOffset - 8)
}

function isMobileEmbedFrame() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 979px)').matches
}

function setFrameHeight(h) {
  const frame = frameRef.value
  if (!frame) return

  frame.style.minHeight = '0'
  if (isMobileEmbedFrame()) {
    frame.style.height = `${mobileFrameHeight()}px`
    return
  }

  if (!Number.isFinite(h) || h <= 0) return
  frame.style.height = `${Math.ceil(h)}px`
}

function refreshFrameHeight() {
  const frame = frameRef.value
  if (!frame) return
  try {
    const doc = frame.contentDocument
    if (doc) setFrameHeight(readEmbedHeight(doc))
    else setFrameHeight(480)
  } catch {
    setFrameHeight(480)
  }
}

function readEmbedHeight(doc) {
  const wrap = doc?.querySelector?.('.wrap')
  if (wrap) {
    return Math.ceil(wrap.offsetTop + wrap.offsetHeight)
  }
  return Math.ceil(
    Math.max(doc?.body?.scrollHeight || 0, doc?.documentElement?.scrollHeight || 0)
  )
}

function onFrameLoad() {
  const frame = frameRef.value
  if (!frame) return

  try {
    const doc = frame.contentDocument
    if (!doc) return
  setFrameHeight(readEmbedHeight(doc))
  } catch {
    setFrameHeight(480)
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'kharcha-calculator-resize') return
    const frame = frameRef.value
    if (!frame || event.source !== frame.contentWindow) return
    setFrameHeight(Number(event.data.height))
  })
  window.addEventListener('resize', refreshFrameHeight, { passive: true })
}
</script>