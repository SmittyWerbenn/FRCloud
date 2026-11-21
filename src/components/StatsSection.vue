<script setup lang="ts">
const stats = [
  { value: '99,9%', label: 'Uptime' },
  { value: '500+', label: 'Pelanggan aktif' },
  { value: '24/7', label: 'Support' },
  { value: '<5 ms', label: 'Latency' },
]
</script>

<template>
  <section class="stats">
    <dl class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-item">
        <dd class="stat-value">{{ stat.value }}</dd>
        <dt class="stat-label">{{ stat.label }}</dt>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.stats {
  padding: 0 24px;
  border-bottom: 1px solid var(--border-color);
}

.stats-grid {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-item {
  display: flex;
  flex-direction: column-reverse;
  padding: 40px 24px 40px 0;
}

.stat-item + .stat-item {
  padding-left: 24px;
  border-left: 1px solid var(--border-color);
}

.stat-value {
  font-family: var(--mono);
  font-size: 2rem;
  font-weight: 500;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-item:nth-child(3) { padding-left: 0; border-left: 0; }
}
</style>
