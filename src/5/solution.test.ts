import { describe, test, expect } from 'vitest';

import { solvePart1, solvePart2, parseFreshRanges } from './solution';

describe('solution', () => {
  const input = '3-5\n10-14\n16-20\n12-18\n\n1\n5\n8\n11\n17\n32';

  test('solvePart1', () => {
    const expectedResult = 3;

    expect(solvePart1(input)).toBe(expectedResult);
  });

  test('solvePart2', () => {
    const expectedResult = 14;

    expect(solvePart2(input)).toBe(expectedResult);
  });
});

describe('parseFreshRanges', () => {
  test.each([
    [
      '3-5\n10-14\n16-20\n12-18',
      [
        { from: 3, to: 5 },
        { from: 10, to: 14 },
        { from: 16, to: 20 },
        { from: 12, to: 18 }
      ]
    ]
  ])('parses $0 into $1', (input, expected) => {
    expect(parseFreshRanges(input)).toEqual(expected)
  })
});
