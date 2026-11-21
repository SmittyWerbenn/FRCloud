<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import WaFloatButton from './components/WaFloatButton.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <RouterView />
    </main>
    <FooterSection />
    <WaFloatButton />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root,
[data-theme="dark"] {
  --bg-primary: #0b1418;
  --bg-secondary: #081014;
  --bg-card: #101c22;
  --bg-card-hover: #15262e;
  --border-color: #1f323b;
  --border-color-hover: #37505c;
  --text-primary: #e6eef0;
  --text-secondary: #a9bcc2;
  --text-muted: #84999f;
  --accent: #2bb596;
  --accent-light: #4fcfb1;
  --accent-glow: transparent;
  --on-accent: #04201a;
  --ok: #5cc07a;
  --warn: #e0b24a;
  --danger: #ef7a6b;
  --nav-bg: #0b1418;
  --mono: 'IBM Plex Mono', ui-monospace, monospace;
  color-scheme: dark;
}

[data-theme="light"] {
  --bg-primary: #eef3f3;
  --bg-secondary: #e1eaeb;
  --bg-card: #f9fbfb;
  --bg-card-hover: #e8f0f0;
  --border-color: #cddadc;
  --border-color-hover: #8fa6ab;
  --text-primary: #0f1a1e;
  --text-secondary: #3d4f55;
  --text-muted: #5c7077;
  --accent: #0e7c6b;
  --accent-light: #1e5a8e;
  --accent-glow: transparent;
  --on-accent: #f4fffc;
  --ok: #2a7a40;
  --warn: #946500;
  --danger: #b42318;
  --nav-bg: #eef3f3;
  color-scheme: light;
}

body {
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  transition: background-color 0.2s, color 0.2s;
}

h1, h2, h3 {
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

code, kbd, .mono {
  font-family: var(--mono);
}

table, .mono, dd {
  font-variant-numeric: tabular-nums;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

::selection {
  background: var(--accent);
  color: var(--on-accent);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
