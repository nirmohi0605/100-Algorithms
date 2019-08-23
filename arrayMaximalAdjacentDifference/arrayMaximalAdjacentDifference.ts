function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let max = 0;

    for(let i = 1; i < inputArray.length; i++) {
        let curr = Math.abs(inputArray[i] - inputArray[i-1]);

        max = Math.max(curr, max);

    }
    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));