let Headers = ['X', 'Y', 'Z'];

let userData = [['B', 'C', 'A'], [10, 20, 30]]

let mapData = { X: 'A', Z: 'C', Y: 'B' }
 
// output = [["X", "Y", "Z"], [30, 10, 20]]

function transformData(headers,user,mapData) {
    const result = [headers];
    const values= [];
  for (let i = 0;i<headers.length;i++) {
    const originalKey = mapData[headers[i]]
    const index = user[0].indexOf(originalKey)
    values.push(user[1][index])
  }
  // console.log()
  // result.push(values)
  // return result
}

console.log(transformData(Headers,userData,mapData))
