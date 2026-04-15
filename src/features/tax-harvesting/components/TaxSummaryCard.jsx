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

  const stcgProfits = Number(summary?.stcg?.profits || 0);
  const stcgLosses = Number(summary?.stcg?.losses || 0);
  const ltcgProfits = Number(summary?.ltcg?.profits || 0);
  const ltcgLosses = Number(summary?.ltcg?.losses || 0);

  const stcgNet = stcgProfits - stcgLosses;
  const ltcgNet = ltcgProfits - ltcgLosses;
  const effectiveCapitalGains = Number(summary?.totalEffectiveCapitalGains || 0);

  function formatSignedAmount(value) {
    const sign = value > 0 ? "+" : value < 0 ? "-" : "";
    return `${sign}${formatCurrency(Math.abs(value))}`;
  }

  function getValueColor(value) {
    if (value > 0) return "text-emerald-400";
    if (value < 0) return "text-rose-400";
    return "text-white";
  }

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

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
        <div className="grid grid-cols-3 gap-4">
          <div></div>

          <div>
            <p className="text-base font-medium text-white">Short-term</p>
          </div>

          <div>
            <p className="text-base font-medium text-white">Long-term</p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-300">Profits</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-emerald-400">
              {formatCurrency(stcgProfits)}
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-emerald-400">
              {formatCurrency(ltcgProfits)}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-300">Losses</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-rose-400">
              {formatCurrency(stcgLosses)}
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-rose-400">
              {formatCurrency(ltcgLosses)}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-300">Net Capital Gains</p>
          </div>

          <div>
            <p className={`text-lg font-semibold ${getValueColor(stcgNet)}`}>
              {formatSignedAmount(stcgNet)}
            </p>
          </div>

          <div>
            <p className={`text-lg font-semibold ${getValueColor(ltcgNet)}`}>
              {formatSignedAmount(ltcgNet)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Effective Capital Gains (INR)
          </p>

          <p className={`text-2xl font-bold ${getValueColor(effectiveCapitalGains)}`}>
            {formatSignedAmount(effectiveCapitalGains)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxSummaryCard;