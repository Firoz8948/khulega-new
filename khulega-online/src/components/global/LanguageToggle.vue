<template>
  <button
    class="lang-toggle"
    @click="toggleLocale"
    :aria-label="isHindi ? 'Switch to English' : 'Switch to Hindi'"
    :title="isHindi ? 'Switch to English' : 'Switch to Hindi'"
  >
    <div class="lang-toggle__track">
      <span
        class="lang-toggle__option"
        :class="{ 'lang-toggle__option--active': isEnglish }"
      >
        EN
      </span>
      <span
        class="lang-toggle__option"
        :class="{ 'lang-toggle__option--active': isHindi }"
      >
        &#2361;&#2367;
      </span>
      <div
        class="lang-toggle__slider"
        :class="{ 'lang-toggle__slider--right': isHindi }"
      ></div>
    </div>
  </button>
</template>

<script setup>
import { useI18n } from '@/i18n/index.js'
const { toggleLocale, isHindi, isEnglish } = useI18n()
</script>
