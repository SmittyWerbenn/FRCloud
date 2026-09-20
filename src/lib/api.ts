// In dev, '/api' is proxied to the local frcloud-api `wrangler dev` server (see vite.config.ts).
// In production (GitHub Pages, no proxy) this must point at the real API origin.
const API_BASE = import.meta.env.VITE_API_URL ?? (import.meta.env.PROD ? 'https://api.frel.cloud' : '/api')

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

export interface DomainPricing {
  tld: string
  currency: string
  registrationPrice: number
  renewalPrice: number
  transferPrice: number
}

export async function fetchDomainPricing(): Promise<DomainPricing[]> {
  const res = await fetch(`${API_BASE}/domains/pricing`)
  if (!res.ok) throw new Error(`Failed to load domain pricing (${res.status})`)
  const body = (await res.json()) as { pricing: DomainPricing[] }
  return body.pricing
}

export interface DomainCheckResult {
  domain: string
  tld: string
  available: boolean
  price: DomainPricing
}

export class DomainCheckError extends Error {
  code: string
  constructor(code: string) {
    super(code)
    this.code = code
  }
}

export async function checkDomainAvailability(domain: string): Promise<DomainCheckResult> {
  const res = await fetch(`${API_BASE}/domains/check?domain=${encodeURIComponent(domain)}`)
  const body = (await res.json().catch(() => null)) as (DomainCheckResult & { error?: string }) | null
  if (!res.ok) throw new DomainCheckError(body?.error ?? 'request_failed')
  return body as DomainCheckResult
}
