<template>
  <picture>
    <source
      v-if="mobileSrc"
      :srcset="mobileSrc"
      media="(max-width: 767px)"
      :type="getType(mobileSrc)"
    />
    <source
      :srcset="src"
      :type="getType(src)"
    />
    <img
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :width="width"
      :height="height"
      :class="imgClass"
    />
  </picture>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  mobileSrc: { type: String, default: '' },
  alt: { type: String, required: true },
  lazy: { type: Boolean, default: true },
  width: { type: [String, Number], default: undefined },
  height: { type: [String, Number], default: undefined },
  imgClass: { type: String, default: '' }
})

const getType = (src) => {
  if (src.endsWith('.webp')) return 'image/webp'
  if (src.endsWith('.png')) return 'image/png'
  if (src.endsWith('.jpg') || src.endsWith('.jpeg')) return 'image/jpeg'
  if (src.endsWith('.svg')) return 'image/svg+xml'
  return undefined
}
</script>
