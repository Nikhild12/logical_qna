// Given a string s, find the length of the longest substring without duplicate characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// module.exports = lengthOfLongestSubstring = function(str) {
//     let result = []
//     let previousStr = []
//     let stringArr = str.split('');
//     let i = 0;
//     while(i<stringArr.length) {
//         if(!result.includes(stringArr[i])) {
//             previousStr.push(stringArr[i])
//             result = [...previousStr]
//         } else {
//             previousStr.shift()
//             previousStr.push(stringArr[i])
//         }
//         i++;
//     }

//     let resultStr = result.join('');

//     return resultStr.length

// };


const lengthOfLongestSubstring = function(str) {
    let seen = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (seen.has(str[right])) {
            seen.delete(str[left]);
            left++;
        }
        seen.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

module.exports = lengthOfLongestSubstring;