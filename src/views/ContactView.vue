<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function sendWhatsApp() {
  const text = `Halo FRCloud!\n\nNama: ${name.value}\nEmail: ${email.value}\nPesan: ${message.value}`
  const url = `https://wa.me/6285782846851?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>

<template>
  <section class="contact-page">
    <div class="container">
      <div class="page-header">
        <h1>Hubungi <span class="highlight">Kami</span></h1>
        <p>Ada pertanyaan? Kami siap membantu Anda</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>Respon cepat dalam hitungan menit</p>
            <a href="https://wa.me/6285782846851" target="_blank" class="info-link">Chat Sekarang →</a>
          </div>
          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3>Email</h3>
            <p>hello@frcloud.id</p>
            <a href="mailto:hello@frcloud.id" class="info-link">Kirim Email →</a>
          </div>
          <div class="info-card">
            <div class="info-icon">🎮</div>
            <h3>Discord</h3>
            <p>Bergabung dengan komunitas kami</p>
            <a href="#" class="info-link">Join Discord →</a>
          </div>
          <div class="info-card">
            <div class="info-icon">⏰</div>
            <h3>Jam Operasional</h3>
            <p>Support 24/7 setiap hari</p>
          </div>
        </div>

        <div class="contact-form">
          <h2>Kirim Pesan</h2>
          <form @submit.prevent="sendWhatsApp">
            <div class="form-group">
              <label>Nama</label>
              <input v-model="name" type="text" placeholder="Nama Anda" required />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="email" type="email" placeholder="email@anda.com" required />
            </div>
            <div class="form-group">
              <label>Pesan</label>
              <textarea v-model="message" placeholder="Tulis pesan Anda..." rows="5" required></textarea>
            </div>
            <button type="submit" class="btn-submit">Kirim via WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  padding: 120px 24px 80px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 64px;
}

.page-header h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.page-header p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.highlight {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 24px;
}

.info-icon {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.info-card h3 {
  font-size: 1.05rem;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.info-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.info-link {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.info-link:hover {
  color: var(--accent-light);
}

.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
}

.contact-form h2 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 28px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 14px 16px;
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-group textarea {
  resize: vertical;
}

.btn-submit {
  width: 100%;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px var(--accent-glow);
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
  .page-header h1 { font-size: 2rem; }
}
</style>
