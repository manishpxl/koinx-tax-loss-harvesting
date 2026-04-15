export const SORT_DIRECTIONS = {
  NONE: "none",
  ASC: "asc",
  DESC: "desc",
};

export function getNextSortDirection(current) {
  if (current === SORT_DIRECTIONS.NONE) return SORT_DIRECTIONS.ASC;
  if (current === SORT_DIRECTIONS.ASC) return SORT_DIRECTIONS.DESC;
  return SORT_DIRECTIONS.NONE;
}

export function sortHoldings(items, sortKey, direction) {
  if (!sortKey || direction === SORT_DIRECTIONS.NONE) {
    return [...items];
  }

  const sorted = [...items].sort((a, b) => {
    const aValue = Number(a?.[sortKey] ?? 0);
    const bValue = Number(b?.[sortKey] ?? 0);

    if (direction === SORT_DIRECTIONS.ASC) {
      return aValue - bValue;
    }

    return bValue - aValue;
  });

  return sorted;
}