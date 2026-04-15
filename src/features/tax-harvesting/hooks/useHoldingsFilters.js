import { useMemo, useState } from "react";

const DEFAULT_VISIBLE_COUNT = 4;

export function useHoldingsFilters(holdings = []) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isExpanded, setIsExpanded] = useState(false);

  const processedHoldings = useMemo(() => {
    let filtered = [...holdings];

    if (search.trim()) {
      const query = search.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.coin?.toLowerCase().includes(query) ||
          item.coinName?.toLowerCase().includes(query)
      );
    }

    if (sortKey) {
      filtered.sort((a, b) => {
        const aValue = Number(a[sortKey] || 0);
        const bValue = Number(b[sortKey] || 0);

        if (sortDirection === "asc") return aValue - bValue;
        return bValue - aValue;
      });
    }

    return filtered;
  }, [holdings, search, sortKey, sortDirection]);

  const visibleHoldings = isExpanded
    ? processedHoldings
    : processedHoldings.slice(0, DEFAULT_VISIBLE_COUNT);

  const hasToggle = processedHoldings.length > DEFAULT_VISIBLE_COUNT;

  function handleSort(key) {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("desc");
    }
  }

  function toggleExpanded() {
    setIsExpanded((prev) => !prev);
  }

  return {
    search,
    sortKey,
    sortDirection,
    visibleHoldings,
    processedHoldings,
    hasMore: hasToggle,
    isExpanded,
    setSearch,
    handleSort,
    toggleExpanded,
  };
}