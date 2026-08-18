<script setup lang="ts">
const waLink = 'https://wa.me/6285782846851'
</script>

<template>
  <a :href="waLink" target="_blank" class="wa-float" aria-label="Chat WhatsApp">
    <span class="wa-icon">💬</span>
    <span class="wa-text">Chat Kami</span>
  </a>
</template>

<style scoped>
.wa-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: #fff;
  padding: 14px 22px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.4);
  z-index: 9999;
  transition: transform 0.2s, box-shadow 0.2s;
}

.wa-float:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 36px rgba(37, 211, 102, 0.5);
}

.wa-icon {
  font-size: 1.2rem;
}

@media (max-width: 480px) {
  .wa-float {
    bottom: 20px;
    right: 16px;
    padding: 12px 18px;
  }
  .wa-text {
    display: none;
  }
  .wa-float {
    border-radius: 50%;
    width: 52px;
    height: 52px;
    padding: 0;
    justify-content: center;
  }
}
</style>
