import { readInput } from '../utils';
import { solvePart1 } from './solution';

const input = readInput();

if (!input) {
  throw new Error('could not read input file');
}

const result = solvePart1(input);
console.log(result);
