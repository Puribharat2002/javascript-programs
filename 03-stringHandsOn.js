console.log("================= 1 =====================");


var sentence = "Hey you are doing good, keep it up  ";
 console.log(`Given string is : ${sentence}`);

 console.log("=============== 2 ==================");
 

 var sentenceLength = sentence.length;

console.log("Total number of characters is: ",sentenceLength);

console.log("============= 3 =================");

var day = "   Hey you are doing good, keep it up    ";

var dayLength = day.length;

console.log("after string trim length is: ", dayLength);
console.log("======================");

var sentenceSpace = sentence.space;

console.log("Total number of space is: ",10);

console.log("========================");

var charAt0 = sentence.charAt(0 , 33);

console.log("Character at index 0 is: ", charAt0);

var lastChar= sentence.charAt(sentence.length-2);

console.log("Character at last index is: ", lastChar);
console.log("===================");
console.log("Total World available  after step 3 = 8");

console.log("=======================");

var result = sentence.indexOf("good");

console.log("Index of character good is: ", result);

console.log("=======================");

var result = sentence.includes("up");

console.log("string end with up: ",result);

console.log("=========================");

var result = sentence.includes("Hey");

console.log("string start with Hey: ",result);







 