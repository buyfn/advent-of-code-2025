export type Point = {
  x: number,
  y: number,
  z: number
}

export const getDistance = (p1: Point, p2: Point): number =>
  Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2 + (p2.z - p1.z) ** 2);

export const isEqual = (p1: Point, p2: Point): boolean =>
  p1.x === p2.x && p1.y === p2.y && p1.z === p2.z;

export const contains = (ps: Point[], p: Point): boolean =>
  ps.some(pp => isEqual(pp, p));

export const addPoint = (ps: Point[], p: Point): void => {
  if (!contains(ps, p)) {
    ps.push(p);
  }
}

export const merge = (ps1: Point[], ps2: Point[]): Point[] => {
  let merged: Point[] = [];
  ps1.forEach(p => addPoint(merged, p));
  ps2.forEach(p => addPoint(merged, p));

  return merged;
}

export const toString = (p: Point): string => `${p.x}, ${p.y}, ${p.z}`;
