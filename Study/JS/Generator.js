function* calculator(input) {
    console.log(input);
    var doubleThat = 2 * (yield(input / 2));
    console.log(doubleThat);
    var another = yield(doubleThat);
    console.log(another);
    return (input * doubleThat * another);
}

const calc = calculator(10);

console.log(calc.next());
console.log(calc.next(7));
console.log(calc.next(100));