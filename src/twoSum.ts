export function twoSum(nums: number[], target: number): number[] {
    const dict: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in dict) {
            return [dict[complement], i];
        }
        if (!(nums[i] in dict)) {
            dict[nums[i]] = i;
        }
    }

    return [];
}
