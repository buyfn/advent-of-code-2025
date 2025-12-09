import { readInput } from '../utils';

import { solvePart1, solvePart2 } from './solution';

const input = readInput();

if (input) {
  const result1 = solvePart1(input);
  const result2 = solvePart2(input)

  console.log(result1);
  console.log(result2);
}
