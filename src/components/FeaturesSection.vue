<script setup lang="ts">
const features = [
  { title: 'Skala sesuai kebutuhan', desc: 'Tambah RAM, CPU, atau storage kapan saja tanpa downtime.' },
  { title: 'Uptime 99,9%', desc: 'Backup otomatis dan proteksi DDoS menjaga server tetap stabil.' },
  { title: 'Data center di Indonesia', desc: 'Latency di bawah 5 ms untuk pengguna Indonesia dan Asia Tenggara.' },
  { title: 'Root penuh', desc: 'Pasang OS, panel, atau software apa pun yang Anda perlukan.' },
  { title: 'Support 24/7', desc: 'Dibantu langsung oleh tim teknis lewat WhatsApp dan Discord.' },
  { title: 'Harga apa adanya', desc: 'Tanpa biaya tersembunyi. Harga di halaman ini yang Anda bayar.' },
]
</script>

<template>
  <section class="features">
    <div class="features-container">
      <header>
        <p class="eyebrow">Kenapa FRCloud</p>
        <h2>Hal yang kami pegang untuk setiap server.</h2>
      </header>
      <ol class="feature-list">
        <li v-for="(f, i) in features" :key="f.title">
          <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 96px 24px;
  border-bottom: 1px solid var(--border-color);
}

.features-container {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 64px;
}

.eyebrow {
  font-family: var(--mono);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 16px;
}

h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  position: sticky;
  top: 96px;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  display: grid;
  grid-template-columns: 48px 1fr;
  column-gap: 8px;
  padding: 22px 0;
  border-top: 1px solid var(--border-color);
}

.feature-list li:last-child {
  border-bottom: 1px solid var(--border-color);
}

.num {
  grid-row: span 2;
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  padding-top: 3px;
}

h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.feature-list p {
  color: var(--text-secondary);
}

@media (max-width: 800px) {
  .features-container { grid-template-columns: 1fr; gap: 32px; }
  h2 { position: static; }
}
</style>
