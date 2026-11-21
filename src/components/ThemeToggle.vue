<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const theme = useThemeStore()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    @click="theme.toggle"
    :aria-label="theme.isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'"
    :title="theme.isDark ? 'Mode terang' : 'Mode gelap'"
  >
    <svg v-if="theme.isDark" viewBox="0 0 24 24" class="ti" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
    <svg v-else viewBox="0 0 24 24" class="ti" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  width: 36px;
  height: 36px;
  padding: 0;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s;
}

.ti { width: 18px; height: 18px; }

.theme-toggle:hover {
  background: var(--bg-card-hover);
}

/* Light theme override */
:global([data-theme="light"]) .theme-toggle {
  background: rgba(0, 0, 0, 0.06);
  border-color: rgba(0, 0, 0, 0.12);
}

:global([data-theme="light"]) .theme-toggle:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
