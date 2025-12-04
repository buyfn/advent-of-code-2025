import { describe, test, expect } from 'vitest';
import { solvePart1, solvePart2 } from './solution';

describe('solution', () => {
  const testInput = `
  ..@@.@@@@.
  @@@.@.@.@@
  @@@@@.@.@@
  @.@@@@..@.
  @@.@@@@.@@
  .@@@@@@@.@
  .@.@.@.@@@
  @.@@@.@@@@
  .@@@@@@@@.
  @.@.@@@.@.`;

  test('part 1', () => {
    const expectedResult = 13;

    expect(solvePart1(testInput)).toBe(expectedResult);
  });

  test('part 2', () => {
    const expectedResult = 43;

    expect(solvePart2(testInput)).toBe(expectedResult);
  });
})
