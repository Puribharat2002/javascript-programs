const RollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`given array : ${RollNumbers}`);

console.log(`================= 1 =====================`);

const reversedArray = [...RollNumbers].reverse();
console.log("Reversed Array:", reversedArray);

console.log(`================= 2 ============================`);

const sortedArrayDefault = [...RollNumbers].sort();
console.log("Sorted Array :", sortedArrayDefault);

console.log(`===================== 3 =============================`);

const sortedArrayCustom = [...RollNumbers].sort((a, b) => a - b);
console.log("Ascending Order:", sortedArrayCustom);

console.log(`===================== 4 =============================`);

const maxNumber = Math.max(...RollNumbers);
console.log("Greatest Number is:", maxNumber);

console.log(`======================== 5 ===========================`);

const minNumber = Math.min(...RollNumbers);
console.log("Smallest Number is:", minNumber);

console.log(`====================== 6 ===========================`);

const uniqueArray = [...new Set(RollNumbers)];
console.log("Array with Duplicates Removed:", uniqueArray);
