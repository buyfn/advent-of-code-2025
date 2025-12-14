import path from 'path';
import { describe, test, expect } from 'vitest';

import { readFile } from '../utils';
import {
  getRectSize,
  solvePart1,
  makePoint,
  parsePoint,
} from './solution';

describe('solution', () => {
  const inputFilePath = path.join(
    __dirname,
    './test-input.txt'
  );
  const input = readFile(inputFilePath);

  if (!input) {
    throw new Error('could not read input file');
  }

  test('part 1', () => {
    const expectedResult = 50;
    const result = solvePart1(input);

    expect(result).toBe(expectedResult);
  })
});

describe('getRectSize', () => {
  test.each([
    { p1: '2,5', p2: '9,7', expected: 24 },
    { p1: '7,1', p2: '11,7', expected: 35 },
    { p1: '7,3', p2: '2,3', expected: 6 }
  ])('getRectSize($p1, $p2) -> $expected', ({
    p1,
    p2,
    expected
  }) => {
    const rectSize = getRectSize(parsePoint(p1), parsePoint(p2));
    expect(rectSize).toBe(expected);
  });
});
