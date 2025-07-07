<template>
  <div class="alert-message">
    <div class="alert-icon">
      <IconPulsingAlert />
    </div>
    <span class="alert-text">
      <slot>Mensagem de alerta padrão.</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import IconPulsingAlert from './icons/IconPulsingAlert.vue'
</script>

<style scoped>
.alert-message {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #fffcf5;
  border: 1px solid #dc6803;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
}

.alert-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.alert-text {
  color: #92400e;
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 480px) {
  .alert-message {
    align-items: flex-start;
  }
}
</style>
