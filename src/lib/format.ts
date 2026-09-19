import type { Plan } from './api'

/** Matches the "50K" / "1.2jt" shorthand the pricing pages used before the catalog moved to the API. */
export function formatPriceShort(idr: number): string {
  if (idr >= 1_000_000) {
    const millions = idr / 1_000_000
    return `${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}jt`
  }
  if (idr >= 1_000) {
    return `${Math.round(idr / 1_000)}K`
  }
  return String(idr)
}

export function formatRamGb(mb: number): string {
  return mb % 1024 === 0 ? `${mb / 1024} GB` : `${(mb / 1024).toFixed(1)} GB`
}

export function planSpecs(plan: Plan): string[] {
  const specs = [
    `${plan.cpu.cores} vCPU`,
    `${formatRamGb(plan.ram.mb)} RAM`,
    `${plan.storage.gb} GB NVMe`,
    plan.bandwidth.unlimited ? 'Unlimited Bandwidth' : `${plan.bandwidth.tb} TB Bandwidth`,
    `${plan.ipv4Count} IP Address${plan.ipv4Count > 1 ? 'es' : ''}`,
  ]
  if (plan.description) specs.push(plan.description)
  return specs
}
