import { matchesSearch } from "../../utils/search";
import { sortHoldings } from "../../utils/sort";

export function getSelectedHoldings(holdings = [], selectedIds = []) {
  const selectedSet = new Set(selectedIds);
  return holdings.filter((holding) => selectedSet.has(holding.id));
}

export function getFilteredAndSortedHoldings({
  holdings = [],
  search = "",
  sortKey = "",
  sortDirection = "none",
}) {
  const filtered = holdings.filter((holding) => matchesSearch(holding, search));

  return sortHoldings(filtered, sortKey, sortDirection);
}

export function getVisibleHoldings(holdings = [], visibleCount = 4) {
  return holdings.slice(0, visibleCount);
}