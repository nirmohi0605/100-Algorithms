function checkPalindrome(inputString: string): boolean {

    const reversedStr = inputString.toLowerCase().split('').reverse().join('');


    return reversedStr === inputString;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
