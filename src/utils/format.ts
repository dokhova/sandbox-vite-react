export function formatPriceEUR(value: number) {
  return `€${value.toFixed(2)}`;
}

export function formatEta(min: number) {
  return `${min} min`;
}
