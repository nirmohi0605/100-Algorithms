function allLongestStrings(inputArray: string[]): string[] {
    let longestLength = 0;
    

    
    inputArray.forEach((word) => {
        longestLength = word.length > longestLength ? word.length : longestLength;
    })

    const returnArr = [];

    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length === longestLength) returnArr.push(inputArray[i]);
    }

    return returnArr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "addd"]));