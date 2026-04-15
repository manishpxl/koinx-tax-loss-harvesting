import { useMemo } from "react";
import Header from "../../components/layout/Header";
import PageContainer from "../../components/layout/PageContainer";
import SectionCard from "../../components/layout/SectionCard";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import { useCapitalGains } from "../../hooks/useCapitalGains";
import { useHoldings } from "../../hooks/useHoldings";
import { enrichHoldingsWithMeta } from "./taxHarvesting.helpers";
import { useHoldingsFilters } from "./hooks/useHoldingsFilters";
import { useSelection } from "./hooks/useSelection";
import { useTaxHarvesting } from "./hooks/useTaxHarvesting";
import DisclaimerPanel from "./components/DisclaimerPanel";
import HoldingsTable from "./components/HoldingsTable";
import HoldingsToolbar from "./components/HoldingsToolbar";
import HowItWorksTooltip from "./components/HowItWorksTooltip";
import SavingsBanner from "./components/SavingsBanner";
import TaxSummaryCard from "./components/TaxSummaryCard";

function TaxHarvestingPage() {
  const {
    data: capitalGainsData,
    loading: capitalGainsLoading,
    error: capitalGainsError,
    refetch: refetchCapitalGains,
  } = useCapitalGains();

  const {
    data: holdingsData,
    loading: holdingsLoading,
    error: holdingsError,
    refetch: refetchHoldings,
  } = useHoldings();

  const enrichedHoldings = useMemo(() => {
    return enrichHoldingsWithMeta(holdingsData).map((holding) => ({
      ...holding,
      stcgValue: Number(holding?.stcg?.gain || 0),
      ltcgValue: Number(holding?.ltcg?.gain || 0),
    }));
  }, [holdingsData]);

  const {
    search,
    sortKey,
    sortDirection,
    visibleHoldings,
    processedHoldings,
    hasMore,
    isExpanded,
    setSearch,
    handleSort,
    toggleExpanded,
  } = useHoldingsFilters(enrichedHoldings);

  const {
    selectedIds,
    allSelected,
    partiallySelected,
    toggleOne,
    toggleAll,
    clearSelection,
    isSelected,
  } = useSelection(processedHoldings);

  const { harvestingResult } = useTaxHarvesting({
    capitalGainsData,
    holdings: enrichedHoldings,
    selectedIds,
  });

  const loading = capitalGainsLoading || holdingsLoading;
  const error = capitalGainsError || holdingsError;

  function handleRetry() {
    refetchCapitalGains();
    refetchHoldings();
  }

  return (
    <PageContainer>
      <Header />

      {loading ? (
        <Loader text="Loading tax harvesting dashboard..." />
      ) : error ? (
        <ErrorState
          title="Unable to load dashboard"
          message={error}
          onRetry={handleRetry}
        />
      ) : (
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <TaxSummaryCard
              title="Before Harvesting"
              subtitle="Current capital gains summary for FY 2024-25."
              summary={harvestingResult?.before}
              accent="blue"
            />

            <TaxSummaryCard
              title="After Harvesting"
              subtitle="Updated values based on your current selection."
              summary={harvestingResult?.after}
              accent="emerald"
            />
          </div>

          <SavingsBanner value={harvestingResult?.taxSaving || 0} />

          <SectionCard
            title="Holdings"
            subtitle="Select assets you want to sell and instantly evaluate harvesting impact."
            action={<HowItWorksTooltip />}
          >
            <div className="space-y-5">
              <HoldingsToolbar
                search={search}
                onSearchChange={setSearch}
                selectedCount={selectedIds.length}
                onClearSelection={clearSelection}
              />

              <HoldingsTable
                holdings={visibleHoldings}
                allSelected={allSelected}
                partiallySelected={partiallySelected}
                onToggleAll={toggleAll}
                onToggleOne={toggleOne}
                isSelected={isSelected}
                sortKey={sortKey}
                sortDirection={sortDirection}
                onSort={handleSort}
                hasMore={hasMore}
                isExpanded={isExpanded}
                onToggleExpand={toggleExpanded}
              />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                Showing{" "}
                <span className="font-semibold text-white">
                  {visibleHoldings.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-white">
                  {processedHoldings.length}
                </span>{" "}
                holdings
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Disclaimers">
            <DisclaimerPanel />
          </SectionCard>
        </div>
      )}
    </PageContainer>
  );
}

export default TaxHarvestingPage;