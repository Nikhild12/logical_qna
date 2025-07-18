// Spelendrome String: reverse the string and match the original string
// Input: level
// Output: true

function spelendromeString(str) {
    if (typeof str === 'string') {
        let strArr = str.split('')
        let resultArr = []
        for (let i = strArr.length - 1; i >= 0; i--) {
            resultArr.push(strArr[i])
        }
        if (str === resultArr.join('')) {
            return true;
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports = spelendromeString;