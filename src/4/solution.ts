import { sum } from '../utils';

type Position = {
  rowIndex: number,
  colIndex: number,
}

type Grid = Array<Array<string>>;

export const solvePart2 = (input: string): number => {
  const grid = parseInput(input);

  const iter = (removed: number, currentGrid: Grid): number => {
    const removable = countRemovable(currentGrid);

    if (removable === 0) {
      return removed
    }

    const nextGrid = grid.map((row, rowIndex) =>
      row.map((elt, colIndex) => {
        const shouldRemove = countAdjacent(
          { rowIndex, colIndex },
          currentGrid,
          '@'
        ) < 4;

        return shouldRemove ? '.' : elt;
      }));

    return iter(removed + removable, nextGrid)
  }

  return iter(0, grid);
}

export const solvePart1 = (input: string): number => {
  const grid = parseInput(input);
  return countRemovable(grid);
}

export const countRemovable = (grid: Grid): number => {
  return sum(grid.map((row, rowIndex) => {
    return row.filter((elt, colIndex) => {
      return elt === '@' &&
        countAdjacent({ rowIndex, colIndex }, grid, '@') < 4
    }).length;
  }));
}

export const countAdjacent = (
  position: Position,
  grid: Grid,
  char: string
): number => {
  const { rowIndex, colIndex } = position;

  const neighbours = [
    grid[rowIndex - 1]?.[colIndex - 1],  // top-left
    grid[rowIndex - 1]?.[colIndex],  // top
    grid[rowIndex - 1]?.[colIndex + 1],  // top-right
    grid[rowIndex]?.[colIndex - 1],  // left
    grid[rowIndex]?.[colIndex + 1],  // right
    grid[rowIndex + 1]?.[colIndex - 1],  // bottom-left
    grid[rowIndex + 1]?.[colIndex],  // bottom
    grid[rowIndex + 1]?.[colIndex + 1],  // bottom-right
  ];

  return neighbours.filter(elt => elt === char).length;
}

export const parseInput = (input: string): Grid => {
  return input.split('\n')
    .filter(Boolean)
    .map((row) => [...row]);
}

const printGrid = (grid: Grid) => grid
  .map(row => row.join(''))
  .join('\n')
