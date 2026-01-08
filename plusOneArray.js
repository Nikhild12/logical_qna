function plusOneArray(arr) {
    let result = [...arr]
    let count = 1;

    for(let i = result.length - 1; i >= 0; i--) {
        let sum = result[i] + count;
        if(sum === 10) {
            result[i] = 0
            count = 1
        } else {
            result[i] = sum
            count = 0;
            break
        }
    }
    if(count === 1) result.unshift(1)

        return result
}

console.log(plusOneArray([9, 9, 9]))

// input [1, 2, 3, 4] => output [1, 2, 3, 5]
// [9, 9, 9] => [1, 0, 0, 0]
// [0, 9, 9, 9] => [1, 0, 0, 0] // [0, 0, 9, 9, 9] => [0, 1, 0, 0, 0] // [0, 1, 0, 0, 9, 9, 9] => [0,1,0, 1, 0, 0, 0]