// Flattened the given array
// Input : [1, [3, 4], [5]]
// Output: [1, 3, 4, 5]

function flattenArray(arr) { 
    if(arr.length > 0) {
        let result = [];
        for(let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                // result.push(...flattenArray(arr[i])); // For Recursive
                for(let j = 0; j < arr[i].length; j++) {
                    result.push(arr[i][j]);
                }
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
}

module.exports = flattenArray;