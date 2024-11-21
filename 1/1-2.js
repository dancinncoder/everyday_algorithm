// ##Problem: "Find the Most Frequent Element"
//
// #Description:
// Write a JavaScript function that takes an array of integers as input and returns the element that appears most frequently in the array. If there are multiple elements with the same highest frequency, return any one of them.

function mostFrequentElement(arr) {
  // Step 1: Count occurrences of each element
  const countMap = {};
  for (const num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // Step 2: Find the element with the highest frequency
  let maxFrequency = 0;
  let mostFrequent = arr[0]; //Initialize with the first element

  for (const num in countMap) {
    // countMap[num]  = occureneces
    if (countMap[num] > maxFrequency) {
      maxFrequency = countMap[num];
      mostFrequent = Number(num);
    }
  }

  return mostFrequent;
}
