<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <div class="hero-badge">☁️ Flexible & Reliable Cloud</div>
      <h1>Server Cepat & Handal<br /><span class="highlight">Mulai dari Rp 50rb/bulan</span></h1>
      <p class="hero-desc">
        FRCloud menyediakan layanan VPS, Dedicated Server, dan Cloud Hosting
        dengan performa tinggi, uptime 99.9%, dan support 24/7.
      </p>
      <div class="hero-actions">
        <router-link to="/pricing" class="btn-primary">Lihat Paket →</router-link>
        <a href="https://wa.me/6285782846851" target="_blank" class="btn-secondary">Chat via WhatsApp</a>
      </div>
      <div class="hero-trust">
        <span>✓ Tanpa Kontrak</span>
        <span>✓ Garansi Uptime</span>
        <span>✓ Full Root Access</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
}

[data-theme="light"] .hero-bg {
  background:
    radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  max-width: 800px;
  text-align: center;
}

.hero-badge {
  display: inline-block;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  color: #a5b4fc;
  margin-bottom: 28px;
}

[data-theme="light"] .hero-badge {
  background: rgba(99, 102, 241, 0.08);
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.highlight {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  padding: 14px 36px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px var(--accent-glow);
}

.btn-secondary {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 14px 36px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: background 0.3s, border-color 0.3s;
}

.btn-secondary:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-color-hover);
}

.hero-trust {
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: wrap;
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  h1 { font-size: 2.2rem; }
  .hero { padding: 100px 16px 60px; }
}
</style>
