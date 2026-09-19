const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

export interface Plan {
  id: string
  category: string
  name: string
  slug: string
  description: string | null
  cpu: { cores: number }
  ram: { mb: number }
  storage: { gb: number }
  bandwidth: { unlimited: true } | { unlimited: false; tb: number | null }
  ipv4Count: number
  ipv6Enabled: boolean
  price: {
    currency: string
    monthly: number
    yearly: number | null
    setupFee: number
  }
}

export async function fetchPlans(): Promise<Plan[]> {
  const res = await fetch(`${API_BASE}/plans`)
  if (!res.ok) throw new Error(`Failed to load plans (${res.status})`)
  const body = (await res.json()) as { plans: Plan[] }
  return body.plans
}
