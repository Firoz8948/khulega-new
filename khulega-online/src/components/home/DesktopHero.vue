<template>
  <section class="hero">
    <!-- ===== DESKTOP LAYOUT ===== -->
    <div class="hero__desktop">
      <!-- Left: Static text -->
      <div class="hero__left">
        <p class="hero__eyebrow">Khulega.online</p>

        <h1 class="hero__tagline">
          <span class="hero__tagline-line">जब <strong>shop.khulega.online</strong></span>
          <span class="hero__tagline-line hero__tagline-line--highlight">तब <strong>sab.milega.online</strong></span>
        </h1>

        <p class="hero__desc">
          ऑनलाइन बिज़नेस से जुड़ी हर ज़रूरत का एक समाधान
        </p>

        <div class="hero__ctas">
          <a href="/seller-register.html" class="hero__btn hero__btn--primary">
            यहाँ रजिस्टर करें
          </a>
          <a href="/services.html" class="hero__btn hero__btn--outline">
            सेवाओं के लिए संपर्क करें
          </a>
        </div>
      </div>

      <!-- Right: Sliding stories -->
      <div class="hero__right">
        <div class="hero__carousel">
          <div
            class="hero__slide"
            v-for="(story, idx) in stories"
            :key="idx"
            :class="{ 'hero__slide--active': idx === activeSlide }"
          >
            <div class="hero__slide-img-wrap">
              <img
                :src="story.image"
                :alt="story.alt"
                class="hero__slide-img"
              />
              <!-- Blue gradient overlay -->
              <div class="hero__slide-overlay"></div>

              <!-- Story text on image -->
              <div class="hero__slide-story">
                <p class="hero__slide-name">{{ story.name }}</p>
                <p class="hero__slide-text">{{ story.text }}</p>
              </div>
            </div>
          </div>

          <!-- Slide indicators -->
          <div class="hero__dots">
            <button
              v-for="(story, idx) in stories"
              :key="'dot-' + idx"
              class="hero__dot"
              :class="{ 'hero__dot--active': idx === activeSlide }"
              @click="goToSlide(idx)"
              :aria-label="'Story ' + (idx + 1)"
            ></button>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== MOBILE LAYOUT ===== -->
    <div class="hero__mobile">
      <!-- Active story image + overlay text -->
      <div class="hero__mobile-slide">
        <img
          :src="stories[activeSlide].image"
          :alt="stories[activeSlide].alt"
          class="hero__mobile-img"
        />
        <div class="hero__mobile-overlay"></div>
        <div class="hero__mobile-content">
          <h1 class="hero__mobile-tagline">
            <span>जब <strong>shop.khulega.online</strong></span>
            <span>तब <strong>sab.milega.online</strong></span>
          </h1>
          <p class="hero__mobile-story">{{ stories[activeSlide].text }}</p>
        </div>
      </div>

      <!-- Mobile dots -->
      <div class="hero__mobile-dots">
        <button
          v-for="(story, idx) in stories"
          :key="'mdot-' + idx"
          class="hero__dot"
          :class="{ 'hero__dot--active': idx === activeSlide }"
          @click="goToSlide(idx)"
        ></button>
      </div>

      <!-- Mobile CTAs -->
      <div class="hero__mobile-ctas">
        <a href="/shop.html" class="hero__btn hero__btn--primary">
          अभी खरीदें
        </a>
        <a href="/services.html" class="hero__btn hero__btn--outline">
          सेवाएँ प्राप्त करें
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stories = [
  {
    image: '/assets/images/image1.png',
    alt: 'Women entrepreneurs onboarded on marketplaces',
    name: 'गाँव की महिलाएँ',
    text: 'एक छोटे से गाँव में महिलाओं का घरेलू कारोबार था, पर ऑनलाइन बेचने के लिए कोई दस्तावेज़ नहीं थे। Khulega.online ने उनकी मदद की — दस्तावेज़ बनवाए और Amazon, Flipkart, Meesho सब पर ऑनबोर्ड किया।'
  },
  {
    image: '/assets/images/image2.png',
    alt: 'Ramesh selling Makhana online',
    name: 'रमेश — मखाना विक्रेता',
    text: 'रमेश अपने गाँव से मखाना बेचते थे, बस लोकल मार्केट में। Khulega.online की मदद से अब वो अपने पुराने साथियों के साथ पूरे भारत में ऑनलाइन मखाना बेच रहे हैं।'
  },
  {
    image: '/assets/images/image3.png',
    alt: 'Usha\'s brand created and selling everywhere',
    name: 'उषा — नई ब्रांड, नई पहचान',
    text: 'उषा के पास कोई ब्रांड नहीं था। हमने उनके लिए ब्रांड बनाया, पैकेजिंग डिज़ाइन की, और सभी मार्केटप्लेस पर लिस्टिंग करवाई। आज उषा की अपनी पहचान है।'
  }
]

const activeSlide = ref(0)
let timer = null

function goToSlide (idx) {
  activeSlide.value = idx
  restartTimer()
}

function nextSlide () {
  activeSlide.value = (activeSlide.value + 1) % stories.length
}

function restartTimer () {
  if (timer) clearInterval(timer)
  timer = setInterval(nextSlide, 5000)
}

onMounted(() => {
  restartTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
