<template>
  <footer class="ceisc-footer">
    <div class="footer-content">
      <!-- Top Row: Logo and Social Icons -->
      <div class="footer-top">
        <div class="footer-left">
          <div class="footer-logo">
            <IconLogo :size="32" flag-color="white" triangle-color="#181D27" />
            <span class="logo-text">ceisc</span>
          </div>
        </div>

        <div class="footer-right">
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <IconYoutube />
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <IconTwitter />
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <IconLinkedin />
            </a>
          </div>
        </div>
      </div>

      <!-- Middle Row: Navigation Links -->
      <div class="footer-middle">
        <div class="footer-links">
          <a href="#" class="footer-link">Termos de uso</a>
          <a href="#" class="footer-link">Políticas de Privacidade</a>
          <a href="#" class="footer-link">Política de resposta a incidentes</a>
        </div>
      </div>

      <!-- Bottom Row: Copyright -->
      <div class="footer-bottom">
        <div class="footer-copyright">© 2024 Ceisc. Todos os direitos reservados.</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconInstagram from './icons/IconInstagram.vue'
import IconYoutube from './icons/IconYoutube.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconLogo from './icons/IconLogo.vue'
// Footer component logic here if needed
</script>

<style scoped>
.ceisc-footer {
  background-color: #1f2937;
  color: #9ca3af;
  padding: 2rem 0;
  margin-top: auto;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-middle {
  text-align: center;
  margin-bottom: 1.5rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #374151;
}

.footer-left {
  flex-shrink: 0;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.footer-link:hover {
  color: #d1d5db;
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
  .footer-top {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-left,
  .footer-right {
    order: 1;
  }

  .footer-links {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .ceisc-footer {
    padding: 1.5rem 0;
  }

  .footer-content {
    padding: 0 1rem;
  }

  .footer-top {
    margin-bottom: 1rem;
  }

  .footer-bottom {
    padding-top: 1rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.75rem;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    gap: 0.5rem;
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
