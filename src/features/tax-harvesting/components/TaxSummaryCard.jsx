import GainsRow from "./GainsRow";
import { formatCurrency } from "../../../lib/formatters";

function TaxSummaryCard({
  title,
  subtitle,
  summary,
  accent = "blue",
}) {
  const accentClasses = {
    blue: "from-blue-600/20 to-cyan-500/10 border-blue-500/20",
    emerald: "from-emerald-600/20 to-teal-500/10 border-emerald-500/20",
  };

  return (
    <div
      className={`rounded-3xl border bg-gradient-to-br p-5 shadow-2xl shadow-black/20 ${accentClasses[accent]}`}
    >
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {subtitle ? (
          <p className="mt-1 text-sm leading-6 text-slate-300">{subtitle}</p>
        ) : null}
      </div>

      <div className="space-y-3">
        <GainsRow
          label="Short-term"
          profits={summary?.stcg?.profits}
          losses={summary?.stcg?.losses}
        />

        <GainsRow
          label="Long-term"
          profits={summary?.ltcg?.profits}
          losses={summary?.ltcg?.losses}
        />

        <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Effective Capital Gains
          </p>
          <p className="mt-2 text-2xl font-bold text-white">
            {formatCurrency(summary?.totalEffectiveCapitalGains || 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxSummaryCard;