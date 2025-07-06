<template>
  <div class="activity-section">
    <div class="activity-grid">
      <div class="activity-card" v-for="(activity, index) in activities" :key="index">
        <div class="activity-icon">
          <component :is="activity.icon" />
        </div>
        
        <div class="activity-content">
          <h3 class="activity-title">{{ activity.title }}</h3>
          <p class="activity-description">{{ activity.description }}</p>
          <button class="activity-link">{{ activity.linkText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

interface Activity {
  icon: any
  title: string
  description: string
  linkText: string
}

const ChartIcon = () => h('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2'
}, [
  h('path', { d: 'M3 3v18h18' }),
  h('path', { d: 'M18.7 8l-5.1 5.2-2.8-2.7L7 14.3' })
])

const GlobeIcon = () => h('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2'
}, [
  h('circle', { cx: '12', cy: '12', r: '10' }),
  h('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
  h('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
])

const MapIcon = () => h('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2'
}, [
  h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
  h('circle', { cx: '12', cy: '10', r: '3' })
])

const activities = ref<Activity[]>([
  {
    icon: ChartIcon,
    title: 'Lorem ipsum',
    description: 'Abaixo você encontra a última atividade realizada na plataforma',
    linkText: 'Acessar'
  },
  {
    icon: GlobeIcon,
    title: 'Lorem ipsum',
    description: 'Abaixo você encontra a última atividade realizada na plataforma',
    linkText: 'Acessar'
  },
  {
    icon: MapIcon,
    title: 'Lorem ipsum',
    description: 'Abaixo você encontra a última atividade realizada na plataforma',
    linkText: 'Acessar'
  }
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
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.activity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.activity-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  margin-bottom: 1.5rem;
}

.activity-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.activity-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

.activity-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  max-width: 280px;
}

.activity-link {
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.activity-link:hover {
  background-color: #eff6ff;
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
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 480px) {
  .activity-card {
    padding: 1rem;
  }
  
  .activity-icon {
    width: 48px;
    height: 48px;
  }
  
  .activity-title {
    font-size: 1.125rem;
  }
}
</style>
