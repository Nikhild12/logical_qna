let input = "aabbbccccaaa" 
// output: a2b3c4a3

function compressString(str) {
    let result = "";
    let count = 1;

    for(let i = 0 ;i < str.length; i++) {
        if(str[i] === str[i+1]) {
            count += 1;
        } else {
            result += str[i] + count;
            count = 1
        }
    }

    return result
} 

console.log(compressString(input))