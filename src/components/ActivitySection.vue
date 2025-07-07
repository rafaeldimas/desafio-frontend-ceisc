<template>
  <div class="activity-section">
    <div class="activity-grid">
      <div class="activity-card" v-for="(activity, index) in activities" :key="index">
        <div class="activity-header">
          <div class="activity-icon">
            <component :is="activity.icon" />
          </div>
          <h3 class="activity-title">{{ activity.title }}</h3>
        </div>

        <div class="activity-content">
          <p class="activity-description">{{ activity.description }}</p>
          <button class="activity-link">{{ activity.linkText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Component } from 'vue'
import IconChart from './icons/IconChart.vue'
import IconGlobe from './icons/IconGlobe.vue'
import IconMap from './icons/IconMap.vue'

interface Activity {
  icon: Component
  title: string
  description: string
  linkText: string
}

const activities = ref<Activity[]>([
  {
    icon: IconChart,
    title: 'Lorem ipsum',
    description: 'Abaixo você encontra a última atividade realizada na plataforma',
    linkText: 'Acessar',
  },
  {
    icon: IconGlobe,
    title: 'Lorem ipsum',
    description: 'Abaixo você encontra a última atividade realizada na plataforma',
    linkText: 'Acessar',
  },
  {
    icon: IconMap,
    title: 'Lorem ipsum',
    description: 'Abaixo você encontra a última atividade realizada na plataforma',
    linkText: 'Acessar',
  },
])
</script>

<style scoped>
.activity-section {
  margin-bottom: 2rem;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.activity-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.activity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.activity-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.activity-icon {
  width: 48px;
  height: 48px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.activity-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
}

.activity-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
  flex: 1;
}

.activity-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

.activity-link {
  color: #2563eb;
  background: white;
  border: 1px solid #2563eb;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  border-radius: 50px;
  transition: all 0.2s ease;
}

.activity-link:hover {
  background-color: #2563eb;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .activity-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .activity-card {
    padding: 1.5rem;
  }

  .activity-icon {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 480px) {
  .activity-card {
    padding: 1rem;
  }

  .activity-icon {
    width: 40px;
    height: 40px;
  }

  .activity-title {
    font-size: 1.125rem;
  }
}
</style>
