<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import WaFloatButton from './components/WaFloatButton.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <RouterView />
    </main>
    <FooterSection />
    <WaFloatButton />
    <ThemeToggle />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root,
[data-theme="dark"] {
  --bg-primary: #0a0a0f;
  --bg-secondary: #07070c;
  --bg-card: rgba(255, 255, 255, 0.02);
  --bg-card-hover: rgba(99, 102, 241, 0.05);
  --border-color: rgba(99, 102, 241, 0.1);
  --border-color-hover: rgba(99, 102, 241, 0.3);
  --text-primary: #e0e0e0;
  --text-secondary: #9090a0;
  --text-muted: #808090;
  --accent: #6366f1;
  --accent-light: #a78bfa;
  --accent-glow: rgba(99, 102, 241, 0.4);
  --nav-bg: rgba(10, 10, 15, 0.9);
  color-scheme: dark;
}

[data-theme="light"] {
  --bg-primary: #f5f5fa;
  --bg-secondary: #ececf5;
  --bg-card: rgba(0, 0, 0, 0.03);
  --bg-card-hover: rgba(99, 102, 241, 0.05);
  --border-color: rgba(99, 102, 241, 0.15);
  --border-color-hover: rgba(99, 102, 241, 0.35);
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a6a;
  --text-muted: #707090;
  --accent: #6366f1;
  --accent-light: #8b5cf6;
  --accent-glow: rgba(99, 102, 241, 0.3);
  --nav-bg: rgba(245, 245, 250, 0.9);
  color-scheme: light;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: background-color 0.3s, color 0.3s;
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
