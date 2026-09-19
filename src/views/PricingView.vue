<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { fetchPlans, type Plan } from '@/lib/api'
import { formatPriceShort, planSpecs } from '@/lib/format'

const plans = ref<Plan[]>([])
const loading = ref(true)
const loadError = ref(false)

const groups = computed(() => {
  const byCategory = new Map<string, Plan[]>()
  for (const plan of plans.value) {
    const list = byCategory.get(plan.category) ?? []
    list.push(plan)
    byCategory.set(plan.category, list)
  }
  return Array.from(byCategory.entries()).map(([category, items]) => ({ category, items }))
})

onMounted(async () => {
  try {
    plans.value = await fetchPlans()
  } catch {
    loadError.value = true
  } finally {
    loading.value = false
  }
})

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

      <p v-if="loading" class="state-message">Memuat paket...</p>
      <p v-else-if="loadError" class="state-message">Gagal memuat paket. Silakan coba lagi nanti.</p>

      <div v-for="group in groups" :key="group.category" class="plan-group">
        <h2 class="group-title">{{ group.category }}</h2>
        <div class="plan-grid">
          <div v-for="plan in group.items" :key="plan.slug" class="plan-card">
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="amount">Rp {{ formatPriceShort(plan.price.monthly) }}</span>
              <span class="period">/bulan</span>
            </div>
            <ul>
              <li v-for="spec in planSpecs(plan)" :key="spec">✓ {{ spec }}</li>
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

.state-message {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 32px;
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
