import { useMemo, useState } from "react";
import { SORT_DIRECTIONS, getNextSortDirection } from "../../../utils/sort";
import { getFilteredAndSortedHoldings } from "../taxHarvesting.selectors";
import { getInitialVisibleCount } from "../taxHarvesting.helpers";

const DEFAULT_VISIBLE = getInitialVisibleCount();

export function useHoldingsFilters(holdings = []) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState(SORT_DIRECTIONS.NONE);
  const [isExpanded, setIsExpanded] = useState(false);

  const processedHoldings = useMemo(() => {
    return getFilteredAndSortedHoldings({
      holdings,
      search,
      sortKey,
      sortDirection,
    });
  }, [holdings, search, sortKey, sortDirection]);

  const visibleHoldings = useMemo(() => {
    if (isExpanded) return processedHoldings;
    return processedHoldings.slice(0, DEFAULT_VISIBLE);
  }, [processedHoldings, isExpanded]);

  const hasMore = processedHoldings.length > DEFAULT_VISIBLE;

  function handleSearchChange(value) {
    setSearch(value);
    setIsExpanded(false); // search change par wapas 4 pe aa jao
  }

  function handleSort(columnKey) {
    if (sortKey !== columnKey) {
      setSortKey(columnKey);
      setSortDirection(SORT_DIRECTIONS.ASC);
      return;
    }

    const nextDirection = getNextSortDirection(sortDirection);

    if (nextDirection === SORT_DIRECTIONS.NONE) {
      setSortKey("");
      setSortDirection(SORT_DIRECTIONS.NONE);
      return;
    }

    setSortDirection(nextDirection);
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
    hasMore,
    isExpanded,
    setSearch: handleSearchChange,
    handleSort,
    toggleExpanded,
  };
}