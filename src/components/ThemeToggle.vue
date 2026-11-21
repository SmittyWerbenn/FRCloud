<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const theme = useThemeStore()
</script>

<template>
  <button class="theme-toggle" @click="theme.toggle" :title="theme.isDark ? 'Switch to Light' : 'Switch to Dark'">
    <span v-if="theme.isDark">Gelap</span>
    <span v-else>Terang</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-family: var(--mono);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s;
}

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
