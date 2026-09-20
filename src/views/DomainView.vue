<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchDomainPricing, checkDomainAvailability, DomainCheckError, type DomainPricing, type DomainCheckResult } from '@/lib/api'
import { formatPriceShort } from '@/lib/format'

const pricing = ref<DomainPricing[]>([])
const pricingLoading = ref(true)
const pricingError = ref(false)

const searchInput = ref('')
const searching = ref(false)
const searchError = ref('')
const result = ref<DomainCheckResult | null>(null)

onMounted(async () => {
  try {
    pricing.value = await fetchDomainPricing()
  } catch {
    pricingError.value = true
  } finally {
    pricingLoading.value = false
  }
})

async function onSearch() {
  const domain = searchInput.value.trim().toLowerCase()
  if (!domain) return

  searching.value = true
  searchError.value = ''
  result.value = null

  try {
    result.value = await checkDomainAvailability(domain)
  } catch (e) {
    if (e instanceof DomainCheckError && e.code === 'unsupported_tld') {
      searchError.value = 'Ekstensi domain ini belum kami dukung. Coba .com, .net, .org, .id, .co.id, atau .my.id.'
    } else if (e instanceof DomainCheckError && e.code === 'invalid_input') {
      searchError.value = 'Format domain tidak valid. Contoh: namadomain.com'
    } else {
      searchError.value = 'Terjadi kesalahan. Coba lagi.'
    }
  } finally {
    searching.value = false
  }
}

const waLink = (domain: string) =>
  `https://wa.me/6285782846851?text=Halo%2C%20saya%20mau%20daftarkan%20domain%20${encodeURIComponent(domain)}`
</script>

<template>
  <section class="domain-page">
    <div class="container">
      <div class="page-header">
        <h1>Cari & Daftarkan <span class="highlight">Domain</span></h1>
        <p>Temukan nama domain yang tepat untuk bisnis atau proyek Anda</p>
      </div>

      <form class="search-box" @submit.prevent="onSearch">
        <input
          v-model="searchInput"
          type="text"
          placeholder="namadomain.com"
          autocapitalize="off"
          autocorrect="off"
        />
        <button type="submit" :disabled="searching">{{ searching ? 'Mencari...' : 'Cek Ketersediaan' }}</button>
      </form>

      <p v-if="searchError" class="search-message error">{{ searchError }}</p>

      <div v-if="result" class="result-card" :class="{ available: result.available, taken: !result.available }">
        <div class="result-main">
          <span class="result-domain">{{ result.domain }}</span>
          <span class="result-status">{{ result.available ? '✓ Tersedia' : '✗ Sudah terdaftar' }}</span>
        </div>
        <template v-if="result.available">
          <span class="result-price">Rp {{ formatPriceShort(result.price.registrationPrice) }}/tahun</span>
          <a :href="waLink(result.domain)" target="_blank" class="btn-order">Daftarkan Sekarang</a>
        </template>
      </div>

      <div class="pricing-section">
        <h2>Harga Domain</h2>

        <p v-if="pricingLoading" class="search-message">Memuat harga...</p>
        <p v-else-if="pricingError" class="search-message">Gagal memuat harga domain.</p>

        <div v-else class="tld-grid">
          <div v-for="tld in pricing" :key="tld.tld" class="tld-card">
            <span class="tld-name">{{ tld.tld }}</span>
            <span class="tld-price">Rp {{ formatPriceShort(tld.registrationPrice) }}<span class="period">/tahun</span></span>
            <span class="tld-renewal">Perpanjangan Rp {{ formatPriceShort(tld.renewalPrice) }}/tahun</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.domain-page {
  padding: 120px 24px 80px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 48px;
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

.search-box {
  display: flex;
  gap: 12px;
  max-width: 560px;
  margin: 0 auto;
}

.search-box input {
  flex: 1;
  padding: 14px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 1rem;
}

.search-box input:focus {
  outline: none;
  border-color: var(--accent);
}

.search-box button {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  border: none;
  padding: 14px 24px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

.search-box button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.search-message {
  text-align: center;
  color: var(--text-muted);
  margin-top: 20px;
}

.search-message.error {
  color: #ef4444;
}

.result-card {
  max-width: 560px;
  margin: 24px auto 0;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 28px;
  text-align: center;
}

.result-card.available {
  border-color: rgba(34, 197, 94, 0.4);
}

.result-card.taken {
  border-color: rgba(239, 68, 68, 0.3);
}

.result-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.result-domain {
  font-size: 1.2rem;
  font-weight: 700;
}

.result-status {
  font-weight: 600;
}

.result-card.available .result-status {
  color: #22c55e;
}

.result-card.taken .result-status {
  color: #ef4444;
}

.result-price {
  display: block;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.btn-order {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
}

.pricing-section {
  margin-top: 64px;
}

.pricing-section h2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.tld-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

.tld-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 24px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tld-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
}

.tld-price {
  font-weight: 700;
  color: var(--accent);
}

.tld-price .period {
  font-weight: 400;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.tld-renewal {
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (max-width: 600px) {
  .search-box {
    flex-direction: column;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
