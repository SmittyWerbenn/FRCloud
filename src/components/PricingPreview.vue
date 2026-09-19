<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { fetchPlans, type Plan } from '@/lib/api'
import { formatPriceShort, planSpecs } from '@/lib/format'

// A representative 3-plan spread for the homepage teaser (full catalog lives on /pricing).
// The middle one is shown as "popular" the same way the old hardcoded list did.
const TEASER_SLUGS = ['vps-starter', 'vps-pro', 'cloud-s']

const allPlans = ref<Plan[]>([])
const loading = ref(true)

const teaser = computed(() =>
  TEASER_SLUGS.map((slug) => allPlans.value.find((p) => p.slug === slug)).filter((p): p is Plan => Boolean(p)),
)

onMounted(async () => {
  try {
    allPlans.value = await fetchPlans()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="pricing">
    <div class="pricing-container">
      <div class="section-header">
        <h2>Paket <span class="highlight">Harga</span></h2>
        <p>Pilih paket yang sesuai dengan kebutuhan Anda</p>
      </div>
      <p v-if="loading" class="state-message">Memuat paket...</p>
      <div class="pricing-grid">
        <div
          v-for="(plan, index) in teaser"
          :key="plan.slug"
          class="pricing-card"
          :class="{ popular: index === 1 }"
        >
          <div v-if="index === 1" class="popular-badge">🔥 Populer</div>
          <h3>{{ plan.name }}</h3>
          <div class="price">
            <span class="currency">Rp</span>
            <span class="amount">{{ formatPriceShort(plan.price.monthly) }}</span>
            <span class="period">/bulan</span>
          </div>
          <ul>
            <li v-for="spec in planSpecs(plan)" :key="spec">✓ {{ spec }}</li>
          </ul>
          <a
            :href="`https://wa.me/6285782846851?text=Halo%2C%20saya%20mau%20order%20paket%20${plan.name}`"
            target="_blank"
            class="btn-order"
            :class="{ 'btn-popular': index === 1 }"
          >
            Order Sekarang
          </a>
        </div>
      </div>
      <div class="pricing-cta">
        <router-link to="/pricing">Lihat semua paket →</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  padding: 80px 24px;
}

.pricing-container {
  max-width: 1100px;
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

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

.pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  position: relative;
  transition: transform 0.3s, border-color 0.3s, background 0.3s;
}

.pricing-card:hover {
  transform: translateY(-4px);
}

.pricing-card.popular {
  border-color: var(--accent);
  background: var(--bg-card-hover);
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.pricing-card h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.price {
  margin-bottom: 28px;
}

.currency {
  font-size: 1.1rem;
  color: var(--text-muted);
  vertical-align: top;
}

.amount {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
}

.period {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.pricing-card ul {
  list-style: none;
  text-align: left;
  margin-bottom: 32px;
}

.pricing-card li {
  padding: 8px 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  border-bottom: 1px solid var(--border-color);
}

.btn-order {
  display: block;
  background: var(--bg-card);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: var(--text-primary);
  padding: 14px 24px;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-order:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent);
}

.btn-popular {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  border: none;
  color: #fff;
}

.btn-popular:hover {
  box-shadow: 0 4px 20px var(--accent-glow);
  transform: translateY(-2px);
}

.pricing-cta {
  text-align: center;
  margin-top: 40px;
}

.pricing-cta a {
  color: var(--accent);
  font-weight: 600;
  transition: color 0.3s;
}

.pricing-cta a:hover {
  color: var(--accent-light);
}

@media (max-width: 768px) {
  .pricing-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
  .pricing-card.popular { transform: scale(1); }
  .section-header h2 { font-size: 1.8rem; }
}
</style>
