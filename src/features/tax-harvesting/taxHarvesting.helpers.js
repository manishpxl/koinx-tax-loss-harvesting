import { DEFAULT_VISIBLE_ROWS } from "../../constants/ui";

export function getHoldingId(holding, index = 0) {
  return `${holding.coin}-${holding.coinName}-${index}`;
}

export function enrichHoldingsWithMeta(holdings = []) {
  return holdings.map((holding, index) => ({
    ...holding,
    id: getHoldingId(holding, index),
  }));
}

export function getInitialVisibleCount() {
  return DEFAULT_VISIBLE_ROWS;
}