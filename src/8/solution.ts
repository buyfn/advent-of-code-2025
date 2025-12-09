import { getPossiblePairs } from '../utils/iterations';
import { mult } from '../utils';
import {
  addPoint,
  contains,
  getDistance,
  merge,
  type Point
} from '../utils/points';

export const solvePart2 = (input: string): number => {
  const parsedInput = parseInput(input);

  let circuits: Point[][] = [];

  const pointPairs = getPossiblePairs(parsedInput);
  const sortedPairs = pointPairs.toSorted((a, b) => {
    return getDistance(...a) - getDistance(...b);
  });

  let pairIdx = 0;
  while (circuits[0] === undefined || circuits[0]?.length < parsedInput.length) {
    const currentPair = sortedPairs[pairIdx];
    if (currentPair !== undefined) {
      circuits = connectPair(currentPair, circuits);
    }
    pairIdx += 1;
  }

  const lastConnected = sortedPairs[pairIdx - 1];

  if (!lastConnected) {
    throw new Error('last connected pair is not defined');
  }

  return mult(lastConnected.map(p => p.x));
}

export const solvePart1 = (input: string): number => {
  const parsedInput = parseInput(input);

  let circuits: Point[][] = [];

  const pointPairs = getPossiblePairs(parsedInput);
  const sortedPairs = pointPairs.toSorted((a, b) => {
    return getDistance(...a) - getDistance(...b);
  }).slice(0, 10);

  sortedPairs.forEach(pair => {
    circuits = connectPair(pair, circuits);
  });

  const sortedCircuitsLengths = circuits
    .toSorted((c1, c2) => c2.length - c1.length)
    .slice(0, 3)
    .map(c => c.length);

  return mult(sortedCircuitsLengths);
}

export const connectPair = (pair: [Point, Point], circuits: Point[][]): Point[][] => {
  const [first, second] = pair;

  const firstBoxCircuitIndex = circuits
    .findIndex(circuit => contains(circuit, first));
  const secondBoxCircuitIndex = circuits
    .findIndex(circuit => contains(circuit, second));

  // if first is included in circuit A and second is included in circuit B - merge A & B
  if (firstBoxCircuitIndex !== -1 && secondBoxCircuitIndex !== -1) {
    const mergedCircuit = merge(
      circuits[firstBoxCircuitIndex] as Point[],
      circuits[secondBoxCircuitIndex] as Point[]
    )
    circuits = circuits
      .filter((c, i) =>
        i !== firstBoxCircuitIndex && i !== secondBoxCircuitIndex
      );
    circuits.push(mergedCircuit);
  } else {
    // if first is included in some circuit - add second to the same circuit
    if (firstBoxCircuitIndex !== -1) {
      const circuitToUpdate = circuits[firstBoxCircuitIndex] as Point[];
      addPoint(circuitToUpdate, second);
      // circuitToUpdate.push(second);
    }

    // if second is included in some circuit - add first to the same circuit
    if (secondBoxCircuitIndex !== -1) {
      const circuitToUpdate = circuits[secondBoxCircuitIndex] as Point[];
      addPoint(circuitToUpdate, first);
      // circuitToUpdate.push(second);
    }

    // else, add a new circuit from first and second
    if (firstBoxCircuitIndex === -1 && secondBoxCircuitIndex === -1) {
      circuits.push(pair);
    }
  }

  return circuits;
}

export const findClosestToPoint = (p: Point, pointList: Point[]): Point =>
  pointList.reduce((closest, current) => {
    const distance = getDistance(p, current);
    const closestDistance = getDistance(p, closest);

    return distance < closestDistance ? current : closest;
  });

export const parsePoint = (str: string): Point => {
  const [x, y, z] = str.split(',')
    .map(s => Number(s));

  if (x === undefined || y === undefined || z === undefined) {
    throw new Error('could not parse point');
  }

  return { x, y, z }
}

export const parseInput = (input: string): Point[] =>
  input.split('\n')
    .filter(Boolean)
    .map(parsePoint)
