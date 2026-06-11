import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { ScenarioResult } from './types'
import { money, moneyAxis } from './lib/format'

interface GrowthChartProps {
  result: ScenarioResult
  showReal: boolean
  yMax?: number
  startAge?: number
  retirementAge?: number
}

export function GrowthChart({
  result,
  showReal,
  yMax,
  startAge = 0,
  retirementAge = 65,
}: GrowthChartProps) {
  const { scenario, series } = result
  const color = scenario.color
  const gradientId = `grad-${scenario.id}`
  const ageOn = startAge > 0

  const data = series.map((p) => ({
    year: p.year,
    value: showReal ? p.real : p.balance,
    contributed: p.contributed,
  }))

  const retireYear = ageOn && retirementAge > startAge ? retirementAge - startAge : 0
  const showMarker = retireYear > 0 && retireYear <= scenario.years

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 10, right: 6, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.22} />
            <stop offset="60%" stopColor={color} stopOpacity={0.08} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#E2E8F0" strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="year"
          tickFormatter={(y: number) => ageOn ? `${startAge + y}` : y === 0 ? '0' : `${y}y`}
          tick={{ fill: '#64748B', fontSize: 11 }}
          tickLine={false}
          axisLine={{ stroke: '#E2E8F0' }}
          minTickGap={22}
        />
        <YAxis
          tickFormatter={moneyAxis}
          tick={{ fill: '#64748B', fontSize: 11 }}
          tickLine={false}
          axisLine={false}
          width={48}
          domain={[0, yMax && yMax > 0 ? yMax : 'auto']}
          allowDecimals={false}
        />
        <Tooltip
          content={<ChartTooltip showReal={showReal} startAge={startAge} color={color} />}
          cursor={{ stroke: color, strokeOpacity: 0.25, strokeWidth: 1 }}
        />
        <Line
          type="monotone"
          dataKey="contributed"
          stroke="#64748B"
          strokeWidth={1.25}
          strokeDasharray="3 3"
          dot={false}
          activeDot={false}
          animationDuration={300}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2.5}
          fill={`url(#${gradientId})`}
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
          animationDuration={300}
          isAnimationActive
        />
        {showMarker && (
          <ReferenceLine
            x={retireYear}
            stroke="#64748B"
            strokeDasharray="4 4"
            label={{ value: `Age ${retirementAge}`, position: 'top', fill: '#475569', fontSize: 10, fontWeight: 600 }}
          />
        )}
      </ComposedChart>
    </ResponsiveContainer>
  )
}

interface TooltipPayloadItem {
  value?: number
  payload?: { year: number; value: number; contributed: number }
}

function ChartTooltip({
  active,
  payload,
  showReal,
  startAge = 0,
  color,
}: {
  active?: boolean
  payload?: TooltipPayloadItem[]
  showReal?: boolean
  startAge?: number
  color?: string
}) {
  if (!active || !payload?.length) return null
  const point = payload[0]?.payload
  if (!point) return null

  const heading =
    startAge > 0
      ? `Age ${startAge + point.year}`
      : point.year === 0 ? 'Start' : `Year ${point.year}`

  return (
    <div
      className="rounded-lg border bg-surface/95 px-3 py-2 shadow-md backdrop-blur"
      style={{ borderColor: color ? `${color}30` : undefined }}
    >
      <div className="text-[11px] font-semibold uppercase tracking-wide text-muted">{heading}</div>
      <div className="mt-0.5 font-display text-base font-semibold tabular-nums text-ink">
        {money(point.value)}
        {showReal && <span className="ml-1 text-[11px] font-medium text-muted">today&rsquo;s $</span>}
      </div>
      <div className="text-[11px] text-muted">Invested {money(point.contributed)}</div>
    </div>
  )
}
