import Checkbox from "../../../components/common/Checkbox";
import { formatCurrency, formatNumber, formatSignedCurrency } from "../../../lib/formatters";

function HoldingsRow({ holding, checked, onToggle }) {
  return (
    <tr className="border-b border-white/10 transition hover:bg-white/[0.03]">
      <td className="px-4 py-4 align-top">
        <Checkbox checked={checked} onChange={() => onToggle(holding.id)} />
      </td>

      <td className="px-4 py-4 align-top">
        <div className="flex items-start gap-3">
          <img
            src={holding.logo}
            alt={holding.coinName}
            className="h-10 w-10 rounded-full border border-white/10 bg-white p-1 object-contain"
          />
          <div>
            <p className="font-semibold text-white">{holding.coin}</p>
            <p className="text-sm text-slate-400">{holding.coinName}</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 align-top">
        <p className="font-medium text-white">{formatNumber(holding.totalHolding, 8)}</p>
      </td>

      <td className="px-4 py-4 align-top">
        <p className="font-medium text-slate-200">
          {formatCurrency(holding.averageBuyPrice)}
        </p>
      </td>

      <td className="px-4 py-4 align-top">
        <p className="font-medium text-slate-200">
          {formatCurrency(holding.currentPrice)}
        </p>
      </td>

      <td className="px-4 py-4 align-top">
        <p
          className={`font-semibold ${
            holding.stcgValue >= 0 ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {formatSignedCurrency(holding.stcgValue)}
        </p>
      </td>

      <td className="px-4 py-4 align-top">
        <p
          className={`font-semibold ${
            holding.ltcgValue >= 0 ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {formatSignedCurrency(holding.ltcgValue)}
        </p>
      </td>

      <td className="px-4 py-4 align-top">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-300">
          {checked ? formatNumber(holding.totalHolding, 8) : "--"}
        </div>
      </td>
    </tr>
  );
}

export default HoldingsRow;