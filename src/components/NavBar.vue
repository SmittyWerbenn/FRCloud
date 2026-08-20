<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const mobileMenuOpen = ref(false)

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="logo">
        <img src="/logo.png" alt="FRCloud" class="logo-img" />
        <span class="logo-tagline">FRCloud</span>
      </RouterLink>

      <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span :class="{ open: mobileMenuOpen }"></span>
      </button>

      <ul class="nav-links" :class="{ active: mobileMenuOpen }">
        <li><RouterLink to="/" @click="mobileMenuOpen = false">Home</RouterLink></li>
        <li><RouterLink to="/pricing" @click="mobileMenuOpen = false">Pricing</RouterLink></li>
        <li><RouterLink to="/about" @click="mobileMenuOpen = false">About</RouterLink></li>
        <li><RouterLink to="/contact" @click="mobileMenuOpen = false">Contact</RouterLink></li>
        <li><ThemeToggle /></li>
        <li><a href="https://wa.me/6285782846851" target="_blank" class="btn-nav">Order Sekarang</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  transition: background 0.3s, border-color 0.3s;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-img {
  height: 26px;
  width: auto;
}

.logo-tagline {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.5px;
  border-left: 1px solid rgba(99, 102, 241, 0.4);
  padding-left: 10px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--accent);
}

.btn-nav {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff !important;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px var(--accent-glow);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
}

.mobile-toggle span,
.mobile-toggle span::before,
.mobile-toggle span::after {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  position: absolute;
  transition: 0.3s;
}

.mobile-toggle span::before { content: ''; top: -8px; }
.mobile-toggle span::after { content: ''; top: 8px; }

.mobile-toggle span.open { background: transparent; }
.mobile-toggle span.open::before { transform: rotate(45deg); top: 0; }
.mobile-toggle span.open::after { transform: rotate(-45deg); top: 0; }

@media (max-width: 768px) {
  .mobile-toggle { display: block; }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    flex-direction: column;
    padding: 32px 24px;
    gap: 24px;
    transform: translateY(-120%);
    transition: transform 0.3s;
  }

  .nav-links.active {
    transform: translateY(0);
  }
}
</style>
