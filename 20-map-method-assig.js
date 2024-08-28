console.log(`======================= 1 ======================`);

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const addedTenArray = arrayNumbers.map(num => num + 10);
console.log(addedTenArray);

console.log(`================== 2 =====================`);

const cubedArray = arrayNumbers.map(num => num ** 3);
console.log(cubedArray);

console.log(`================== 3 ====================`);

const indexAddedArray = arrayNumbers.map((num, index) => num + index);
console.log(indexAddedArray);