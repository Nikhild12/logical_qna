// Find Second top score from the array
// Input: [89,84,596,232,55]  Output: 232

const secondTopScore = function (arr) {
    let second = 0;
    let top = 0;
    for( let i = 0; i < arr.length; i++) { 
        if(arr[i] > top) {
            second = top;
            top = arr[i];
        } else if(arr[i] > second && arr[i] < top) {
            second = arr[i];
        }
    }
    return second === 0 ? null : second;
} 

module.exports = secondTopScore;
