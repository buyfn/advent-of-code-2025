import { describe, test, expect } from 'vitest';
import path from 'path';

import { readFile } from '../utils';
import { solvePart1, solvePart2 } from './solution';

describe('solution', () => {
  const inputFilePath = path.join(
    process.cwd(),
    './src/6/test-input.txt'
  )
  const input = readFile(inputFilePath);
  if (!input) {
    throw new Error('could not read input');
  }

  test('part 1', () => {
    const expectedResult = 4277556;
    expect(solvePart1(input)).toBe(expectedResult);
  });

  test('part 2', () => {
    const expectedResult = 3263827;
    expect(solvePart2(input)).toBe(expectedResult);
  });
});
