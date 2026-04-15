import { capitalGainsMock } from "../data/capitalGains.mock";
import { MOCK_API_DELAY } from "../constants/ui";

export function fetchCapitalGains() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(capitalGainsMock);
    }, MOCK_API_DELAY);
  });
}