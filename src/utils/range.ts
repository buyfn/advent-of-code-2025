export type Range = {
  from: number
  to: number
}

export const makeArrayFromRange = ({ from, to }: Range): number[] => {
  let result = [] as number[];
  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
}

// assumes ranges are sorted
export const combineRanges = (rangeList: Range[]): Range[] => {
  let result = [] as Range[];

  rangeList.forEach((range) => {
    result = addRange(range, result);
  });

  return result;
}

// assumes r1.from >= rangeList[-1].from
export const addRange = (range: Range, rangeList: Range[]): Range[] => {
  if (rangeList.length === 0) {
    return [range];
  }

  const lastRange = rangeList.pop();

  if (!lastRange) {
    return rangeList;
  }

  if (areIntersecting(lastRange, range)) {
    rangeList.push(mergeRanges(lastRange, range));
  } else {
    rangeList.push(lastRange, range);
  }

  return rangeList;
}

export const isInRange = (n: number, range: Range) =>
  n >= range.from && n <= range.to;

// assumes r1.from <= r2.from
export const areIntersecting = (r1: Range, r2: Range): boolean => r2.from <= r1.to;


// assumes r1.from <= r2.from and ranges are intersecting
export const mergeRanges = (r1: Range, r2: Range): Range => {
  return {
    from: r1.from,
    to: Math.max(r1.to, r2.to)
  }
}

export const sortRanges = (ranges: Range[]): Range[] =>
  ranges.toSorted((r1, r2) => r1.from - r2.from);

export const getRangeSize = (range: Range): number => range.to - range.from + 1;

export const uniq = <T>(arr: Array<T>): Array<T> => [...new Set(arr)];
