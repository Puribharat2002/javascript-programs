console.log(`============ count prime numbers ===================`);
console.log(`const array = [ 3, 9, 7, 6, 19, 29, 53 ]`);

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

const array = [3, 9, 7, 6, 19, 29, 53];
let primeCount = 0;

for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
        primeCount++;
    }
}

console.log(`Count of prime numbers: ${primeCount}`);

console.log(`================== the total number spaces that is available in the string.===========================`);


function spaceCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    
    return count;
}
const str1 = "Revision is the mother of success";
console.log(`spaces in the first string: ${spaceCount(str1)}`);

const str2 = "JavaScript is the language of internet world";
console.log(`spaces in the second string: ${spaceCount(str2)}`);

