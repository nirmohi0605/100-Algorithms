function bishopAndPawn(bishop: string, pawn: string): boolean {
    let bishopCharCode = bishop.charAt(0).charCodeAt(0);
    let pawnCharCode = pawn.charAt(0).charCodeAt(0);

    let columnDifference = Math.abs(parseInt(bishop.charAt(1)) - parseInt(pawn.charAt(1)));

    return Math.abs(bishopCharCode - pawnCharCode) === columnDifference;
}

console.log(bishopAndPawn('a6', 'a6'));