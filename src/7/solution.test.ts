import { describe, test, expect } from 'vitest';
import path from 'path';

import { readFile } from '../utils';

import {
  countBeamSplits,
  getNextBeamLocations,
  solvePart1,
  solvePart2
} from './solution';

describe('solution', () => {
  const inputFilePath = path.join(
    process.cwd(),
    './src/7/test-input.txt'
  );
  const input = readFile(inputFilePath);
  if (!input) {
    throw new Error('could not read input');
  }

  console.log(input);

  test('part 1', () => {
    const expectedResult = 21;
    expect(solvePart1(input)).toBe(expectedResult);
  });

  test('part 2', () => {
    const expectedResult = 40;
    expect(solvePart2(input)).toBe(expectedResult);
  });
});

describe('getNextBeamLocations', () => {
  test.each([
    ['.......S.......', [], [7]],
    ['.......^.......', [7], [6, 8]],
    ['.......^.......', [], []]
  ])('$0, $1 -> $2', (row: string, beamLocations: number[], expectedOutput: number[]) => {
    expect(getNextBeamLocations(row, beamLocations)).toEqual(expectedOutput)
  })
});

describe('countBeamSplits', () => {
  test.each([
    ['.......S.......', [], 0],
    ['.......^.......', [7], 1],
    ['.......^.......', [], 0],
  ])('$0, $1 -> $2', (row: string, beamLocations: number[], expectedOutput: number) => {
    expect(countBeamSplits(row, beamLocations)).toEqual(expectedOutput)
  })
});
