
// output: [
// {class: 5, names: ["A", "C"]},
// {class: 6, names: ["b","d"]}
// ];

// INPUT:[
// {name: "a", class: 5},
// {name: "b", class: 6},
// {name: "c", class: 5},
// {name: "d", class: 6},
// ]

function commonData(arr) {
  if(Array.isArray(arr) && arr.length > 0) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const cls = current.class;
        const name = current.name;

        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j].class === cls) {
            result[j].names.push(name);
            found = true;
            break;
            }
        }

        if (!found) {
            result.push({
            class: cls,
            names: [name]
            });
        }
        }

    return result
  } else {
    return false 
  }
}

module.exports = commonData;