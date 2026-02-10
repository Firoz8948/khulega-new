<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb__list">
      <li class="breadcrumb__item">
        <a href="/" class="breadcrumb__link">Home</a>
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        class="breadcrumb__item"
      >
        <span class="breadcrumb__separator">/</span>
        <a
          v-if="crumb.href"
          :href="crumb.href"
          class="breadcrumb__link"
        >
          {{ crumb.label }}
        </a>
        <span v-else class="breadcrumb__current">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  crumbs: {
    type: Array,
    required: true
    // Example: [{ label: 'Shop', href: '/shop.html' }, { label: 'Product Name' }]
  }
})
</script>
