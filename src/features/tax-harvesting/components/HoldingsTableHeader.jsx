import Checkbox from "../../../components/common/Checkbox";
import SortButton from "./SortButton";

function HoldingsTableHeader({
  allSelected,
  partiallySelected,
  onToggleAll,
  sortKey,
  sortDirection,
  onSort,
}) {
  return (
    <thead className="bg-white/[0.03]">
      <tr className="border-b border-white/10">
        <th className="px-4 py-4 text-left">
          <Checkbox
            checked={allSelected}
            indeterminate={partiallySelected}
            onChange={onToggleAll}
          />
        </th>

        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Asset
        </th>

        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Holdings
        </th>

        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Avg Buy Price
        </th>

        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Current Price
        </th>

        <th className="px-4 py-4 text-left">
          <SortButton
            active={sortKey === "stcgValue"}
            direction={sortKey === "stcgValue" ? sortDirection : "none"}
            onClick={() => onSort("stcgValue")}
          >
            STCG
          </SortButton>
        </th>

        <th className="px-4 py-4 text-left">
          <SortButton
            active={sortKey === "ltcgValue"}
            direction={sortKey === "ltcgValue" ? sortDirection : "none"}
            onClick={() => onSort("ltcgValue")}
          >
            LTCG
          </SortButton>
        </th>

        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Amount to Sell
        </th>
      </tr>
    </thead>
  );
}

export default HoldingsTableHeader;