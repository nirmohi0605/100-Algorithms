function arrayPreviousLess(items: number[]): number[] {
    let minArray = [];
    for(let i = 0; i < items.length; i++) {
        let minElement = findMin(items.slice(0, i)) || -1;
        let subArray = items.slice(0, i)
        if(!findMin(subArray)){
            minElement = -1;
        } else {
           minElement =  findMin(subArray) < items[i] ? findMin(subArray) : -1;
        }
        console.log(minElement, items.slice(0, i));
        minArray.push(minElement);
    }

    return minArray;
}


function findMin(inputArray) {

    let min = inputArray[0];

    for(let i = 0; i < inputArray.length; i++) {
        min = Math.min(min, inputArray[i]);
    }

    return min;
}

console.log("FINDMIN", findMin([]));
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));