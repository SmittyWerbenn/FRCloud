<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <img src="/logo.png" alt="FRCloud" class="footer-logo" />
        <span class="footer-name">FRCloud</span>
        <p>Solusi server handal untuk kebutuhan digital Anda. Performa tinggi, harga terjangkau.</p>
      </div>
      <div class="footer-links">
        <h4>Menu</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/pricing">Pricing</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Layanan</h4>
        <ul>
          <li><a href="#">VPS Murah</a></li>
          <li><a href="#">Dedicated Server</a></li>
          <li><a href="#">Cloud Hosting</a></li>
          <li><a href="#">Game Server</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Kontak</h4>
        <ul>
          <li><a href="https://wa.me/6285782846851" target="_blank">WhatsApp</a></li>
          <li><a href="mailto:hello@frcloud.id">Email</a></li>
          <li><a href="#">Discord</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 FRCloud. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 60px 24px 24px;
  margin-top: 80px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
}

.footer-brand p {
  color: var(--text-muted);
  margin-top: 12px;
  font-size: 0.9rem;
}

.footer-logo {
  height: 40px;
  width: auto;
  margin-bottom: 12px;
}

.footer-name {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.footer-links h4 {
  color: var(--text-primary);
  margin-bottom: 16px;
  font-size: 1rem;
}

.footer-links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-bottom {
  max-width: 1200px;
  margin: 48px auto 0;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>
