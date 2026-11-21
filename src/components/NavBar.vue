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
        <li><RouterLink to="/domain" @click="mobileMenuOpen = false">Domain</RouterLink></li>
        <li><RouterLink to="/about" @click="mobileMenuOpen = false">About</RouterLink></li>
        <li><RouterLink to="/contact" @click="mobileMenuOpen = false">Contact</RouterLink></li>
        <li><a href="https://dashboard.frel.cloud/login" class="btn-login">Login</a></li>
        <li><a href="https://wa.me/6285782846851" target="_blank" class="btn-nav">Order Sekarang</a></li>
        <li><ThemeToggle /></li>
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
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.5px;
  border-left: 1px solid var(--border-color-hover);
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

.nav-links a.router-link-active:not(.logo):not(.btn-nav):not(.btn-login),
.nav-links a.router-link-exact-active:not(.logo):not(.btn-nav):not(.btn-login) {
  color: var(--text-primary);
  box-shadow: 0 2px 0 var(--accent);
  padding-bottom: 6px;
}

.btn-nav {
  background: var(--accent);
  color: var(--on-accent) !important;
  padding: 10px 24px;
  border-radius: 4px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-nav:hover {
}

.btn-login {
  padding: 9px 22px;
  border: 1px solid var(--accent);
  border-radius: 4px;
  color: var(--accent) !important;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
}

.btn-login:hover {
  background: var(--accent);
  color: var(--on-accent) !important;
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
    transition: transform 0.3s;
  }

  .nav-links.active {
  }
}
</style>
