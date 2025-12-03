export const sum = (xs: number[]): number => {
  return xs.reduce((sum, x) => sum + x, 0);
}
