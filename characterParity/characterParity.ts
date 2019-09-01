function characterParity(symbol: string): string {
    const toNumber = parseInt(symbol);

    if(isNaN(toNumber)) return 'not a digit';

    if(toNumber % 2 === 0) return 'even';

    return 'odd';

    
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
