import { sum } from '../utils';

export type Location = '.' | '^' | 'S';
export type TimeLineCount = Record<number, number>;

export const solvePart1 = (input: string): number => {
  const parsedInput = parseInput(input);

  let beamLocations: number[] = [];
  let splitsCount = 0;

  parsedInput.forEach((row) => {
    const nextBeamLocations = getNextBeamLocations(row, beamLocations);
    const currentRowSplits = countBeamSplits(row, beamLocations);

    beamLocations = nextBeamLocations;
    splitsCount += currentRowSplits;
  });

  return splitsCount;
}

export const solvePart2 = (input: string): number => {
  const parsedInput = parseInput(input);

  let timelinesPerLocation: TimeLineCount = {};

  parsedInput.forEach((row) => {
    const newTimelinesCount = getTimelineCount(row, timelinesPerLocation);
    timelinesPerLocation = newTimelinesCount;
  });

  return sum(Object.values(timelinesPerLocation));
}

export const getNextBeamLocations = (
  row: string, beamLocations: number[]
): number[] => {
  const locations = [...row] as Location[];

  const nextBeamLocations = locations.reduce(
    (acc, current, currentIndex: number): number[] => {
      if (current === 'S') {
        return [...acc, currentIndex];
      }

      if (current === '.') {
        if (beamLocations.includes(currentIndex)) {
          return [...acc, currentIndex];
        } else {
          return acc;
        }
      }

      if (current === '^') {
        if (beamLocations.includes(currentIndex)) {
          return [...acc, currentIndex - 1, currentIndex + 1]
            .filter(index => index >= 0 && index < row.length)
        } else {
          return acc;
        }
      }

      return acc;
    }, []
  );

  return nextBeamLocations;
}

export const countBeamSplits = (row: string, beamLocations: number[]): number => {
  const locations = [...row] as Location[];

  return locations
    .filter((location, index) => location === '^' && beamLocations.includes(index))
    .length
}

export const getTimelineCount = (row: string, timelineCount: TimeLineCount) => {
  const locations = [...row] as Location[];

  const newCount = { ...timelineCount };

  locations.forEach((location, i) => {
    if (location === 'S') {
      newCount[i] = 1;
    }

    if (location === '^') {
      newCount[i] = 0;
      if (i > 0) {
        newCount[i - 1] = (newCount[i - 1] || 0) + (timelineCount[i] || 0);
      }
      if (i < row.length - 1) {
        newCount[i + 1] = (newCount[i + 1] || 0) + (timelineCount[i] || 0);
      }
    }
  });

  return newCount;
}

export const parseInput = (input: string): string[] =>
  input.split('\n').filter(Boolean);
