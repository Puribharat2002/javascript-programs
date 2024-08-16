console.log("============ Create an objects → sbiBank, axisBank, HDFC Bank, yesBank  =============");

// Creating sbiBank object
let sbiBank = {
    bankName: "State Bank of India",
    location: "Darwha",
    accountNo: "5555555555",
    ifsc: "SBIN000231",
    interestRate: "5.1%",

    showDetails: function() {
        console.log(`Bank Name : ${this.bankName} || location:${this.location} || Account No: ${this.accountNo}  || IFSC: ${this.ifsc} ||  Interest Rate: ${this.interestRate}`);
    }
};

// Creating axisBank object
let axisBank = {
    bankName: "Axis Bank",
    location: "Pune",
    accountNo: "07777654321",
    ifsc: "AXIS000077",
    interestRate: "6%",

    showDetails: function() {
        console.log(`Bank Name : ${this.bankName} || location:${this.location} || Account No: ${this.accountNo}  || IFSC: ${this.ifsc} ||  Interest Rate: ${this.interestRate}`);
    }
};

// Creating hdfcBank object
let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Amravti",
    accountNo: "1122334455",
    ifsc: "HDFC0000003",
    interestRate: "5.5%",

    showDetails: function() {
        console.log(`Bank Name : ${this.bankName} || location:${this.location} || Account No: ${this.accountNo}  || IFSC: ${this.ifsc} ||  Interest Rate: ${this.interestRate}`);
    }
};

// Creating yesBank object
let yesBank = {
    bankName: "Yes Bank",
    location: "Darwha",
    accountNo: "6677889900",
    ifsc: "YSB0000004",
    interestRate: "6.5%",

    showDetails: function() {
        console.log(`Bank Name : ${this.bankName} || location:${this.location} || Account No: ${this.accountNo}  || IFSC: ${this.ifsc} ||  Interest Rate: ${this.interestRate}`);
    }
};

// Invoking showDetails() on each object separately
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
