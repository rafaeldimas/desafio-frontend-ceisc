<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Blue background with bottom-left corner sharp, others rounded -->
    <path
      d="M 30 0 L 70 0 Q 100 0 100 30 L 100 70 Q 100 100 70 100 L 0 100 L 0 30 Q 0 0 30 0 Z"
      fill="url(#blueGradient)"
    />

    <!-- White play button triangle -->
    <path d="M35 25 L35 75 L75 50 Z" fill="white" />

    <!-- Gradient definition -->
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color: #2563eb; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #1d4ed8; stop-opacity: 1" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number
}

withDefaults(defineProps<Props>(), {
  size: 32,
})
</script>
