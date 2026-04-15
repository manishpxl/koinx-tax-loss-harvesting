import { useMemo, useState } from "react";

export function useSelection(items = []) {
  const [selectedIds, setSelectedIds] = useState([]);

  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const allSelected = itemIds.length > 0 && itemIds.every((id) => selectedSet.has(id));

  const partiallySelected =
    itemIds.some((id) => selectedSet.has(id)) && !allSelected;

  function toggleOne(id) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  }

  function toggleAll() {
    setSelectedIds((prev) => {
      const everySelected =
        itemIds.length > 0 && itemIds.every((id) => prev.includes(id));

      return everySelected ? [] : itemIds;
    });
  }

  function clearSelection() {
    setSelectedIds([]);
  }

  function isSelected(id) {
    return selectedSet.has(id);
  }

  return {
    selectedIds,
    setSelectedIds,
    allSelected,
    partiallySelected,
    toggleOne,
    toggleAll,
    clearSelection,
    isSelected,
  };
}