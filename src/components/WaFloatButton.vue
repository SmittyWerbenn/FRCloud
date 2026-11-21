<script setup lang="ts">
const waLink = 'https://wa.me/6285782846851'
</script>

<template>
  <a :href="waLink" target="_blank" class="wa-float" aria-label="Chat WhatsApp">
    
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
  background: #1f8f4e;
  color: #fff;
  padding: 14px 22px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.95rem;
  z-index: 9999;
  transition: transform 0.2s, box-shadow 0.2s;
}

.wa-float:hover {
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
