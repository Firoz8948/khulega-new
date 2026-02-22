<template>
  <section class="ytv" ref="sectionRef">
    <div class="ytv__container">
      <!-- Header -->
      <div class="ytv__header" :class="{ 'ytv__header--visible': isVisible }">
        <p class="ytv__label">Watch Our Story</p>
        <h2 class="ytv__title">
          See How We're Helping Sellers
          <span class="ytv__title-highlight">Build Their Online Business</span>
        </h2>
        <p class="ytv__subtitle">
          From registration to revenue — watch how Khulega.online transforms offline businesses into thriving online sellers across every major marketplace in India
        </p>
      </div>

      <!-- Video Player -->
      <div
        class="ytv__player-wrap"
        :class="{ 'ytv__player-wrap--visible': isVisible }"
      >
        <!-- Decorative elements -->
        <div class="ytv__deco ytv__deco--dots" aria-hidden="true"></div>
        <div class="ytv__deco ytv__deco--accent" aria-hidden="true"></div>

        <!-- Main player container -->
        <div class="ytv__player">
          <!-- Thumbnail state (before play) -->
          <div
            v-if="!isPlaying"
            class="ytv__thumbnail"
            @click="playVideo"
            role="button"
            tabindex="0"
            aria-label="Play video: Khulega.online — Empowering Sellers"
            @keydown.enter.space.prevent="playVideo"
          >
            <!-- Thumbnail image -->
            <img
              :src="thumbnailUrl"
              alt="Khulega.online — Watch how we help sellers go online"
              class="ytv__thumbnail-img"
              loading="lazy"
            />

            <!-- Gradient overlay -->
            <div class="ytv__thumbnail-overlay"></div>

            <!-- Play button -->
            <div class="ytv__play-btn">
              <div class="ytv__play-btn-ring"></div>
              <div class="ytv__play-btn-inner">
                <svg viewBox="0 0 24 24" fill="currentColor" class="ytv__play-icon">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <!-- Video info on thumbnail -->
            <div class="ytv__thumbnail-info">
              <div class="ytv__thumbnail-badge">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M23 7l-7 5 7 5V7z"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span>Watch Video</span>
              </div>
              <p class="ytv__thumbnail-title">Khulega.online — Empowering Sellers Across India</p>
              <p class="ytv__thumbnail-duration">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Brand Film
              </p>
            </div>
          </div>

          <!-- Iframe (after play) -->
          <iframe
            v-if="isPlaying"
            :src="embedUrl"
            class="ytv__iframe"
            title="Khulega.online — Empowering Sellers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <!-- Floating cards around video -->
        <div class="ytv__float ytv__float--left" :class="{ 'ytv__float--visible': isVisible }">
          <div class="ytv__float-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
          </div>
          <div>
            <p class="ytv__float-title">Easy Onboarding</p>
            <p class="ytv__float-desc">Register in minutes</p>
          </div>
        </div>

        <div class="ytv__float ytv__float--right" :class="{ 'ytv__float--visible': isVisible }">
          <div class="ytv__float-icon ytv__float-icon--green">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
          </div>
          <div>
            <p class="ytv__float-title">Grow Revenue</p>
            <p class="ytv__float-desc">Sell on 5+ platforms</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
const isPlaying = ref(false)
let observer = null

const videoId = 'YsaHgfb3vog'

const thumbnailUrl = computed(() => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
})

const embedUrl = computed(() => {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
})

function playVideo() {
  isPlaying.value = true
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>