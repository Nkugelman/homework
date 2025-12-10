function createPerson(first, last) {
    return {
        _first: first,
        _last: last,
        print() {
            console.log(`First Name: ${this._first}, Last Name: ${this._last}`);
        }
    }
}
const person1 = createPerson("John", "Doe");
console.log(person1);
person1.first = 'joe';

person1.print();

function createPerson2(first, last) {
    let f = first;
    let l = last;
    return {
     
        getFirst() {
            return this._first;
        },
        setFirst(f) {
            first = f;
        },
        getLast() {
            return this._last;
        },
        setLast(l) {
            this._last = l;
        },
        print() {
            console.log(`First Name: ${this._first}, Last Name: ${this._last}`);
        }
    }
}
const person2 = createPerson2("Jane", "Smith");
console.log(person2);
