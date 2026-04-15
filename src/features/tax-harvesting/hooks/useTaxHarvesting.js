import { useMemo } from "react";
import { calculateHarvestingImpact } from "../../../utils/calculations";
import { getSelectedHoldings } from "../taxHarvesting.selectors";

export function useTaxHarvesting({ capitalGainsData, holdings, selectedIds }) {
  const selectedHoldings = useMemo(() => {
    return getSelectedHoldings(holdings, selectedIds);
  }, [holdings, selectedIds]);

  const harvestingResult = useMemo(() => {
    if (!capitalGainsData) return null;
    return calculateHarvestingImpact(capitalGainsData, selectedHoldings);
  }, [capitalGainsData, selectedHoldings]);

  return {
    selectedHoldings,
    harvestingResult,
  };
}