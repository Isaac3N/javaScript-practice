var myList = [["cereal", 3], ["milk", 2], ["juice", 2], ["bananna", 3]];
for (var i of myList){
    console.log(i)
};
myList.forEach(function(i, index){
    console.log(index + " - " + i );
}); // this is used for looping through arrays and getting their index numbers using the keyword forEach
//console.log(myList[0][0].length);

/* the push() function is used to remove the last object in an array 'myArray.push()' 
the pop() function is used to remove the last object in an array,
the shift() function is used to remove the first object in an array,
the unshift() function is used to add an object into an array */
