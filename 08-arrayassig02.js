const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`============== 1 ============`);
// 1. Find the total elements available or length and log on console
console.log("Total elements available:", array.length);
console.log(`============== 2 ============`);

// 2. Log the first element and last element in array and log on console
console.log("First element:", array[0]);
console.log("Last element:", array[array.length - 1]);

console.log(`============== 3 ============`);
// 3. Log the third last element using length property and log on console
console.log("Third last element:", array[array.length - 3]);

console.log(`============== 4 ============`);
// 4. Find all even numbers using for of loop and log on console
console.log("Even numbers in array:");
for (let num of array) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

console.log(`============== 5 ============`);
// 5. Find the odd numbers using for of loop and log on console
console.log("Odd numbers in array:");
for (let num of array) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

// 6. Find all the even positioned elements from array, sum it and log on console - Ignore
// 7. Find all the odd positioned elements from array, sum it and log on console - Ignore
// 8. Find the sum of all elements from array, log on console - Ignore

// 9. Find the numbers which are multiple of 5
console.log(`============== 6 ============`);
console.log("Numbers which are multiple of 5:");
for (let num of array) {
  if (num % 5 === 0) {
    console.log(num);
  }
}
console.log(`============== 7 ============`);
// 10. Is number 115 available in array?
console.log(" number 115 available in array = ", array.includes(115));

// 11. Is number 23 available in array?
console.log(" number 23 available in array = ", array.includes(23));


// 12. Insert numbers → 55, 66 at index 3 and log array on console
console.log(`============== 8 ============`);
array.splice(3, 0, 55, 66);
console.log("After inserting 55 & 66 index 3 = :", array);

// 13. Delete 3 elements starting from index 4 and log array on console
console.log(`=========== 9 =========`);


array.splice(4, 3);
console.log("Deleting 3 elements starting from index 4:", array);