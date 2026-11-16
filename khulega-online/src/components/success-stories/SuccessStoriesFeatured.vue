<template>
  <section class="ss-featured" aria-labelledby="ss-featured-name">
    <div class="ss-featured__inner">
      <div class="ss-featured__section-header">
        <span class="ss-showcase__eyebrow">ONE STANDOUT SELLER OR ENTERPRISE</span>
      </div>

      <div class="ss-featured__layout">
        <div class="ss-featured__visual">
          <img
            class="ss-featured__image"
            :src="story.imageSrc"
            :alt="story.imageAlt"
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
          >
        </div>

        <article class="ss-featured__content">
          <p class="ss-featured__kicker">Featured story</p>
          <h2 id="ss-featured-name" class="ss-featured__name">
            {{ story.name }}
          </h2>
          <div class="ss-featured__meta">
            <span class="ss-featured__meta-line">{{ story.cityState }}</span>
            <span class="ss-featured__meta-line">Selling on {{ story.marketplaces }}</span>
            <span class="ss-featured__meta-line">
              Collective — {{ story.collective }}
            </span>
            <span class="ss-featured__meta-line">
              Key products — {{ story.keyProducts }}
            </span>
          </div>

          <blockquote v-if="story.quote" class="ss-featured__quote">
            <p>{{ story.quote }}</p>
          </blockquote>

          <ul class="ss-featured__metrics">
            <li
              v-for="(metric, index) in story.metrics"
              :key="index"
              class="ss-featured__metric"
            >
              <span
                class="ss-featured__metric-value"
                :class="{ 'ss-featured__metric-value--compact': metric.compact }"
              >{{ metric.value }}</span>
              <span class="ss-featured__metric-label">{{ metric.label }}</span>
            </li>
          </ul>

          <button
            type="button"
            class="ss-featured__link"
            @click="openStory = true"
          >
            Read the full story
            <span class="ss-featured__link-arrow" aria-hidden="true">→</span>
          </button>
        </article>
      </div>
    </div>

    <BaseModal
      v-model="openStory"
      :title="story.name"
      size="lg"
    >
      <article class="ss-story-modal">
        <h2 class="ss-story-modal__headline">
          {{ story.modalTitle }}
        </h2>

        <dl class="ss-story-modal__profile">
          <div class="ss-story-modal__profile-row">
            <dt>Seller profile</dt>
            <dd>{{ story.name }} ({{ story.profileLocation }})</dd>
          </div>
          <div class="ss-story-modal__profile-row">
            <dt>Collective strength</dt>
            <dd>{{ story.collective }}</dd>
          </div>
          <div class="ss-story-modal__profile-row">
            <dt>Key products</dt>
            <dd>{{ story.keyProducts }}</dd>
          </div>
        </dl>

        <template v-for="(section, i) in story.sections" :key="i">
          <section class="ss-story-modal__block">
            <h3 class="ss-story-modal__h3">{{ section.heading }}</h3>
            <p
              v-for="(para, j) in section.paragraphs"
              :key="`p-${i}-${j}`"
              class="ss-story-modal__p"
            >
              {{ para }}
            </p>
            <p v-if="section.intro" class="ss-story-modal__p">
              {{ section.intro }}
            </p>
            <ul v-if="section.bullets" class="ss-story-modal__list">
              <li v-for="(item, k) in section.bullets" :key="`b-${i}-${k}`">
                {{ item }}
              </li>
            </ul>
            <div
              v-if="section.metricsTable"
              class="ss-story-modal__table-wrap"
              role="region"
              aria-label="Key performance metrics"
            >
              <table class="ss-story-modal__table">
                <thead>
                  <tr>
                    <th scope="col">Key performance metric</th>
                    <th scope="col">Milestone achieved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, r) in section.metricsTable"
                    :key="`row-${r}`"
                  >
                    <th scope="row">{{ row.metric }}</th>
                    <td>{{ row.value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </template>
      </article>
    </BaseModal>
  </section>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { kenBetwaFeaturedStory } from '@/data/kenBetwaFeaturedStory.js'

const story = kenBetwaFeaturedStory
const openStory = ref(false)

watch(openStory, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>