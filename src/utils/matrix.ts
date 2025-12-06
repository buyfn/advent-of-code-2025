export const transpose = <T>(matrix: T[][]): T[][] => {
  const rowLength = matrix[0]?.length;

  if (matrix.length === 0 || !rowLength) {
    return [];
  }

  let result: T[][] = [];


  for (let i = 0; i < rowLength; i += 1) {
    let newRow: T[] = [];
    for (let j = 0; j < matrix.length; j += 1) {
      const val = matrix[j]?.[i];
      if (val === undefined) {
        throw new Error(
          'tried to transpose matrix that is not rectangular'
        );
      }
      newRow.push(val);
    }
    result.push(newRow);
  }

  return result;
};
