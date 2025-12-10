'use strict';

const vehicle = {
    color: 'red',
    speed: 0,
    go(speed){
        this.speed = speed;
        console.log(`this vehicle is going ${this.speed} miles a hr`);
    },
    print(){
        console.log(`color: ${this.color}, speed: ${this.speed}`);
    }

};

const vehicleFunctions = {
    go(speed){
        this.speed = speed;
        console.log(`this vehicle is going ${this.speed} miles a hr`);
    },
    print(){
        console.log(`color: ${this.color}, speed: ${this.speed}`);
    }
};
function createVehicle(color){
    const v = Object.create(vehicleFunctions);
    v.color = color;
    return v;
}
function createPlane(color){
    const p = createVehicle(color);
    p.go = function(speed){
        this.speed = speed;
        console.log(`this plane is flying at ${this.speed} miles a hr`);
    };
    p.print = function(){
        console.log(`Plane color: ${this.color}, speed: ${this.speed}`);
    };
    return p;
}
const p1 = createPlane ('white');
p1.go (500);
p1.print();
console.log(p1);
function createVehicleP(color){
     const v = Object.create(vehicleFunctions);
     v.color = color;
     v.speed = 0;
     /*{
        color,
        speed:0,
     };*/
     //Object.setPrototypeOf(v, vehicleFunctions);

     return v;

}
const v2 = createPlane ('blue');
v2.go (600);
v2.print();
console.log(v2);
///////////////////////
function Vehicle(color){
    this.color = color;
    this.speed = 0;

}
Vehicle.prototype.go = function(speed){
    this.speed = speed;
    console.log(`this vehicle is going ${this.speed} miles a hr`);
};
Vehicle.prototype.print = function(){
    console.log(`color: ${this.color}, speed: ${this.speed}`);
};
const v4 = new Vehicle ('green');
console.log(v4);
v4.go(70);
v4.print();
function Plane(color){
    this.color = color;
    this.speed = 0;
}
Plane.prototype =Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;
Plane.prototype.go = function (speed){
    this.speed = speed;
    console.log (`this plane is flying at ${this.speed} miles a hr`);
}
const p3 = new Plane ('yellow');
//p3.go(800);
//p3.print();
console.log (p3);
///////////////////////

class VehicleClass {
    constructor(color){
        this.color = color;
        this.speed = 0;
    }
    go(speed){
        this.speed = speed;
        console.log(`this vehicle is going ${this.speed} miles a hr`);
    }
    print(){
        console.log(`color: ${this.color}, speed: ${this.speed}`);
    }

}
const v6 = new VehicleClass ('black');
console.log(v6);
v6.go(90);
v6.print();

class PlaneClass extends VehicleClass {
   /* constructor(color){
        super (color);
    }*/
    go(speed){
        this.speed = speed;
        console.log (`this plane is flying at ${this.speed} miles a hr`);
    }
    print(){
        console.log(`Plane color: ${this.color}, speed: ${this.speed}`);
    }
}

const p5 = new PlaneClass ('silver');
p5.go(900);
p5.print();
console.log(p5);

