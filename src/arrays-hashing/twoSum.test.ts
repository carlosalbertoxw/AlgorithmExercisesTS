import { describe, expect, it } from 'vitest';
import { twoSum } from './twoSum';

describe('twoSum', () => {
    it.each([
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1], name: 'caso básico' },
        { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2], name: 'números negativos' },
        { nums: [3, 2, 4], target: 6, expected: [1, 2], name: 'no usa el mismo elemento dos veces' },
        { nums: [3, 3], target: 6, expected: [0, 1], name: 'valores repetidos' },
        { nums: [1, 1, 5], target: 6, expected: [0, 2], name: 'conserva el primer índice de un valor repetido' },
        { nums: [1, 2, 3], target: 7, expected: [], name: 'sin solución' },
    ])('$name', ({ nums, target, expected }) => {
        expect(twoSum(nums, target)).toEqual(expected);
    });
});
