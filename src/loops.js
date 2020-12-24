var myArray = [];
var i = 10;

/* while loops allows you to keep iterating unitl a particular condition is met 
var i = 0;
while(i < 5) {
    myArray.push(i);
    i ++;
}
console.log(myArray); */

// for loop allows you to iterate over a list of objects
// the for loop is called when you initialize 
// then the condition and once the condition is false it breaks out , then the final expression
// you can use ++, +=, -=, *= etc 
/*for (var i=0; i < 5; i++ ){
    myArray.push(i);
} 
console.log(myArray.length);
console.log(myArray);*/

//nested for loops 
/*function multiplyAll(arr){
    var product = 1;
    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
console.log(product); */

//do while loops performs the instruction before checking the condition
do {
    myArray.push(i);
    i ++;
}while(i < 5);

console.log(i, myArray);
