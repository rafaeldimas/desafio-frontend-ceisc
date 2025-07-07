<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Background with bottom-left corner sharp, others rounded -->
    <path
      d="M 30 0 L 70 0 Q 100 0 100 30 L 100 70 Q 100 100 70 100 L 0 100 L 0 30 Q 0 0 30 0 Z"
      :fill="flagColor"
    />

    <!-- play button triangle -->
    <path d="M35 25 L35 75 L75 50 Z" :fill="triangleColor" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number
  triangleColor?: string
  flagColor?: string
}

withDefaults(defineProps<Props>(), {
  size: 32,
  triangleColor: 'white',
  flagColor: '#0050ff',
})
</script>
