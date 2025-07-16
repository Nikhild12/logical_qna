const panlindromeNumber = function(number) {
    // Check Type of given argument number and checking value of number is greater than 9
    // So we can check palindrome number
    if(typeof number !== 'number' && number > 9) {
        return false; 
    } else {
        // Here we are converting the number to string and spliting it into array of characters
        let arr = Math.floor(number).toString().split('');
        let resultArr = [];
        for(let i = arr.length-1;i>=0;i--) {
          resultArr.push(arr[i]);
        }
        arr = []
        arr = +resultArr.join('')
        if(number == arr) return true;
        else return false
    }
}

module.exports = panlindromeNumber;