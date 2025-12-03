import { sum } from '../utils';

export const solvePart1 = (input: string): number => {
  const banks = parseInput(input);
  const maxJoltages = banks.map(bank => getMaxJoltage(bank, 2));

  return sum(maxJoltages);
}

export const solvePart2 = (input: string): number => {
  const banks = parseInput(input);
  const maxJoltages = banks.map((bank) =>
    getMaxJoltage(bank, 12));

  return sum(maxJoltages);
}

export const getMaxJoltage = (
  bank: string,
  onCount: number
): number => {
  const iter = (
    acc: string[],
    bankSlice: string,
    toAdd: number,
  ): string[] => {
    if (toAdd <= 0) {
      return acc;
    } else {
      const nextDigit = getMaxDigit(
        toAdd === 1 ?
          bankSlice :
          bankSlice.slice(0, (toAdd - 1) * -1)
      );
      const nextDigitIndex = bankSlice.indexOf(nextDigit);

      return iter(
        [...acc, nextDigit],
        bankSlice.slice(nextDigitIndex + 1),
        toAdd - 1
      );
    }
  }

  const digits = iter([], bank, onCount);

  return Number(digits.join(''));
}

const getMaxDigit = (s: string): string => {
  if (!s[0]) {
    return '';
  }

  return [...s].reduce((max, cur) => {
    if (cur > max) {
      return cur;
    } else {
      return max;
    }
  }, s[0])
}

export const parseInput = (input: string): string[] =>
  input.split('\n').filter(Boolean);
