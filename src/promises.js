/* Promises are used to handle asynchronous opeerations in javascript. 
They are easy to manage when dealing with multiple asynchronous operations
where callbacks can create  callback hell 
they represent avalue which may be available now or in the future or never 
*/

const namesPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(['Anna', 'james', 'john', 'Ali']);
    }, 3000);
    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000)
})
const surnamesPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(['Williams', 'Erica', 'doe', 'Baba']);
    }, 3000);
    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000)
})

Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [names, surnames] = data; //object descruturing
    for(var i = 0; i < names.length; i++){
        const name = names[i];
        const surname = surnames[i];
        console.log(`${name} ${surname}`);
    } // this for loop logic adds the name at index zero and the surname at index zero
    // then it prints out the name at the current index with the surname at the exact same index
    console.log(data);
}).catch(error =>{
    console.log(error);
})

// when using promises all the indivual promises must be fulfilled before it runs 

// promise.then(response => {
//     console.log(response)
// }).catch(error => {
//     console.log(error);
// })