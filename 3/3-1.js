// #Problem: Merge Two Sorted Arrays into a Unique Sorted Array
// Given two sorted arrays, write a function that merges them into a single sorted array with unique values.

// #Example
// function mergeAndSortUnique(arr1, arr2) {
//     // Implement your code here
// }

// console.log(mergeAndSortUnique([1, 3, 5, 7], [2, 3, 6, 8])); // [1, 2, 3, 5, 6, 7, 8]
// console.log(mergeAndSortUnique([4, 5, 6], [1, 2, 3, 6, 7])); // [1, 2, 3, 4, 5, 6, 7]

// #Requirements
// Each input array is already sorted in ascending order.
// The output array should contain only unique values and be sorted in ascending order.

function mergeAndSortUnique(arr1, arr2) {
  // 1. merge two arrays and remove duplicates
  const mergedArray = [...new Set([...arr1, ...arr2])];
  const answer = mergedArray.sort((a, b) => a - b);
  return answer;

  // //1. to merge two arrays in to a new array
  // const mergedArray = [...arr1, ...arr2];

  // //2. count occourrences of each element in the array (using countMap)
  // const countMap = {};
  // for(const item of mergedArray) {
  //   countMap[item] = (countMap[item] || 0) + 1;
  // }

  // //3. filter with a condition that is the number of occourrence is 1 (=unique)
  const filteredArray = mergerdArray
    .filter((item) => countMap[item] === 1)
    .sort((a, b) => a - b);
  return filteredArray;
  // const filteredArray = Object.keys(countMap).map(Number);
  // const answer = filteredArray.sort((a,b) => a - b);

  // return answer;
}
