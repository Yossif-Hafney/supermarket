 function toMinorUnits(amount: string | number): number {
  return Math.round(Number(amount) * 100);
}

 function fromMinorUnits(amount: number): string {
  return (amount / 100).toFixed(2);
}

export function addMoney(a: number, b: number): number {
  return toMinorUnits(fromMinorUnits(a) + fromMinorUnits(b));
}