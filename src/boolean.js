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

 
 */

 function testSize(num){
     if (num < 5){
         return "tiny";
     }else if (num < 10){
         return "small";
     }else if (num < 15){
         return "Medium";
     }else if (num < 20){
         return "Large";
     }else if (num >= 20){
         return "Huge";
     }else{
         return "change me";
     }
 }

console.log(testSize(7));


