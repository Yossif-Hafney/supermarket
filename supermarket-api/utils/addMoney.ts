export function toMinorUnits(amount: string | number): number {
  return Math.round(Number(amount) * 100);
}

export function fromMinorUnits(amount: number): string {
  return (amount / 100).toFixed(2);
}

export function addMoney(a: number, b: number): number {
  return a + b;
}