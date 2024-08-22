console.log(`=================== 7 =======================`);
function charCount(str) {
    let count = 0;
     for (let i=0; i < str.length; i++) {
          if (str[i].toLowerCase()==='a') {
             count++
        }
    }
    return count;
    }
    
str1 = "JavaScript";
console.log(`Character "a" in String "${str1}" is : ${charCount(str1)}`);

str2 = "Do or Die";
console.log(`Character "a" in String "${str2}" is : ${charCount(str2)}`);

str3 = "Learn with us , Job with us";
console.log(`Character "a" in String "${str3}" is : ${charCount(str3)}`);

str4 = "Empowering Dreams, Guaranteeing Futures";
console.log(`Character "a" in String "${str4}" is : ${charCount(str4)}`);

str5 = "Anny, My favorite fruit is Apple";
console.log(`Character "a" in String "${str5}" is : ${charCount(str5)}`);


console.log(`================= 8 =====================`);

function vowelsCount(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0 ;i < str.length;i++) {
       if(vowels.includes(str[i])){
        count++;
       }
        
    }
    return count;
    
}

str6 = "JavaScript";
console.log(`The numbers of vowels in String "${str6}" is : ${vowelsCount(str6)}`);

str7 = "HTML and CSS";
console.log(`The numbers of vowels in String "${str7}" is : ${vowelsCount(str7)}`);

str8 = "Language Of Internet";
console.log(`The numbers of vowels in String "${str8}" is : ${vowelsCount(str8)}`);

str9 = "I am UI Developer";
console.log(`The numbers of vowels in String "${str9}" is : ${vowelsCount(str9)}`);

str10 = "Do or Die";
console.log(`The numbers of vowels in String "${str10}" is : ${vowelsCount(str10)}`);
  

console.log(`====================== 9 ================================`);

function wordCount(str){
    const words = str.split(' ')
    return words.length;
}

str11 = "JavaScript The language of Internet";
console.log(`The numbers of vowels in String "${str11}" is : ${wordCount(str11)}`);

str12 = "Enhance Your Learning Journey with Exclusive Add-ons";
console.log(`The numbers of vowels in String "${str12}" is : ${wordCount(str12)}`);

str13 = "Beyond frameworks, Beyond Imagination";
console.log(`The numbers of vowels in String "${str13}" is : ${wordCount(str13)}`);

str14 = "I am passionate software developer";
console.log(`The numbers of vowels in String "${str14}" is : ${wordCount(str14)}`);
