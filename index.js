const addTwoNumber = require('./addTwoNumbers');
const lengthOfLongestSubstring = require('./longestSubstring');
const panlindromeNumber = require('./palindrome');
const primeNumber = require('./primeNumbers');
const secondTopScore = require('./secondTopScore');
const duplicateWord = require('./duplicateWord');
const subSetGeneration = require('./subSetGeneration');
const removeAdjacentChar = require('./removeAdjacentDuplicatChar');
const pascalTriangle = require('./pascalTriangle');
const flattenArray = require('./flattenedArray');
const stringToCamelCase = require('./stringToCamalCase');
const factorial = require('./factorial');
const spelendromeString = require('./spelendromStr');
const medianNumber = require('./medianNumber');
const commonData = require('./common');
const longestPalindromicSubstring = require('./longestPalindromicSubString');
const reverseInteger = require('./reverseInteger');
const longIncSubsequence = require('./longestIncreasingSubsequence');
const { default: removeDuplicate } = require('./removeDuplicateNum');
const { default: reverseStringFromIndex } = require('./reverseStringFromIndex');

// addTwoNumber([2, 4, 3], [5, 6, 4]); // Output: [7, 0, 8]

// lengthOfLongestSubstring("dvdf"); // Output: 3

// console.log(secondTopScore([2, 2, 2])); // Output: 89)

// primeNumber([2, 3, 4, 5, 6, 7, 8, 9, 10]); // Output: [2, 3, 5, 7]

// console.log(panlindromeNumber(10))

// console.log(duplicateWord('abcabcddffyehr'))

// console.log(subSetGeneration([1, 2, 3]));


// console.log(removeAdjacentChar("aaabbcdddde"))

// console.log(pascalTriangle(3)); // Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// console.log(flattenArray([1, [3, 4], [5]])); // Output: [1, 3, 4, 5]

// console.log(stringToCamelCase("another-example-string")); 

// console.log(factorial(5)); // Output: 120`)

// console.log(spelendromeString("leveldas")) // true

// console.log(medianNumber([1, 3], [2])); // Output: 2

// console.log(commonData([
// {name: "a", class: 5},
// {name: "b", class: 6},
// {name: "c", class: 5},
// {name: "d", class: 6},
// ]
// ))


// console.log(longestPalindromicSubstring("xabay"))

// console.log(reverseInteger(123))

// console.log(longIncSubsequence([10, 9, 2, 5, 3, 7, 101, 18]))

// console.log(removeDuplicate([1,2,3,4,5,6,7,8,9,8,7,5,4,3,2]))
console.log(reverseStringFromIndex('hello',0,2))


// console.log("undefined" == undefined)


// const promiseA = new Promise(resolve=>{
//     resolve(10)
// })

// const promiseB = new Promise(resolve=>{
//     resolve(120)
// })

// const promiseC = new Promise((resolve,reject)=>{
//     reject("Error")
// })


// promiseA.then(res=>{
//     console.log("promiseA res=>",res)
// })

// promiseB.then(res=>{
//     console.log("promiseB res=>",res)
// })

// promiseC.catch(err=>console.log(err))

// Promise.all([promiseA,promiseB,promiseC]).then((res=>{
//     console.log("resolved promise ===>",res)
// })).catch(err=>{
//     console.log("reject promise ===>",err)
// })

// const data1 = new Boolean(false)
//   console.log("data1",data1)