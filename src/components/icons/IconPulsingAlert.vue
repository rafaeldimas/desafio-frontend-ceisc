<template>
  <div class="pulsing-alert-wrapper">
    <IconAlertCircle class="base-icon" />
    <div class="pulse-ring"></div>
    <div class="pulse-ring"></div>
    <div class="pulse-ring"></div>
  </div>
</template>

<script setup lang="ts">
import IconAlertCircle from './IconAlertCircle.vue'
</script>

<style scoped>
.pulsing-alert-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-icon {
  position: relative;
  z-index: 2;
  color: #dc6803;
}

.pulse-ring {
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid #dc6803;
  animation: pulse 3s ease-in-out infinite;
  opacity: 0;
}

.pulse-ring:nth-of-type(2) {
  animation-delay: 1s;
}

.pulse-ring:nth-of-type(3) {
  animation-delay: 2s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  80%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
