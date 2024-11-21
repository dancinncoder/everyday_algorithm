// #Problem: "Sum of Unique Numbers"

// #Description: Write a JavaScript function that takes an array of integers as an input and returns the sum of all the unique (non-repeated) numbers in that array.

// #For example:
// - Given the array [1, 2, 3, 2, 4, 5, 1], the unique numbers are [3, 4, 5], so the function should return 3 + 4 + 5 = 12.
// - Given the array [1, 1, 1, 1], since there are no unique numbers, the function should return 0.

// #Function Signature:
//   function sumOfUniqueNumbers(arr) {
//       // Your code here
//   }

// #Input: arr (Array): an array of integers, where 1 <= arr.length <= 10^4 and -10^4 <= arr[i] <= 10^4.

// #Output:
// Return the sum of the unique numbers in the array.

// #Examples:
// sumOfUniqueNumbers([1, 2, 3, 2, 4, 5, 1]); // Output: 12
// sumOfUniqueNumbers([1, 1, 1, 1]);         // Output: 0
// sumOfUniqueNumbers([10, 20, 30, 40]);      // Output: 100

function sumOfUniqueNumbers(arr) {
  //1. Count accurrences of each element in the array.
  // Use 'Frequency Map', an obeject used to store the frequency of each elements in an array and acting as a lookup table. How it works is that, initializing the object first and looping through the array with updating frequency map each time an element is encountered.
  // const Array = [1, 2, 3, 3];
  // const FrequencyMap = {
  //   1: 1,
  //   2: 1,
  //   3: 2,
  // }

  const FrequencyMap = {};
  for (const num of arr) {
    FrequencyMap[num] = (FrequencyMap[num] || 0) + 1;
  }

  //2. Make an array with unique elements, sum all elements in the array
  const unique = arr.filter((item) => FrequencyMap[item] === 1);
  const sum = unique.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
}
