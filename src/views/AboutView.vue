<script setup lang="ts">
const timeline = [
  { year: '2023', title: 'Berdiri', desc: 'FRCloud didirikan dengan visi menyediakan server berkualitas tinggi dengan harga terjangkau.' },
  { year: '2024', title: 'Berkembang', desc: 'Mencapai 200+ pelanggan aktif dan menambah lokasi data center baru.' },
  { year: '2025', title: 'Ekspansi', desc: 'Meluncurkan layanan Dedicated Server dan Game Server dengan proteksi DDoS premium.' },
  { year: '2026', title: 'Saat Ini', desc: '500+ pelanggan, 3 lokasi data center, dan terus berinovasi untuk kepuasan pelanggan.' },
]
</script>

<template>
  <section class="about-page">
    <div class="container">
      <div class="page-header">
        <h1>Tentang <span class="highlight">FRCloud</span></h1>
        <p>Kami hadir untuk memberikan solusi server terbaik bagi Anda</p>
      </div>

      <div class="about-grid">
        <div class="about-content">
          <h2>Apa itu FRCloud?</h2>
          <p>
            <strong style="color: var(--accent)">FR = Flexible & Reliable</strong> — itu makna di balik nama kami.
            Kami percaya infrastruktur cloud yang baik harus <em>fleksibel</em> (mudah disesuaikan
            kebutuhan) dan <em>reliable</em> (bisa diandalkan kapan saja).
          </p>
          <p>
            FRCloud lahir dari kebutuhan akan layanan server yang handal, cepat, dan terjangkau
            di Indonesia. Kami percaya bahwa setiap developer, bisnis, dan gamer berhak mendapatkan
            infrastruktur server berkualitas tanpa harus membayar mahal.
          </p>
        </div>
        <div class="about-values">
          <div class="value-card">
            <h3>🎯 Fokus pada Kualitas</h3>
            <p>Kami hanya menggunakan hardware terbaru dan jaringan berkecepatan tinggi.</p>
          </div>
          <div class="value-card">
            <h3>🤝 Customer First</h3>
            <p>Kepuasan pelanggan adalah prioritas utama kami.</p>
          </div>
          <div class="value-card">
            <h3>💡 Inovasi</h3>
            <p>Terus berinovasi mengikuti perkembangan teknologi cloud terbaru.</p>
          </div>
        </div>
      </div>

      <div class="timeline-section">
        <h2>Perjalanan Kami</h2>
        <div class="timeline">
          <div v-for="item in timeline" :key="item.year" class="timeline-item">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  padding: 120px 24px 80px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 64px;
}

.page-header h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.page-header p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.highlight {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 80px;
}

.about-content h2 {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.about-content p {
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.8;
}

.about-values {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.value-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 24px;
}

.value-card h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.value-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.timeline-section {
  text-align: center;
}

.timeline-section h2 {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 40px;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.timeline-item {
  text-align: left;
  position: relative;
}

.timeline-year {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  padding: 6px 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.timeline-content h3 {
  font-size: 1.05rem;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.timeline-content p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .timeline { grid-template-columns: 1fr 1fr; }
  .page-header h1 { font-size: 2rem; }
}

@media (max-width: 480px) {
  .timeline { grid-template-columns: 1fr; }
}
</style>
