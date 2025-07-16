// Check Duplicate Word from string
// Input:abcabcddffyehr Output:[a,b,c,d,f]

const duplicateWord = function(str) {
   
    if(!str || typeof str !== 'string') {
        return false;
    } else {
        let wordsArr = str.split('');
        let wordCount = {};
        let duplicates = [];
        for(let i = 0;i < wordsArr.length;i++) {
            wordCount[wordsArr[i]] = (wordCount[wordsArr[i]] || 0) + 1;
        }
        for(let key in wordCount) {
            if(wordCount[key] > 1) {
                duplicates.push(key);
            }
        }

        return duplicates
    }
}

module.exports = duplicateWord;