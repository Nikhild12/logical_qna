// Input = "Welcome to this Javascript Interview!”;
// Output 1=  emocleW ot siht tpircsavaJ !weivretnI

// Output2 =  !weivretnI tpircsavaJ siht ot emocleW


// function reverseString(str) {
//   let strArr = str.split(" ");
//   let result1 = [];
//   let result2 = [];

//     for(let i = str.length;i >= 0;i--) {
//       result1.push(str[i])
//     }

//   for (let i = 0; i < strArr.length; i++) {
//     let char = strArr[i];
//       for (let j = char.length; j >= 0; j--) {
//         result2.push(char[j]);
//       }
//       result2.push(" ");
//   }
//     console.log(result2.join(""));
// }
// let input = "Welcome to this Javascript Interview!"
// reverseString(input)


const obj = {
  name: "PC",
  specs: {
    cpu: "i7",
    ram: {
      size: "16GB",
      type: "DDR4"
    }
  }
};

function flattenedObj(data,prefix = "") {
  let newObj = {}
  for(let key in data) {
      const newKey = prefix ? `${prefix}.${key}` : key;
    console.log(newKey)
    if(typeof data[key] === 'object' && data[key] !==null) {
      Object.assign(newObj,flattenedObj(data[key],newKey))
    } else {
      newObj[newKey] =  data[key]
    }
  }
      console.log(newObj)
  return newObj
}

flattenedObj(obj)


 