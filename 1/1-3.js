// #Problem: "First Unique Character in a String"
// #Description: Write a JavaScript function that takes a string as input and returns the index of the first unique (non-repeated) character in the string. If there are no unique characters, return -1.

// #Function Signature:
// function firstUniqueCharacter(s) {
//     // Your code here
// }

// #Input: s (String): a non-empty string containing only lowercase English letters.

// #Output: An integer representing the index of the first unique character, or -1 if no unique character exists.
// Example:

// #Example
// firstUniqueCharacter("leetcode"); // Output: 0 (the character 'l' is the first unique character)
// firstUniqueCharacter("loveleetcode"); // Output: 2 (the character 'v' is the first unique character)
// firstUniqueCharacter("aabb"); // Output: -1 (there are no unique characters)

function firstUniqueCharacter(s) {
  //1. Find frequency using countMap
  // countMap = {
  //   'a' : 1,
  //   'p' : 2,
  //   'l' : 1,
  //   'e' : 1,
  // }
  const countMap = {};
  for (const item of s) {
    countMap[item] = (countMap[item] || 0) + 1;
  }
  //2. Find the first countMap[item] === 1, return its index
  for (let i = 0; i < s.length; i++) {
    if (countMap[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}
