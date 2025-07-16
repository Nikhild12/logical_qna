// Pascal’s Triangle code program 
// Input : 5
// Out Put - [
//     [1],
//    [1, 1],
//   [1, 2, 1],
//  [1, 3, 3, 1],
// [1, 4, 6, 4, 1]
// ]

function pascalTriangle(num) {
    let result = [];
    for(let i = 1; i < num; i++) { 
        let arr = []
        for(let j=0; j <= i; j++) {
            if(j === 0 || j === i) {
                arr.push(1);
            } else {
                arr.push((result[i-2][j-1] + result[i-2][j]));
            }
        }
        result.push(arr);
    }

    console.log(result)
}

module.exports = pascalTriangle;