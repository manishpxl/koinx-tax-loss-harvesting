import { formatCurrency } from "../../../lib/formatters";

function SavingsBanner({ value = 0 }) {
  if (value <= 0) return null;

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-300">
            Your taxable capital gains are reduced by:
          </p>
          <p className="mt-1 text-xs text-emerald-100/80">
            Based on the loss-making assets you have selected for harvesting.
          </p>
        </div>

        <div className="rounded-xl bg-emerald-500/15 px-4 py-2 text-lg font-bold text-emerald-100">
          {formatCurrency(value)}
        </div>
      </div>
    </div>
  );
}

export default SavingsBanner;