import { getPossiblePairs } from '../utils/iterations';
import { max } from '../utils/math';

type Point = {
  row: number,
  col: number
}

export const solvePart1 = (input: string): number => {
  const pointList: Point[] = parseInput(input);
  const possiblePairs = getPossiblePairs(pointList);
  const rectSizes = possiblePairs
    .map(([p1, p2]) => getRectSize(p1, p2));

  return max(rectSizes);
}

export const getRectSize = (p1: Point, p2: Point): number => {
  const width = Math.abs(p2.col - p1.col) + 1;
  const height = Math.abs(p2.row - p1.row) + 1;

  return width * height;
}

export const parsePoint = (pointString: string): Point => {
  const [col, row] = pointString.split(',');

  if (!col || !row) {
    throw new Error('could not parse point');
  }

  return {
    col: Number(col),
    row: Number(row)
  }
}

export const makePoint = (col: number, row: number): Point =>
  ({ col, row });

export const pointToString = (p: Point): string =>
  `${p.row}, ${p.col}`;

export const parseInput = (input: string) => {
  return input.split('\n')
    .filter(Boolean)
    .map(parsePoint);
}
