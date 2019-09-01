function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const board = {
        "A" : "o",
        "B" : "e",
        "C" : "o",
        "D" : "e",
        "E" : "o",
        "F" : "e", 
        "G" : "o", 
        "H" : "e"    
    }

    let letterParity1 = board[cell1.charAt(0)];
    let letterParity2 = board[cell2.charAt(0)];
    let numberParity1 = parseInt(cell1.charAt(1)) % 2;
    let numberParity2 = parseInt(cell2.charAt(1)) % 2;


    if(letterParity1 === letterParity2) {
        return numberParity1 === numberParity2;
    } else {
        return numberParity1 !== numberParity2;
    }

}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
