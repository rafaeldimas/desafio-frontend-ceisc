<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ collapsed: isCollapsed }">
      <div class="sidebar-header">
        <div class="logo">
          <div class="logo-icon">C</div>
          <span class="logo-text" v-if="!isCollapsed">CEISC</span>
        </div>
        <button class="collapse-btn" @click="toggleSidebar" :class="{ collapsed: isCollapsed }">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-item active">
          <svg
            class="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span class="nav-text">Dashboard</span>
        </div>

        <div class="nav-item">
          <svg
            class="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16,17 21,12 16,7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span class="nav-text">Cursos</span>
        </div>

        <div class="nav-item">
          <svg
            class="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10,9 9,9 8,9" />
          </svg>
          <span class="nav-text">Documentos</span>
        </div>

        <div class="nav-item">
          <svg
            class="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span class="nav-text">Agenda</span>
        </div>

        <div class="nav-item">
          <svg
            class="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
          <span class="nav-text">Editar</span>
        </div>

        <div class="nav-item">
          <svg
            class="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span class="nav-text">Loja</span>
        </div>

        <div class="nav-item">
          <svg
            class="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            />
            <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
            <polyline points="7.5,19.79 7.5,14.6 3,12" />
            <polyline points="21,12 16.5,14.6 16.5,19.79" />
          </svg>
          <span class="nav-text">Notificações</span>
        </div>

        <div class="nav-item">
          <svg
            class="nav-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span class="nav-text">Buscar</span>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <button class="mobile-menu-btn" @click="toggleSidebar">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div class="breadcrumb">
            <span>Lorem</span>
            <span class="separator">...</span>
            <span>Lorem ipsum dolor sit amet</span>
          </div>
        </div>
        <div class="header-right">
          <button class="notification-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <div class="user-avatar">
            <img src="https://i.pravatar.cc/32?img=9" alt="User Avatar" />
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <main class="content">
        <slot></slot>
      </main>
    </div>

    <!-- Mobile Overlay -->
    <div
      class="mobile-overlay"
      :class="{ active: !isCollapsed && isMobile }"
      @click="closeSidebar"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isCollapsed = ref(false)
const isMobile = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const closeSidebar = () => {
  if (isMobile.value) {
    isCollapsed.value = true
  }
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
  if (isMobile.value) {
    isCollapsed.value = true
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
}

.sidebar {
  width: 250px;
  background-color: white;
  border-right: 1px solid #e9ecef;
  transition: width 0.3s ease;
  position: relative;
  z-index: 1000;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.logo-text {
  font-weight: bold;
  font-size: 1.125rem;
  color: #374151;
  transition: opacity 0.3s ease;
}

.sidebar.collapsed .logo-text {
  opacity: 0;
}

.collapse-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.collapse-btn:hover {
  background-color: #f8f9fa;
}

.collapse-btn.collapsed {
  transform: rotate(180deg);
}

.sidebar-nav {
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background-color: #f8f9fa;
  color: #374151;
}

.nav-item.active {
  background-color: #eff6ff;
  color: #2563eb;
  border-right: 3px solid #2563eb;
}

.nav-icon {
  flex-shrink: 0;
}

.nav-text {
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.sidebar.collapsed .nav-text {
  opacity: 0;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: white;
  border-bottom: 1px solid #e9ecef;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}

.mobile-menu-btn:hover {
  background-color: #f8f9fa;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.separator {
  color: #d1d5db;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  color: #6b7280;
}

.notification-btn:hover {
  background-color: #f8f9fa;
}

.user-avatar img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.content {
  flex: 1;
  overflow: auto;
  padding: 1.5rem;
}

.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.mobile-overlay.active {
  display: block;
}

/* Mobile Styles */
@media (max-width: 1023px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1000;
  }

  .sidebar:not(.collapsed) {
    transform: translateX(0);
  }

  .mobile-menu-btn {
    display: block;
  }

  .content {
    padding: 1rem;
  }
}

/* Tablet Styles */
@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .breadcrumb {
    font-size: 0.8rem;
  }

  .content {
    padding: 0.75rem;
  }
}
</style>
