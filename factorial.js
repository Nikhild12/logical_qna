// Find factorial of a number
// Input = 5
// Output = 120

function factorial(num) {
    if(typeof num === 'number' && num > 0) {
        let count = num;
        for(let i = num - 1;i > 0;i--) {
            count = count * i;
        }
        return count;
      } else {
        return num;
      }
}

module.exports = factorial;