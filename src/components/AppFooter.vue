<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-logo">
          <div class="logo-icon">D</div>
          <span class="logo-text">ceisc</span>
        </div>
      </div>
      
      <div class="footer-center">
        <div class="footer-links">
          <a href="#" class="footer-link">Termos de uso</a>
          <span class="separator">•</span>
          <a href="#" class="footer-link">Políticas de Privacidade</a>
          <span class="separator">•</span>
          <a href="#" class="footer-link">Política de resposta a incidentes</a>
        </div>
        <div class="footer-copyright">
          © 2024 Ceisc. Todos os direitos reservados.
        </div>
      </div>
      
      <div class="footer-right">
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          
          <a href="#" class="social-link" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"/>
            </svg>
          </a>
          
          <a href="#" class="social-link" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          
          <a href="#" class="social-link" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
            </svg>
          </a>
          
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component logic here if needed
</script>

<style scoped>
.app-footer {
  background-color: #1f2937;
  color: #9ca3af;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.footer-left {
  flex-shrink: 0;
}

.footer-logo {
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
  font-size: 1.125rem;
}

.logo-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-center {
  flex: 1;
  text-align: center;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #d1d5db;
}

.separator {
  color: #6b7280;
  font-size: 0.875rem;
}

.footer-copyright {
  font-size: 0.875rem;
  color: #6b7280;
}

.footer-right {
  flex-shrink: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: #9ca3af;
  transition: all 0.2s ease;
  text-decoration: none;
}

.social-link:hover {
  background-color: #374151;
  color: #d1d5db;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .footer-center {
    order: -1;
  }
  
  .footer-left,
  .footer-right {
    order: 1;
  }
}

@media (max-width: 768px) {
  .app-footer {
    padding: 1.5rem 0;
  }
  
  .footer-content {
    padding: 0 1rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .separator {
    display: none;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    gap: 0.75rem;
  }
  
  .social-links {
    gap: 0.75rem;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
  }
}
</style>
