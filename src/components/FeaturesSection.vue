<script setup lang="ts">
const features = [
  {
    icon: '⚡',
    title: 'Fleksibel',
    desc: 'Scalable on-demand. Tambah RAM, CPU, atau storage kapan saja tanpa downtime.',
  },
  {
    icon: '🛡️',
    title: 'Reliable',
    desc: 'Uptime 99.9%, backup otomatis, dan proteksi DDoS menjaga server Anda tetap stabil.',
  },
  {
    icon: '🌍',
    title: 'Data Center Indonesia',
    desc: 'Latency rendah < 5ms untuk pengguna di Indonesia dan Asia Tenggara.',
  },
  {
    icon: '🔧',
    title: 'Root Access Penuh',
    desc: 'Bebas install OS, panel, atau software apapun sesuai kebutuhan Anda.',
  },
  {
    icon: '💬',
    title: 'Support 24/7',
    desc: 'Tim ahli kami siap bantu via WhatsApp dan Discord kapan saja.',
  },
  {
    icon: '💰',
    title: 'Harga Transparan',
    desc: 'Tanpa biaya tersembunyi. Harga yang Anda lihat adalah harga yang Anda bayar.',
  },
]
</script>

<template>
  <section class="features">
    <div class="features-container">
      <div class="section-header">
        <h2>Kenapa Pilih <span class="highlight">FRCloud</span>?</h2>
        <p>Infrastruktur server terbaik untuk kebutuhan Anda</p>
      </div>
      <div class="features-grid">
        <div v-for="f in features" :key="f.title" class="feature-card">
          <div class="feature-icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 80px 24px;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.section-header p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.highlight {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
  transition: transform 0.3s, border-color 0.3s, background 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-color-hover);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.feature-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .features-grid { grid-template-columns: 1fr; }
  .section-header h2 { font-size: 1.8rem; }
}
</style>
