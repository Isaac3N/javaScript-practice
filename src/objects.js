/* objects are similar to array except from the fact that you use 
properties instead of indexes to acces them. objects are similar
to dictionaries in python */

/*var ourDog = {
    "name" : "bingo",
    "legs" : 3,
    "tails" : 1,
    "friends" : ["John", "adam"]
};

var our_name = ourDog.name;
console.log(our_name);
var legs = ourDog["legs"];
console.log(legs); */
// you can use dot notation to set an object property to a new value.
// ourDog.tails = 2;
// you can also use dot notation or bracket notation to add a property to an object
// ourDog.sound = "woof";
// you can delete a propert by doing "delete ourDog.sound;"

// var myObj = {
//     gift: "pony",
//     pet: "kitten",
// };

// function checkObj(checkProp){
//     if (myObj.hasOwnProperty(checkProp)){
//         return myObj[checkProp];
//     } else{ 
//         return "Not found"  
// }
// // this is used to check the property of an object
// }
// console.log(checkObj("hello"));


var person = {
    name: "Maria Jones",
    age: 21,
    hasDriverLicense: true,
};

// console.log(JSON.stringify(person));
console.log(Object.values(person));