export function toNumber(value) {
  const num = Number(value);
  return Number.isNaN(num) ? 0 : num;
}

export function roundTo(value, digits = 2) {
  const factor = 10 ** digits;
  return Math.round((toNumber(value) + Number.EPSILON) * factor) / factor;
}

export function safeAdd(...values) {
  return values.reduce((sum, value) => sum + toNumber(value), 0);
}