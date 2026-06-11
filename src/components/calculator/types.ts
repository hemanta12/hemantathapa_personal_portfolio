// Domain types for the compound-growth comparator.

/** How often interest is compounded per year. */
export type Compounding =
  | 'annually'
  | 'semiannually'
  | 'quarterly'
  | 'monthly'
  | 'daily'

export const COMPOUNDING_PER_YEAR: Record<Compounding, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
}

export const COMPOUNDING_LABEL: Record<Compounding, string> = {
  annually: 'Annually',
  semiannually: 'Semi-annually',
  quarterly: 'Quarterly',
  monthly: 'Monthly',
  daily: 'Daily',
}

/** A single investment scenario the user can edit and compare. */
export interface Scenario {
  id: string
  /** Short user-facing label, e.g. "4% return". */
  label: string
  /** Brand hex used for this scenario's line + accents. */
  color: string
  /** Starting lump sum. */
  initial: number
  /** Recurring contribution added at the end of every month. */
  monthly: number
  /** Nominal annual return, as a percent (e.g. 8 = 8%). */
  rate: number
  /** Investing horizon in whole years. */
  years: number
  /** Compounding frequency. */
  compounding: Compounding
}

/** One row of the computed yearly series. */
export interface YearPoint {
  year: number
  /** Nominal balance at the end of this year. */
  balance: number
  /** Total of all money the user has put in by this year. */
  contributed: number
  /** balance - contributed (the part compounding created). */
  growth: number
  /** Balance expressed in today's dollars (inflation-adjusted). */
  real: number
}

/** Headline figures for a scenario at its final year. */
export interface ScenarioResult {
  scenario: Scenario
  series: YearPoint[]
  finalBalance: number
  finalReal: number
  totalContributed: number
  totalGrowth: number
  /** finalBalance / totalContributed — "every $1 became $X". */
  multiple: number
}
