class Animal {
    constructor(name, age){
        console.log(`${name} is an animal and was created`) // constructors only get invokes once
                this.name = name;
        this.age = age;

    }
    eat(){
        console.log(`${this.name} is eating`);
    } 
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
    // eat() and sleep() are methods and they are used to describe the behaviours of the class 
}

// instanciation 
const isaac = new Animal("isaac", 2);
isaac.eat();
isaac.sleep();

// inheritance is the process of inheriting the behaviours of a class into another class 

class Dog extends Animal {
    constructor(name, age, breed){
        super( name,age)
        this.breed = breed;
   }
    newBreed(){
        console.log (`${this.name} is a ${this.breed}`);
    }
    logSleep(){
        super.sleep();
    } // you can inherit a method from a class 
}
const bingo = new Dog('bingo',4, 'bulldog');
bingo.newBreed();
bingo.logSleep()