import { expect, test, describe } from 'vitest';
import path from 'path';

import { readFile } from '../utils';
import { solvePart1 } from './solution';

describe('solution', () => {
  const inputFilePath = path.join(
    __dirname,
    './test-input.txt'
  );
  const input = readFile(inputFilePath);

  if (!input) {
    throw new Error('could not read input');
  }

  test('part 1', () => {
    const expectedResult = 40;
    expect(solvePart1(input)).toBe(expectedResult);
  });
});
