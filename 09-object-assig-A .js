console.log("===============================================================");

let  professor ={
    firstName : "Bharat",
    lastName : "Puri",
    age : "22",
    city : "Darwha",
    country : "India",
    certificates : ["Hacker Rank Participation","Oracle Certified","Certificate in IFE course"],

    degrees : {
        engineering: 'CSC',
        PHD: 'Adv Computing' ,
        Doctoral : 'Medical',
        ME : 'CS',
        BBA : 'Business',
    }

}

console.log("1 ,2 ,3 ,4 Create Objects with name → professor ");

console.log("======== add new property like totalExp 14 years==========");

let totalExp = {

    fullName: "Bharat Puri",

    age: 50,

    Department : "IT",


    details:function(){

       console.log(` After modifying the age :  Full Name: ${this.fullName}, age : ${this.age}, Department : ${this.Department}`);   
       

    }
   
}
totalExp.details();

console.log(`======== existing property and log object on console  ======= `);

totalExp.age = 55;

console.log(`Updated age: ${totalExp.age}`);

console.log(totalExp);

console.log("=============  Add one new certificate → Oracle Certified ======================");

professor.certificates.push("Certificate in Adv Programming");

const professorCertificates= professor.certificates;

console.log(professor.certificates);

console.log(`==== 8.Log the last element of the array certificates =========`);
console.log(professor.certificates[professor.certificates.length - 1]);

console.log(`==============9. Traverse the array using for loop  ======================`);

for (let i = 0; i < professor.certificates.length; i++) {
    console.log(professor.certificates[i]);
}

console.log("===============10. Log complete object on console using for in loop  ======================");

for (let key in professor) {
    console.log(key + ": " + professor[key]);
}


