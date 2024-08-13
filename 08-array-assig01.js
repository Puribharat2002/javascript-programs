const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

// 1. Log the first and last element on console
console.log(`======== Log the first and last element on console ===========`);

console.log("First element:", fruits[0]);
console.log("Last element:", fruits[fruits.length - 1]);



// 2. Add element → Papaya before the element 'Banana' and then log array on console
console.log(`=============== Add element → Papaya before the element 'Banana' =====================`);

fruits.unshift("Papaya");
console.log("Array after adding Papaya:", fruits);



// 3. Remove 'Mango' from the array

console.log(`========== Remove 'Mango' from the array ===========`);

const mangoIndex = fruits.indexOf("Mango");
if (mangoIndex > -1) {
  fruits.splice(mangoIndex, 1);
}
console.log("Array after removing Mango:", fruits);



// 4. Add element or insert an element 'Pineapple' at the last position
console.log(`====Add element or insert an element 'Pineapple' at the last position=======`);

fruits.push("Pineapple");
console.log("Array after adding Pineapple:", fruits);



// 5. Insert an element - 'Dragon Fruit' before "Water Melon"
console.log(`=======  Insert an element - 'Dragon Fruit' before "Water Melon" =========`);

const waterMelonIndex = fruits.indexOf("Water Melon");
if (waterMelonIndex > -1) {
  fruits.splice(waterMelonIndex, 0, "Dragon Fruit");
}
console.log("Array after adding Dragon Fruit before Water Melon:", fruits);



// 6. Replace an element 'Orange' with 'Kiwi'

console.log(`===== Replace an element 'Orange' with 'Kiwi' =======`);

const orangeIndex = fruits.indexOf("Orange");
if (orangeIndex > -1) {
  fruits[orangeIndex] = "Kiwi";
}
console.log("Array after replacing Orange with Kiwi:", fruits);



// 7. Log the elements starting from index 1 to 4
console.log(`===== Log the elements starting from index 1 to 4========`);

console.log("Elements from index 1 to 4:", fruits.slice(1, 5));



// 8. Only select last 3 elements and log on console: Use the length property
console.log(`======== Only select last 3 elements and log on console =============`);

console.log("Last 3 elements:", fruits.slice(-3));


