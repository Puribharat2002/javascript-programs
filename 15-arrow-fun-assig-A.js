
console.log(`=============== 1 =======================`);

const greet = () => {
    console.log("Good Morning, Today is Monday");
};
greet();
console.log(`============== 2 ====================`);

const multiply = (a, b, c = 1) => {
    console.log(`Multiplication ${a}, ${b}, and ${c} is: ${a * b * c}`);
};
multiply(5, 5, 2);
console.log(`============== 3 ============================== `);

multiply(10, 4);
console.log(`====================== 4 ==============================`);

const add = (a, b, c, d, e) => a + b + c + d + e;

let sum1 = add(100, 100, 200, 349, 756);
console.log("The sum of the numbers 100, 100, 200, 349, 756 is:", sum1);
console.log(`===================== 5 =======================`);


let sum2 = add("I am", " learning", " ES6", " features", " in depth");
console.log("The concatenated string is:", sum2);

