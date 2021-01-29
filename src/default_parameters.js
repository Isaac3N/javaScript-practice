// default parameters in javscript are used to catch a parameter when its not called. 
// default values can be a number or an object

const calculatePay = (yearSalary, bonus={
    teamBonus: 372,
    employeeBonus: 37,
}) => {
    return yearSalary + bonus.employeeBonus + bonus.employeeBonus;
}
console.log(calculatePay(2324));