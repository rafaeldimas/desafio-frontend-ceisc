<template>
  <div class="live-notification" v-if="isVisible">
    <div class="notification-content">
      <div class="notification-header">
        <div class="live-indicator">
          <span class="live-dot"></span>
          <span class="live-text">LIVE</span>
          <span class="live-time">Início em {{ formatTime(remainingTime) }}</span>
        </div>
        <button class="close-btn" @click="closeNotification">
          <IconClose />
        </button>
      </div>

      <div class="notification-body">
        <p class="notification-title">Curso Combo: Introdução à Advocacia Previdenciári...</p>
      </div>

      <div class="notification-actions">
        <button class="btn-dismiss" @click="dismissNotification">Dispensar</button>
        <button class="btn-access" @click="accessLive">Acessar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IconClose from './icons/IconClose.vue'

const isVisible = ref(true)
const remainingTime = ref(5 * 60) // 5 minutes

const closeNotification = () => {
  isVisible.value = false
}

const dismissNotification = () => {
  isVisible.value = false
}

const accessLive = () => {
  // Handle access to live stream
  console.log('Accessing live stream...')
}

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

let timer: number | null = null

onMounted(() => {
  timer = window.setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--
    } else {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.live-notification {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1001;
  width: 320px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification-content {
  padding: 1rem;
}

.notification-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.live-dot {
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.live-text {
  color: #ef4444;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.live-time {
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 500;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  color: #6b7280;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: #f3f4f6;
  color: #374151;
}

.notification-body {
  margin-bottom: 1rem;
}

.notification-title {
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
}

.notification-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.btn-dismiss {
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

.btn-dismiss:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

.btn-access {
  background-color: #10b981;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.btn-access:hover {
  background-color: #059669;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .live-notification {
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
    width: auto;
  }

  .notification-actions {
    flex-direction: column;
  }

  .btn-dismiss,
  .btn-access {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .live-indicator {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .notification-content {
    padding: 0.75rem;
  }
}
</style>
