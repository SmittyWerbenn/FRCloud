<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <p class="eyebrow">VPS · Dedicated · Cloud Hosting</p>
      <h1>Server yang menyala,<br />bukan janji di brosur.</h1>
      <p class="hero-desc">
        FRCloud menyewakan VPS dan dedicated server di data center Indonesia.
        Root penuh, tanpa kontrak, mulai dari Rp 50.000 per bulan.
      </p>
      <div class="hero-actions">
        <router-link to="/pricing" class="btn-primary">Lihat paket</router-link>
        <a href="https://wa.me/6285782846851" target="_blank" rel="noopener" class="btn-link">Tanya via WhatsApp</a>
      </div>
      <dl class="hero-facts">
        <div><dt>Uptime</dt><dd>99,9%</dd></div>
        <div><dt>Latency</dt><dd>&lt; 5 ms</dd></div>
        <div><dt>Akses</dt><dd>root / SSH</dd></div>
        <div><dt>Kontrak</dt><dd>tidak ada</dd></div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 160px 24px 96px;
  border-bottom: 1px solid var(--border-color);
}

.hero-inner {
  max-width: 1080px;
  margin: 0 auto;
}

.eyebrow {
  font-family: var(--mono);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 20px;
}

h1 {
  font-size: clamp(2.2rem, 5.5vw, 4rem);
  max-width: 14em;
  margin-bottom: 24px;
}

.hero-desc {
  max-width: 34em;
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-bottom: 72px;
}

.btn-primary {
  background: var(--accent);
  color: var(--on-accent);
  padding: 12px 22px;
  border-radius: 4px;
  font-weight: 600;
}

.btn-primary:hover {
  background: var(--accent-light);
}

.btn-link {
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color-hover);
  padding-bottom: 2px;
}

.btn-link:hover {
  border-color: var(--accent);
}

.hero-facts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--border-color);
}

.hero-facts div {
  padding: 16px 16px 0 0;
}

.hero-facts dt {
  font-family: var(--mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.hero-facts dd {
  font-family: var(--mono);
  font-size: 1.1rem;
  margin-top: 4px;
}

@media (max-width: 640px) {
  .hero { padding-top: 120px; }
  .hero-facts { grid-template-columns: repeat(2, 1fr); row-gap: 8px; }
}
</style>
