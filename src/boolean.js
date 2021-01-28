/* boolean is a data type in javascript that expresses
a value as either true or false. Comparison operators are normally used to return/
an equality operator of true or false
Comparison operators are:
== -> equals to(does type conversion i.e 10 == '10')
=== -> exactly equals to(strict) 
=! -> not equal(does type conversion) 
==! -> strict not equal(strict)
>= -> equals or greater that 
<= -> less or equals to

To check if two thinga are true at the same time you can you use the '&&'/
operator. to check if either one of the values are true you use the '||' operator/

the 'else' and 'else if' statement can be used to catch the if statement in case the first condition isnt true 

the switch statement is used in a case where they are multiple if else statements 

 
 */

//  function testSize(num){
//      if (num < 5){
//          return "tiny";
//      }else if (num < 10){
//          return "small";
//      }else if (num < 15){
//          return "Medium";
//      }else if (num < 20){
//          return "Large";
//      }else if (num >= 20){
//          return "Huge";
//      }else{
//          return "change me";
//      }
//  }

// console.log(testSize(7));

// var i = true;

// if (i){
//     console.log("GHUS");
// };

var person = {
    name : 'isaac',
    age : 17
}
switch(true){
    case (person.age == 17):
        console.log(person.name + " is about to be an adult")
        break;
    case ( person.age >= 18): 
        console.log(person.name + " is an adult ")
        break;
    default:
        console.log(person.name + " is not an adult")
};

switch(new Date().getDay()){
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log('I dont know ')
}