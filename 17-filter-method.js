console.log(`===== Filter the TCS company employees======`);

 

const employeeTCS = arrayEmployee.filter((employee)=>{

    return employee.emp_company=="TCS";

})

 

employeeTCS.forEach( (employee)=>{

  console.log(employee);

});

console.log(`Filter out all the IT department employees and list their names in array `);

// console.log(`Show the IT Department employee names`);

const arrayTCSEmployees = arrayEmployee.filter((employee)=>{

    return employee.emp_dept == "IT";

}).map((employee)=>{

    return employee.emp_name;

});

console.log(arrayTCSEmployees);
 

const arrayTCSNames = employeeTCS.map((employee)=>{

    return employee.emp_name;

});

console.log(arrayTCSNames);