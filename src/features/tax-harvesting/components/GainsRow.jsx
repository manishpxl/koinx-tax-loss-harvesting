import { formatCurrency } from "../../../lib/formatters";

function GainsRow({ label, profits = 0, losses = 0, highlight = false }) {
  return (
    <div
      className={`grid grid-cols-1 gap-3 rounded-2xl border px-4 py-4 sm:grid-cols-3 sm:items-center ${
        highlight
          ? "border-blue-500/30 bg-blue-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">Profits</p>
        <p className="mt-1 text-base font-semibold text-emerald-400">
          {formatCurrency(profits)}
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">Losses</p>
        <p className="mt-1 text-base font-semibold text-rose-400">
          {formatCurrency(losses)}
        </p>
      </div>
    </div>
  );
}

export default GainsRow;
