// spread operators in javascript 
// spread operators is a way of adding two lists together

const arrayOne = [1,2,3,4];
const arrayTwo = [5,6,7,8];

const concatArray = [ ...arrayOne, ...arrayTwo];
concatArray.forEach(function(i){
    console.log(i);
})

const addNumbers = function(n1,n2,n3){
    return n1 + n2 + n3;
}
const numbers = [1,43,54];

const addition = addNumbers(...numbers);
console.log(addition)