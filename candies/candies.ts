function candies(n: number, m: number): number {
    const remainder : number = m % n;

    return m - remainder;
}

console.log(candies(3, 10));