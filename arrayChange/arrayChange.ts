function arrayChange(inputArray: number[]): number {
    let count = 0;

    for(let i = 0; i < inputArray.length - 1; i++) {
        if(inputArray[i] >= inputArray[i+1]) {
            let add = inputArray[i] - inputArray[i+1] + 1;
            inputArray[i+1] += add;
            count += add;
        }
    }


    return count;
}

console.log(arrayChange([0,0,1]));