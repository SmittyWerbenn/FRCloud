<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const theme = useThemeStore()
</script>

<template>
  <button class="theme-toggle" @click="theme.toggle" :title="theme.isDark ? 'Switch to Light' : 'Switch to Dark'">
    <span v-if="theme.isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.15);
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
