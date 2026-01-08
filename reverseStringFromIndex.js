// Write a function to reverse a string characters based on index
// Input:  input_str=‘hello’ start_idx=0 end_idx=2
// Output: ‘lehlo’

// let str = "hello";
// let index1 = 0;
// let index2 = 3;
function reverseStringFromIndex(input_str, start_idx,end_idx) {
  if(typeof input_str === 'string') {
    let reversedStr = ''
    for(let i = 0; i <= input_str.length - 1; i++) {
      if(i>=start_idx && i<=end_idx)  {
        reversedStr = reversedStr + input_str[end_idx - i]
      } else {
        reversedStr = reversedStr + input_str[i]
      }
    } 
    return reversedStr
  }
}

export default reverseStringFromIndex;

console.log(reverseStringFromIndex('hello',0,2));
