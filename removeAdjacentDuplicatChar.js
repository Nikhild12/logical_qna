// Removing adjacent duplicate characters and displaying unique characters

function removeAdjacentChar(str) {

    let uniqueArr = [];
    for(let i=0;i<str.length;i++) { 
        if(str[i] !== str[i+1]) {
            uniqueArr.push(str[i]);
        }
    }

    return uniqueArr.join('');

}

module.exports = removeAdjacentChar