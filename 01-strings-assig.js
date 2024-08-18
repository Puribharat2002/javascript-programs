const str1= "Hello, World!";
const length1  = str1.length;
console.log(`length of the string = ${str1}  is: ${length1} `);

console.log(`=====================`);

const str2= "Javascript is the language of Internet";
const length2  = str2.length;
console.log(`length of the string = ${str2}  is: ${length2} `);


console.log(`==================== 2 ===========================`);


const strA = "Hey, my friend, programming language";
const strB = "I am learning logical programs";
const strC = "Angular";
function lastCharacter(str) {
    return str.charAt(str.length - 1);
    
}

console.log(`Last character of the string = ${strA} is: ${ lastCharacter(strA)} `);
console.log(`Last character of the string = ${strB} is: ${ lastCharacter(strB)} `);
console.log(`Last character of the string = ${strC} is: ${ lastCharacter(strC)} `);

console.log(`========================= 3 =================================`);


const str3 = "React";
 const str4 = "Elon Musk";
 const str5 = "Apple founder is stew job";
function lastCharacter(str) {
    return str.charAt(0);
 }

 console.log(`First character of the string = ${str3} is: ${ lastCharacter(str3)} `);
 console.log(`First character of the string = ${str4} is: ${ lastCharacter(str4)} `);
 console.log(`First character of the string = ${str5} is: ${ lastCharacter(str5)} `);


 console.log(`========================= 4 =================================`);
 

const str6 = "React - UI Developer";
const str7 = "UI Developer";
const str8 = "Front end and backend technologies";

function contains(str) {
      return str.includes('UI');
}

 console.log(`Does the string = ${str6} contain 'UI' ${ contains(str6)} `);
 console.log(`Does the string = ${str7} contain 'UI' ${ contains(str7)} `);
 console.log(`Does the string = ${str8} contain 'UI' ${ contains(str8)} `);

console.log(`========================= 5 ==================================`);


function splitString(str, delimiter) {
    return str.split(delimiter);
} 

const str9 = "apple,orange,banana";
const str10 = "Stew,Bill,Jenny,Elon";

const result1 = splitString(str9, ' ,');
console.log(`The array of substring from "${str9}" is :`,result1);

const result2 = splitString(str10, ' ,');
console.log(`The array of substring from "${str10}" is :`,result2);

console.log(`=============== Using Predefined Methods==================`);

function reverseStringUsingMethods(str) { 
    return str.split('').reverse().join('');

 }

const str13 = "Software";

const str14= "UI Developer";

console.log(`The reverse of the string "${str13}" is:${reverseStringUsingMethods (str13)}`);
console.log(`The reverse of the string "${str14}" is: ${reverseStringUsingMethods(str14)}`);

console.log(`=================== Without Using Predefined Methods=====================`);


function reverseStringManually(str) {

    let reversedStr= '';
    for (let i =str.length-1;i>0; i--){
         reversedStr += str[i];
         }
    
    return reversedStr;
 }
    
    const str15 ="cWeb Developer";
    
    const str16="bBillion Dollar";
    
    const str17="jJava";
    
    console.log(`The reverse of the string "${str15}" is: ${reverseStringManually (str15)}`); 
    console.log(`The reverse of the string "${str16}" is: ${reverseStringManually (str16)}`); 
     console.log(`The reverse of the string "${str17}" is: ${reverseStringManually (str17)}`); 