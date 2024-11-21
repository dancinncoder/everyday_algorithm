// Problem: Two Sum
// Description:
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Constraints:2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9 . There is exactly one solution.

// Follow-up:
// Can you come up with an algorithm that is less than O(n²) time complexity?

//  * @param {number[]} nums - An array of integers
//  * @param {number} target - The target sum
//  * @return {number[]} - Indices of the two numbers such that they add up to the target

function twoSum(nums, target) {
  for (let i; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
} //O(n2) Quadratic Time

function twoSum(nums, target) {
  const map = new Map(); // [2, 7, 3] target = 9 nums[0]
  for (let i; i < nums.length; i++) {
    const complement = target - nums[i]; // 9 - 7 = 2
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i); // {2: 0} {7: 1}
  }
} //O(n) : Linear Time
