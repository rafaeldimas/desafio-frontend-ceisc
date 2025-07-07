<template>
  <div class="dashboard-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">Lorem ipsum dolor sit amet, adipiscing elit.</h1>
      <p class="hero-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod vel nulla a
        placerat.
      </p>
    </div>

    <!-- News Section -->
    <NewsSection />

    <!-- Confirmation Section -->
    <ConfirmationSection />

    <!-- Activity Section -->
    <ActivitySection />

    <!-- Live Notification -->
    <LiveNotification />
  </div>
</template>

<script setup lang="ts">
import NewsSection from './NewsSection.vue'
import ConfirmationSection from './ConfirmationSection.vue'
import ActivitySection from './ActivitySection.vue'
import LiveNotification from './LiveNotification.vue'
</script>

<style scoped>
.dashboard-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero-section {
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-section {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .hero-section {
    margin-bottom: 1rem;
  }
}
</style>
