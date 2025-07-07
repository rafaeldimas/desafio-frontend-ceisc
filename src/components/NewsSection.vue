<template>
  <div class="news-section">
    <div class="section-header">
      <div class="section-title">
        <IconNews />
        <h2>Últimas notícias</h2>
      </div>
      <button class="hide-btn" @click="toggleVisibility">
        {{ isHidden ? 'Mostrar' : 'Ocultar' }}
      </button>
    </div>

    <Transition name="slide-fade">
      <div v-if="!isHidden" class="news-content-wrapper">
        <p class="section-description">
          Texto de apoio com informações sobre a área que o aluno está no momento.
        </p>

        <CeiscCarousel :items="newsItems">
          <template #item="{ item }">
            <NewsCard :item="item" />
          </template>
        </CeiscCarousel>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconNews from './icons/IconNews.vue'
import CeiscCarousel from './CeiscCarousel.vue'
import NewsCard from './NewsCard.vue'
import { newsItems } from '../mocks/data.json'

const isHidden = ref(false)

const toggleVisibility = () => {
  isHidden.value = !isHidden.value
}
</script>

<style scoped>
.news-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-icon {
  color: #6b7280;
}

.section-title h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

.hide-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 4px;
}

.hide-btn:hover {
  background-color: #f3f4f6;
}

.section-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.news-content-wrapper {
  /* Este wrapper é necessário para a transição */
  overflow: hidden;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .news-section {
    padding: 1rem;
  }
}
</style>
