/* Map, filter and reduce are all arrays method in javascript. 
each one iterates over an array and perform transformation or computation. 
Each one will return a new array based on the results of the functions */ 

// mapping is a way of transforming the array of an element by creating a new array from the existing one 

var map = [1, 2, 3, 4, 5].map(function(i){
    //where i is representing each element from the corresponding arrays  
    return i *2; 
})
console.log(map)

// the filter method () takes each element in an array and it applies a conditional statement against it . 

var filter = [1, 2, 3, 4, 5 , 6] .filter(function(i){
    return i % 2 === 0;
})
console.log(filter);

// the reduce function reduces an array of values into just vone value 

var reduce = [ 1, 2, 3, 4, 5].reduce(function(accumulator, cuurent){
    return accumulator + cuurent;
});
console.log(reduce);