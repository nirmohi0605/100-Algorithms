function isCaseInsensitivePalindrome(inputString){
    const reversed = inputString.toLowerCase().split('').reverse('').join('');

    return inputString.toLowerCase() === reversed;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));