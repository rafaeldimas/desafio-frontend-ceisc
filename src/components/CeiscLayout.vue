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
          <IconChevronRight />
        </button>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-item active">
          <IconDashboard />
          <span class="nav-text">Dashboard</span>
        </div>

        <div class="nav-item">
          <IconCourses />
          <span class="nav-text">Cursos</span>
        </div>

        <div class="nav-item">
          <IconDocuments />
          <span class="nav-text">Documentos</span>
        </div>

        <div class="nav-item">
          <IconCalendar />
          <span class="nav-text">Agenda</span>
        </div>

        <div class="nav-item">
          <IconEdit />
          <span class="nav-text">Editar</span>
        </div>

        <div class="nav-item">
          <IconShop />
          <span class="nav-text">Loja</span>
        </div>

        <div class="nav-item">
          <IconPackage />
          <span class="nav-text">Notificações</span>
        </div>

        <div class="nav-item">
          <IconSearch />
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
            <IconMenu />
          </button>
          <div class="breadcrumb">
            <span>Lorem</span>
            <span class="separator">...</span>
            <span>Lorem ipsum dolor sit amet</span>
          </div>
        </div>
        <div class="header-right">
          <button class="notification-btn">
            <IconBell />
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
import IconChevronRight from './icons/IconChevronRight.vue'
import IconDashboard from './icons/IconDashboard.vue'
import IconCourses from './icons/IconCourses.vue'
import IconDocuments from './icons/IconDocuments.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconEdit from './icons/IconEdit.vue'
import IconShop from './icons/IconShop.vue'
import IconPackage from './icons/IconPackage.vue'
import IconSearch from './icons/IconSearch.vue'
import IconMenu from './icons/IconMenu.vue'
import IconBell from './icons/IconBell.vue'

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
