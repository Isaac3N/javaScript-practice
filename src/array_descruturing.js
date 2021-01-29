// this allows one to pull values from an array 

const names = ['isaac', 'james', 'john', 'mark', 'jeremiah'];

const [a, b, ...restOfNames] = names;
console.log(`${a} ${b}`);
console.log(restOfNames)

