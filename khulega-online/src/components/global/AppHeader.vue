<template>
  <header class="header">
    <div class="header__container">
      <!-- LEFT: Hamburger + Logo -->
      <div class="header__left">
        <HamburgerButton />
        <a href="/" class="header__logo">
          <img
            :src="'/assets/images/Khulega_logo.png'"
            alt="Khulega.online"
            class="header__logo-img"
          />
        </a>
      </div>

      <!-- CENTER: Search Bar -->
      <div class="header__center">
        <div class="header__search">
          <svg
            class="header__search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            class="header__search-input"
            :placeholder="t('common.searchPlaceholder', { default: 'shop.khulega.online' })"
            v-model="searchQuery"
            @keyup.enter="handleSearch"
          />
          <button
            v-if="searchQuery"
            class="header__search-clear"
            @click="searchQuery = ''"
            aria-label="Clear search"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- RIGHT: Action Buttons -->
      <div class="header__right">
        <!-- Shop Button -->
        <a href="https://milega.online" target="_blank" rel="noopener noreferrer" class="header__action-btn header__action-btn--shop">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span class="header__action-text">{{ t('nav.shop') }}</span>
        </a>

        <!-- Apply Job Button -->
        <a href="/apply-job.html" class="header__action-btn header__action-btn--job">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
          </svg>
          <span class="header__action-text">{{ t('nav.applyJob') }}</span>
        </a>

        <!-- ONDC Logo -->
        <a
          href="https://ondc.org"
          target="_blank"
          rel="noopener noreferrer"
          class="header__ondc"
          title="ONDC Network"
        >
          <img
            src="/assets/images/ondc-logo.png"
            alt="ONDC"
            class="header__ondc-img"
          />
        </a>

        <!-- Language Toggle -->
        <LanguageToggle />
      </div>
    </div>
  </header>

  <!-- Sidebar Component -->
  <AppSidebar />
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
import { ref } from 'vue'

const { t } = useI18n()
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    const q = encodeURIComponent(searchQuery.value.trim())
    window.open(`https://milega.online?search=${q}`, '_blank', 'noopener,noreferrer')
  } else {
    window.open('https://milega.online', '_blank', 'noopener,noreferrer')
  }
}
</script>
