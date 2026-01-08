const employeDir = [
  { id: 1, name:"abc", phone: 85748392  },
  { id: 2, name:"xyz", phone: 85748398  },
  { id: 3, name:"mno", phone: 85748390  }
]

function addEmplyee(employeeArr) {
  let newObj = {
    id: 2,
    name:"ggg",
    phone:869864698
  }
   for(let key in employeeArr) {
     if(employeeArr[key].id === newObj.id) return "User already exists";
     
     employeeArr.push(newObj)
   }
  
  return employeeArr
} 

// console.log(addEmplyee(employeDir))


function searchEmployee(searchQuery) {
    const result = employeDir.filter((ele) => {
      if(ele.name === searchQuery || ele.phone === Number(searchQuery)) return ele
    })
    
    if(result.length > 0) return result;
    else {
      return "NO user found"
    }
}

// console.log(searchEmployee("mno"))


function getCredit(id) {
  const result = new Promise((resolve,reject)=>{
   if(id) {
      setTimeout(()=>{
      resolve(Math.floor(Math.random() * 100))
    },1000)
   } else {
     reject("Id is not valid")
   }
  })
  
 return  result.then(res=> res).catch(err=>console.log(err))
}

// getCredit(employeDir[0].id)

function avgCreditScore() {
    let count = 0
    let avg = 0
    const result = employeDir.map(ele =>{
      return getCredit(ele.id)
    })
    console.log(result)
     const creditScore = Promise.all(result).then(res=>{
       console.log(res)
      return res;
    }).then((newRes)=>{
       newRes.forEach(ele=> {
         console.log(ele)
         count += ele
       })
       
       avg = count/employeDir.length
  
     })
     
     return creditScore
  
}

console.log(avgCreditScore())