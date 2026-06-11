import { useId, useState } from "react";

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  min?: number;
  max?: number;
}

export function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  placeholder = "0",
  min = 0,
  max,
}: NumberFieldProps) {
  const id = useId();
  const [draft, setDraft] = useState<string | null>(null);

  const display =
    draft !== null
      ? draft
      : value === 0 || !Number.isFinite(value)
        ? ""
        : value.toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <label htmlFor={id} className="flex flex-col gap-1">
      <span className="text-[11px] font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
      <div className="flex items-center rounded-lg border border-line bg-bg px-2 transition-colors focus-within:border-accent focus-within:bg-surface focus-within:ring-2 focus-within:ring-accent/15">
        {prefix && (
          <span className="pr-0.5 text-[13px] text-muted">{prefix}</span>
        )}
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={display}
          placeholder={placeholder}
          onFocus={() => setDraft(value === 0 ? "" : String(value))}
          onBlur={() => setDraft(null)}
          onChange={(e) => {
            const raw = e.target.value;
            setDraft(raw);
            const next = Number.parseFloat(raw.replace(/,/g, ""));
            onChange(Number.isNaN(next) ? 0 : clamp(next, min, max));
          }}
          className="w-full bg-transparent py-1.5 text-[14px] font-medium tabular-nums text-ink outline-none placeholder:font-normal placeholder:text-muted/60"
        />
        {suffix && (
          <span className="pl-1 text-[11px] text-muted">{suffix}</span>
        )}
      </div>
    </label>
  );
}

function clamp(value: number, min: number, max?: number): number {
  if (value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
}
