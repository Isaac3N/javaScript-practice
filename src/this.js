// the this keyword is used to access values in an object
const person = {
    name: 'Isaac',
    cars: ['toyota', 'tesla'],
    toString: function(){
        //console.log(`${this.name} has ${this.cars}`)
        this.cars.forEach(function(car){
            console.log(`${this.name} has ${car}`)
        }.bind(this))
    }
}

person.toString();