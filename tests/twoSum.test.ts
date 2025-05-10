import { twoSum } from '../src/twoSum';

describe('twoSum', () => {
    it('should return indices of the two numbers that add up to the target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('should work with negative numbers', () => {
        expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
    });

    it('should return an empty array if no match is found', () => {
        expect(twoSum([1, 2, 3], 7)).toEqual([]);
    });

    it('should work when the pair is at the end', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it('should not use the same element twice', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
});