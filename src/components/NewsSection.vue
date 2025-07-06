<template>
  <div class="news-section">
    <div class="section-header">
      <div class="section-title">
        <IconNews />
        <h2>Últimas notícias</h2>
      </div>
      <button class="hide-btn">Ocultar</button>
    </div>
    
    <p class="section-description">
      Texto de apoio com informações sobre a área que o aluno está no momento.
    </p>

    <div class="news-grid">
      <div class="news-card" v-for="(news, index) in newsItems" :key="index">
        <div class="news-image">
          <img :src="news.image" :alt="news.title" />
          <div class="news-overlay">
            <span class="promo-text">PROMO IMAGE</span>
          </div>
        </div>
        
        <div class="news-content">
          <span class="news-category">{{ news.category }}</span>
          <h3 class="news-title">{{ news.title }}</h3>
          <button class="news-link">{{ news.linkText }}</button>
        </div>
      </div>
    </div>

    <div class="carousel-dots">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconNews from './icons/IconNews.vue'

interface NewsItem {
  image: string
  category: string
  title: string
  linkText: string
}

const newsItems = ref<NewsItem[]>([
  {
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop',
    category: 'Pós-graduação',
    title: 'Treinamento OAB: Penal e Processo Penal 38º Exameassdad',
    linkText: 'Acessar blog'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
    category: 'Pós-graduação',
    title: 'Treinamento OAB: Penal e Processo Penal 38º Exameassdad',
    linkText: 'Acessar blog'
  },
  {
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=200&fit=crop',
    category: 'Pós-graduação',
    title: 'Treinamento OAB: Penal e Processo Penal 38º Exameassdad',
    linkText: 'Acessar blog'
  }
])
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

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.news-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.news-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.8), rgba(124, 58, 237, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
}

.promo-text {
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
}

.news-content {
  padding: 1.5rem;
}

.news-category {
  color: #6b7280;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.news-title {
  color: #374151;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.4;
}

.news-link {
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0;
  text-decoration: underline;
}

.news-link:hover {
  color: #1d4ed8;
}

.carousel-dots {
  display: flex;
  justify-content: center;
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

/* Responsive Design */
@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .news-section {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .news-image {
    height: 150px;
  }
  
  .news-content {
    padding: 1rem;
  }
  
  .promo-text {
    font-size: 1rem;
  }
}
</style>
