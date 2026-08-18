<script setup lang="ts">
const plans = [
  {
    category: 'VPS Murah',
    items: [
      { name: 'VPS Starter', price: '50K', specs: ['1 vCPU', '1 GB RAM', '20 GB NVMe', '1 TB BW'] },
      { name: 'VPS Basic', price: '85K', specs: ['1 vCPU', '2 GB RAM', '40 GB NVMe', '2 TB BW'] },
      { name: 'VPS Pro', price: '150K', specs: ['2 vCPU', '4 GB RAM', '80 GB NVMe', '4 TB BW'] },
    ],
  },
  {
    category: 'Cloud Server',
    items: [
      { name: 'Cloud S', price: '200K', specs: ['2 vCPU', '4 GB RAM', '100 GB NVMe', 'Unlimited BW'] },
      { name: 'Cloud M', price: '350K', specs: ['4 vCPU', '8 GB RAM', '200 GB NVMe', 'Unlimited BW'] },
      { name: 'Cloud L', price: '600K', specs: ['8 vCPU', '16 GB RAM', '400 GB NVMe', 'Unlimited BW'] },
    ],
  },
  {
    category: 'Dedicated Server',
    items: [
      { name: 'Dedicated Basic', price: '1.2jt', specs: ['Intel Xeon E-2236', '32 GB RAM', '512 GB NVMe', 'Unmetered 100Mbps'] },
      { name: 'Dedicated Pro', price: '2.5jt', specs: ['AMD EPYC 7302', '64 GB RAM', '1 TB NVMe', 'Unmetered 1Gbps'] },
      { name: 'Dedicated Ultra', price: '5jt', specs: ['Dual Xeon 4314', '128 GB RAM', '2 TB NVMe', 'Unmetered 1Gbps'] },
    ],
  },
]

const waLink = (plan: string) =>
  `https://wa.me/6285782846851?text=Halo%2C%20saya%20mau%20order%20${encodeURIComponent(plan)}`
</script>

<template>
  <section class="pricing-page">
    <div class="container">
      <div class="page-header">
        <h1>Semua Paket <span class="highlight">Harga</span></h1>
        <p>Tersedia berbagai pilihan server sesuai kebutuhan dan budget Anda</p>
      </div>

      <div v-for="group in plans" :key="group.category" class="plan-group">
        <h2 class="group-title">{{ group.category }}</h2>
        <div class="plan-grid">
          <div v-for="plan in group.items" :key="plan.name" class="plan-card">
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="amount">Rp {{ plan.price }}</span>
              <span class="period">/bulan</span>
            </div>
            <ul>
              <li v-for="spec in plan.specs" :key="spec">✓ {{ spec }}</li>
            </ul>
            <a :href="waLink(plan.name)" target="_blank" class="btn-order">Order via WhatsApp</a>
          </div>
        </div>
      </div>

      <div class="custom-box">
        <h3>Butuh Spesifikasi Custom?</h3>
        <p>Hubungi kami untuk konsultasi gratis dan dapatkan penawaran khusus sesuai kebutuhan Anda.</p>
        <a href="https://wa.me/6285782846851?text=Halo%2C%20saya%20butuh%20server%20custom" target="_blank" class="btn-custom">Konsultasi Gratis →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-page {
  padding: 120px 24px 80px;
}

.container {
  max-width: 1200px;
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

.plan-group {
  margin-bottom: 64px;
}

.group-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #a5b4fc;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
}

.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.plan-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
  transition: transform 0.3s, border-color 0.3s, background 0.3s;
}

.plan-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-color-hover);
}

.plan-card h3 {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.price {
  margin-bottom: 24px;
}

.amount {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
}

.period {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.plan-card ul {
  list-style: none;
  margin-bottom: 24px;
}

.plan-card li {
  padding: 6px 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.btn-order {
  display: block;
  text-align: center;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-order:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px var(--accent-glow);
}

.custom-box {
  text-align: center;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 48px 32px;
}

.custom-box h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.custom-box p {
  color: var(--text-muted);
  margin-bottom: 24px;
}

.btn-custom {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  padding: 14px 36px;
  border-radius: 10px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-custom:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px var(--accent-glow);
}

@media (max-width: 768px) {
  .plan-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
  .page-header h1 { font-size: 2rem; }
}
</style>
