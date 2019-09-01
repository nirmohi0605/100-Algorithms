function boxBlur(image) {
    const pixelArray = image.flat();

    const pixelSum = pixelArray.reduce((a,b) => a + b, 0);
    const pixelAvg =  pixelSum / pixelArray.length;

    return Math.floor(pixelAvg);
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));