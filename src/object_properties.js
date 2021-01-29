// object properties in javascript 
// enhanced object propeties gives a better syntrax when working with syntax 
const priceName = 'PRICE';

const calculator = (name, price) => {
    return {
        name:name,
        add(n1, n2){
            return n1 + n2;
        },
        [priceName.toLowerCase()] : price 
    }
}

const calc = calculator('casio', 1414); // ---> the parameter variables for the enhanced object properties are passed here
console.log(calc.name);
console.log(calc.add(19,23));
console.log(calc.price);