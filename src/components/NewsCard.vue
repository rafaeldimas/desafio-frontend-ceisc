<template>
  <div class="news-card">
    <div class="news-image">
      <img :src="item.image" :alt="item.title" />
      <div class="news-overlay">
        <span class="promo-text">PROMO IMAGE</span>
      </div>
    </div>

    <div class="news-content">
      <span class="news-category">{{ item.category }}</span>
      <h3 class="news-title">{{ item.title }}</h3>
      <button class="news-link">{{ item.linkText }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NewsItem {
  image: string
  title: string
  category: string
  linkText: string
}

defineProps<{
  item: NewsItem
}>()
</script>

<style scoped>
.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  font-weight: 500;
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
  margin-top: auto;
  text-decoration: underline;
}

.news-link:hover {
  color: #1d4ed8;
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
