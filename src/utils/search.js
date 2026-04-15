export function matchesSearch(holding, query) {
  if (!query?.trim()) return true;

  const normalizedQuery = query.trim().toLowerCase();

  return [holding.coin, holding.coinName]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(normalizedQuery));
}