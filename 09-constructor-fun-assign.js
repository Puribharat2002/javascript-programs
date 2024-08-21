
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

let yesBank = new Bank("Yes Bank", "Mumbai", "YESB0001234", "001");
let sbiBank = new Bank("State Bank of India", "Delhi", "SBIN0005678", "002");
let mahBank = new Bank("Maharashtra Bank", "Pune", "MAHB0009101", "003");
let axisBank = new Bank("Axis Bank", "Bangalore", "UTIB0004567", "004");

console.log(`Bank Details is = : ${yesBank.bankName}| Location =  ${yesBank.location}| IFSC = ${yesBank.ifscCode}| Branch Code = ${yesBank.branchCode}`);
console.log(`Bank Details is = : ${sbiBank.bankName}| Location = ${sbiBank.location}| IFSC =  ${sbiBank.ifscCode}| Branch Code =  ${sbiBank.branchCode}`);
console.log(`Bank Details is = : ${mahBank.bankName}| Location = ${mahBank.location}| IFSC =  ${mahBank.ifscCode}| Branch Code =  ${mahBank.branchCode}`);
console.log(`Bank Details is = : ${axisBank.bankName}| Location = ${axisBank.location}| IFSC =  ${axisBank.ifscCode}| Branch Code =  ${axisBank.branchCode}`);


console.log(`======================================================`);

console.log(` Open Time: ${sbiBank.openTime}, Close Time: ${sbiBank.closeTime}`);

console.log(`======================================================`);

console.log(`Axis Bank Name: ${axisBank.bankName}, Close Time: ${axisBank.closeTime}`);

console.log(`========================================================`);

console.log(`Yes Bank Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Open Time: ${yesBank.openTime}`);
