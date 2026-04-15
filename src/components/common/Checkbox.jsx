function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  className = "",
  disabled = false,
}) {
  return (
    <label
      className={`inline-flex items-center gap-3 ${
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      } ${className}`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          ref={(input) => {
            if (input) {
              input.indeterminate = indeterminate;
            }
          }}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/20 bg-slate-950/80 checked:border-blue-500 checked:bg-blue-600 disabled:cursor-not-allowed"
        />

        <svg
          className="pointer-events-none absolute hidden h-3.5 w-3.5 text-white peer-checked:block"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 10.5L8.5 14L15 6.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {indeterminate && !checked ? (
          <span className="pointer-events-none absolute h-0.5 w-2.5 rounded-full bg-white" />
        ) : null}
      </span>

      {label ? <span className="text-sm text-slate-200">{label}</span> : null}
    </label>
  );
}

export default Checkbox;