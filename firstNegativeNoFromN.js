// input // [12, -1, -7, 8, -15, 30, 16],3
// Output // [-1, -1, -7, -15, -15]

function firstNegative(arr,k) {
    let negative = [];
    let result = [];

    for(let i=0;i<k;i++) {
       if(arr[i] < 0) {
        negative.push(arr[i])
       }
    }
    if(negative.length > 0) {
        result.push(negative[0])
    } else {
        result.push(0)
    }

    for(let i = k;i < arr.length; i++) { 
        // console.log(i,arr[i])
        if(arr[i - k] < 0) {  
            negative.shift()  
        }

        if(arr[i] < 0) { 
            negative.push(arr[i])
        }
        console.log(arr[i - k],arr[i],negative)
         if(negative.length > 0) {
            result.push(negative[0])
            // negative.shift()
        } else {
            result.push(0)
        }
     }
    // return result
   
}

export default firstNegative;

console.log(firstNegative([12, -1, -7, 8, -15, 30, 16],3));
