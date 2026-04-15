import { roundTo, safeAdd, toNumber } from "./currency";

export function getStcgValue(item) {
  return toNumber(item?.stcg?.gain);
}

export function getLtcgValue(item) {
  return toNumber(item?.ltcg?.gain);
}

export function getMarketValue(item) {
  return roundTo(toNumber(item?.currentPrice) * toNumber(item?.totalHolding), 2);
}

export function getAssetGainPercentage(item) {
  const marketValue = getMarketValue(item);
  const averageBuyPrice = toNumber(item?.averageBuyPrice);
  const totalHolding = toNumber(item?.totalHolding);
  const investedValue = averageBuyPrice * totalHolding;

  if (!investedValue) return 0;

  return roundTo(((marketValue - investedValue) / investedValue) * 100, 2);
}

export function splitProfitAndLoss(value) {
  const amount = toNumber(value);

  return {
    profit: amount > 0 ? amount : 0,
    loss: amount < 0 ? Math.abs(amount) : 0,
  };
}

export function normalizeCapitalGains(data) {
  const stcgProfits = toNumber(data?.capitalGains?.stcg?.profits);
  const stcgLosses = toNumber(data?.capitalGains?.stcg?.losses);
  const ltcgProfits = toNumber(data?.capitalGains?.ltcg?.profits);
  const ltcgLosses = toNumber(data?.capitalGains?.ltcg?.losses);

  return {
    stcg: {
      profits: stcgProfits,
      losses: stcgLosses,
      net: roundTo(stcgProfits - stcgLosses, 2),
    },
    ltcg: {
      profits: ltcgProfits,
      losses: ltcgLosses,
      net: roundTo(ltcgProfits - ltcgLosses, 2),
    },
    totalEffectiveCapitalGains: roundTo(
      (stcgProfits - stcgLosses) + (ltcgProfits - ltcgLosses),
      2
    ),
  };
}

export function calculateHarvestingImpact(baseCapitalGains, selectedHoldings = []) {
  const normalized = normalizeCapitalGains(baseCapitalGains);

  const harvested = selectedHoldings.reduce(
    (acc, item) => {
      const stcg = getStcgValue(item);
      const ltcg = getLtcgValue(item);

      const stcgSplit = splitProfitAndLoss(stcg);
      const ltcgSplit = splitProfitAndLoss(ltcg);

      return {
        stcgProfitAdjustment: acc.stcgProfitAdjustment + stcgSplit.profit,
        stcgLossAdjustment: acc.stcgLossAdjustment + stcgSplit.loss,
        ltcgProfitAdjustment: acc.ltcgProfitAdjustment + ltcgSplit.profit,
        ltcgLossAdjustment: acc.ltcgLossAdjustment + ltcgSplit.loss,
      };
    },
    {
      stcgProfitAdjustment: 0,
      stcgLossAdjustment: 0,
      ltcgProfitAdjustment: 0,
      ltcgLossAdjustment: 0,
    }
  );

  const after = {
    stcg: {
      profits: roundTo(normalized.stcg.profits - harvested.stcgProfitAdjustment, 2),
      losses: roundTo(normalized.stcg.losses + harvested.stcgLossAdjustment, 2),
    },
    ltcg: {
      profits: roundTo(normalized.ltcg.profits - harvested.ltcgProfitAdjustment, 2),
      losses: roundTo(normalized.ltcg.losses + harvested.ltcgLossAdjustment, 2),
    },
  };

  const normalizedAfter = normalizeCapitalGains({
    capitalGains: after,
  });

  return {
    before: normalized,
    after: normalizedAfter,
    harvested: {
      stcgProfitAdjustment: roundTo(harvested.stcgProfitAdjustment, 2),
      stcgLossAdjustment: roundTo(harvested.stcgLossAdjustment, 2),
      ltcgProfitAdjustment: roundTo(harvested.ltcgProfitAdjustment, 2),
      ltcgLossAdjustment: roundTo(harvested.ltcgLossAdjustment, 2),
      totalHarvestedLosses: roundTo(
        safeAdd(harvested.stcgLossAdjustment, harvested.ltcgLossAdjustment),
        2
      ),
    },
    taxSaving: roundTo(
      normalized.totalEffectiveCapitalGains -
        normalizedAfter.totalEffectiveCapitalGains,
      2
    ),
  };
}