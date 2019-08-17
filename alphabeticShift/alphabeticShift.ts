
 // Solution 1
// function alphabeticShift(inputString: string): string {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"
//     const alphabetArray = alphabet.split('');

//     let inputShifted = inputString.split('');

//     for(let i = 0; i < inputShifted.length; i++) {
//         let currentCharIndex = alphabet.indexOf(inputShifted[i]);
//         let newCharIndex = currentCharIndex === 25 ? 0 : currentCharIndex + 1;
//         inputShifted.splice(i, 1, alphabetArray[newCharIndex]);

//     }

//     return inputShifted.join('');
// }

// console.log(alphabeticShift('abcdez'));


//alternatively create dictionary 

function alphabeticShift(inputString : string) : string {

    const alphabet : object = {
        'a' : 'b', 'b' : 'c', 'c' : 'd', 'd' : 'e', 'e' : 'f', 'f' : 'g', 
        'g' : 'h', 'h' : 'i', 'i' : 'j', 'j' : 'k', 'k' : 'l', 
        'l' : 'm', 'm' : 'n', 'n' : 'o', 'o' : 'p', 'p' : 'q', 'q' : 'r',
         'r' : 's', 's' : 't', 't' : 'u', 'u' : 'v', 'v' : 'w', 'w' : 'x', 
         'x' : 'y', 'y' : 'z', 'z' : 'a' 
    };

    let shiftedArr = inputString.split('');

    for(let i = 0; i < shiftedArr.length; i++) {
        shiftedArr[i] = alphabet[shiftedArr[i]];
    }


    return shiftedArr.join('')


}

console.log(alphabeticShift('crazy'));