// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

function longestPalindromicSubstring(str) {
    if(typeof str === 'string' && str.length > 1) {
        if(isPalindromeString(str)) return str;
        console.log(str)
        let newStr = '';

        for(let i = 0;i < str.length; i++) {
            for(let j = i + 1;j <= str.length;j++) {
                let testStr = str.substring(i,j);
                if(isPalindromeString(testStr) && testStr.length > newStr.length) {
                    newStr = testStr
                } 
            }
        }

        return newStr;
    }
}

function isPalindromeString(str) {
    let reverseStr = str.split("").reverse().join("");
    if(str === reverseStr) return true;
    else return false
}

module.exports = longestPalindromicSubstring