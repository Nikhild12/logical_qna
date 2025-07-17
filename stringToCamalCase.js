// Convert string to camel case
// Input : hello world
// Output: helloWorld

function stringToCamelCase(str) { 
    if(typeof str !== 'string' || str.length === 0) {
        return '';
    } else {
        let strArr = str.split(/[-_\s]+/);
        let result = []
        for(let i = 0;i<strArr.length;i++) { 
            if( i === 0) {
                result.push(strArr[i])
            } else {
                let char = strArr[i][0].toUpperCase();
                let remainingChar = strArr[i].slice(1).toLowerCase();
                result.push(`${char}${remainingChar}`)
            }
        } 

        return result.join('')
    }
}

module.exports = stringToCamelCase;