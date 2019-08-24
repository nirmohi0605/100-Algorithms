function avoidObstacles(inputArray: number[]): number {

    inputArray = inputArray.sort((a,b) => a-b);
    let maxElement = Math.max(...inputArray);

    for(let i = 1; i < maxElement + 1; i++) {
        let flag = inputArray.every((el) => {
            return (el % i !== 0)
        })
        if(flag) return i;
    }
    return maxElement + 1;
}

console.log(avoidObstacles([1,3,4,5]));