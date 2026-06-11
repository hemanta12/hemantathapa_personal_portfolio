import {
  COMPOUNDING_LABEL,
  type Compounding,
  type Scenario,
  type ScenarioResult,
} from "./types";
import { money, multiple } from "./lib/format";
import { EXAMPLE_SCENARIO } from "./lib/defaults";
import { NumberField } from "./Field";
import { GrowthChart } from "./GrowthChart";

interface ScenarioCardProps {
  scenario: Scenario;
  result: ScenarioResult;
  canRemove: boolean;
  canDuplicate: boolean;
  onChange: (patch: Partial<Scenario>) => void;
  onRemove: () => void;
  onDuplicate: () => void;
  showReal: boolean;
  yMax: number;
  startAge: number;
  retirementAge: number;
  isWide?: boolean;
}

const COMPOUNDING_OPTIONS = Object.keys(COMPOUNDING_LABEL) as Compounding[];

export function ScenarioCard({
  scenario,
  result,
  canRemove,
  canDuplicate,
  onChange,
  onRemove,
  onDuplicate,
  showReal,
  yMax,
  startAge,
  retirementAge,
  isWide = false,
}: ScenarioCardProps) {
  const headline = showReal ? result.finalReal : result.finalBalance;
  const hasData = result.finalBalance > 0;

  const crossover = hasData
    ? result.series.find((p) => p.contributed > 0 && p.growth > p.contributed)
    : undefined;

  const retireYear =
    startAge > 0 && retirementAge > startAge ? retirementAge - startAge : 0;
  const retirePoint =
    retireYear > 0 && retireYear < scenario.years
      ? result.series.find((p) => p.year === retireYear)
      : undefined;
  const retireValue = retirePoint
    ? showReal
      ? retirePoint.real
      : retirePoint.balance
    : null;

  return (
    <section
      className="flex flex-col rounded-2xl border border-line bg-surface p-3 md:p-3.5 shadow-sm transition-shadow duration-200"
      style={{ "--card-color": scenario.color } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 24px ${scenario.color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Title row */}
      <div className="mb-2.5 flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{
            background: scenario.color,
            boxShadow: `0 0 6px ${scenario.color}60`,
          }}
          aria-hidden
        />
        <input
          value={scenario.label}
          onChange={(e) => onChange({ label: e.target.value })}
          aria-label="Scenario name"
          className="min-w-0 flex-1 bg-transparent font-display text-base font-semibold text-ink outline-none focus:border-b focus:border-accent/40"
        />
        {canDuplicate && (
          <button
            onClick={onDuplicate}
            aria-label={`Duplicate ${scenario.label}`}
            className="shrink-0 cursor-pointer rounded-md px-2 py-1 text-xs font-medium text-muted transition-colors hover:bg-line/70 hover:text-ink"
          >
            Duplicate
          </button>
        )}
        {canRemove && (
          <button
            onClick={onRemove}
            aria-label={`Remove ${scenario.label}`}
            className="shrink-0 cursor-pointer rounded-md px-1.5 text-lg leading-none text-muted transition-colors hover:bg-line/70 hover:text-ink"
          >
            ×
          </button>
        )}
      </div>

      <div className={isWide ? "md:flex md:gap-4 md:items-start" : ""}>
        {/* Left Side: Inputs, Compounding, and Final Balance / Stats */}
        <div className={isWide ? "md:w-[272px] md:shrink-0" : ""}>
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-2">
            <NumberField
              label="Initial"
              value={scenario.initial}
              onChange={(v) => onChange({ initial: v })}
              prefix="$"
            />
            <NumberField
              label="Monthly"
              value={scenario.monthly}
              onChange={(v) => onChange({ monthly: v })}
              prefix="$"
            />
            <NumberField
              label="Return rate"
              value={scenario.rate}
              onChange={(v) => onChange({ rate: v })}
              suffix="%"
              min={0}
              max={100}
            />
            <NumberField
              label="Years"
              value={scenario.years}
              onChange={(v) => onChange({ years: Math.round(v) })}
              suffix="yrs"
              placeholder="20"
              min={1}
              max={70}
            />
          </div>

          {/* Compounding */}
          <label className="mt-2 flex flex-col gap-1">
            <span className="text-[11px] font-medium uppercase tracking-wide text-muted">
              Compounding
            </span>
            <select
              value={scenario.compounding}
              onChange={(e) =>
                onChange({ compounding: e.target.value as Compounding })
              }
              className="cursor-pointer rounded-lg border border-line bg-surface px-2.5 py-1.5 text-sm font-medium text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/15"
            >
              {COMPOUNDING_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {COMPOUNDING_LABEL[opt]}
                </option>
              ))}
            </select>
          </label>

          {/* Result */}
          <div className="mt-2 border-t border-line pt-2.5">
            <div className="text-[11px] font-medium uppercase tracking-wide text-muted">
              {showReal ? "Final balance (today's $)" : "Final balance"}
            </div>
            <div
              className="font-display text-[24px] font-semibold leading-tight tracking-tight tabular-nums md:text-[25px]"
              style={{ color: scenario.color }}
            >
              {money(headline)}
            </div>
            {hasData && retireValue != null && (
              <div className="mt-1.5 flex items-center justify-between rounded-lg bg-accent/10 px-2.5 py-1.5">
                <span className="text-xs font-medium text-body">
                  At age {retirementAge}
                </span>
                <span
                  className="font-display text-sm font-semibold tabular-nums"
                  style={{ color: scenario.color }}
                >
                  {money(retireValue)}
                </span>
              </div>
            )}
            {hasData ? (
              <div className="mt-1.5 grid grid-cols-3 gap-1.5 text-center">
                <Stat label="Invested" value={money(result.totalContributed)} />
                <Stat label="Interest" value={money(result.totalGrowth)} />
                <Stat label="Multiple" value={multiple(result.multiple)} />
              </div>
            ) : (
              <div className="mt-1">
                <p className="text-xs text-muted">
                  Enter an amount and a return rate to see it grow — or
                </p>
                <button
                  onClick={() => onChange({ ...EXAMPLE_SCENARIO })}
                  className="mt-1.5 cursor-pointer rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent transition-colors duration-150 hover:bg-accent/10"
                >
                  Try an example: $500/mo at 10% for 30 years
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Chart, Legend, Crossover details */}
        <div
          className={
            isWide
              ? "mt-3 md:mt-0 md:flex-1 md:flex md:flex-col md:self-stretch md:justify-between"
              : ""
          }
        >
          {/* Chart wrapper - make it taller if wide */}
          <div
            className={`w-full ${isWide ? "mt-0 h-[190px] md:h-[340px] md:flex-1" : "mt-3 h-[176px]"}`}
          >
            <GrowthChart
              result={result}
              showReal={showReal}
              yMax={yMax}
              startAge={startAge}
              retirementAge={retirementAge}
            />
          </div>

          <div className="mt-1.5 flex flex-col gap-1.5">
            {hasData && (
              <div className="flex items-center gap-3 text-[10px] text-muted">
                <span className="flex items-center gap-1">
                  <span
                    className="h-0.5 w-3.5 rounded-full"
                    style={{ background: scenario.color }}
                    aria-hidden
                  />
                  Balance
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="w-3.5 border-t border-dashed border-muted"
                    aria-hidden
                  />
                  Invested
                </span>
              </div>
            )}

            {hasData && crossover && (
              <p className="text-[11px] leading-snug text-muted">
                Interest earned passes total deposits in year {crossover.year}
                {startAge > 0 ? ` (age ${startAge + crossover.year})` : ""}.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-bg px-2 py-1.5 transition-colors duration-150 hover:bg-line/40">
      <div className="text-[10px] font-medium uppercase tracking-wide text-muted">
        {label}
      </div>
      <div className="mt-0.5 text-[12px] font-semibold tabular-nums text-ink">
        {value}
      </div>
    </div>
  );
}
