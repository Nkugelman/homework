function printPerson(){
    console.log(`I am ${this.first} ${this.last}`);
}
const p  ={
    first: 'John',
    last: 'Doe',
    print(){
        console.log(`I am ${this.first} ${this.last}`);
    }
  
};

console.log(p);
printPerson.call (p);
p.print();
function createPerson (first, last){
    return {
        first,
        last,
        print1(){
            console.log(`I am ${this.first} ${this.last}`);
        },
        print: printPerson
    };
};

const melania = createPerson ('Melania', 'Trump');
melania.print();

const jd = createPerson ('JD', 'Vance');
jd.print();

function talk(){
    console.log(`${this.first} ${this.last} says blah blah`);
}
melania.talk = talk;
jd.talk = talk;
melania.talk();
jd.talk();
////////////////////


const personFunctions = {
    print(){
        console.log(`I am ${this.first} ${this.last}`);
    },
    talk(){
        console.log(`${this.first} ${this.last} says blah blah`);
    },
    foo(){
        console.log('foo2');
    }
};
function createPerson2 (first, last){
    const p ={
        first,
        last,
      /*  print: personFunctions.print,
        talk: personFunctions.talk*/
        foo(){
            console.log('foo1');
        }
    };
        Object.assign(p, personFunctions);
    return p;
    };

const marco = createPerson2 ('Marco', 'Rubio');
marco.print();
marco.talk();
console.log(marco);
marco.foo();
const employeeFunctions ={
    work(){
        console.log(`${this.first} ${this.last} is working as ${this.jobTitle}`);
    },
    print(){
        console.log(`Employee: ${this.first} ${this.last}, Job Title: ${this.jobTitle} employeefuncs print`);
    }   
};

function createEmployee (first, last, jobTitle){
    const emp = createPerson2 (first, last);
    emp.jobTitle = jobTitle;
   /* emp.work= function(){
        console.log(`${this.first} ${this.last} is working as ${jobTitle}`);
    };
    emp.print = function(){
        console.log(`Employee: ${this.first} ${this.last}, Job Title: ${jobTitle} employeefuncs print`);
    };*/
    Object.assign (emp,employeeFunctions);
    emp.toString = function(){
        return `my tostring Employee: ${this.first} ${this.last}, Job Title: ${this.jobTitle} toString method`;
    };
    return emp;
}
const emp1 = createEmployee('elon', 'musk', 'CEO of Tesla');
emp1.print();
emp1.talk();
emp1.work();

const e ={name: 'test'};
console.log(e.toString());
console.log(emp1.toString());
/////////////////////    


const p2 = Object.create (personFunctions);
p2.first = 'Sarah';
p2.last = 'Connor';
console.log(p2);
p2.print();
p2.talk();
p2.foo();
function createPerson3 (first, last){
    const p = Object.create (personFunctions);
    p.first = first;
    p.last = last;
    return p;
}

const p3 = createPerson3 ('Tony', 'Stark');
p3.print();
p3.talk();
console.log(p3);
personFunctions.walk = function(){
    console.log(`${this.first} ${this.last} is walking...`);
}
p3.walk();
console.log(p3,p2);


//////////////////
function Person(first, last){
    console.log(this);
    
    this.first = first;
    this.last = last;
   
}
Person.prototype.print = function(){
    console.log(`I am ${this.first} ${this.last}`);
}
const p4 = new Person ('Peter', 'Parker');
console.log (p4);
Person.prototype = personFunctions;
Person.prototype.constructor = Person;

const p5 = new Person ('Bruce', 'Wayne');

function Employee(first, last, jobTitle){
    this.first = first;
    this.last = last;
    this.jobTitle = jobTitle;
}
Employee.prototype =Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.print = function(){
    console.log(`Employee: ${this.first} ${this.last}, Job Title: ${this.jobTitle}`);
}

const emp3 = new Employee ('Bob', 'Builder', 'Engineer');
emp3.print();
emp3.talk();    
class PersonClass {
    constructor(first, last,weight){
        this.first = first;
        this.last = last;
        this.weight = weight;

    }
    print(){
        console.log(`I am ${this.first} ${this.last}, weight: ${this.weight}`);
    }
    talk(){
        console.log(`${this.first} ${this.last} says blah blah`);
    }
}
const p6 = new PersonClass ('Clark', 'Kent', 220);
p6.print();
p6.talk();
console.log(p6);

class EmployeeClass extends PersonClass {
    constructor(first, last, jobTitle, weight){
        super (first, last, weight);
        this.jobTitle = jobTitle;
    }
    work(){
        console.log(`${this.first} ${this.last} is working as ${this.jobTitle}`);
    }
    print(){
        console.log(`Employee: ${this.first} ${this.last}, Job Title: ${this.jobTitle} employeclass print`);
    }
}
const emp4 = new EmployeeClass ('Diana', 'Prince', 'Analyst', 130);
emp4.print();
emp4.talk();
emp4.work();
console.log(emp4);

/////////////////////






    









