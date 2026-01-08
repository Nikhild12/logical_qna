// const nums = [1,2,3,4,5,6,7,8,9,8,7,5,4,3,2]
 
// function removeDuplicate(numArr) {
//   if(Array.isArray(numArr) && numArr.length > 0) {
//     for(let i = 0;i<numArr.length;i++) {
//       let count = 0;
//         for(let j = 0;j<numArr.length;j++) {
//           if(numArr[i] === numArr[j]) {
//             count += 1;
//             if(count > 1) {
//               numArr.splice(i,1)
//             }
//           } 
//         }
//       count = 0;
//     }
    
//     return numArr.sort((a,b) => a - b )
//   } else {
//     return false;
//   }
// }
// ans :: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(removeDuplicate(nums))

const nums = [1,2,3,4,5,6,7,8,9,8,7,5,4,3,2]
function removeDuplicate(numArr) {
  let duplicate = []
  if(Array.isArray(numArr) && numArr.length > 0) {
    for(let i = 0;i<numArr.length;i++) {
      if(!duplicate.includes(numArr[i])) {
        duplicate.push(numArr[i])
      }
    }
    return duplicate.sort((a,b) => a - b )
  } else {
    return false;
  }
}

export default removeDuplicate;

console.log(removeDuplicate([1,2,3,4,5,6,7,8,9,8,7,5,4,3,2]));
