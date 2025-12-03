import { readInput } from '../utils';
import { solvePart1, solvePart2 } from './solution';

const input = readInput();

if (input) {
  const solution1 = solvePart1(input);
  const solution2 = solvePart2(input);
  console.log(solution1);
  console.log(solution2);
}
