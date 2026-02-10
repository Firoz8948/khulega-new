<template>
  <button
    class="hamburger"
    :class="{ 'hamburger--active': isSidebarOpen }"
    @click="toggleSidebar"
    aria-label="Toggle navigation menu"
  >
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
  </button>
</template>

<script setup>
import { useSidebar } from '@composables/useSidebar.js'
const { isSidebarOpen, toggleSidebar } = useSidebar()
</script>
