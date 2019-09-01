function chunkyMonkey(arr: any[], size: number): any[][] {


    const chunkyArray = [];

    while(arr.length > 0) {
        let sliced = arr.splice(0, size);
        chunkyArray.push(sliced);
    }

    return chunkyArray;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));