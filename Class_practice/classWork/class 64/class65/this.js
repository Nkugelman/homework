(function () {
    'use strict';

    const potus = {
        first: 'donald',
        last: 'trump',
        print() {
            console.log(`first: ${this.first}, last: ${this.last}`);
        }
    };
     potus.print();
})();
function createPerson(first, last) {
    return {
        first,
        last,
        print: printPerson
    };
}
function printPerson() {
    console.log(this);
    console.log(`first: ${this.first}, last: ${this.last}`);
}
const p1 = createPerson('barack', 'obama');
p1.print();
const p2 = createPerson('george', 'bush');
p2.print();

printPerson.call(p2);

const printP1 = printPerson.bind(p1);
printP1();

/////////////////
const greeter1 = {
    greeting: 'Hello'
}
const greeter2 = {
    greeting: 'Shalom'
}
function greet(name) {
    console.log(`${this.greeting} ${name}!`);
}
greet.call(greeter1, 'john');
greet.call(greeter2, 'jane');

greet.apply(greeter1, ['john']);
greet.apply(greeter2, ['jane']);

const greetGreeter1 = greet.bind(greeter1);
greetGreeter1('john');
