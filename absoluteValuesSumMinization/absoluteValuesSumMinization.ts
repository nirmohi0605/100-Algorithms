function absoluteValuesSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;

    if(!isEven) {
        let el = (a.length - 1) / 2;
        return a[el];
    } else {
        let el = Math.floor((a.length - 1) / 2);
        return a[el];
    }
}



console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4 , 7, 6, 6, 8]));