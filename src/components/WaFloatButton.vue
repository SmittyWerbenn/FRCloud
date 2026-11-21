<script setup lang="ts">
const waLink = 'https://wa.me/6285782846851?text=Halo%20FRCloud%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20server.'
</script>

<template>
  <a :href="waLink" target="_blank" rel="noopener" class="wa-float" aria-label="Chat WhatsApp">
    <span class="wa-label">Chat Kami</span>
    <span class="wa-circle">
      <span class="wa-pulse" aria-hidden="true"></span>
      <svg viewBox="0 0 32 32" class="wa-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.72A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16.003 3zm0 23.6c-2 0-3.95-.54-5.66-1.56l-.4-.24-3.98 1.02 1.06-3.88-.27-.4A10.56 10.56 0 0 1 5.4 16c0-5.86 4.77-10.6 10.6-10.6S26.6 10.14 26.6 16 21.86 26.6 16 26.6zm5.8-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37z"
        />
      </svg>
    </span>
  </a>
</template>

<style scoped>
.wa-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 9999;
  color: #fff;
}

.wa-label {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(12px);
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
}

.wa-circle {
  position: relative;
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(145deg, #3ee073, #128c4a);
  box-shadow: 0 6px 18px rgba(18, 140, 74, 0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}

.wa-icon {
  position: relative;
  width: 34px;
  height: 34px;
}

.wa-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #25d366;
  opacity: 0.55;
  animation: wa-pulse 2.4s ease-out infinite;
}

.wa-float:hover .wa-label,
.wa-float:focus-visible .wa-label {
  opacity: 1;
  transform: none;
}

.wa-float:hover .wa-circle {
  transform: scale(1.08);
  box-shadow: 0 8px 24px rgba(18, 140, 74, 0.6);
}

@keyframes wa-pulse {
  0% { transform: scale(1); opacity: 0.55; }
  80%, 100% { transform: scale(1.7); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .wa-pulse { animation: none; opacity: 0; }
}

@media (max-width: 480px) {
  .wa-float { bottom: 20px; right: 16px; }
  .wa-circle { width: 54px; height: 54px; }
  .wa-label { display: none; }
}
</style>
