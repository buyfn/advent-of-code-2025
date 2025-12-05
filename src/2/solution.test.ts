import { describe, test, expect } from 'vitest';

import {
  isInvalidId,
  isInvalidIdPartTwo,
  repeatN,
} from './solution';

describe('isInvalidId', () => {
  test.each(
    [
      ['55', true],
      ['6464', true],
      ['123123', true],
      ['101', false]
    ]
  )('isInvalidId($0) -> $1', (input, expected) => {
    expect(isInvalidId(input)).toBe(expected);
  })
});

describe('isInvalidIdPartTwo', () => {
  test.each(
    [
      ['55', true],
      ['6464', true],
      ['123123', true],
      ['123123123', true],
      ['111', true],
      ['101', false],
      ['12', false],
      ['22', true]
    ]
  )('isInvalidId($0) -> $1', (input, expected) => {
    expect(isInvalidIdPartTwo(input)).toBe(expected);
  })
});

describe('repeatN', () => {
  test.each(
    [
      [['abc', 1], 'abc'],
      [['ab', 3], 'ababab'],
      [['64', 2], '6464'],
    ]
  )('repeatN($0) -> $1', (input, expected) => {
    expect(repeatN(...input)).toBe(expected);
  })

});
