<template>
  <section class="ss-hiw" aria-labelledby="ss-hiw-heading">
    <div class="ss-hiw__inner">
      <header class="ss-hiw__header">
        <span class="ss-showcase__eyebrow">HOW IT WORKS · THREE STEPS</span>
        <h2 id="ss-hiw-heading" class="ss-hiw__title">
          How sellers and enterprises work with us
        </h2>
      </header>

      <ol class="ss-hiw__steps">
        <li
          v-for="step in steps"
          :key="step.number"
          class="ss-hiw__step"
        >
          <div class="ss-hiw__step-num" aria-hidden="true">
            {{ step.number }}
          </div>
          <h3 class="ss-hiw__step-title">{{ step.title }}</h3>
          <p class="ss-hiw__step-desc">{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: 1,
    title: 'Get onboarded',
    description:
      'Share your business details, complete compliance checks, and set up catalog and inventory with our team guiding you at each step.',
  },
  {
    number: 2,
    title: 'Go live on marketplaces',
    description:
      'List on the channels that fit your category—Amazon, Flipkart, Meesho, JioMart, ONDC, and more—with synced stock and ready dispatch workflows.',
  },
  {
    number: 3,
    title: 'Grow with support',
    description:
      'Track orders and settlements in one place, get seller support when you need it, and scale listings and channels as demand grows.',
  },
]
</script>