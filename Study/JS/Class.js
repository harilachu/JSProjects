//Parent class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Getter - ${} notation
    get fullName() {
        return `Firstname : ${this.firstName} \t LastName: ${this.lastName}`;
    }

    //Setter
    set age(years) {
        this.theAge = years;
    }

    hello() {
        return 'Hello, I am ' + this.name + '.';
    }
}

//Inheritance
class Actor extends Person {
    //override
    hello() {
        return super.hello() + ' I am an actor.' + ' age: ' + this.age;
    }
}

//Init class
var tomCruise = new Actor('Tom', 'Cruise');
console.log(tomCruise.hello());
console.log(tomCruise.fullName);
tomCruise.age = 29;
console.log(tomCruise.theAge);