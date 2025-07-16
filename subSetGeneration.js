// Write a function to generate all possible subsets of a given array without using any built-in 
//   subset generation functions.
//   - Example: 
//     Input: [1, 2, 3] 
//     Output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

const subSetGeneration = (inputArr) => {
    const arr = [[]];
  
    for (let i = 0; i < inputArr.length; i++) {
      const ele = inputArr[i];
  
      const subsets = [];
      for (let j = 0; j < arr.length; j++) {
        subsets.push([...arr[j], ele]);
      }
      arr.push(...subsets);
    }
    return arr;
  }

module.exports = subSetGeneration

// function subSetGeneration(arr) {
//   const result = [];

//   function backtrack(start = 0, path = []) {
//     result.push([...path]);  // store a copy of the current subset
//     for (let i = start; i < arr.length; i++) {
//       path.push(arr[i]);
//       backtrack(i + 1, path);  // move forward
//       path.pop();  // backtrack
//     }
//   }

//   backtrack();
//   console.log(result);
// }

// subSetGeneration([1, 2, 3]);