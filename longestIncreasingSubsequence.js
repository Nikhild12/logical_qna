
//    - Write a function to find the length of the longest increasing subsequence in an array without using any built-in sequence or dynamic programming functions.
//   - *Example:* 
//     Input: `[10, 9, 2, 5, 3, 7, 101, 18]` 
//     Output: `4` (The sequence is `[2, 3, 7, 101]`)

// function longIncSubsequence(inputArr) {
//     let resultArr = [];
//     let previousVal = -Infinity;
//     for(let i =0;i<inputArr.length;i++) {
//         if(i === 0 && previousVal < inputArr[i]) {
//             previousVal = inputArr[i]
//             resultArr.push(previousVal)
//         } else if(previousVal < inputArr[i] ||  inputArr[i] < inputArr[i+1]) {
//             resultArr.push(inputArr[i]);
//         }
//     }
//     for (let j =0;j<resultArr.length;j++) {
//         if(j === 0 && resultArr[j] > resultArr[j + 1]) {
//             resultArr.splice(j,1)
//         } else if(j === resultArr.length - 1 && resultArr[j] < resultArr[j - 1]) {
//             resultArr.pop()
//         } 
//         else if(resultArr[j] < resultArr[j - 1] && resultArr[j] < resultArr[j + 1]) {
//             resultArr.splice(j,1)
//         }
//     }

//     return {
//         resultArr,
//         outputLength:resultArr.length
//     }
// } 

function longIncSubsequence(arr) {
    var n = arr.length;
    if (n === 0) return 0;

    // lis[i] will store length of LIS ending at index i
    var lis = [];
    for (var i = 0; i < n; i++) {
        lis[i] = 1; // each element is at least length 1
    }
    // Compare each pair (i, j) where j < i
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1; // extend subsequence
            }
        }
    }

    // Find the maximum value in lis[]
    var maxLen = 1;
    for (var i = 0; i < n; i++) {
        if (lis[i] > maxLen) {
            maxLen = lis[i];
        }
    }

    return maxLen;
}

module.exports = longIncSubsequence;

console.log(longIncSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
