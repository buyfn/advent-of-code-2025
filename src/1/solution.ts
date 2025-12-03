import { readInput } from '../utils';

const countZeroPointings = (instructions: number[]): number => {
  let result = 0;
  let currentValue = 50;

  instructions.forEach(rotation => {
    const { newPos, crossings } = getNewPosition(currentValue, rotation);
    result += crossings;
    if (newPos === 0) {
      result += 1;
    }
    currentValue = newPos;
  });

  return result;
}

const getNewPosition = (
  before: number,
  rotation: number
): { newPos: number, crossings: number } => {
  const newPos = (100 + before + (rotation % 100)) % 100;

  const fullTurns = Math.floor(Math.abs(rotation) / 100);
  const additional = crossedZero(before, rotation % 100) ? 1 : 0;

  return {
    newPos,
    crossings: fullTurns + additional,
  }
}

const crossedZero = (before: number, rotation: number): boolean => {
  if (before === 0) {
    return false
  }
  if (rotation < 0) {
    return before + rotation < 0
  } else {
    return before + rotation > 100;
  }
}

const parseData = (data: string): number[] => {
  return data.split('\n')
    .filter(Boolean).map(rotationString => {
      const direction = rotationString.slice(0, 1);
      const value = Number(rotationString.slice(1));

      return direction === 'L' ? value * -1 : value
    });
}

const main = () => {
  const rawData = readInput();

  if (!rawData) {
    throw new Error('unable to readfile');
  }

  const parsedData = parseData(rawData);
  const zeroPositions = countZeroPointings(parsedData);

  console.log(zeroPositions);
}

main();

export default main;
