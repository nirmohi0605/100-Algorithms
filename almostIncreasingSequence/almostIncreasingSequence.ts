function almostIncreasingSequence(sequence: number[]): boolean {

    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] >= sequence[i+1]) {
            sequence.splice(i, 1);
            break;
        }
    }

    for(let i = 0; i < sequence.length; i++) {  
        if(sequence[i] >= sequence[i+1]) {
            return false;
        }

    }

    return true;
}

console.log(almostIncreasingSequence([7, 1, 2, 3])) 
console.log(almostIncreasingSequence([1, 2, 3, 4, 7, 5])) 