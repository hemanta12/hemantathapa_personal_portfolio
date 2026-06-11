import type { Scenario } from '../types'

/** Scenario accent colors, assigned by slot (mirror the @theme tokens). */
export const SCENARIO_COLORS = ['#4f46e5', '#06b6d4', '#f59e0b'] as const

export const MAX_SCENARIOS = 3
export const DEFAULT_INFLATION = 3 // percent, used when the toggle is on
export const DEFAULT_RETIREMENT_AGE = 65 // marker age when the age overlay is on

/** One-click example for the empty state: $500/mo at 10% for 30 years. */
export const EXAMPLE_SCENARIO: Pick<Scenario, 'monthly' | 'rate' | 'years'> = {
  monthly: 500,
  rate: 10,
  years: 30,
}

let counter = 0

/**
 * A fresh, mostly-empty scenario for the user to fill in. Amounts and rate start
 * at 0 (rendered as empty inputs); years/compounding have sensible defaults so
 * the chart has an axis to draw on. Colored by its slot.
 */
export function makeScenario(index: number): Scenario {
  counter += 1
  return {
    id: `s${counter}`,
    label: `Scenario ${index + 1}`,
    color: SCENARIO_COLORS[index] ?? SCENARIO_COLORS[SCENARIO_COLORS.length - 1],
    initial: 0,
    monthly: 0,
    rate: 0,
    years: 20,
    compounding: 'monthly',
  }
}

/**
 * A copy of an existing scenario, recolored for its new slot, so the user can
 * change just one variable instead of re-entering everything.
 */
export function cloneScenario(source: Scenario, index: number): Scenario {
  counter += 1
  return {
    ...source,
    id: `s${counter}`,
    label: `Scenario ${index + 1}`,
    color: SCENARIO_COLORS[index] ?? SCENARIO_COLORS[SCENARIO_COLORS.length - 1],
  }
}

/** The app opens on a single empty scenario, ready to fill in. */
export const DEFAULT_SCENARIOS: Scenario[] = [makeScenario(0)]
