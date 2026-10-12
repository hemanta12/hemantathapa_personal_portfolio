/** Compact header — icon tile + title */
export function Header() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2.5">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-accent"
          aria-hidden
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5">
            <path
              d="M5 23 L13 14.5 L18 18 L27 8"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="27" cy="8" r="2.4" fill="#ffffff" />
          </svg>
        </span>
        <h1 className="font-display text-[28px] font-semibold tracking-tight text-ink sm:text-3xl">
          Compound Growth Calculator
        </h1>
      </div>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-body">
        See how money grows with compound interest, and compare up to three
        scenarios side by side.
      </p>
    </header>
  )
}
