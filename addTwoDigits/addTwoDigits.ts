function addTwoDigits(n: any): number {
    let arr =  n.toString().split('');
    let sum = arr.reduce((total, num) => {
        return total + parseInt(num);
    }, 0)

    return sum;
}

console.log(addTwoDigits(47));