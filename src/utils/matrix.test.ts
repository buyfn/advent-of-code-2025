import { describe, test, expect } from 'vitest';

import { transpose } from './matrix';

describe('transpose', () => {
  test.each([
    [
      [[1, 2, 3]], [[1], [2], [3]]
    ],
    [
      [[1, 2], [3, 4]], [[1, 3], [2, 4]]
    ],
    [
      [[1, 2, 3],
      [4, 5, 6]],
      [[1, 4],
      [2, 5],
      [3, 6]]
    ]
  ])('transposes $0', (input, expected) => {
    expect(transpose(input)).toEqual(expected);
  })
});
