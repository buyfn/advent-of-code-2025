export const sum = (xs: number[]): number => {
  return xs.reduce((sum, x) => sum + x, 0);
}

export const mult = (xs: number[]): number =>
  xs.reduce((product, x) => product * x, 1);
