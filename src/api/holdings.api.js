import { holdingsMock } from "../data/holdings.mock";
import { MOCK_API_DELAY } from "../constants/ui";

export function fetchHoldings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(holdingsMock);
    }, MOCK_API_DELAY);
  });
}