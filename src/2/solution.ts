import { readInput, sum, makeArrayFromRange } from '../utils';

export const main = () => {
  const rawData = readInput();
  if (!rawData) {
    throw new Error('could not read input from file');
  }
  const allIds = parseInput(rawData)
    .flatMap(([from, to]) => makeArrayFromRange({ from, to }));
  const invalidIds = allIds.filter(id =>
    isInvalidIdPartTwo(id.toString()));
  const result = sum(invalidIds);

  return result;
}

export const parseInput = (
  input: string
): Array<[from: number, to: number]> => {
  return input.split(',')
    .map(range => {
      const strings = range.split('-') as [string, string];
      if (strings.length !== 2) {
        throw new Error('expected two numbers');
      }
      return strings.map(s => Number(s)) as [number, number]
    })
}

export const isInvalidId = (id: string): boolean => {
  if (id.length % 2 !== 0) {
    return false;
  }

  const midPoint = id.length / 2;
  const firstHalf = id.slice(0, midPoint)
  const secondHalf = id.slice(midPoint);

  return firstHalf === secondHalf;
}

export const isInvalidIdPartTwo = (id: string): boolean => {
  for (let i = 1; i < Math.floor(id.length / 2) + 1; i += 1) {
    const repeats = Math.floor(id.length / i);
    const slice = id.slice(0, i);
    const candidate = repeatN(slice, repeats)

    if (candidate === id) {
      return true;
    }
  }

  return false;
}

export const repeatN = (str: string, n: number) => {
  return makeArrayFromRange({ from: 1, to: n }).map(() => str).join('');
}
