class PersonClass {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        let age = 0;
        this.setAge = a => {
            age = a;
        };
        this.getAge = () =>{
            return age;
        };
    }
    print() {
        console.log(`I am ${this.first} ${this.last}`);
    }
    talk() {
        console.log(`${this.first} ${this.last} says blah blah`);
    }
}