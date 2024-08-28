console.log(`====================  1  ========================`);

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach((num, index) => {
  console.log(`Index is ${index} and the element is ${num}`);});
  console.log(`=================== 2 =====================`);

  arrayNumbers.forEach(num => {
    if (num > 0) {
      console.log(num);
    }
  });

  console.log(`===================== 3 ======================`);

const negativeNumbers = [];
arrayNumbers.forEach(num => {
  if (num < 0) {
    negativeNumbers.push(num);
  }
});
console.log(negativeNumbers);

console.log(`================= 4 =================`);
arrayNumbers.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });

  console.log('==================== 5 ===================');
  
  let sum = 0;
arrayNumbers.forEach(num => {
  sum += num;
   });
console.log(sum);

console.log(`==================== 6 =======================`);

arrayNumbers.forEach((num, index) => {
    if (index % 2 === 0) {
      console.log(num);
    }
  });

  
  
