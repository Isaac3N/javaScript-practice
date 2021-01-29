const getUser = () => {
    return {
        name: 'John',
        surname: 'Doe',
        gender: 'male',
        address: {
            country: 'Nigeria',
            city: 'Lagos',
            postcode: 'LA',
            fulladdress: {
                door_number : 23,
                street: 'LA st'
            }
        }, 
        age: 27 
    }
};

const user = getUser();
// const name = user.name;
// const age = user.age;
const doorNumber = user.address.fulladdress.door_number;
const { name, age, address: {country: country}} = user;
const { address: {fulladdress: {door_number : number}}} = user;

console.log(doorNumber)