export const getPossiblePairs = <T>(xs: T[]): [T, T][] => {
  if (xs.length === 0 || xs.length === 1) {
    return [];
  }

  if (xs.length === 2) {
    return [xs] as [T, T][];
  }

  const [first, ...rest] = xs as [T, ...T[]];
  const withFirst: [T, T][] = rest.map(second => [first, second]);

  return [...withFirst, ...getPossiblePairs(rest)];
}
