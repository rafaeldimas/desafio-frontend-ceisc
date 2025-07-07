<template>
  <div class="confirmation-section">
    <div class="section-header">
      <div class="section-title">
        <IconLightning />
        <h2>Lorem ipsum</h2>
      </div>
    </div>

    <p class="section-description">
      dolor sit amet, consectetur adipiscing elit. Mauris euismod vel nulla a placerat.
    </p>

    <AlertMessage> dolor sit amet, consectetur adipiscing elit. </AlertMessage>

    <div class="confirmation-grid">
      <div class="confirmation-card" v-for="(card, index) in confirmationCards" :key="index">
        <div class="card-header">
          <span class="start-date">{{ card.startDate }}</span>
        </div>

        <div class="card-content">
          <h3 class="card-title">{{ card.title }}</h3>
        </div>

        <div class="card-actions">
          <button class="btn-cancel">{{ card.cancelText }}</button>
          <button class="btn-confirm">{{ card.confirmText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconLightning from './icons/IconLightning.vue'
import AlertMessage from './AlertMessage.vue'

interface ConfirmationCard {
  startDate: string
  title: string
  cancelText: string
  confirmText: string
}

const confirmationCards = ref<ConfirmationCard[]>([
  {
    startDate: '• Início 28/01/2024',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cancelText: 'Cancelar',
    confirmText: 'Confirmar',
  },
  {
    startDate: '• Início 28/01/2024',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cancelText: 'Cancelar',
    confirmText: 'Confirmar',
  },
  {
    startDate: '• Início 28/01/2024',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cancelText: 'Cancelar',
    confirmText: 'Confirmar',
  },
])
</script>

<style scoped>
.confirmation-section {
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
  color: #2563eb;
}

.section-title h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

.section-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.confirmation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.confirmation-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;
}

.confirmation-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  margin-bottom: 1rem;
}

.start-date {
  color: #059669;
  font-size: 0.875rem;
  font-weight: 500;
}

.card-content {
  margin-bottom: 1.5rem;
}

.card-title {
  color: #374151;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
}

.card-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

.btn-cancel {
  background: none;
  border: 1px solid #d1d5db;
  color: #6b7280;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-cancel:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

.btn-confirm {
  background-color: #2563eb;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.btn-confirm:hover {
  background-color: #1d4ed8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .confirmation-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .confirmation-section {
    padding: 1rem;
  }

  .card-actions {
    flex-direction: column;
  }

  .btn-cancel,
  .btn-confirm {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .confirmation-card {
    padding: 1rem;
  }
}
</style>
