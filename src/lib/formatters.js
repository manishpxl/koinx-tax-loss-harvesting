const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const compactCurrencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  notation: "compact",
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 8,
});

export function formatCurrency(value = 0) {
  return currencyFormatter.format(Number(value || 0));
}

export function formatCompactCurrency(value = 0) {
  return compactCurrencyFormatter.format(Number(value || 0));
}

export function formatNumber(value = 0, digits = 8) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: digits,
  }).format(Number(value || 0));
}

export function formatPercent(value = 0) {
  return `${Number(value || 0).toFixed(2)}%`;
}

export function formatSignedCurrency(value = 0) {
  const amount = Number(value || 0);
  if (amount > 0) return `+${formatCurrency(amount)}`;
  if (amount < 0) return `-${formatCurrency(Math.abs(amount))}`;
  return formatCurrency(0);
}

export function formatSignedNumber(value = 0, digits = 8) {
  const amount = Number(value || 0);
  if (amount > 0) return `+${formatNumber(amount, digits)}`;
  if (amount < 0) return `-${formatNumber(Math.abs(amount), digits)}`;
  return numberFormatter.format(0);
}