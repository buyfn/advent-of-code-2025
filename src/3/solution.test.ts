import { describe, test, expect } from 'vitest';

import {
  getMaxJoltage,
  solvePart1,
  solvePart2
} from './solution';

describe('solvePart1', () => {
  test('test input', () => {
    const input = `987654321111111
          811111111111119
          234234234234278
          818181911112111`;
    const expectedResult = 357;

    const result = solvePart1(input);
    expect(result).toEqual(expectedResult);
  });
});

describe('solvePart2', () => {
  test('test input', () => {
    const input = `987654321111111
          811111111111119
          234234234234278
          818181911112111`;
    const expectedResult = 3121910778619;

    const result = solvePart2(input);
    expect(result).toEqual(expectedResult);
  });
});

describe('getMaxJoltage', () => {
  test.each([
    [['987654321111111', 2] as [string, number], 98],
    [['811111111111119', 2] as [string, number], 89],
    [['234234234234278', 2] as [string, number], 78],
    [['818181911112111', 2] as [string, number], 92],
    [['987654321111111', 12] as [string, number], 987654321111],
    [['811111111111119', 12] as [string, number], 811111111119],
    [['234234234234278', 12] as [string, number], 434234234278],
    [['818181911112111', 12] as [string, number], 888911112111],
  ])('getMaxJoltage($0) -> $1', (
    input,
    expected
  ) => {
    expect(getMaxJoltage(...input)).toBe(expected);
  })
});
