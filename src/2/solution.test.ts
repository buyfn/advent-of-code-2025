import { describe, test, expect } from 'vitest';

import {
    isInvalidId,
    isInvalidIdPartTwo,
    makeRange,
    repeatN,
    sum
} from './solution.ts';

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

describe('makeRange', () => {
    test.each(
        [
            [[1, 3], [1, 2, 3]],
            [[10, 15], [10, 11, 12, 13, 14, 15]],
            [
                [11, 22],
                [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
            ]
        ]
    )('makeRange($0) -> $1', (input, expected) => {
        expect(makeRange(input)).toEqual(expected)
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

describe('sum', () => {
    test.each([
        [[1], 1],
        [[1, 2], 3]
    ])('sum($0) -> $1', (input, expected) => {
        expect(sum(input)).toBe(expected)
    })
});
