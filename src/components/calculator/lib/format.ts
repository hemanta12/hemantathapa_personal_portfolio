// Number / currency formatting helpers. Kept tiny and dependency-free.

const usd0 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const usd2 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

/** Full currency, no cents — for headline figures and tooltips. */
export function money(value: number): string {
  return usd0.format(value)
}

/** Currency with cents — for small contribution inputs. */
export function moneyCents(value: number): string {
  return usd2.format(value)
}

/**
 * Compact currency for chart axes: $1.2M, $850K, $500.
 * Keeps the Y-axis readable without crowding.
 */
export function moneyAxis(value: number): string {
  const abs = Math.abs(value)
  if (abs >= 1_000_000) return `$${trim(value / 1_000_000)}M`
  if (abs >= 1_000) return `$${trim(value / 1_000)}K`
  return `$${Math.round(value)}`
}

function trim(n: number): string {
  // 1.20 -> "1.2", 3.00 -> "3"
  return n.toFixed(1).replace(/\.0$/, '')
}

/** "1.8×" multiple display. */
export function multiple(value: number): string {
  return `${value.toFixed(1)}×`
}
