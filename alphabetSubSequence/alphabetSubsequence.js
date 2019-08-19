function alphabetSubsequence (s) {

    const wordArr = s.split('');
    const charValues = [];

    wordArr.forEach((letter) => {
        charValues.push(letter.charCodeAt(0));
    })

    if(new Set(charValues).size !== charValues.length) return false;
    
    for(let i = 0; i < charValues.length - 1; i++){
        if(charValues[i] > charValues[i+1]) return false;
    }
    return true;
}   

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
