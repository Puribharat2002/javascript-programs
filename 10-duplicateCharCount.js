console.log(`=========================== 10 =============================`);
function duplicateCharCount(str) {
    const charCount ={};
    for (let i = 0; i < str.length;i++){
        const char = str[i];
        if (char  >= ' ' ){
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    for (const char in charCount ){
        if(charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
            
        }
    }
    
}

console.log(`Duplicate character in "Banana" with Count are = >`);
duplicateCharCount("Banana");
console.log(" ");

console.log(`Duplicate character in "Apple" with Count are = >`);
duplicateCharCount("Apple");
console.log(" ");

console.log(`Duplicate character in "Software Developer" with Count are = >`);
duplicateCharCount("Software Developer");
console.log(" ");
