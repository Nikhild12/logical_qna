function reverseInteger(num) {
  if(typeof num === 'number') {
    let newNum;
    let reversedNum = [];
    if( num < 0) {
       newNum = num.toString().split("");
      newNum.shift()
    } else {
          newNum = num.toString().split("");
    }
    
    for(let i=newNum.length - 1;i>=0;i--) {
      reversedNum.push(newNum[i])
    }
    
    if(num > 0) {
      return Number(reversedNum.join(""))
    } else {
      let result = Number(reversedNum.join(""))
      return -result
    }
  }
}
module.exports = reverseInteger;

console.log(reverseInteger(123));
