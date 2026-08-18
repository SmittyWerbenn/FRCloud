<script setup lang="ts">
const stats = [
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '500+', label: 'Pelanggan Aktif' },
  { value: '24/7', label: 'Customer Support' },
  { value: '<5ms', label: 'Latency Rendah' },
]
</script>

<template>
  <section class="stats">
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-item">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding: 60px 24px;
  position: relative;
}

.stats-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.stat-item {
  text-align: center;
  padding: 28px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: background 0.3s, border-color 0.3s;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
