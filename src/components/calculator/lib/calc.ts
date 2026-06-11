import {
  COMPOUNDING_PER_YEAR,
  type Scenario,
  type ScenarioResult,
  type YearPoint,
} from '../types'

/**
 * Build the year-by-year series for one scenario.
 *
 * Model: interest accrues at the chosen compounding frequency; contributions
 * are added at the end of each month. To combine the two cleanly we convert the
 * nominal annual rate into an effective monthly growth factor, then step month
 * by month. This keeps monthly contributions and (say) daily compounding
 * mathematically consistent on a single timeline.
 *
 * @param inflation annual inflation rate as a percent (e.g. 3 = 3%). Used only
 *   to compute the inflation-adjusted "real" value; it never changes nominal.
 */
export function computeSeries(scenario: Scenario, inflation: number): YearPoint[] {
  const { initial, monthly, rate, years } = scenario
  const n = COMPOUNDING_PER_YEAR[scenario.compounding]

  const ear = Math.pow(1 + rate / 100 / n, n) - 1 // effective annual rate
  const monthlyGrowth = Math.pow(1 + ear, 1 / 12) // monthly factor
  const inflationFactor = 1 + inflation / 100

  const points: YearPoint[] = []

  // Year 0 — the starting line.
  points.push({
    year: 0,
    balance: initial,
    contributed: initial,
    growth: 0,
    real: initial,
  })

  let balance = initial
  let contributed = initial

  for (let month = 1; month <= years * 12; month++) {
    balance = balance * monthlyGrowth + monthly
    contributed += monthly

    if (month % 12 === 0) {
      const year = month / 12
      points.push({
        year,
        balance,
        contributed,
        growth: balance - contributed,
        real: balance / Math.pow(inflationFactor, year),
      })
    }
  }

  return points
}

/** Compute the full result (series + headline figures) for one scenario. */
export function computeResult(scenario: Scenario, inflation: number): ScenarioResult {
  const series = computeSeries(scenario, inflation)
  const last = series[series.length - 1]
  return {
    scenario,
    series,
    finalBalance: last.balance,
    finalReal: last.real,
    totalContributed: last.contributed,
    totalGrowth: last.growth,
    multiple: last.contributed > 0 ? last.balance / last.contributed : 0,
  }
}

/**
 * Merge every scenario's series into rows keyed by year, ready for Recharts.
 * Each row looks like: { year, [scenarioId]: value, ... }. Scenarios with a
 * shorter horizon simply have no value past their final year, so their line
 * stops — which is exactly the comparison we want to show.
 *
 * @param useReal when true, plots inflation-adjusted values instead of nominal.
 */
export function buildChartData(
  results: ScenarioResult[],
  useReal: boolean,
): Array<Record<string, number>> {
  const maxYears = Math.max(0, ...results.map((r) => r.scenario.years))
  const rows: Array<Record<string, number>> = []

  for (let year = 0; year <= maxYears; year++) {
    const row: Record<string, number> = { year }
    for (const result of results) {
      const point = result.series.find((p) => p.year === year)
      if (point) row[result.scenario.id] = useReal ? point.real : point.balance
    }
    rows.push(row)
  }

  return rows
}
