import { useEffect, useMemo, useState } from 'react'
import type { Scenario, ScenarioResult } from './types'
import { computeResult } from './lib/calc'
import { money, multiple } from './lib/format'
import {
  DEFAULT_INFLATION,
  DEFAULT_RETIREMENT_AGE,
  DEFAULT_SCENARIOS,
  MAX_SCENARIOS,
  cloneScenario,
  makeScenario,
} from './lib/defaults'
import { Header } from './Header'
import { ScenarioCard } from './ScenarioCard'

export default function CalculatorContainer() {
  const [scenarios, setScenarios] = useState<Scenario[]>(DEFAULT_SCENARIOS)
  const [adjustInflation, setAdjustInflation] = useState(false)
  const [inflation, setInflation] = useState(DEFAULT_INFLATION)
  // Optional age overlay.
  const [ageOn, setAgeOn] = useState(false)
  const [startAge, setStartAge] = useState(30)
  const [retirementAge, setRetirementAge] = useState(DEFAULT_RETIREMENT_AGE)

  const [usageCount, setUsageCount] = useState<number | null>(null)

  // Determine the current month key for tracking usage
  const currentMonthKey = useMemo(() => {
    const d = new Date()
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    return `thapahemanta-wfg-tools-usage-${year}-${month}`
  }, [])

  // Fetch the current monthly usage count on mount
  useEffect(() => {
    fetch(`https://countapi.mileshilliard.com/api/v1/get/${currentMonthKey}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch count')
        return res.json()
      })
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setUsageCount(data.value)
        }
      })
      .catch((err) => console.error('Error fetching usage count:', err))
  }, [currentMonthKey])

  // Track the first user interaction in the current session
  function trackInteraction() {
    const storageKey = `wfg_interacted_${currentMonthKey}`
    try {
      if (sessionStorage.getItem(storageKey)) {
        return // Already counted this session
      }
      sessionStorage.setItem(storageKey, 'true')
    } catch {
      // Fallback for private browsing
    }

    // Call hit API to increment the counter
    fetch(`https://countapi.mileshilliard.com/api/v1/hit/${currentMonthKey}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to increment count')
        return res.json()
      })
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setUsageCount(data.value)
        }
      })
      .catch((err) => console.error('Error incrementing usage count:', err))
  }

  const appliedInflation = adjustInflation ? inflation : 0
  const results = useMemo(
    () => scenarios.map((s) => computeResult(s, appliedInflation)),
    [scenarios, appliedInflation],
  )

  // Shared Y-axis bound so every card's chart is drawn to the same scale,
  // which makes their heights directly comparable.
  const yMax = useMemo(() => {
    let max = 0
    for (const r of results) {
      for (const p of r.series) {
        const v = adjustInflation ? p.real : p.balance
        if (v > max) max = v
      }
    }
    return max > 0 ? max * 1.05 : 0
  }, [results, adjustInflation])

  function patchScenario(id: string, patch: Partial<Scenario>) {
    trackInteraction()
    setScenarios((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)))
  }

  function addScenario() {
    trackInteraction()
    setScenarios((prev) =>
      prev.length >= MAX_SCENARIOS ? prev : [...prev, makeScenario(prev.length)],
    )
  }

  function duplicateScenario(id: string) {
    trackInteraction()
    setScenarios((prev) => {
      if (prev.length >= MAX_SCENARIOS) return prev
      const source = prev.find((s) => s.id === id)
      return source ? [...prev, cloneScenario(source, prev.length)] : prev
    })
  }

  function removeScenario(id: string) {
    setScenarios((prev) => (prev.length <= 1 ? prev : prev.filter((s) => s.id !== id)))
  }

  // Best-vs-worst punchline, shown once two or more scenarios have data.
  const comparison = useMemo(() => {
    const withData = results.filter((r) => r.finalBalance > 0)
    if (withData.length < 2) return null
    const headline = (r: ScenarioResult) =>
      adjustInflation ? r.finalReal : r.finalBalance
    const sorted = [...withData].sort((a, b) => headline(b) - headline(a))
    const best = sorted[0]
    const worst = sorted[sorted.length - 1]
    const bestVal = headline(best)
    const worstVal = headline(worst)
    if (bestVal - worstVal < 1) return null
    return { best, worst, bestVal, diff: bestVal - worstVal, ratio: bestVal / worstVal }
  }, [results, adjustInflation])

  const atMax = scenarios.length >= MAX_SCENARIOS
  const activeCount = scenarios.length

  const cardWidthClass =
    activeCount === 1
      ? 'w-full md:flex-[5] md:min-w-[500px]'
      : activeCount === 2
      ? 'w-full md:flex-[3] md:min-w-[320px]'
      : 'w-full md:flex-1 md:min-w-[280px]'

  const ghostWidthClass = 'w-full md:flex-1 md:min-w-[150px] md:max-w-[200px]'

  const numCls =
    'w-14 rounded-md border border-line bg-white/80 px-2 py-1 text-center text-sm font-medium text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/15'

  return (
    <div className="min-h-svh">
      <main className="mx-auto w-full max-w-6xl px-4 pt-7 pb-10 sm:px-6 sm:pt-9 sm:pb-12">
        <Header />

        {/* Global adjustments — pill toggles, centered */}
        <div className="mt-5 flex flex-col items-center gap-3">
          {/* Toggle row — pill tray */}
          <div className="flex flex-wrap justify-center gap-1 rounded-full border border-line bg-surface p-1">
            <button
              onClick={() => setAdjustInflation((v) => !v)}
              className={[
                'inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200',
                adjustInflation ? 'bg-accent text-white shadow-[0_2px_8px_rgba(79,70,229,0.3)]' : 'text-body hover:bg-bg hover:text-ink',
              ].join(' ')}
            >
              {adjustInflation && (
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M2.5 8.5 L6.5 12.5 L13.5 4" />
                </svg>
              )}
              Adjust for inflation
            </button>

            <button
              onClick={() => setAgeOn((v) => !v)}
              className={[
                'inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200',
                ageOn ? 'bg-accent text-white shadow-[0_2px_8px_rgba(79,70,229,0.3)]' : 'text-body hover:bg-bg hover:text-ink',
              ].join(' ')}
            >
              {ageOn && (
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M2.5 8.5 L6.5 12.5 L13.5 4" />
                </svg>
              )}
              Show by age
            </button>
          </div>

          {/* Config values — keeps height to avoid layout shifts */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 min-h-[36px] sm:h-9">
            {adjustInflation && (
              <label
                className="flex items-center gap-1.5 text-sm text-muted animate-fade-in"
              >
                Inflation rate
                <input
                  type="number"
                  value={inflation}
                  min={0}
                  max={20}
                  step={0.5}
                  aria-label="Inflation rate"
                  onChange={(e) =>
                    setInflation(
                      Number.isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber,
                    )
                  }
                  className={numCls}
                />
                %
              </label>
            )}

            {adjustInflation && ageOn && (
              <span className="h-4 w-px bg-line/60 hidden sm:block opacity-60" />
            )}

            {ageOn && (
              <>
                <label
                  className="flex items-center gap-1.5 text-sm text-muted animate-fade-in"
                >
                  Starting age
                  <input
                    type="number"
                    value={startAge}
                    min={1}
                    max={100}
                    step={1}
                    aria-label="Starting age"
                    onChange={(e) =>
                      setStartAge(
                        Number.isNaN(e.target.valueAsNumber)
                          ? 1
                          : Math.max(1, Math.min(100, Math.round(e.target.valueAsNumber))),
                      )
                    }
                    className={numCls}
                  />
                </label>

                <label
                  className="flex items-center gap-1.5 text-sm text-muted animate-fade-in"
                >
                  Retire at
                  <input
                    type="number"
                    value={retirementAge}
                    min={startAge + 1}
                    max={110}
                    step={1}
                    aria-label="Retirement age"
                    onChange={(e) =>
                      setRetirementAge(
                        Number.isNaN(e.target.valueAsNumber)
                          ? DEFAULT_RETIREMENT_AGE
                          : Math.round(e.target.valueAsNumber),
                      )
                    }
                    className={numCls}
                  />
                </label>
              </>
            )}
          </div>
        </div>

        {/* Plain-language gap between the strongest and weakest scenario */}
        {comparison && (
          <p className="mt-4 rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-body">
            <span className="font-semibold text-ink">{comparison.best.scenario.label}</span>{' '}
            ends at{' '}
            <span className="font-semibold tabular-nums" style={{ color: comparison.best.scenario.color }}>
              {money(comparison.bestVal)}
            </span>
            {' — about '}
            <span className="font-semibold tabular-nums text-ink">{money(comparison.diff)}</span>
            {' more than '}
            <span className="font-semibold text-ink">{comparison.worst.scenario.label}</span>
            {', '}
            <span className="tabular-nums">{multiple(comparison.ratio)}</span>
            {' the outcome.'}
          </p>
        )}

        {/* Scenario cards — side by side, wrapping on smaller screens */}
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          {scenarios.map((scenario) => {
            const result = results.find((r) => r.scenario.id === scenario.id)!
            return (
              <div
                key={scenario.id}
                className={`card-animate ${cardWidthClass}`}
              >
                <ScenarioCard
                  scenario={scenario}
                  result={result}
                  canRemove={scenarios.length > 1}
                  canDuplicate={!atMax}
                  onChange={(patch) => patchScenario(scenario.id, patch)}
                  onRemove={() => removeScenario(scenario.id)}
                  onDuplicate={() => duplicateScenario(scenario.id)}
                  showReal={adjustInflation}
                  yMax={yMax}
                  startAge={ageOn ? startAge : 0}
                  retirementAge={retirementAge}
                  isWide={scenarios.length === 1}
                />
              </div>
            )
          })}

          {/* Ghost tile: adds a scenario, sized like the card it creates */}
          {!atMax && (
            <button
              onClick={addScenario}
              className={`flex min-h-[220px] ${ghostWidthClass} cursor-pointer flex-col items-center justify-center gap-2 self-start rounded-2xl border border-dashed border-line bg-surface/40 py-10 text-muted transition-colors duration-150 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-accent`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-current">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
              <span className="text-sm font-semibold">Add scenario</span>
            </button>
          )}
        </div>

        {/* Footer — neutral, standard calculator disclaimer */}
        <footer className="mt-12 border-t border-line pt-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs leading-relaxed text-muted">
              For illustration only. Figures assume a constant annual return and
              regular contributions; real investment returns vary and are not
              guaranteed. This tool does not provide financial advice.
            </p>
            <p className="mt-2 text-xs text-muted">
              &copy; {new Date().getFullYear()} Developed by thapahemanta. All rights reserved.
            </p>
          </div>
          {usageCount !== null && (
            <div className="text-xs text-muted sm:text-right shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-medium text-body">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Used {usageCount.toLocaleString()} times this month
              </span>
            </div>
          )}
        </footer>
      </main>
    </div>
  )
}
