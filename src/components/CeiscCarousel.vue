<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <div class="carousel-track" :style="trackStyle">
        <div class="carousel-page" v-for="(page, pageIndex) in paginatedItems" :key="pageIndex">
          <div class="carousel-item" v-for="(item, itemIndex) in page" :key="itemIndex">
            <slot name="item" :item="item" :index="pageIndex * slidesPerPage + itemIndex"></slot>
          </div>
        </div>
      </div>
    </div>

    <button v-if="showNavButtons" @click="prevPage" class="carousel-nav prev" aria-label="Anterior">
      <IconChevronLeft />
    </button>
    <button v-if="showNavButtons" @click="nextPage" class="carousel-nav next" aria-label="Próximo">
      <IconChevronRight />
    </button>

    <div v-if="totalPages > 1" class="carousel-dots">
      <span
        v-for="(_, index) in totalPages"
        :key="index"
        class="dot"
        :class="{ active: currentPageIndex === index }"
        @click="goToPage(index)"
        :aria-label="`Ir para a página ${index + 1}`"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends any">
import { ref, computed, onMounted, onUnmounted, toRefs, type PropType } from 'vue'
import IconChevronLeft from './icons/IconChevronLeft.vue'
import IconChevronRight from './icons/IconChevronRight.vue'

const props = defineProps({
  items: {
    type: Array as PropType<T[]>,
    required: true,
  },
  itemsToShow: {
    type: Number,
    default: 3,
  },
  itemsToShowTablet: {
    type: Number,
    default: 2,
  },
  itemsToShowMobile: {
    type: Number,
    default: 1,
  },
})

const { items, itemsToShow, itemsToShowTablet, itemsToShowMobile } = toRefs(props)

const currentPageIndex = ref(0)
const windowWidth = ref(0)

const slidesPerPage = computed(() => {
  if (windowWidth.value <= 480) {
    return itemsToShowMobile.value
  }
  if (windowWidth.value <= 768) {
    return itemsToShowTablet.value
  }
  return itemsToShow.value
})

const paginatedItems = computed(() => {
  const pages = []
  if (!items.value || items.value.length === 0) return []
  for (let i = 0; i < items.value.length; i += slidesPerPage.value) {
    pages.push(items.value.slice(i, i + slidesPerPage.value))
  }
  return pages
})

const totalPages = computed(() => paginatedItems.value.length)

const showNavButtons = computed(() => totalPages.value > 1 && windowWidth.value > 768)

const trackStyle = computed(() => ({
  transform: `translateX(-${currentPageIndex.value * 100}%)`,
}))

const nextPage = () => {
  currentPageIndex.value = (currentPageIndex.value + 1) % totalPages.value
}

const prevPage = () => {
  currentPageIndex.value = (currentPageIndex.value - 1 + totalPages.value) % totalPages.value
}

const goToPage = (index: number) => {
  currentPageIndex.value = index
}

const updateWidth = () => {
  windowWidth.value = window.innerWidth
  if (currentPageIndex.value >= totalPages.value) {
    currentPageIndex.value = Math.max(0, totalPages.value - 1)
  }
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  padding: 0 40px;
  box-sizing: border-box;
}

.carousel-wrapper {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-page {
  flex: 0 0 100%;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(v-bind(slidesPerPage), minmax(0, 1fr));
  gap: 1.5rem;
}

.carousel-item {
  display: flex;
  width: 100%;
}

.carousel-nav {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #374151;
  z-index: 10;
  transition: all 0.2s ease;
}

.carousel-nav:hover {
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-nav.prev {
  left: 0;
}

.carousel-nav.next {
  right: 0;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d1d5db;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.dot.active {
  background-color: #2563eb;
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 0;
  }
  .carousel-page {
    gap: 1rem;
  }
}
</style>
