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
  --bg-primary: #111110;
  --bg-secondary: #0c0c0b;
  --bg-card: #181817;
  --bg-card-hover: #1e1e1c;
  --border-color: #2a2a28;
  --border-color-hover: #44443f;
  --text-primary: #ecebe6;
  --text-secondary: #b3b1a8;
  --text-muted: #8d8b83;
  --accent: #ff6a2b;
  --accent-light: #ff8a57;
  --accent-glow: transparent;
  --on-accent: #1a0c04;
  --ok: #7fb069;
  --warn: #e0a83a;
  --danger: #ef6b5b;
  --nav-bg: #111110;
  --mono: 'IBM Plex Mono', ui-monospace, monospace;
  color-scheme: dark;
}

[data-theme="light"] {
  --bg-primary: #f4f2ec;
  --bg-secondary: #eae7df;
  --bg-card: #fbfaf6;
  --bg-card-hover: #f0ede5;
  --border-color: #d8d4c8;
  --border-color-hover: #aaa596;
  --text-primary: #1b1a17;
  --text-secondary: #4a4841;
  --text-muted: #6e6b61;
  --accent: #d9480f;
  --accent-light: #b83a09;
  --accent-glow: transparent;
  --on-accent: #fffaf5;
  --ok: #3f7d2a;
  --warn: #a8700a;
  --danger: #b42318;
  --nav-bg: #f4f2ec;
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
