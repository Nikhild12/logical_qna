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
