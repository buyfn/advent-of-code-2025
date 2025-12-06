import { transpose, sum, mult } from '../utils';

type Operation = '*' | '+';

export const solvePart1 = (input: string): number =>
  solve(input, parseInput)

export const solvePart2 = (input: string): number =>
  solve(input, parseInput2);

export const solve = (input: string, parser: Function) => {
  const parsedInput = parser(input);
  const solvedLines = parsedInput.map(solveLine);

  return sum(solvedLines);
}

export const solveLine = (line: string[]): number => {
  const opMap: Record<Operation, Function> = {
    '*': mult,
    '+': sum,
  };

  const vals = [...line];
  const lastVal = vals.pop();

  if (!lastVal) {
    throw new Error('stack underflow');
  }

  const op = lastVal as Operation;
  const opFunc = opMap[op];

  return opFunc(vals.map(s => Number(s)));
}

export const parseInput = (
  input: string
): string[][] => {
  const inputLines = input.split('\n').filter(Boolean);
  const inputValues =
    inputLines.map(line => line
      .replace(/ +/g, ' ')
      .trim()
      .split(' ')
    )

  return transpose(inputValues);
}

export const parseInput2 = (input: string): string[][] => {
  const inputLines = input.split('\n').filter(Boolean);
  const operationsLine = inputLines.pop();

  if (!operationsLine) {
    throw new Error('invalid input');
  }

  const operationsList = [...operationsLine]
    .filter(char => char !== ' ');

  const numbers = transpose(inputLines.map(line => [...line]))
    .map(digits => digits
      .join('')
      .replace(/ +/g, ' ')
      .trim()
    );
  const groupedNumbers = groupItems(numbers, '');
  const groupedNumbersWithOps = groupedNumbers
    .map((group, i) => [...group, operationsList[i] as Operation]);

  return groupedNumbersWithOps;
}

export const groupItems = <T>(items: T[], separator: string) =>
  items.reduce((acc, cur: T): T[][] => {
    if (cur === separator) {
      return [...acc, []];
    } else {
      const lastGroup = acc.pop();
      if (!lastGroup) {
        return acc;
      }
      lastGroup.push(cur);
      return [...acc, lastGroup];
    }
  }, [[]]);
