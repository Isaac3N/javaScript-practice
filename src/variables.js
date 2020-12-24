// 'let' does not allow you to decalare a variable twice
// 'use strict' allows you to catch coding mistakes 
// the let keyword is only active within the block {} in which it is called 
/* function checkScope(){
"use strict";
    var i = "function scope";
    if (true){
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("function scope i is: ", i)
    return i;

}
checkScope(); */

// const is read only you can not add or remove anything from it 
// its better for the variable that uses const to be in all capitals

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);  // its used to freze a variable so it would not be mutable
    try {
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);