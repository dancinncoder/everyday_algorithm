// Problem 1: Longest Substring Without Repeating Characters
// Description:
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Constraints:
// 0 <= s.length <= 5 * 10⁴
// s consists of English letters, digits, symbols, and spaces.

// Follow-up:
// Can you solve it in O(n) time complexity?

function lengthOfLongestSubstring(s) {
  // iterate string 's' using hashMap

  const hashMap = new Map();

  let maxLength = 0;
  let startIndex = 0;

  for (let i = 0; i < s.length; i++) {
    // if the character is already in the hashMap and its index is >= startIndex
    if (hashMap.has(s[i]) && hashMap.get(s[i]) >= startIndex) {
      // update the startIndex to one past the last seen index
      startIndex = hashMap.get(s[i]) + 1;
    }

    // Update the character's index in the map
    hashMap.set(s[i], i); // {'p': 0}

    // Update the maxLength
    maxLength = Math.max(maxLength, i - startIndex + 1);
  }

  return maxLength;
}
