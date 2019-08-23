function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {

    let currSum = 0;


    for (let i = 0; i < k; i++) {
        currSum += inputArray[i];
    }

    console.log(currSum);
    let max = currSum;

    for (let i = k; i < inputArray.length; i++) {
        currSum += inputArray[i];
        currSum -= inputArray[i - k];
        max = Math.max(currSum, max);
    }
    return max;
}


console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));