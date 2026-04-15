import EmptyState from "../../../components/common/EmptyState";
import HoldingsRow from "./HoldingsRow";
import HoldingsTableHeader from "./HoldingsTableHeader";
import ViewAllToggle from "./ViewAllToggle";

function HoldingsTable({
  holdings = [],
  allSelected,
  partiallySelected,
  onToggleAll,
  onToggleOne,
  isSelected,
  sortKey,
  sortDirection,
  onSort,
  hasMore,
  isExpanded,
  onToggleExpand,
}) {
  if (!holdings.length) {
    return (
      <EmptyState
        title="No holdings found"
        message="Try updating your search or sorting selection."
      />
    );
  }

  return (
    <div>
      <div className="custom-scrollbar overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-[1100px] w-full">
          <HoldingsTableHeader
            allSelected={allSelected}
            partiallySelected={partiallySelected}
            onToggleAll={onToggleAll}
            sortKey={sortKey}
            sortDirection={sortDirection}
            onSort={onSort}
          />

          <tbody>
            {holdings.map((holding) => (
              <HoldingsRow
                key={holding.id}
                holding={holding}
                checked={isSelected(holding.id)}
                onToggle={onToggleOne}
              />
            ))}
          </tbody>
        </table>
      </div>

      <ViewAllToggle
        hasMore={hasMore}
        isExpanded={isExpanded}
        onClick={onToggleExpand}
      />
    </div>
  );
}

export default HoldingsTable;