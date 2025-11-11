function Vehicle(color){
this.color = color;
}
Vehicle.prototype.go = function(speed){
    this.speed = speed;
    console.log(`this vevicle is going ${this.speed} miles a hr`);
}
Vehicle.prototype.print = function(){
    console.log(`color: ${this.color}, speed: ${this.speed}`);
    
}
const v1 = new Vehicle ('red');
v1.go (50);
v1.print();
console.log(v1);
function Plane(color){
    Vehicle.call (this, color);
}
Plane.prototype = Object.create (Vehicle.prototype);
Plane.prototype.constructor = Plane;
Plane.prototype.go = function (speed){
    this.speed = speed;
    console.log (`this plane is flying at ${this.speed} miles a hr`);
}

    const p1 = new Plane ('white');
    p1.go (500);
    p1.print();
    console.log(p1);
