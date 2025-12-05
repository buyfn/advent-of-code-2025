import {
  sum,
  combineRanges,
  getRangeSize,
  isInRange,
  sortRanges,
  type Range
} from '../utils';

export const solvePart1 = (input: string) => {
  const isFresh = (id: number, freshRanges: Range[]): boolean =>
    freshRanges.some(range => isInRange(id, range));

  const { freshRanges, availableItems } = parseInput(input);

  return availableItems
    .filter((item) => isFresh(item, freshRanges))
    .length
}

export const solvePart2 = (input: string): number => {
  const { freshRanges } = parseInput(input);
  const sortedRanges = sortRanges(freshRanges);
  const combinedRanges = combineRanges(sortedRanges);

  return sum(combinedRanges.map(getRangeSize));
}

export const parseInput = (input: string) => {
  const [freshRanges, available] = input.split('\n\n');

  if (freshRanges === undefined || available === undefined) {
    throw new Error('could not parse input');
  }

  return {
    freshRanges: parseFreshRanges(freshRanges),
    availableItems: parseAvailable(available)
  }
}

export const parseFreshRanges = (rangesString: string): Range[] => {
  return rangesString.split('\n')
    .filter(Boolean)
    .map(rangeString => {
      const [from, to] = rangeString.split('-').map(s => Number(s));


      if (!from || !to) {
        throw new Error('incorrect range');
      }

      return { from, to }
    })
}

export const parseAvailable = (availableString: string): number[] => {
  return availableString.split('\n')
    .filter(Boolean)
    .map(s => Number(s));
}

