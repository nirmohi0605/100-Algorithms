function addBorder(picture: string[]): string[] {
    let walledPicture = [];
    picture.forEach(str => {
        let brick = "*";
        walledPicture.push(brick.concat(str, brick));
    })

    const wallSize = picture[0].length + 2;

    let wall = Array(wallSize+1).join("*");
    walledPicture.push(wall);
    walledPicture.unshift(wall);

    return walledPicture;
}

console.log(addBorder(["abcs", "deds", "asdf"]));


//concat won't mutate
//"*".repeat(4)