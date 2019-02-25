//"use strict"

///////////////////
//Without specifying strict mode, this returns window object
//////////////////
console.log(this);

/////////////////
//with strict mode enabled, this will return undefined.
/////////////////

////////////////
//Bind - remap properties to another object of same kind
///////////////
const car = {
    maker: 'Ford',
    model: 'Fiesta',
    drive() {
        console.log(`Driving a ${this.maker} ${this.model} car!`);
    }
}

const anotherCar = {
    maker: 'Audi',
    model: 'A4'
}

car.drive.bind(anotherCar)();

/////////////////
// Both call and apply is used to map the function to the given object.
//call - calls a method with passed variable number of arguments
//apply - calls a method with passed array of arguments
/////////////////
const car2 = {
    maker: 'Ford',
    model: 'Fiesta'
}

//method declared outside a class
const drive = function (kmh) {
    console.log(`Driving a ${this.maker} ${this.model} car at ${kmh} km/h!`);
}

drive.call(car2, 100);
//Driving a Ford Fiesta car at 100 km/h!
drive.apply(car2, [100]);
//Driving a Ford Fiesta car at 100 km/h!