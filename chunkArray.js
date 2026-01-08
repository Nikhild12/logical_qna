function chunkArray(arr,size) {
    let result = []
    let isEven  = arr.length % 2 === 0 ? true : false;

    for(let i = size;i<=arr.length;i += size ) {
       result.push([arr[i-size],arr[i-1]]);
    }


    console.log(isEven)

    if(!isEven) result.push([arr.length])
    return result;
   
}


console.log(chunkArray([1, 2, 3, 4, 5],2))

// output // [[1,2],[3,4],[5]]