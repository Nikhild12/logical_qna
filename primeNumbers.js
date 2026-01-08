const primeNumber = function(arr) {
    if(arr.length > 0) {
        for(let i = 0; i < arr.length; i++ ) {
            let isPrime = true;
            
            if(arr[i] < 2) {
                isPrime = false;
            } else {
                for(let j = 2; j <= Math.sqrt(arr[i]); j++) {
                    if(arr[i] % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            if(isPrime) {
                console.log(arr[i]);
            }
        }
    }
}

module.exports = primeNumber;


console.log(primeNumber([2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
