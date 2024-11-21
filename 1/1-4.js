// #Problem: Find All Elements that Appear More Than Once
// Given an array of integers, return all elements that appear more than once. The solution should return a list of these elements without duplicates.

// #Example
// #Input: const arr = [4, 3, 2, 7, 8, 2, 3, 1];

// #Output: [2, 3]

function findDuplicates(arr) {
  //1. Find frequency
  const countMap = {};
  for (const num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  //2. Filter and sorting to remove duplicates.
  const result = arr.filter((item, index) => {
    countMap[item] > 1 && arr.indexOf(item) === index;
  });

  return result;
}
