console.log(`===================== [1]==========================`);
class Employee {
    constructor(emp_name, emp_company, emp_dept, emp_salary) {
        this.emp_name = emp_name;
        this.emp_company = emp_company;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
    }
}

const arrayEmployees = [
    new Employee('Anil', 'TCS', 'IT', 75000),
    new Employee('Rishi', 'TCS', 'Finance', 60000),
    new Employee('Vinayak', 'TCS', 'IT', 80000),
    new Employee('Sonali', 'Infy', 'Finance', 45000),
    new Employee('Mahesh', 'Infy', 'IT', 95000),
];


arrayEmployees.forEach(emp => {
    if (emp.emp_company === 'TCS') {
        console.log(`The employee name ${emp.emp_name} & company name is ${emp.emp_company}`);
    }
});

console.log(`==================== [2] ================================`);

arrayEmployees.forEach(emp => {
    if (emp.emp_dept === 'Finance') {
        console.log(`The employee name ${emp.emp_name} & Department name is ${emp.emp_dept}`);
    }
});

console.log(`========================= [3] =====================================`);

arrayEmployees.forEach(emp => {
    if (emp.emp_name.startsWith('R')) {
        console.log(`Employee Details: Name - ${emp.emp_name}, Company - ${emp.emp_company}, Department - ${emp.emp_dept}, Salary - ${emp.emp_salary}`);
    }
});

console.log(`================== 4 =========================`);

arrayEmployees.forEach(emp => {
    if (emp.emp_salary > 75000) {
        console.log(`The employee name ${emp.emp_name}, Company name ${emp.emp_company}, Salary ${emp.emp_salary}`);
    }
});


console.log(`====================== [5] =============================`);

arrayEmployees.forEach(emp => {
    if (emp.emp_company === 'Infy') {
        console.log(`Employee Details: Name - ${emp.emp_name}, Company - ${emp.emp_company}, Department - ${emp.emp_dept}, Salary - ${emp.emp_salary}`);
    }
});











