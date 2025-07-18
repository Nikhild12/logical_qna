// Find median number from two sorted arrays
// Input: [1,3],[2] Output: 2
// Input: [1,2],[3,4] Output: 2.5


function medianNumber(firstArr,secondArr) {
    if(Array.isArray(firstArr) && Array.isArray(secondArr)) {
      firstArr = firstArr.sort()
      secondArr = secondArr.sort()
      let index;
      let newArr = [...firstArr,...secondArr];
      if(newArr.length%2 === 0) {
        index = Math.floor(newArr.length/2)
        return(newArr[index] + newArr[index - 1])/2
      } else {
        index = Math.floor(newArr.length/2)
        return newArr[index]
      }
    } else {
      return false;
    }
  }

  module.exports = medianNumber;